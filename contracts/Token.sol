// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.9;
import  "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract Token is   ERC20 {
    constructor(uint256 totalSupply1 , address second_address ) ERC20( "Token","TOKEN"){

        _mint(msg.sender,totalSupply1);
        _mint(second_address,totalSupply1);

    }

}
    
