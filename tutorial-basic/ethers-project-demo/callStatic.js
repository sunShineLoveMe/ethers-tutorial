// 合约类callStatic方法，目的是: 在发送交易之前检查交易是否会失败，从而节省gas费
// 在ethers.js中利用contract对象的callStatic()方法调用以太坊节点的eth_call，
// 如果调用成功，返回true,否则报错并返回报错原因
const ethers = require('ethers');

// 连接以太坊主网
const provider = new ethers.providers.JsonRpcProvider("https://eth-mainnet.g.alchemy.com/v2/Tv2cf0FJybz_wpB6Ae3Uj5Ce6A16IXOn")

// 利用私钥和provider创建wallet对象
const privateKey = '70a3fb40c2bf7cf078472564c0d67ac5e6815475b176a7753c2af25ec5a6388b'
const wallet = new ethers.Wallet(privateKey, provider)

// DAI的ABI
const abiDAI = [
    "function balanceOf(address) public view returns(uint)",
    "function transfer(address, uint) public returns (bool)",
];
// DAI合约地址（主网）
const addressDAI = '0x6B175474E89094C44Da98b954EedeAC495271d0F' // DAI Contract
// 创建DAI合约实例
const contractDAI = new ethers.Contract(addressDAI, abiDAI, provider)

const main = async () => {
    const address = wallet.getAddress()
    // console.log("\n1. 读取测试钱包的DAI余额")
    // const balanceDAI = await contractDAI.balanceOf(address)
    // console.log(`DAI持仓: ${ethers.utils.formatEther(balanceDAI)}\n`)
    // console.log("\n2.  用callStatic尝试调用transfer转账1 DAI，msg.sender为V神地址")
    // // 发起交易
    // const tx = await contractDAI.callStatic.transfer("vitalik.eth", ethers.utils.parseEther("10000"), { from: "vitalik.eth" })
    // console.log(`交易会成功吗？：`, tx)
    console.log("\n3.  用callStatic尝试调用transfer转账1 DAI，msg.sender为测试钱包地址")
    const tx2 = await contractDAI.callStatic.transfer("vitalik.eth", ethers.utils.parseEther("10000"), { from: address })
    console.log(`交易会成功吗？：`, tx)
}

main()