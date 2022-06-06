const hre = require("hardhat");

async function main() {
  const AxoGenesis = await hre.ethers.getContractFactory("AxoGenesis");
  const axoGenesis = await AxoGenesis.deploy();

  await axoGenesis.deployed();

  console.log("AxoGenesis deployed to:", axoGenesis.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });