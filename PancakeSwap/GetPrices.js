const ethers = require("ethers");

const {
    addressFactory,
    addressRouter
} = require("./AdressList");

const { erc20ABI, factoryABI, pairABI, routerABI } = require("./AbiList");

// Standard Provider
const provider = new ethers.providers.JsonRpcProvider("https://bsc-dataseed.binance.org/");


// Connect to Factory

const contractFactory = new ethers.Contract(addressFactory, factoryABI, provider);

// Connect to the Router
const contractRouter = new ethers.Contract(addressRouter, routerABI, provider);

// Call the Blockchain
const getPricesPancake = async (amountInHuman, addressFrom, addressTo) => {
    // Convert the amount in 
    const contractToken = new ethers.Contract(addressFrom, erc20ABI, provider);
    const contractTokenTo = new ethers.Contract(addressTo, erc20ABI, provider);
    const decimals = await contractToken.decimals();
    const amountIn = ethers.utils.parseUnits(amountInHuman, decimals).toString();


    // Get amount out
    const amountsOut = await contractRouter.getAmountsOut(amountIn, [addressFrom, addressTo]);

    // Convert amount out - decimals
    // const contractToken2 = new ethers.Contract(addressTo, erc20ABI, provider);
    // const decimals2 = await contractToken2.decimals();

    //  Convert amount out - human readable
    const amountOutHuman = ethers.utils.formatUnits(amountsOut[1].toString(), decimals)

    const tokSymbFrom = await contractToken.symbol();
    const tokSymbTo = await contractTokenTo.symbol();

    //console.log(amountOutHuman)

    return { amountOutHuman, tokSymbFrom, tokSymbTo }
}

// const amountInHuman = "1000";
// getPrices(amountInHuman);

export default getPricesPancake



