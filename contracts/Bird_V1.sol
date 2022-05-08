pragma solidity >=0.6.0 <0.9.0;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract Bird_V1 is Initializable, ERC20Upgradeable () {

  function initialize() external initializer {
    __ERC20_init("Bird", "BRD");
    _mint(msg.sender, 100000);
  }
}
