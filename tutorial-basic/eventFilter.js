const ethers = require('ethers');
// 利用Infura的rpc节点连接以太坊网络
// 填入Infura API Key, 教程：https://github.com/AmazingAng/WTFSolidity/blob/main/Topics/Tools/TOOL02_Infura/readme.md
const INFURA_ID = '5084424153934cf094acc9d9c4cb58cd'
// 连接以太坊主网
const provider = new ethers.providers.JsonRpcProvider("https://eth-mainnet.g.alchemy.com/v2/Tv2cf0FJybz_wpB6Ae3Uj5Ce6A16IXOn")
// 合约地址
const addressUSDT = '0xdac17f958d2ee523a2206206994597c13d831ec7'
// 交易所地址
const accountBinance = '0x28C6c06298d514Db089934071355E5743bf21d60'
// 构建ABI
const abi = [
    "event Transfer(address indexed from, address indexed to, uint value)",
    "function balanceOf(address) public view returns(uint)",
];
// 构建合约对象
const contractUSDT = new ethers.Contract(addressUSDT, abi, provider);

const main = async () => {
    // const balanceUST = await contractUSDT.balanceOf(accountBinance)
    // console.log(`USDT余额: ${ethers.utils.formatUnits(ethers.BigNumber.from(balanceUST),6)}\n`)
    // console.log("创建过滤器，监听转移USDT进入交易所")
    // let filterBinanceIn = contractUSDT.filters.Transfer(null, accountBinance)
    // console.log("过滤器详情：")
    // console.log(filterBinanceIn)
    // contractUSDT.on(filterBinanceIn, (from, to, value) => {
    //     console.log('---------监听USDT进入交易所--------');
    //     console.log(
    //         `${from} -> ${to} ${ethers.utils.formatUnits(ethers.BigNumber.from(value),6)}`
    //     )
    // }).on('error', (error) => {
    //     console.log(error)
    // })
    let filterToBinanceOut = contractUSDT.filters.Transfer(accountBinance, null);
    console.log("\n3. 创建过滤器，监听转移USDT出交易所")
    console.log("过滤器详情：")
    console.log(filterToBinanceOut);
    contractUSDT.on(filterToBinanceOut, (from, to, value) => {
        console.log('---------监听USDT转出交易所--------');
        console.log(
            `${from} -> ${to} ${ethers.utils.formatUnits(ethers.BigNumber.from(value), 6)}`
        )
    }
    ).on('error', (error) => {
        console.log(error)
    });


}

main()