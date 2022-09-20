const ethers = require('ethers');
// 利用Infura的rpc节点连接以太坊网络
// 填入Infura API Key, 教程：https://github.com/AmazingAng/WTFSolidity/blob/main/Topics/Tools/TOOL02_Infura/readme.md
const INFURA_ID = '5084424153934cf094acc9d9c4cb58cd'
// 连接以太坊主网
const providerETH = new ethers.providers.JsonRpcProvider("https://mainnet.infura.io/v3/5084424153934cf094acc9d9c4cb58cd")
// 连接Rinkeby测试网
const providerRinkeby = new ethers.providers.JsonRpcProvider("https://rinkeby.infura.io/v3/5084424153934cf094acc9d9c4cb58cd")

// 只读合约： 参数分别是合约地址，合约abi, 和provider变量
// const contract = new ethers.Contract("address", "abi", "provider")
const abiRinkedbyWeth = '[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"src","type":"address"},{"indexed":true,"internalType":"address","name":"guy","type":"address"},{"indexed":false,"internalType":"uint256","name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"dst","type":"address"},{"indexed":false,"internalType":"uint256","name":"wad","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"src","type":"address"},{"indexed":true,"internalType":"address","name":"dst","type":"address"},{"indexed":false,"internalType":"uint256","name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"src","type":"address"},{"indexed":false,"internalType":"uint256","name":"wad","type":"uint256"}],"name":"Withdrawal","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"guy","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"deposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"src","type":"address"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]';
const addressWETH = '0xdf032bc4b9dc2782bb09352007d4c57b75160b15'


const contractrRinkByWETH = new ethers.Contract(addressWETH, abiRinkedbyWeth, providerRinkeby)

const main = async() => {
    const nameWth = await contractrRinkByWETH.name()
    const symbolWETH = await contractrRinkByWETH.symbol()
    const totalSupplyWETH = await contractrRinkByWETH.totalSupply()
    const balanceWETHByVitalik = await contractrRinkByWETH.balanceOf('vitalik.eth')
    console.log("读取合约信息")
    console.log(`合约地址：${contractrRinkByWETH}`)
    console.log(`名称: ${nameWth}`)
    console.log(`代号：${symbolWETH}`)
    console.log(`总供给: ${ethers.utils.formatEther(totalSupplyWETH)}`)
    console.log(`Vitalik持仓: ${ethers.utils.formatEther(balanceWETHByVitalik)}\n`)
}

main();

