# Deploying Smart Contract using QuickNode RPC, a hardhat project

Goerli Etherscan Details

```shell
URL: https://goerli.etherscan.io/address/0x039abA0Ac195bDeb670A46FE5cB495D04272a9a5
Contract Address:  0x039abA0Ac195bDeb670A46FE5cB495D04272a9a5
```

Deployment Output :

```shell
$ npx hardhat run scripts/deploy.js --network goerli
____________________________________________________________________
FundMe Contract Deployment: Started
FundMe Contract Address: 0x039abA0Ac195bDeb670A46FE5cB495D04272a9a5
Deployment Transaction Hash: 0x0aa054c63a44bf704b3a9d3f552094e14767c28eb31e9142cf105a0d3944017f
FundMe Contract Deployment: Completed
____________________________________________________________________
Waiting for 4 block confirmation
____________________________________________________________________
Verifying FundMe Contract Deployment: Started
Verifying contract... :  0x039abA0Ac195bDeb670A46FE5cB495D04272a9a5
Nothing to compile
Successfully submitted source code for contract
contracts/FundMe.sol:FundMe at 0x039abA0Ac195bDeb670A46FE5cB495D04272a9a5
for verification on the block explorer. Waiting for verification result...

Successfully verified contract FundMe on Etherscan.
https://goerli.etherscan.io/address/0x039abA0Ac195bDeb670A46FE5cB495D04272a9a5#code
Verifying FundMe Contract Deployment: Completed
____________________________________________________________________

```
