require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process olympic ten fire note rural uncover good only swift similar'; 
let testAccounts = [
"0x0f65b6955cd82ceacd0cfcb851ac18a10af71086ee5df0e1c3301c8efa4448a5",
"0x7c36c1036075d2f6bb886e8cc934451116cccd085dbd8aad572ccefb0f5a830e",
"0x381f4ba8c442995f1552f72449b0019d506478ade33cb4ebb3361c3d0ad56671",
"0xbede107daff9533ae00fd53f34935c0819c80fd4eac24fa2246605184056d5c4",
"0xc4351969e01801885af6abe1ac5a34fe99f4f77ad914db14cef1232b7622a367",
"0xd03cabf0e74a39bdce42d36282d1a7a965d2c1aef701dc357e74b825bba670d2",
"0x137195c22b587b42998bb08b2463819009cff0cad8cc60e8ec2c3b6b71d260fa",
"0x6a02fa93d7ce9d248ecb1d98bd8632b88453c8a6d3640dc48f69c9a116768342",
"0xfcd4ec0aa50aabef6da3f5e33343d91a20501a45a7ed80d23e95740ecff0cb2d",
"0x10178eac82d6b47f141d4145bf62a4572ac6d20e13e02d5c1baba64f8f2029aa"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


