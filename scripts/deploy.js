// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const { networkConfig, developmentChain } = require("../helper-hardhat-config");
const { verify } = require("../utils/verify");
require("dotenv").config();

async function main() {
  const { ethers, network } = hre;
  const chainId = network.config.chainId;

  let ethUsdPriceFeedAddress;
  if (developmentChain.includes(network.name)) {
    const ethUsdAggregator = await deployments.get("MockV3Aggregator");
    ethUsdPriceFeedAddress = ethUsdAggregator.address;
  } else {
    ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeed"];
  }

  console.log("____________________________________________________________________");
  console.log("FundMe Contract Deployment: Started");
  const fundMeContract = await ethers.getContractFactory("FundMe");
  const deployedFundMeContract = await fundMeContract.deploy(ethUsdPriceFeedAddress);

  const deployedFundMeContractTx = await deployedFundMeContract.deployed();
  console.log("FundMe Contract Address:", deployedFundMeContract.address);
  console.log("Deployment Transaction Hash:", deployedFundMeContractTx.deployTransaction.hash);
  console.log("FundMe Contract Deployment: Completed");
  console.log("____________________________________________________________________");
  console.log("Waiting for 4 block confirmation");
  await deployedFundMeContract.deployTransaction.wait(4);
  console.log("____________________________________________________________________");

  console.log("Verifying FundMe Contract Deployment: Started");
  if (!developmentChain.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
    await verify(deployedFundMeContract.address, [ethUsdPriceFeedAddress]);
  }
  console.log("Verifying FundMe Contract Deployment: Completed");
  console.log("____________________________________________________________________");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
