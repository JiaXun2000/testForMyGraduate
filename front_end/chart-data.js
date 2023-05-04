// <!-- 引入 ethers.js 库 -->
// <script src="https://cdn.jsdelivr.net/npm/ethers@5.0.6/dist/ethers.min.js"></script>


// // 初始化 ethers.js
// const provider = new ethers.providers.JsonRpcProvider('https://rpc-mumbai.maticvigil.com/');
// const contractAddress = '<your-contract-address>';
// const abi = <your-contract-abi>;
// const contract = new ethers.Contract(contractAddress, abi, provider);

// // 更新图表数据
// async function updateChart() {
//   // 获取稳定币价格
//   const price = await contract.getPrice();
//   const timestamp = new Date().toLocaleTimeString('en-US', {
//     hour12: false
//   });
//   const data = [timestamp, price.toNumber()];

//   // 更新 ECharts 配置项中的数据
//   option.xAxis.data.push(timestamp);
//   option.series[0].data.push(price.toNumber());

//   // 只保留最近的 10 条数据
//   if (option.xAxis.data.length > 10) {
//     option.xAxis.data.shift();
//     option.series[0].data.shift();
//   }

//   // 重新渲染图表
//   chart.setOption(option);

//   // 每 1 秒更新一次数据
//   setTimeout(updateChart, 1000);
// }








// 初始化 ethers.js
const provider = new ethers.providers.JsonRpcProvider('https://rpc2.sepolia.org/');
const contractAddress = '0xD512dBeABD408c9031c370989cB72e8338997fcB';
const abi = [];
const contract = new ethers.Contract(contractAddress, abi, provider);

// 更新图表数据
async function updateChart() {
  // 获取稳定币价格
  const price = await contract.getStableCoinPrice();
  const timestamp = new Date().toLocaleTimeString('en-US', {
    hour12: false
  });
  const data = [timestamp, price.toNumber()];

  // 更新 ECharts 配置项中的数据
  option.xAxis.data.push(timestamp);
  option.series[0].data.push(price.toNumber());

  // 只保留最近的 10 条数据
  if (option.xAxis.data.length > 10) {
    option.xAxis.data.shift();
    option.series[0].data.shift();
  }

  // 重新渲染图表
  chart.setOption(option);

  // 每 1 秒更新一次数据
  setTimeout(updateChart, 1000);
}
