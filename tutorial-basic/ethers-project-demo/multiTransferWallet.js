const { ethers, utils } = require('ethers');

// console.log("\n1. 创建HD钱包")
// // 通过助记词生成HD钱包
// const mnemonic = `air organ twist rule prison symptom jazz cheap rather dizzy verb glare jeans orbit weapon universe require tired sing casino business anxiety seminar hunt`
// const hdNode = utils.HDNode.fromMnemonic(mnemonic)
// console.log(hdNode);

// console.log("\n2. 通过HD钱包派生20个钱包")
// const numWallet = 20
// 派生路径：m / purpose' / coin_type' / account' / change / address_index
// 我们只需要切换最后一位address_index，就可以从hdNode派生出新钱包
// let basePath = "m/44'/60'/0'/0";
let addresses = [
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
let amounts = [100000000000000, 100000000000000, 100000000000000,
    100000000000000, 100000000000000, 100000000000000,
    100000000000000, 100000000000000, 100000000000000,
    100000000000000, 100000000000000, 100000000000000,
    100000000000000, 100000000000000, 100000000000000,
    100000000000000, 100000000000000, 100000000000000,
    100000000000000, 100000000000000]
// for (let i = 0; i < numWallet; i++) {
//     let hdNodeNew = hdNode.derivePath(basePath + "/" + i);
//     let walletNew = new ethers.Wallet(hdNodeNew.privateKey);
//     addresses.push(walletNew.address);
// }
// console.log(addresses)
// const amounts = Array(20).fill(utils.parseEther("0.0001"))
// console.log(`发送数额：${amounts}`)

// //准备 alchemy API 可以参考https://github.com/AmazingAng/WTFSolidity/blob/main/Topics/Tools/TOOL04_Alchemy/readme.md 
// const provider = new ethers.providers.JsonRpcProvider("https://rinkeby.infura.io/v3/5084424153934cf094acc9d9c4cb58cd")

// // 利用私钥和provider创建wallet对象
// const privateKey = 'bba3f1b1e0d9be7f82c42d5efc7dbb7d5e28346e1eb1ba057100b08fd01d06c2'
// const wallet = new ethers.Wallet(privateKey, provider)
const ALCHEMY_RINKEBY_URL = 'https://eth-rinkeby.alchemyapi.io/v2/GlaeWuylnNM3uuOo-SAwJxuwTdqHaY5l';
const provider = new ethers.providers.JsonRpcProvider(ALCHEMY_RINKEBY_URL);

// 利用私钥和provider创建wallet对象
const privateKey = '0x227dbb8586117d55284e26620bc76534dfbd2394be34cf4a09cb775d593b6f2b'
const wallet = new ethers.Wallet(privateKey, provider)

// 创建AirDop合约
// Airdrop的ABI
const abiAirdrop = [
    "function multiTransferToken(address,address[],uint256[]) external",
    "function multiTransferETH(address[],uint256[]) public payable",
];
// Airdrop合约地址（Rinkeby测试网）
const addressAirdrop = '0x76b6fe5e4965bb8047f70c01212d5f843432ee37' // Airdrop Contract
// 声明Airdrop合约
const contractAirdrop = new ethers.Contract(addressAirdrop, abiAirdrop, wallet)
// console.log(`空投合约地址： ${contractAirdrop}`)
// WETH的ABI
const abiWETH = [
    "function balanceOf(address) public view returns(uint)",
    "function transfer(address, uint) public returns (bool)",
    "function approve(address, uint256) public returns (bool)"
];
// WETH合约地址（Rinkeby测试网）
const addressWETH = '0xc778417e063141139fce010982780140aa0cd5ab' // WETH Contract
// 声明WETH合约
const contractWETH = new ethers.Contract(addressWETH, abiWETH, wallet)

const main = async () => {
    /**
     * 3. 读取一个地址的ETH和WETH余额
        WETH持仓: 0.0004

        ETH持仓: 0.000198330997240432
     */
    console.log("\n3. 读取一个地址的ETH和WETH余额")
    //读取WETH余额
    const balanceWETH = await contractWETH.balanceOf(addresses[10])
    console.log(`WETH持仓: ${ethers.utils.formatEther(balanceWETH)}\n`)
    //读取ETH余额
    const balanceETH = await provider.getBalance(addresses[10])
    console.log(`ETH持仓: ${ethers.utils.formatEther(balanceETH)}\n`)
}

const multiMain = async () => {
    console.log("\n4. 调用multiTransferETH()函数，给每个钱包转 0.0001 ETH")
    // 发起交易
    const tx = await contractAirdrop.multiTransferETH(addresses,
        amounts, { value: ethers.utils.parseEther("0.002") })
    // 等待交易上链
    await tx.wait()
    // console.log(`交易详情：`)
    // console.log(tx)
    const balanceETH2 = await provider.getBalance(addresses[10])
    console.log(`发送后该钱包ETH持仓: ${ethers.utils.formatEther(balanceETH2)}\n`)
}

// multiMain()

const multiTransferToken = async () => {
    console.log("\n5. 调用multiTransferToken()函数，给每个钱包转 0.001 WETH")
    // 先approve WETH给Airdrop合约
    const txApprove = await contractWETH.approve(addressAirdrop, utils.parseEther("1"))
    await txApprove.wait()
    // 发起交易
    const tx2 = await contractAirdrop.multiTransferToken(addressWETH, addresses, amounts)
    // 等待交易上链
    await tx2.wait()
    // console.log(`交易详情：`)
    // console.log(tx2)
    // 读取WETH余额
    const balanceWETH2 = await contractWETH.balanceOf(addresses[10])
    console.log(`发送后该钱包WETH持仓: ${ethers.utils.formatEther(balanceWETH2)}\n`)
}
// 0x74777aa4D53DEA221d77227d11dbBAF04d5459bd
// multiTransferToken()

const readContractName = () => {
    // const _address = addressAirdrop
    console.log("=======授权的空投合约地址=======")
    console.log(addressAirdrop)

    console.log("===========WETH合约地址===========")
    console.log(contractWETH.signer)
}

readContractName()