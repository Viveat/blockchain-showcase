var Viveat = artifacts.require("Viveat");

contract('Viveat', function(accounts) {
  it("verify function should return false if groupId does not exist", function() {
    return Viveat.deployed().then(function(instance) {
      return instance.verifyProduct.call(12345);
    }).then(function(verifyResult) {
      assert.equal(verifyResult, false);
    });
  });
});
