const hre = require("hardhat");

async function main() {
  //Staking
  const tokenStaking = await hre.ethers.deployContract("TokenStaking");
  await tokenStaking.waitForDeployment();
  //Token
  // const tokenStaking = await hre.ethers.deployContract("TokenStaking");
  // await tokenStaking.waitForDeployment();

  console.log(` STACKING: ${tokenStaking.target}`);
  console.log(` TOKEN: ${tokenStaking.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
