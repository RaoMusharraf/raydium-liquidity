const { Keypair } = require("@solana/web3.js");
require("dotenv").config();

const wallet = Keypair.fromSecretKey(new Uint8Array(JSON.parse(process.env.PRIVATE_KEY)));
module.exports = wallet;