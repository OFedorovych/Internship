const hre = require("hardhat");

async function main(){
  const Token = await hre.ethers.getContractFactory('Bird_V1');
  const birdToken = await Token.deploy();
  await birdToken.deployed();

  console.log("Milord, Bird is deployed!");
  console.log(birdToken.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1)
  });
