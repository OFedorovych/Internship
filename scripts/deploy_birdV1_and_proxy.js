const hre = require("hardhat");

async function main(){
  const Token = await hre.ethers.getContractFactory('Bird_V1');
  const birdToken = await Token.deploy();
  await birdToken.deployed();

  console.log("Milord, Bird is deployed!");

  const Proxy = await hre.ethers.getContractFactory('Proxy');
  const proxy = await Proxy.deploy();
  await proxy.deployed();

  console.log("Woow! Proxe is also deployed!");
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1)
  });
