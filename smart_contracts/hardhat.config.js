// https://eth-goerli.g.alchemy.com/v2/2jr8mUhlbZvduaaAx9GCIO8KI6QF0JaN


require('@nomiclabs/hardhat-waffle');
require('dotenv').config();

module.exports = {
  solidity: '0.8.8',
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/2jr8mUhlbZvduaaAx9GCIO8KI6QF0JaN",
      accounts: ["b41c750833e76b6451b08a7476ae2a1150bb8fa5ab1f99ce3ab6c1716982b70a"],
    },
  },
};
