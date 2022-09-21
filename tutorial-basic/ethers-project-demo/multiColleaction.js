const { ethers, utils } = require('ethers');

//准备 alchemy API 可以参考https://github.com/AmazingAng/WTFSolidity/blob/main/Topics/Tools/TOOL04_Alchemy/readme.md 
const provider = new ethers.providers.JsonRpcProvider("https://rinkeby.infura.io/v3/5084424153934cf094acc9d9c4cb58cd")

// 利用私钥和provider创建wallet对象
const privateKey = 'bba3f1b1e0d9be7f82c42d5efc7dbb7d5e28346e1eb1ba057100b08fd01d06c2'
const wallet = new ethers.Wallet(privateKey, provider)

// WETH的ABI
const abiWETH = [
    "function balanceOf(address) public view returns(uint)",
    "function transfer(address, uint) public returns (bool)",
];
// WETH合约地址（Rinkeby测试网）
const addressWETH = '0xc778417e063141139fce010982780140aa0cd5ab' // WETH Contract
// 声明WETH合约
const contractWETH = new ethers.Contract(addressWETH, abiWETH, wallet)

// console.log("\n1. 创建HD钱包")
// // 通过助记词生成HD钱包
// const mnemonic = `air organ twist rule prison symptom jazz cheap rather dizzy verb glare jeans orbit weapon universe require tired sing casino business anxiety seminar hunt`
// const hdNode = utils.HDNode.fromMnemonic(mnemonic)
// console.log(hdNode);

/**
 * HDNode {
  privateKey: '0x813f8f0a4df26f6455814fdd07dd2ab2d0e2d13f4d2f3c66e7fd9e3856060f89',
  publicKey: '0x02c282bdeaef5e33b8db0d69841c609b977650f816b917bd38507de5b18a634022',
  parentFingerprint: '0x00000000',
  fingerprint: '0xe9525557',
  address: '0x99adCE59B37f7002420801d1b03658bbFb149654',
  chainCode: '0x097063148189df26875897996c41f7a094f75de7d2e77bf6cc719c2691c3f8a5',
  index: 0,
  depth: 0,
  mnemonic: {
    phrase: 'air organ twist rule prison symptom jazz cheap rather dizzy verb glare jeans orbit weapon universe require tired sing casino business anxiety seminar hunt',
    path: 'm',
    locale: 'en'
  },
  path: 'm'
}
 */

const numWallet = 20
// 派生路径：m / purpose' / coin_type' / account' / change / address_index
// 我们只需要切换最后一位address_index，就可以从hdNode派生出新钱包
// let basePath = "m/44'/60'/0'/0";
let wallets = [
    '0x83E5B09c54C4EB904B9bC842Acab9218c2297d6d',
    '0xF44F814ABa3e6BC091487Cf313B49F109550d086',
    '0xC08A302438EaA60adE93196A527A837AA1CA5A3f',
    '0x57171534c9616bB635351deB9d4AA009Fc0d6931',
    '0xFECb70fD6b9414ff7B58C6989D44AFA4a0511D6d',
    '0x897366fBfD8505dE0D772e2F34CF99ac692a9B15',
    '0x5412DD89dD6B707fA816a3b8E0BDFe44A46CA152',
    '0x9c85ee2fFB694A161b59D697ca560Aa2e1a98E6E',
    '0xaBEC7899686e8FE4658bcce8391Fb4e3A70C8868',
    '0x7610CfA2931e9D36CD1aF96599a5ed7886561147',
    '0x74777aa4D53DEA221d77227d11dbBAF04d5459bd',
    '0xAd95229F0698A25F82A84d357Fd8Ec92933B9A81',
    '0x49337ecB753e6a3D978Da1201A79700b6a821b2f',
    '0xb251d26E28440c3de341c034b1328BC59cD289aB',
    '0xE51D657853b01C0fb38c592582592Ac7673C5408',
    '0xf1444E7cF5562494ac4950296B47984609920ad2',
    '0xb5E174a5A2daa4fE7457dfe5b7a3c80eD6c594eF',
    '0x8d63756989286D017C54799A02A1A7E8664C9bfC',
    '0xB97416ea3178980585456DF861263a31d5DD8EB9',
    '0xD16a44745C18e493c10f79147EA5dDb54a083062'
]
// for (let i = 0; i < numWallet; i++) {
//     let hdNodeNew = hdNode.derivePath(basePath + "/" + i);
//     let walletNew = new ethers.Wallet(hdNodeNew.privateKey);
//     wallets.push(walletNew);
//     console.log(walletNew.address)

// }
// console.log(wallets)
// 定义发送数额
const amount = utils.parseEther("0.0001")
// console.log(`发送数额：${amount}`)

const readAddressInfo = async () => {
    console.log("\n3. 读取一个地址的ETH和WETH余额")
    //读取WETH余额
    const balanceWETH = await contractWETH.balanceOf(wallets[19])
    console.log(`WETH持仓: ${ethers.utils.formatEther(balanceWETH)}`)
    //读取ETH余额
    const balanceETH = await provider.getBalance(wallets[19])
    console.log(`ETH持仓: ${ethers.utils.formatEther(balanceETH)}\n`)
}

// readAddressInfo()

const multiCollectionETH = async () => {
    console.log("批量归集20个钱包的ETH")
    const txSendETH = {
        to: wallet.address,
        value: amount
    }
    for (let i = 0; i < numWallet; i++) {
        // 将钱包连接到provider
        let walletiWithProvider = wallets[i].connect(provider)
        var tx = await walletiWithProvider.sendTransaction(txSendETH)
        console.log(`第 ${i + 1} 个钱包 ${walletiWithProvider.address} ETH 归集开始`)
    }
    await tx.wait()
    console.log(`ETH 归集结束`)
}

const multiCollectionWETH = async() => {
    for (let i = 0; i < numWallet; i++) {
        // 将钱包连接到provider
        let walletiWithProvider = wallets[i].connect(provider)
        // 将合约连接到新的钱包
        let contractConnected = contractWETH.connect(walletiWithProvider)
        var tx = await contractConnected.transfer(wallet.address, amount)
        console.log(`第 ${i + 1} 个钱包 ${wallets[i].address} WETH 归集开始`)
    }
    await tx.wait()
    console.log(`WETH 归集结束`)
}

multiCollectionWETH()

// multiCollectionETH()
