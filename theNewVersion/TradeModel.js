//import { CONTRACT_ADDRESS, ABI, provider } from './script.js';
const transactions = [];
  
  const pageSize = 10; // 每页显示的交易数
  let currentPage = 1; // 当前页数
  
  const contract_address = '0x839E55CB44070599941a653fe4a96BC6048F3fa2'; // 0x91f6Da63e90C310331Fd857C49a7b36D9c981Fd9
  const abi = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_priceFeed",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "_spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "_buyer",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "Buy",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "buyStableCoin",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "deposit",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "_seller",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "Sell",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "sellStableCoin",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "_buyer",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "_seller",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "Trade",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "_from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "_to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "withdraw",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getStableCoinPrice",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "getStableCoinValue",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]; // 这里需要填入你的ABI
  
  const Provider = new ethers.providers.JsonRpcProvider('https://eth-sepolia.g.alchemy.com/v2/ohtOJJZ8d3J5eIEKJAAGVhgjMbFnxKXK');
  const stableCoinContract = new ethers.Contract(contract_address, abi, Provider);
  
  stableCoinContract.on("Trade", (from, to, amount, event) => {
    transactions.push({
      sender: from,
      receiver: to,
      amount: ethers.utils.formatEther(amount)
    });
    renderTransactions();
  });
  
  // 将交易记录分页，并添加到表格中
  async function renderTransactions() {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
  
    // 调用合约对象获取交易事件
    const contract = new ethers.Contract(contract_address, abi, Provider);
    const filter = contract.filters.Trade();
    const events = await contract.queryFilter(filter, startIndex, endIndex);
  
    // 将交易事件转换为交易记录对象
    const pageTransactions = events.map(event => {
      const { from, to, value } = event.args;
      return {
        sender: from,
        receiver: to,
        amount: ethers.utils.formatUnits(value),
      };
    });
  
    const table = document.getElementById('transaction-table');
    table.innerHTML = ''; // 先清空表格
  
    // 遍历当前页的交易记录，将其添加到表格中
    pageTransactions.forEach((transaction, index) => {
      const row = table.insertRow(index);
      const senderCell = row.insertCell(0);
      const receiverCell = row.insertCell(1);
      const amountCell = row.insertCell(2);
  
      senderCell.innerHTML = transaction.sender;
      receiverCell.innerHTML = transaction.receiver;
      amountCell.innerHTML = transaction.amount;
    });
  
    // 更新分页按钮
    updatePagination();
  }
  
  
  // 更新分页按钮
  function updatePagination() {
    const totalPages = Math.ceil(transactions.length / pageSize);
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = ''; // 先清空分页按钮
  
    // 添加“上一页”按钮
    if (currentPage > 1) {
      const prevButton = document.createElement('button');
      prevButton.innerText = '上一页';
      prevButton.addEventListener('click', () => {
        currentPage--;
        renderTransactions();
      });
      pagination.appendChild(prevButton);
    }
  
    // 添加当前页和其它页的按钮
    for (let i = 1; i <= totalPages; i++) {
      const pageButton = document.createElement('button');
      pageButton.innerText = i;
  
      if (i === currentPage) {
        pageButton.classList.add('active');
      } else {
        pageButton.addEventListener('click', () => {
          currentPage = i;
          renderTransactions();
        });
      }
  
      pagination.appendChild(pageButton);
  
      // 如果分页按钮数量过多，只显示前后两个按钮和当前页的按钮
      if (totalPages > 5 && i > 2 && i < totalPages - 1 && i !== currentPage) {
        const dots = document.createElement('span');
        dots.innerText = '...';
        pagination.insertBefore(dots, pageButton);
        i = totalPages - 2;
      }
    }
  
    // 添加“下一页”按钮
    if (currentPage < totalPages) {
      const nextButton = document.createElement('button');
      nextButton.innerText = '下一页';
      nextButton.addEventListener('click', () => {
        currentPage++;
        renderTransactions();
      });
      pagination.appendChild(nextButton);
    }
  }
  
  // 初始化页面时渲染第一页的交易记录
  renderTransactions();
  