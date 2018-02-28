const HDWalletProvider = require("truffle-hdwallet-provider");

mnemonic = 'hazard width agent oven vapor pink surge endorse urban slam town state';

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!

  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545, // ganache...
      // port: 8545, // testrpc...
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/5rV6AOWj8UarOdOp4e0f")
      },
      network_id: 4,
      // gas: 4700000,
      // gasPrice: 6000000000
    }
  }
};
