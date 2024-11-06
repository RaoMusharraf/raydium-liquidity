const ammProgram = require("../utils/ammProgram");
const { RAY_USDC_POOL } = require("../config/constants");

async function fetchPoolInfo() {
    return await ammProgram.fetchPoolInfo(RAY_USDC_POOL);
}

module.exports = fetchPoolInfo;