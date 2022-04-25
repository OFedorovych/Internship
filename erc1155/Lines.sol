pragma solidity >=0.6.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract Lines is ERC1155{
  uint256 public constant Straight_lines = 0;
  uint256 public constant Twisted_lines = 1;

  constructor() public ERC1155(""){
    _mint(msg.sender, Straight_lines, 10, "");
    _mint(msg.sender, Twisted_lines, 5, "");
  }
}
