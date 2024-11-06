const ammProgram = require("../utils/ammProgram");
const wallet = require("../utils/wallet");
const { RAY_TOKEN_MINT, USDC_TOKEN_MINT } = require("../config/constants");
const connection = require("../config/connection");

async function addLiquidity(rayAmount, usdcAmount) {
    const poolInfo = await ammProgram.fetchPoolInfo(RAY_USDC_POOL);

    const addLiquidityTx = await ammProgram.addLiquidityTransaction({
        poolInfo,
        userWallet: wallet.publicKey,
        userRayAmount: rayAmount,
        userUsdcAmount: usdcAmount,
        rayMint: new PublicKey(RAY_TOKEN_MINT),
        usdcMint: new PublicKey(USDC_TOKEN_MINT),
    });

    const signature = await connection.sendTransaction(addLiquidityTx, [wallet]);
    await connection.confirmTransaction(signature);

    console.log("Liquidity added successfully, transaction signature:", signature);
}

module.exports = addLiquidity;