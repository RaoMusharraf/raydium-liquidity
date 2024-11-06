const { Connection } = require("@solana/web3.js");

const connection = new Connection("https://api.mainnet-beta.solana.com");
module.exports = connection;