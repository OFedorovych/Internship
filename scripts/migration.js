const hre = require("hardhat");

async function main(){
  const Migrations = await hre.ethers.getContractFactory('Migrations');
  const migrations = await Migrations.deploy();
  await migrations.deployed();
  console.log(migrations.address);
  console.log("Milord, migrations are deployed!");
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1)
  });
