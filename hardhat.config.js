require('dotenv').config();
require('@nomiclabs/hardhat-ethers');

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.21",
  paths: {
    sources: "./src",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  networks: {
    Amoy: {
        chainId:  80002,
        timeout:  20000,
        gasPrice: 80000000000,
        gas:      "auto",
        name:     "Polygon_Amoy_Testnet",		
		url:      process.env.AMOY_ACCESSPOINT_URL,
		from:     process.env.AMOY_ACCOUNT,
        accounts: [process.env.AMOY_PRIVATE_KEY]
	},
    ZKsync: {
        chainId:  80002,
        timeout:  20000,
        gasPrice: 80000000000,
        gas:      "auto",
        name:     "ZKsync_Sepolia_Testnet",		
		url:      process.env.AMOY_ACCESSPOINT_URL,
		from:     process.env.AMOY_ACCOUNT,
        accounts: [process.env.AMOY_PRIVATE_KEY]
	}
  }
};
