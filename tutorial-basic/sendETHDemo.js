const ethers = require('ethers');
// 利用Infura的rpc节点连接以太坊网络
// 填入Infura API Key, 教程：https://github.com/AmazingAng/WTFSolidity/blob/main/Topics/Tools/TOOL02_Infura/readme.md
const INFURA_ID = '5084424153934cf094acc9d9c4cb58cd'

/**
 * 再ethers中，Signer签名者类是以太坊账户的抽象，可用于对消息和交易的签名，
 * 并且将签名的交易发送到以太坊网络上，并且更改区块链状态
 * Signer是抽象类，不能直接实例化，我们需要使用他的子类
 * Wallet钱包类
 * 
 * 钱包类继承了Signer类，并且开发者可以像包含私钥的外部拥有账户（EOA）一样，用它
 * 对交易和消息进行签名
 */

const providerRinkeby = new ethers.providers.JsonRpcProvider("https://rinkeby.infura.io/v3/5084424153934cf094acc9d9c4cb58cd")
// 用私钥来创建钱包并发送交易
const privateKey1 = '5c10fd556b49e22e0a4df15ee4025aedc395ce84cdb95f84f689242f9892ade7';
const wallet1 = new ethers.Wallet(privateKey1, providerRinkeby)

const privateKey2 = '70a3fb40c2bf7cf078472564c0d67ac5e6815475b176a7753c2af25ec5a6388b';
const wallet2 = new ethers.Wallet(privateKey2, providerRinkeby)

const main = async() => {
    // const walletAddressStr = await wallet1.getAddress()
    // console.log('获取钱包信息')
    // console.log(`钱包地址: ${walletAddressStr}`)
    // // console.log('获取助记词')
    // const walletPrivateKey = await wallet1.privateKey
    // console.log(`钱包地址私钥: ${walletPrivateKey}`)
    // const transactionCount = await wallet1.getTransactionCount()
    // console.log(`钱包的交互次数：${transactionCount}`)
    // 发送ETH
    const balance1 = await wallet1.getBalance()
    const balance2 = await wallet2.getBalance()
    console.log('发送ETH测试网')
    console.log('发送前余额')
    console.log(`钱包1：${ethers.utils.formatEther(balance1)} ETH`)
    console.log(`钱包1：${ethers.utils.formatEther(balance2)} ETH`)
    const tx = {
        to: wallet2.getAddress(),
        value: ethers.utils.parseEther("0.05")
    }

    console.log('等待区块确认...')
    const receipt = await wallet1.sendTransaction(tx)
    await receipt.wait()
    console.log(receipt) // 打印交易详情

    console.log('交易之后的余额')
    const balanc12 = await wallet1.getBalance()
    const balance22 = await wallet2.getBalance()
    console.log(`钱包1：${ethers.utils.formatEther(balanc12)} ETH`)
    console.log(`钱包1：${ethers.utils.formatEther(balance22)} ETH`)

    
}

main();


