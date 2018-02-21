pragma solidity ^0.4.6;


contract Viveat {
    
    struct Product {
        string name;
        string brand;
        int16 quantity;
        int32 groupId;
        bool isValid;
    }
    
    
    // Product[] products;
    mapping(int32 => Product) products;
    
    function Viveat() public {
        // TODO set owner
    }
    
    function addProduct(string name, string brand, int16 quantity, int32 groupId) public {
        products[groupId] = Product({
            name: name,
            brand: brand,
            quantity: quantity,
            groupId: groupId,
            isValid: true
        });
    }
    
    function verifyProduct(int32 groupId) public returns (bool) {
        return products[groupId].isValid;
    }
    
}