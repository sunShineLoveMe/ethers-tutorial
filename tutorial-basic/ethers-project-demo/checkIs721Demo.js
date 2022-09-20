/**
 * 应用场景： 在做NFT产品的时候，需要帅选出符合erc721标准的合约，
 * 利用opensea，可以趴下他的名称和代号，metadata等数据
 * 
 * 本应用就是通过erc165接口标准，合约通过继承erc165接口，声明它支持的接口，供其他合约检查
 * 比如BAYC 就是典型的721合约，它通过构造器函数，实现erc165的接口函数。
 * 
 *  
     @dev Initializes the contract by setting a `name` and a `symbol` to the token collection.
     
     constructor (string memory name_, string memory symbol_) public {
        _name = name_;
        _symbol = symbol_;

        // register the supported interfaces to conform to ERC721 via ERC165
        _registerInterface(_INTERFACE_ID_ERC721);
        _registerInterface(_INTERFACE_ID_ERC721_METADATA);
        _registerInterface(_INTERFACE_ID_ERC721_ENUMERABLE);
    }
    其中_registerInterface函数中的三个常量分别是：
    bytes4 private constant _INTERFACE_ID_ERC721 = 0x80ac58cd;
    bytes4 private constant _INTERFACE_ID_ERC721_METADATA = 0x5b5e139f;
    bytes4 private constant _INTERFACE_ID_ERC721_ENUMERABLE = 0x780e9d63;

    至于结果为什么是byte4的数据类型，可以参考 函数选择器
 * 
 * 
 */

const ethers = require('ethers');

// 连接以太坊主网
const provider = new ethers.providers.JsonRpcProvider("https://eth-mainnet.g.alchemy.com/v2/Tv2cf0FJybz_wpB6Ae3Uj5Ce6A16IXOn")
// 合约abi
const abiERC721 = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function supportsInterface(bytes4) public view returns(bool)",
];
// ERC721的合约地址，这里用的BAYC
const addressBAYC = "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"
// 创建ERC721合约实例
const contractERC721 = new ethers.Contract(addressBAYC, abiERC721, provider)

const selectorERC721 = "0x80ac58cd"

const main = async () => {
    // 1. 读取ERC721合约的链上信息
    // const nameERC721 = await contractERC721.name()
    // const symbolERC721 = await contractERC721.symbol()
    // console.log("\n1. 读取ERC721合约信息")
    // console.log(`合约地址: ${addressBAYC}`)
    // console.log(`名称: ${nameERC721}`)
    // console.log(`代号: ${symbolERC721}`)
    // 2. 利用ERC165的supportsInterface，确定合约是否为ERC721标准
    const isERC721 = await contractERC721.supportsInterface(selectorERC721)
    console.log("\n2. 利用ERC165的supportsInterface，确定合约是否为ERC721标准")
    console.log(`合约是否为ERC721标准: ${isERC721}`)
}

main()