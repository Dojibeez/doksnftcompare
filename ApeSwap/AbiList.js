const erc20ABI = [
    "function decimals() external view returns (uint8)",
    "function symbol() external view returns (string memory)"
];

const factoryABI = ["function getPair(address tokenA, address tokenB) external view returns (address pair)"];

const routerABI = ["function getAmountsOut(uint amountIn, address[] memory path) public view returns (uint[] memory amounts)"];



module.exports = { erc20ABI, factoryABI, routerABI }