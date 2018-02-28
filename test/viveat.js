var Viveat = artifacts.require("Viveat");

var contractInstance;

contract('Viveat', function(accounts) {
  it("verify function should return false if groupId does not exist", function() {
    return Viveat.deployed().then(function(instance) {
      return instance.verifyProduct.call(12345);
    }).then(function(verifyResult) {
      assert.equal(verifyResult, false);
    });
  });
  it("addProduct should work", function() {
    return Viveat.deployed().then(function(instance) {
      // return instance.verifyProduct.call(12345);
      contractInstance = instance;
      return instance.addProduct('bellaborsa', 'guidobrand', 10000, 12345);
    }).then(function(result) {
      return contractInstance.verifyProduct.call(12345);
    })
    .then(function(result) {
      assert.equal(result, true);
    })
  });
});
