const ethers = require('ethers');
// 利用Infura的rpc节点连接以太坊网络
// 填入Infura API Key, 教程：https://github.com/AmazingAng/WTFSolidity/blob/main/Topics/Tools/TOOL02_Infura/readme.md
const INFURA_ID = '5084424153934cf094acc9d9c4cb58cd'
// 连接以太坊主网
const providerETH = new ethers.providers.JsonRpcProvider("https://mainnet.infura.io/v3/5084424153934cf094acc9d9c4cb58cd")
// 连接Rinkeby测试网
const providerRinkeby = new ethers.providers.JsonRpcProvider("https://rinkeby.infura.io/v3/5084424153934cf094acc9d9c4cb58cd")

// console.log(ethers)

// console.log(providerETH)
// providerETH.getNetwork.then((networkInfo) => {
//     console.log("链接到的哪条链");
//     console.log(networkInfo);
// })
const main = async () => {
    // 4. 查询当前gas price
    console.log("\n4. 查询当前gas price")
    const gasPrice = await providerRinkeby.getGasPrice();
    console.log(gasPrice);
    // // 3. 查询区块高度
    // console.log("\n3. 查询区块高度")
    // const blockNumber = await providerRinkeby.getBlockNumber();
    // console.log(blockNumber);
    // 2. 查询provider连接到了哪条链
    // console.log("\n2. 查询provider连接到了哪条链")
    // const network = await providerRinkeby.getNetwork();
    // console.log(network);
    // // 1. 查询vitalik在主网和Rinkeby测试网的ETH余额
    // console.log("1. 查询vitalik在主网和Rinkeby测试网的ETH余额");
    // const balance = await providerETH.getBalance(`vitalik.eth`);
    // const balanceRinkeby = await providerRinkeby.getBalance(`vitalik.eth`);
    // // 将余额输出在console（主网）
    // console.log(`ETH Balance of vitalik: ${ethers.utils.formatEther(balance)} ETH`);
    // // 输出Rinkeby测试网ETH余额
    // console.log(`Rinkeby ETH Balance of vitalik: ${ethers.utils.formatEther(balanceRinkeby)} ETH`);
}

main();

