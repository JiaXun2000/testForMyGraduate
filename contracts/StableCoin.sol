// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import './aggregator.sol';
contract Stablecoin {
    string public name = "My Stable Coin";
    string public symbol = "STBL";
    uint8 public decimals = 18;
    uint256 public totalSupply = 1000000000;

    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;

    address public owner;
    AggregatorV3Interface internal priceFeed;

    constructor(address _priceFeed) {
        owner = msg.sender;
        priceFeed = AggregatorV3Interface(_priceFeed);
    }

    function deposit(uint256 _amount) public {
        require(_amount > 0, "Amount must be greater than 0");

        balanceOf[msg.sender] += _amount;
        totalSupply += _amount;
    }

    function withdraw(uint256 _amount) public {
        require(_amount > 0, "Amount must be greater than 0");
        require(balanceOf[msg.sender] >= _amount, "Insufficient balance");

        balanceOf[msg.sender] -= _amount;
        totalSupply -= _amount;
    }

    function transfer(address _to, uint256 _amount) public returns (bool) {
        require(_to != address(0), "Invalid address");
        require(_amount > 0, "Amount must be greater than 0");
        require(balanceOf[msg.sender] >= _amount, "Insufficient balance");

        balanceOf[msg.sender] -= _amount;
        balanceOf[_to] += _amount;

        emit Transfer(msg.sender, _to, _amount);

        return true;
    }

    function approve(address _spender, uint256 _amount) public returns (bool) {
        require(_spender != address(0), "Invalid address");
        require(_amount > 0, "Amount must be greater than 0");

        allowance[msg.sender][_spender] = _amount;

        emit Approval(msg.sender, _spender, _amount);

        return true;
    }

    function transferFrom(address _from, address _to, uint256 _amount) public returns (bool) {
        require(_from != address(0), "Invalid address");
        require(_to != address(0), "Invalid address");
        require(_amount > 0, "Amount must be greater than 0");
        require(balanceOf[_from] >= _amount, "Insufficient balance");
        require(allowance[_from][msg.sender] >= _amount, "Insufficient allowance");

        balanceOf[_from] -= _amount;
        balanceOf[_to] += _amount;
        allowance[_from][msg.sender] -= _amount;

        emit Transfer(_from, _to, _amount);

        return true;
    }

    // function getPrice() public view returns (uint256) {
    //     (, int price, , , ) = priceFeed.latestRoundData();
    //     return uint256(price) * 10 ** (decimals - priceFeed.decimals());
    // }

    function getStableCoinPrice() public view returns (uint256) {
        (, int price, , , ) = priceFeed.latestRoundData();
        uint256 priceInUSD = uint256(price) * 10 ** (decimals - priceFeed.decimals());
        uint256 stableCoinPrice = priceInUSD * 1 ether / 1; // 1 ether = 1 stable coin
        return stableCoinPrice;
}


    function getStableCoinValue(uint256 _amount) public view returns (uint256) {
        uint256 price = getStableCoinPrice();
        return (_amount * price) / (10 ** decimals);
    }

    function buyStableCoin(uint256 _amount) public payable {
        require(_amount > 0        && msg.value == getStableCoinValue(_amount),
            "Invalid amount or value");

        deposit(_amount);
        emit Buy(msg.sender, _amount, msg.value);
    }

    function sellStableCoin(uint256 _amount) public {
        require(_amount > 0, "Amount must be greater than 0");
        require(balanceOf[msg.sender] >= _amount, "Insufficient balance");

        uint256 value = getStableCoinValue(_amount);
        require(address(this).balance >= value, "Contract balance is insufficient");

        withdraw(_amount);
        payable(msg.sender).transfer(value);
        emit Sell(msg.sender, _amount, value);
    }

    event Transfer(address indexed _from, address indexed _to, uint256 _amount);
    event Approval(address indexed _owner, address indexed _spender, uint256 _amount);
    event Buy(address indexed _buyer, uint256 _amount, uint256 _value);
    event Sell(address indexed _seller, uint256 _amount, uint256 _value);
}




























// // 导入 Solidity 的核心库
// pragma solidity ^0.8.0;

// // 声明稳定币合约
// contract Stablecoin {
//   // 定义一个事件，用于记录交易信息
//   event Trade(address indexed buyer, address indexed seller, uint256 amount, uint256 timestamp);

//   // 定义一个 mapping，用于记录每个地址持有的稳定币数量
//   mapping(address => uint256) public balances;

//   // 定义稳定币名称、符号、小数位数等信息
//   string public name = "My Stablecoin";
//   string public symbol = "MSC";
//   uint8 public decimals = 18;

//   // 定义合约的总供应量
//   uint256 public totalSupply;

//   constructor() {
//     // 初始化合约创建者的账户余额
//     balances[msg.sender] = totalSupply;
//   }

//   function buy(uint256 amount) public payable {
//     // 检查购买数量是否合法
//     require(amount > 0, "Amount should be greater than zero.");

//     // 计算稳定币的价格
//     uint256 price = amount * 1 ether / 10;

//     // 检查发送者发送的以太币是否足够支付
//     require(msg.value >= price, "Not enough Ether sent.");

//     // 计算购买者的账户余额
//     balances[msg.sender] += amount;

//     // 减少合约创建者的账户余额
//     balances[address(this)] -= amount;

//     // 触发事件，记录交易信息
//     emit Trade(msg.sender, address(this), amount, block.timestamp);
//   }

//   function sell(uint256 amount) public {
//     // 检查出售数量是否合法
//     require(amount > 0, "Amount should be greater than zero.");

//     // 检查出售者的账户余额是否足够
//     require(balances[msg.sender] >= amount, "Not enough balance.");

//     // 计算稳定币的价格
//     uint256 price = amount * 1 ether / 10;

//     // 增加合约创建者的账户余额
//     balances[address(this)] += amount;

//     // 减少出售者的账户余额
//     balances[msg.sender] -= amount;

//     // 转移以太币到出售者的账户
//     payable(msg.sender).transfer(price);

//     // 触发事件，记录交易信息
//     emit Trade(address(this), msg.sender, amount, block.timestamp);
//   }
// }
