require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const QUICKNODE_HTTP_URL = process.env.QUICKNODE_HTTP_URL || "";
const PRIVATE_KEY = process.env.PRIVATE_KEY || "0";
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "0";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: QUICKNODE_HTTP_URL,
      chainId: 5,
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
};
