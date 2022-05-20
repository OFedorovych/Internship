pragma solidity >=0.6.0 <0.9.0;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract Bird_V2 is Initializable, ERC20Upgradeable, AccessControlUpgradeable {
  // mint, burn, blacklisted addreses
  bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
  bytes32 public constant BLACKLIST_ROLE = keccak256("BLACKLIST_ROLE");
  mapping(address=>bool) isBlacklisted;

  function set_minter(address minter) public{
    _setupRole(MINTER_ROLE, minter);
  }

  function set_blacklister(address blacklister) public{
    _setupRole(BLACKLIST_ROLE, blacklister);
  }

  function mint(address to) virtual public {
    require(hasRole(MINTER_ROLE, msg.sender), "You are not a minter");
    _mint(to, 50);
  }

  function burn(address from, uint256 amount) virtual public {
    _burn(from, amount);
  }

  function add_to_blacklist(address user) public {
    isBlacklisted[user] = true;
  }

  function remove_from_blacklist(address user) public {
    require(hasRole(BLACKLIST_ROLE, msg.sender), "You are not a blacklister");
    isBlacklisted[user] = false;
  }

  function transfer(address sender, address recipient, uint256 amount) virtual public {
    require(isBlacklisted[recipient] == false, "Recipient is blacklisted");
    _transfer(sender, recipient, amount);
  }


}
