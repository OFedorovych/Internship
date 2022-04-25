// pragma solidity ^0.8.0
pragma solidity >=0.6.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract WhiteToken is ERC20 {
  /* address public owner;
  mapping(address => uint256) balances; */

  constructor(uint initialSupply) ERC20("White", "WHT") {
    _mint(msg.sender, initialSupply);
    /* owner = msg.sender;
    balances[owner] = initialSupply; */

  }
}
