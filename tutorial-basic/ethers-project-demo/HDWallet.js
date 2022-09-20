const {ethers, utils} = require('ethers');

// 生成随机助记词
const mnemonic = utils.entropyToMnemonic(utils.randomBytes(32))
// 创建HD钱包
const hdNode = ethers.utils.HDNode.fromMnemonic(mnemonic)
console.log(hdNode);
/**
 * HDNode {
  privateKey: '0x6c9d73f6f6fecec02554f7718bf4fe809e99b8c5097935a4dd59de2484390c96', 
  publicKey: '0x020b7b3369a1c0240f701ab1e9a75fc08927fc0a4c480fa30776797e9add132c54',
  parentFingerprint: '0x00000000',
  fingerprint: '0x72a62003',
  address: '0xA7748411380F460ea4cdd432cfafC677b743ef04',
  chainCode: '0xb74f40da11e34ca4279ca805f0b36935bad0d289a157c2c656022aecee08666a',
  index: 0,
  depth: 0,
  mnemonic: {
    phrase: 'fortune shove demand finger unfold endless enough ladder cool vibrant eternal donor maid sausage return input squirrel industry coast together cupboard tone turkey hamster',
    path: 'm',
    locale: 'en'
  },
  path: 'm'
}
 */

const numWallet = 20
// 派生路径：m / purpose' / coin_type' / account' / change / address_index
// 我们只需要切换最后一位address_index，就可以从hdNode派生出新钱包
/**
 * 
m: 固定为"m"
purpose：固定为"44"
coin_type：代币类型，比特币主网为0，比特币测试网为1，以太坊主网为60
account：账户索引，从0开始。
change：是否为外部链，0为外部链，1为内部链，一般填0.
address_index：地址索引，从0开始，想生成新地址就把这里改为1，2，3。
 */
let basePath = "m/44'/60'/0'/0";
let wallets = [];
for(let i = 0; i < numWallet; i++) {
    let hdNodeNew = hdNode.derivePath(basePath + '/' + i);
    let walletNew = new ethers.Wallet(hdNodeNew.privateKey);
    console.log(`第${i+1}个钱包地址： ${walletNew.address}`)
    wallets.push(walletNew);
}
console.log(wallets)