const hre = require("hardhat");

async function main(){
  const proxyAdress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";
  const proxyAdminAdress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

  let birdTokenUpdated2 = await(await hre.ethers.getContractFactory("Bird_V3")).deploy();
  await birdTokenUpdated2.deployed();

  let adminOfProxy = (await hre.ethers.getContractFactory("BProxyAdmin")).attach(proxyAdminAdress);

  const upgrade = await adminOfProxy.upgrade(proxyAdress, birdTokenUpdated2.address);
  await upgrade.wait();
  birdTokenUpdated2 = (await hre.ethers.getContractFactory("Bird_V3")).attach(proxyAdress);

  console.log("Proxy deployed to: ", birdTokenUpdated2.address);
  console.log("Proxy Admin deployed to: ", adminOfProxy.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1)
  });
