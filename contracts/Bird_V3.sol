pragma solidity >=0.6.0 <0.9.0;

import "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";
import "./Bird_V2.sol";

// Bird_V2 + pausable
contract Bird_V3 is Bird_V2, PausableUpgradeable {

  function pause() public {
    _pause();
  }

  function unpause() public {
    _unpause();
  }

  function mint(address to) public override whenNotPaused {
    super.mint(to);
  }

  function burn(address from, uint256 amount) public override whenNotPaused {
    super.burn(from, amount);
  }

  function transfer(address sender, address recipient, uint256 amount) public override whenNotPaused {
    super.transfer(sender, recipient, amount);
  }
}
