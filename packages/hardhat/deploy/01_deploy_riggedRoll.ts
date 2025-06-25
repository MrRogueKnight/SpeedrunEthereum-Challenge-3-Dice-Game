import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { ethers } from "hardhat";
import { DiceGame, RiggedRoll } from "../typechain-types";

const deployRiggedRoll: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  // Get deployed DiceGame contract
  const diceGame: DiceGame = await ethers.getContract("DiceGame");
  const diceGameAddress = await diceGame.getAddress();

  // Deploy RiggedRoll contract
  await deploy("RiggedRoll", {
    from: deployer,
    log: true,
    args: [diceGameAddress],
    autoMine: true,
  });

  // Get instance of deployed RiggedRoll contract
  const riggedRoll: RiggedRoll = await ethers.getContract("RiggedRoll", deployer);

  // Transfer ownership to your frontend wallet
  try {
    await riggedRoll.transferOwnership("0x58ad103D0C0E69250CaC89Ddf0BDaD396914C411");
    console.log("Ownership transferred to 0x58ad103D0C0E69250CaC89Ddf0BDaD396914C411");
  } catch (err) {
    console.error("Ownership transfer failed:", err);
  }
};

export default deployRiggedRoll;

deployRiggedRoll.tags = ["RiggedRoll"];
