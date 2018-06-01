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

var root = bip32.fromSeed(Buffer.from('dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd', 'hex'), networks.flo.testnet);

// Flo Coin index = 216 (pending...)
// Account #1 because Publishers use Account #1
var child = root.derivePath("m/44'/216'/1'/0");

var xPubKey = child.neutered().toBase58();

console.log(xPubKey);