const {expect} = require("chai");

describe ("Bird_V2", function () {
  let owner;
  let addr1;
  let addr2;
  let addrs;

  beforeEach(async function () {
    Bird = await ethers.getContractFactory("Bird_V3");
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
    bird = await Bird.deploy();
    await bird.deployed();
    bird.initialize();
  });

  it("should pause and unpause burn function", async function(){
    let before_burn = await bird.balanceOf(owner.address);
    await bird.pause();
    try{
      await bird.burn(owner.address, 100);
    }
    catch(e){
      expect(1).to.equal(1);
    }

    await bird.unpause();
    await bird.burn(owner.address, 100);
    expect(parseInt(before_burn) - 100).to.equal(parseInt(await bird.balanceOf(owner.address)));
  });

  it("should pause and unpause mint function", async function(){
    totSupply_before_mint = await bird.totalSupply();
    await bird.set_minter(owner.address);
    await bird.pause();
    try{
      await bird.mint(addr1.address);
    }
    catch(e){
      expect(1).to.equal(1);
    }
    await bird.unpause();
    await bird.mint(addr1.address);
    expect(parseInt(await bird.balanceOf(addr1.address))).to.equal(50);
    expect(parseInt(totSupply_before_mint) + 50).to.equal(parseInt(await bird.totalSupply()));
  });
});
