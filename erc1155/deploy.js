async function main(){
  const [deployer] = await ethers.getSigners();
  console.log('Deploying contracts with the account: %s', deployer.address);
  console.log('--------------------------------------------------------------------------------');

  const Lines_nft = await ethers.getContractFactory('Lines');
  const lines_nft_deployed = await Lines_nft.deploy();
  await lines_nft_deployed.deployed();
  console.log(`Token address: ${lines_nft_deployed.address}`);
  console.log('--------------------------------------------------------------------------------');
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1)
  });
