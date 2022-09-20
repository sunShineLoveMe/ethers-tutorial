/**
 * ABI 被设计出来跟智能合约交互，他将每个参数填充为32个字节的数据，
 * 拼接在一起，如果你要和合约交互在一起，用的就是encode
 * 
 * abi.encodePacked 将给定参数根据其所需最低空间，它类似abi.encode
 * 但还是会把其中填充的0省略，当你想省空间，并且不予合约交互的时候，
 * 可以使用，比如算一些数据的hash的时候
 * 
 * 
 */
const ethers = require('ethers');

// 连接Rinkeby测试网
const provider = new ethers.providers.JsonRpcProvider("https://rinkeby.infura.io/v3/5084424153934cf094acc9d9c4cb58cd")

// 利用私钥和provider创建wallet对象
const privateKey = 'bba3f1b1e0d9be7f82c42d5efc7dbb7d5e28346e1eb1ba057100b08fd01d06c2'
const wallet = new ethers.Wallet(privateKey, provider)

// WETH的ABI
const abiWETH = [
    "function balanceOf(address) public view returns(uint)",
    "function deposit() public payable",
];
// WETH合约地址（Rinkeby测试网）
const addressWETH = '0xc778417e063141139fce010982780140aa0cd5ab' // WETH Contract
// 声明WETH合约
const contractWETH = new ethers.Contract(addressWETH, abiWETH, wallet)

const main = async () => {
    const address = await wallet.getAddress()
    // 1. 读取WETH合约的链上信息（WETH abi）
    console.log("\n1. 读取WETH余额")
    // 编码calldata
    const param1 = contractWETH.interface.encodeFunctionData(
        "balanceOf",
        [address]
    );
    console.log(`编码结果： ${param1}`)
    // 创建交易
    const tx1 = {
        to: addressWETH,
        data: param1
    }
    // 发起交易，可读操作（view/pure）可以用 provider.call(tx)
    const balanceWETH = await provider.call(tx1)
    console.log(`存款前WETH持仓: ${ethers.utils.formatEther(balanceWETH)}\n`)
}

const main1 = async() => {
    const address = await wallet.getAddress()
    // 编码calldata
    const param2 = contractWETH.interface.encodeFunctionData(
        "deposit"
    )
    console.log(`编码结果： ${param2}`)
    // 创建交易
    const tx2 = {
        to: addressWETH,
        data: param2,
        value: ethers.utils.parseEther("0.001")
    }
    // 发起交易，写入操作需要 wallet.sendTransaction(tx)
    const receipt1 = await wallet.sendTransaction(tx2)
    // 等待交易上链
    await receipt1.wait()
    console.log(`交易详情：`)
    console.log(receipt1)
    const balanceWETH_deposit = await contractWETH.balanceOf(address)
    console.log(`存款后WETH持仓: ${ethers.utils.formatEther(balanceWETH_deposit)}\n`)
}

main1()
