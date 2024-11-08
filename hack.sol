// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract InsurancePolicy {
    struct Policy {
        uint256 policyId;
        address policyHolder;
        uint256 coverageAmount;
        bool isActive;
        bool isFlaggedForFraud;
    }

    struct Claim {
        uint256 claimId;
        uint256 policyId;
        address claimant;
        uint256 claimAmount;
        bool isApproved;
        bool isFraudSuspected;
    }

    uint256 public policyCounter;
    uint256 public claimCounter;
    address public admin;

    mapping(uint256 => Policy) public policies;
    mapping(uint256 => Claim) public claims;
    mapping(address => uint256[]) public userPolicies;
    mapping(address => uint256[]) public userClaims;

event PolicyCreated(uint256 policyId, address policyHolder, uint256 coverageAmount);
    event ClaimSubmitted(uint256 claimId, uint256 policyId, address claimant, uint256 claimAmount, bool isFraudSuspected);
    event FraudFlagged(uint256 policyId, bool isFlagged);
    event PremiumPaid(address policyHolder, uint256 amount);
    event ClaimPayout(address claimant, uint256 amount);

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }

    constructor() {
        admin = msg.sender;
    }

    function createPolicy(uint256 _coverageAmount) public payable {
        require(msg.value >= 0.01 ether, "Premium payment required");

        policyCounter++;
        policies[policyCounter] = Policy(policyCounter, msg.sender, _coverageAmount, true, false);
        userPolicies[msg.sender].push(policyCounter);
        emit PolicyCreated(policyCounter, msg.sender, _coverageAmount);
        emit PremiumPaid(msg.sender, msg.value);
    }

    function submitClaim(uint256 _policyId, uint256 _claimAmount) public {
        Policy storage policy = policies[_policyId];
        require(policy.policyHolder == msg.sender, "Not the policy holder");
        require(policy.isActive, "Policy is inactive");

        bool isFraudSuspected = _claimAmount > policy.coverageAmount / 2;

 claimCounter++;
        claims[claimCounter] = Claim(claimCounter, _policyId, msg.sender, _claimAmount, false, isFraudSuspected);
        userClaims[msg.sender].push(claimCounter);

        emit ClaimSubmitted(claimCounter, _policyId, msg.sender, _claimAmount, isFraudSuspected);
    }

    function approveClaim(uint256 _claimId) public onlyAdmin {
        Claim storage claim = claims[_claimId];
        require(!claim.isApproved, "Claim already approved");

        claim.isApproved = true;
        payable(claim.claimant).transfer(claim.claimAmount);
        emit ClaimPayout(claim.claimant, claim.claimAmount);
    }

    receive() external payable {}
}