// import { ethers } from "https://cdn-cors.ethers.io/lib/ethers-5.6.9.esm.min.js";
const ethers = require('ethers');

const provider = ethers.getDefaultProvider();
const main = async() => {
    const balance = await provider.getBalance(`vitalik.eth`);
    console.log(`ETH Balance of vitalik: ${ethers.utils.formatEther(balance)} ETH`)
}

main();