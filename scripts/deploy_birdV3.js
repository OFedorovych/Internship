async function main(){
  const Token = await hre.ethers.getContractFactory('Bird_V3');
  const birdToken = await Token.deploy();
  await birdToken.deployed();

  console.log("Milord, BirdV3 is deployed!");
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1)
  });
