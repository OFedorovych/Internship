const {expect} = require('chai');

describe("Lines", function(){

  it("Should set right amount of nft's to the catagorys 'Straight_lines' and 'Twisted_lines'", async function(){

    const Lines_contract = await hre.ethers.getContractFactory("Lines");
    [deployer, addr1, addr2, ...addrs] = await ethers.getSigners();
    const Lines_contract_deployed = await Lines_contract.deploy();
    await Lines_contract_deployed.deployed();

    expect(await Lines_contract_deployed.balanceOf(deployer.address, 0)).to.equal(10);
    expect(await Lines_contract_deployed.balanceOf(deployer.address, 1)).to.equal(5);
  });
});
