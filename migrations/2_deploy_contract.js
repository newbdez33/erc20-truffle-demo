var DaShaCoin = artifacts.require("./DaShaCoin.sol");

module.exports = function(deployer) {
    deployer.deploy(DaShaCoin);
};