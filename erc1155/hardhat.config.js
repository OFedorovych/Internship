/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 require("@nomiclabs/hardhat-waffle");

 const ALCHEMY_URL = 'https://eth-rinkeby.alchemyapi.io/v2/JkPyNIuhsI1g6AJkJ2EFSOGVK9IfNBl1';
 const PRIVATE_KEY = '0adf51b6875c29fd8b26ed68c9010cdc9cfbe615559449ef32f6c62f56fa5111';

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: ALCHEMY_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  }
};
