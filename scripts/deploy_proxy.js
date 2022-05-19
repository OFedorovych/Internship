const hre = require("hardhat");

async function main(){
  const Proxy = await hre.ethers.getContractFactory('BProxy');
  const proxy = await Proxy.deploy("0xEecc2f5e9AD56BEE09fb3B23f53AE73469aEB28b", "0xf9CeEaeCe36010A76912b5433B5C7295bE57B8C7", "0x")
  await proxy.deployed();
  console.log("Woow! Proxy is also deployed!");
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1)
  });
