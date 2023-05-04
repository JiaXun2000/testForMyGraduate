require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    goerli: {
      url: "https://goerli.infura.io/v3/36d5097c3b2343fb8f69c67bdc6e9267",
      accounts: {
        mnemonic: "pizza goat alpha pupil crisp glimpse bottom trip march off grunt emotion"
      }
    }
  }
};
