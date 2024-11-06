const { getAmmProgram } = require("@raydium-io/raydium-sdk");
const connection = require("../config/connection");
const wallet = require("./wallet");

module.exports = getAmmProgram(connection, wallet);