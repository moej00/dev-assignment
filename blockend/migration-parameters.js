const Web3 = require("web3");
const provider = new Web3.providers.HttpProvider("http://localhost:8545");
var web3 = new Web3(provider);

const { toTokens } = require("./utils/test-utils")(web3);

module.exports = {
  devnet: {
    name: "CryptowareAssignment",
    symbol: "CW",
    mintCost: toTokens("0.01"),
  },
  rinkeby: {
    name: "CryptowareAssignment",
    symbol: "CW",
    mintCost: toTokens("0.01"),
  },
  mainnet: {},
};
