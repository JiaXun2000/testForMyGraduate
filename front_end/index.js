var ethers = require('ethers');
var url = 'https://mainnet.infura.io/v3/36d5097c3b2343fb8f69c67bdc6e9267';
var customHttpProvider = new ethers.providers.JsonRpcProvider('https://rpc.ankr.com/eth_goerli');
customHttpProvider.getBlockNumber().then((result) => {
    console.log("Current block number: " + result);
});