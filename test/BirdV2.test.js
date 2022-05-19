const {expect} = require("chai");

describe ("Bird_V2", function () {
  const name = 'Bird';
  const symbol = 'BRD';
  const admin = '0x99322BB9Cde047001A89cB35C73F8fc7A3b157C9';
  let Bird;
  let bird;
  let initialSupply = 100000;
  let owner;
  let addr1;
  let addr2;
  let addrs;

  beforeEach(async function () {
    Bird = await ethers.getContractFactory("Bird_V2");
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
    bird = await Bird.deploy();
    await bird.deployed();
    bird.initialize();
  });

  it("should create name", async function(){
    expect(await bird.name()).to.equal(name);
  });

  it("should burn tokens", async function(){
    let before_burn = await bird.balanceOf(owner.address);
    await bird.burn(owner.address, 100);
    expect(parseInt(before_burn) - 100).to.equal(parseInt(await bird.balanceOf(owner.address)));
  });

  it("should set minter and mint tokens", async function(){
    totSupply_before_mint = await bird.totalSupply();
    await bird.set_minter(owner.address);
    await bird.mint(addr1.address);
    expect(parseInt(await bird.balanceOf(addr1.address))).to.equal(50);
    expect(parseInt(totSupply_before_mint) + 50).to.equal(parseInt(await bird.totalSupply()));
  });

  it("transfers with/without blacklist", async function(){
    var start_balance_owner = parseInt(await bird.balanceOf(owner.address));
    await bird.set_blacklister(owner.address);
    await bird.add_to_blacklist(addr1.address);
    // expect(async function(){
    //   await bird.balanceOf(addr1.address);
    // }).throw(new Error("Recipient is blacklisted"));
    try{
      await bird.transfer1(owner.address, addr1.address, 100);
    }
    catch(e){
      expect(1).to.equal(1);
    }

    await bird.remove_from_blacklist(addr1.address)
    await bird.transfer1(owner.address, addr1.address, 100);
    expect(parseInt(await bird.balanceOf(addr1.address))).to.equal(100);
    expect(parseInt(await bird.balanceOf(owner.address))).to.equal(start_balance_owner - 100);
  });
});
