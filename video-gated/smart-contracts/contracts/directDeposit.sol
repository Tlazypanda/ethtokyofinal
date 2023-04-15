// SPDX-License-Identifier: AGPL-3.0-or-later
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./IZkBobDirectDeposits.sol";

/**
 * @notice ZKBobTransfer to direct deposit from the BaseCreditPool to a ZKBob private address
 * https://docs.zkbob.com/resources/hackathons/zkbob-direct-deposits#izkbobdirectdeposits.sol
 */
contract ZkBobDirectDeposit {
    //using SafeERC20 for IERC20;

    /**
     * @notice Performs a direct deposit to the specified zk address.
     * In case the deposit cannot be processed, it can be refunded later to the fallbackReceiver address.
     * @param amount direct deposit amount.
     * @return depositId id of the submitted deposit to query status for.
     */
    function directDeposit(
        uint256 amount
    ) external returns (uint256 depositId) {
        //baseCreditPool.drawdown(amount, address(this));
        IERC20 bob = IERC20(0xB0B195aEFA3650A6908f15CdaC7D92F8a5791B0B);
        IZkBobDirectDeposits queue = IZkBobDirectDeposits(
             0x668c5286eAD26fAC5fa944887F9D2F20f7DDF289
         );

        bytes memory zkAddress = bytes(
            "QsnTijXekjRm9hKcq5kLNPsa6P4HtMRrc3RxVx3jsLHeo2AiysYxVJP86mriHfN"
        );

        address fallbackReceiver = msg.sender;

        bob.approve(address(queue), 100 ether);
        uint256 depositId = queue.directDeposit(fallbackReceiver, 100 ether, zkAddress);
        console.log("Deposit ID: %s", depositId);
    }
}
