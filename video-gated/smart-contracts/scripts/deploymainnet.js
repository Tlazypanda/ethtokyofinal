const main = async() => {
  const zkContractFactory = await hre.ethers.getContractFactory('ZkBobDirectDeposit');
  const zkContract = await zkContractFactory.deploy();
  await zkContract.deployed();
  console.log("Contract deployed to:", zkContract.address);
};

const runMain = async() => {
  try {
      await main();
      process.exit(0);
  } catch (error) {
      console.log(error);
      process.exit(1);
  }
};

runMain();