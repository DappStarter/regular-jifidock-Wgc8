require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clinic tail sugar blame birth predict coast harvest casino sugar student'; 
let testAccounts = [
"0xfcf663a6d9581f7e3dc4c76403f0ad4aa17834e1639fe529ce82524abf0600de",
"0xbb82fc9568a470748960b293bcb35ea142207cd5a54394ea941f94c117cfba1b",
"0xbf122054cd3fe9e21aacbc3f06a346c146d6140c303f417b4f43147d22dca02b",
"0xed32a2106cf6db66c5b4d39fd558f25e96b8b16a9cda14930fd9a2315388e762",
"0xf38d50d4c56f1cfc9834d3ff75b319cf62efd578789fab5d65901bcdf6a08fee",
"0x12cfc156ccad50679625b972234f9c83cc3c951505df2a3e91123344e802d125",
"0x4569a493eabd216ed4849d8c6a96a9e1133b33680c831d88a5bc45f5956a41c7",
"0xe8ba1f4d4976c3f2dccc404f30adec7fdc5f39ef2a582829da5b1485535c8b94",
"0x411ffdd470d677b9356e20b5ba9929c2db86a2ecf24bee557081142a10404973",
"0xbc2f280c4faeed7de6cac5a9e28a4dd90fe6528266c4d917b28e26ed3fc3a5bc"
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


