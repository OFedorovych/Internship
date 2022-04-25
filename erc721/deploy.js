const hre = require("hardhat");

async function main(){
  const NFT_contract = await hre.ethers.getContractFactory("NFT_contract");
  const NFT_contract_deployed = await NFT_contract.deploy("My_nft_contract", "MNC");
  await NFT_contract_deployed.deployed();
  console.log("Deployed my nft contract to:", NFT_contract_deployed.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1)
  });
