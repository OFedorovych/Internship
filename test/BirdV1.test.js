const {expect} = require("chai");
const { hre } = require("hardhat");

describe ("Bird_V1", function () {
  const name = 'Bird';
  const symbol = 'BRD';
  let Bird;
  let bird;
  let initialSupply = 100000;
  let owner;
  let addr1;
  let addr2;
  let addrs;

  beforeEach(async function () {
    Bird = await ethers.getContractFactory("Bird_V1");
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
    bird = await Bird.deploy();
    await bird.deployed();
    bird.initialize();
  });

  describe("Initialization", function(){

    it ("Should intialize contract Bird_V1, name", async function(){
      expect(await bird.name()).to.equal(name);
    });

    it ("Should intialize contract Bird_V1, symbol", async function(){
      expect(await bird.symbol()).to.equal(symbol);
    });

    it ("Should intialize contract Bird_V1, total supply", async function(){
      expect(parseInt(await bird.totalSupply())).to.equal(parseInt(initialSupply));
      expect(parseInt(await bird.totalSupply())).to.equal(parseInt(await bird.balanceOf(owner.address)));
    });
  });
});
