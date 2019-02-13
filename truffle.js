const Web3 = require("web3");
const web3 = new Web3(new Web3.providers.HttpProvider());
var mnemonic = "";
var HDWalletProvider = require("truffle-hdwallet-provider");
const Wallet = require('ethereumjs-wallet');

var provider = new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/ff53c238a20e4bcca44cc6b6fe975c67");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8080,
      network_id: "9999" // Match any network id
    },
    ropsten: {
      provider: provider,
      // You can get the current gasLimit by running
      // truffle deploy --network rinkeby
      // truffle(rinkeby)> web3.eth.getBlock("pending", (error, result) => console.log(result.gasLimit))
      //web3.eth.getBlock("latest", (error, result) => console.log(result.gasLimit))
      gasLimit: 4600000,
      gasPrice: web3.utils.toHex(20000000000),
      network_id: "3",
    }
  }
};
