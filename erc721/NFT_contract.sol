pragma solidity >=0.6.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract NFT_contract is ERC721 {
  constructor(string memory name, string memory symbol)
    ERC721(name, symbol) {

    }
}
