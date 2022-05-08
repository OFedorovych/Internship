async function main(){
  const Token = await hre.ethers.getContractFactory('Bird_V2');
  const birdToken = await Token.deploy();
  await birdToken.deployed();

  console.log("Milord, BirdV2 is deployed!");
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1)
  });
