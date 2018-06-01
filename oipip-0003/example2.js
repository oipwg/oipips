let bitcoin = require('bitcoinjs-lib');
let bip32 = require('bip32');

const networks = {
	flo: {
		livenet: {
			bip32: {
				public: 0x0134406b,
				private: 0x01343c31
			},
			messagePrefix: '\x1bFlorincoin Signed Message:\n',
			pubKeyHash: 35,
			scriptHash: 94,
			wif: 163
		},
		testnet: {
			bip32: {
				public: 0x013440e2,
				private: 0x01343c23
			},
			messagePrefix: '\x1bFlorincoin Signed Message:\n',
			pubKeyHash: 115,
			scriptHash: 58,
			wif: 239
		}
	}
}

var xpub = "Fput3Ymftc99Zn3C98peUDAXWMJhZHyWZzfR2ezMrEQXFfckDBRSVjkQg5DLUKsJHYEcASQh6P2hwajx5AKa7aZYXF8SPqAP5ZNK9HTv26brTQ5";
var node = bip32.fromBase58(xpub, networks.flo.testnet)

var index = 1;
var child = node.derive(index)

var publicAddress = bitcoin.address.toBase58Check(bitcoin.crypto.hash160(child.publicKey), networks.flo.testnet.pubKeyHash)

console.log(publicAddress);