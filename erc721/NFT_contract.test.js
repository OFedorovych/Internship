const {expect} = require('chai');

let contract_name = "My nft contract";
let contract_sumb = "MNC";

describe("NFT_contract", function(){

  it("Should return correct name and symbol", async function(){

    const NFT_contract = await hre.ethers.getContractFactory("NFT_contract");
    const NFT_contract_deployed = await NFT_contract.deploy(contract_name, contract_sumb);
    await NFT_contract_deployed.deployed();
    expect(await NFT_contract_deployed.name()).to.equal(contract_name);   // try "My bad name"
    expect(await NFT_contract_deployed.symbol()).to.equal(contract_sumb);
  });
});
