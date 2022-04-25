const hre = require("hardhat");

async function main(){
  const [owner] = await ethers.getSigners();
  console.log('Deploying contracts with the account: %s', owner.address);

  const Token = await hre.ethers.getContractFactory('WhiteToken');
  const whiteToken = await Token.deploy('10000000000000000000000');
  await whiteToken.deployed();

  const ownerBalance = await whiteToken.balanceOf(owner.address);
  console.log(`Owner account balance: ${ownerBalance.toString()}`);
// owner is deployer
  console.log(`Token address: ${whiteToken.address}`);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1)
  });
