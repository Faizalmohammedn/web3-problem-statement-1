const hre = require("hardhat");
//0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
async function main() {
    const CrowdFunding = await hre.ethers.getContractFactory("CrowdFunding");
    const crowdFunding = await CrowdFunding.deploy();
    await crowdFunding.deployed();

    console.log (`CrowdFunding deployed to ${crowdFunding.address}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});