// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract PopNSwap {
    // uint[] public availableTokenIds = new uint[];

    uint256 totalToMint = 5;

    uint256[] public availableTokenIds = [1, 2, 3, 4, 5];

    constructor() public {
        for (uint256 i = 0; i < totalToMint; i++) {
          availableTokenIds.push(i+1);
        }
    }

    function mint(uint randomNum) external returns (uint mintedTokenId) {

      // use rnd index as tokenId to mint
      mintedTokenId = availableTokenIds[randomNum];
      
      // move last element to rnd index
      availableTokenIds[randomNum] = availableTokenIds[availableTokenIds.length - 1];

      // delete the last element
      delete availableTokenIds[availableTokenIds.length - 1];

    }

}
