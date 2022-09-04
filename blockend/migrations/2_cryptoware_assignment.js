const cryptowareassignmentCont = artifacts.require("CryptowareAssignment");

const { setEnvValue } = require("../utils/env-man");

const conf = require("../migration-parameters");

const setCryptowareAssignment = (n, v) => {
  setEnvValue("../", `CryptowareAssignment_ADDRESS${n.toUpperCase()}`, v);
};

module.exports = async (deployer, network, accounts) => {
  switch (network) {
    case "rinkeby":
      c = { ...conf.rinkeby };
      break;
    case "mainnet":
      c = { ...conf.mainnet };
      break;
    case "development":
    default:
      c = { ...conf.devnet };
  }

  // deploy CryptowareAssignment
  await deployer.deploy(cryptowareassignmentCont, c.name, c.symbol, c.mintCost);

  const cryptowareAssignment = await cryptowareassignmentCont.deployed();

  if (cryptowareAssignment) {
    console.log(
      `Deployed: CryptowareAssignment
       network: ${network}
       address: ${cryptowareAssignment.address}
       creator: ${accounts[0]}
    `
    );
    setCryptowareAssignment(network, cryptowareAssignment.address);
  } else {
    console.log("CryptowareAssignment Deployment UNSUCCESSFUL");
  }
};
