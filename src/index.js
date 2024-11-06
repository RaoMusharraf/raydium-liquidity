const addLiquidity = require("./services/liquidity");

(async () => {
    try {
        await addLiquidity(1e6, 1e6); // Example amounts
    } catch (error) {
        console.error("Error adding liquidity:", error);
    }
})();