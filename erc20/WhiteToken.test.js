const {expect} = require("chai");

describe ("WhiteToken", function () {
  let totalSupply = '10000000000000000000000'; //10000 in Wei (10000 * 1e18)
  let WhiteToken;
  let whiteToken;
  let owner;
  let addr1;
  let addr2;
  let addrs;

  beforeEach(async function () {
    WhiteToken = await ethers.getContractFactory("WhiteToken");
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
    whiteToken = await WhiteToken.deploy(totalSupply);
  });

  describe("Deployment", function() {

    it ("Should send total supply to the owner", async function () {

      const ownerBalance = await whiteToken.balanceOf(owner.address);
      const expected_supply  = await whiteToken.totalSupply();

      expect(parseInt(expected_supply)).to.equal(parseInt(ownerBalance));
      // expect(expected_supply).to.equal(ownerBalance);
    });
  });
});
