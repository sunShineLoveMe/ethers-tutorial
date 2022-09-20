const ethers = require('ethers');
// 利用Infura的rpc节点连接以太坊网络
// 填入Infura API Key, 教程：https://github.com/AmazingAng/WTFSolidity/blob/main/Topics/Tools/TOOL02_Infura/readme.md
const INFURA_ID = '5084424153934cf094acc9d9c4cb58cd'
// 连接以太坊主网
const provider = new ethers.providers.JsonRpcProvider("https://eth-mainnet.g.alchemy.com/v2/Tv2cf0FJybz_wpB6Ae3Uj5Ce6A16IXOn")
// USDT的合约地址
const contractAddress = '0xdac17f958d2ee523a2206206994597c13d831ec7'

// const provider = '70a3fb40c2bf7cf078472564c0d67ac5e6815475b176a7753c2af25ec5a6388b'

// const provider = new ethers.providers.JsonRpcProvider("https://rinkeby.infura.io/v3/5084424153934cf094acc9d9c4cb58cd")
// 用私钥来创建钱包并发送交易

// 构建USDT的Transfer的ABI
const abi = [
  "event Transfer(address indexed from, address indexed to, uint value)"
];
// 生成USDT合约对象
const contractUSDT = new ethers.Contract(contractAddress, abi, provider);

// 持续监听Transfer事件
const main = async() => {
    console.log("\n2. 利用contract.on()，持续监听Transfer事件");
    contractUSDT.on('Transfer', (from, to, value) =>{
        console.log(
            `${from} -> ${to} ${ethers.utils.formatUnits(ethers.BigNumber.from(value),6)}` 
        )
    })
}

main()