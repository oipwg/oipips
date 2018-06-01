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

var xpub = "Fpub1EJ8rsvUdWujAHK6s5bgr7QXWx3fZT9qF4br8a8joKzaxGQQYAZ8PPYXmursU1gzy395J97dKrWkjHkS1dTWXjBGstZLgBCRR1xKS8dtr8r";
var node = bip32.fromBase58(xpub, networks.flo.livenet)

var index = 1;
var child = node.derive(index)

var publicAddress = bitcoin.address.toBase58Check(bitcoin.crypto.hash160(child.publicKey), networks.flo.livenet.pubKeyHash)

console.log(publicAddress);