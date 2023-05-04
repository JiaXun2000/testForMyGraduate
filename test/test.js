
// const { ethers } = require("ethers");

// const provider = new ethers.providers.JsonRpcProvider();

// const signer = provider.getSigner()

// const currentBlockNumber = await provider.getBlockNumber();
// console.log("当前区块号: ", currentBlockNumber);



const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider('https://rpc.ankr.com/eth_goerli');
const signer = provider.getSigner();

async function main() {
  const currentBlockNumber = await provider.getBlockNumber();
  balance = await provider.getBalance("ethers.eth");
  
  console.log("当前区块号: ", currentBlockNumber);
  console.log("余额为：",ethers.utils.formatEther(balance));
}

main();


// const { ethers } = require('ethers');

// const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545'); // 更改为您要连接的网络

// async function main() {
//   const currentBlockNumber = await provider.getBlockNumber();
//   console.log('当前区块号：', currentBlockNumber);
// }

// main();
