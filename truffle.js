module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545, // ganache...
      // port: 8545, // testrpc...
      network_id: "*" // Match any network id
    }
  }
};
