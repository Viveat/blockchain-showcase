// Import libraries
var Web3 = require('web3'),
	contract = require("truffle-contract"),
	HDWalletProvider = require("truffle-hdwallet-provider"),
	path = require('path'),
	ViveatJSON = require(path.join(__dirname, 'build/contracts/Viveat.json'));

// Setup RPC connection   
// var provider = new Web3.providers.HttpProvider("http://localhost:7545");
mnemonic = 'hazard width agent oven vapor pink surge endorse urban slam town state';
var provider = new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/5rV6AOWj8UarOdOp4e0f", 4);
accountAddress = '0x08a3fbfFd216cb2D255f413D499AcdC7A366Ca5A'

// Read JSON and attach RPC connection (Provider)
var Viveat = contract(ViveatJSON);
Viveat.setProvider(provider);

var contactInstance;

// Use Truffle as usual
Viveat.deployed()
	.then(function(instance) {
		contactInstance = instance;
		// return instance.verifyProduct.call(12345)
		return instance.addProduct('bellaborsa', 'guidobrand', 10000, 12345, {from: accountAddress});
	})
	.then(function(result) {
		// if (result && result.receipt.status == 1) {
		// 	console.log('Product added correctly');
		// }
	})
	.then(function(result) {
		return contactInstance.verifyProduct.call(12345, {from: accountAddress});
	})
	.then(function(result) {
		console.log(result);
		// TODO capire perché non funziona
		if (result == true) {
			console.log('verifyProduct returns true as expected');
		} else {
			console.log('Something went wrong with verifyProduct');
		}
	})
	.catch(function (err) {
		console.error(err);
	}); 