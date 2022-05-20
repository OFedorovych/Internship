const hre = require("hardhat");

async function main(){
  // deploy contract with logic
  const Token = await hre.ethers.getContractFactory('Bird_V1');
  const birdToken = await Token.deploy();
  await birdToken.deployed();

  const addressOfLogicContract = birdToken.address;

  // deploy proxy admin
  const proxyAdmin = (await(await hre.ethers.getContractFactory('BProxyAdmin')).deploy());
  await proxyAdmin.deployed();

  // deploy proxy
  const upgradeableProxy = (await(await hre.ethers.getContractFactory("BProxy")).deploy(addressOfLogicContract, proxyAdmin.address,[]));
	await upgradeableProxy.deployed();

  bird = (await hre.ethers.getContractFactory("Bird_V1")).attach(upgradeableProxy.address);
	const initialize = await bird.initialize();
  await initialize.wait();
  console.log("BirdToken ProxyAdmin deployed to: ", proxyAdmin.address);
  console.log("BirdToken Logic deployed to: ", addressOfLogicContract);
  console.log("BirdToken Proxy deployed to: ", bird.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1)
  });
