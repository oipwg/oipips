# OIPIP-0003 : Payment Address Derivation using BIP-44 xPubKeys

```
Number:  OIPIP-0003
Title:   Payment Address Derivation using BIP-44 xPubKeys
Type:    Standards
Status:  Draft
Authors: Sky Young <sky@alexandria.io>
Created: 2018-05-31
```

## Abstract

By adding [BIP-44](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki) Extended Public Keys for each coin to the Publisher object, and indexes to Artifacts, we can derive individual addresses for tips and individual files. This allows for much better tracking of Artifact payments, without forcing extra data to be published for individual addresses for each coin under each Artifact File.

## Motivation

In order to track individual file performance and tips using the old payment addresses, a sample artifact might look like this:

```javascript
{
    ...,
    payment: {
        ...,
        addresses: {
            btc: "172vsNxg8jqu5MTw4bj6N53eyjEbUu83t2",
            ltc: "LLMRAtr3qBje2ySEa3CnZ55LA4TQMWnRY3",
            flo: "FQ5VFz73Ncw9chozAApnhppCpKhhYMX9vP"
        }
    },
    storage: {
        files: [{
            ...,
            payment: {
                addresses: {
                    btc: "19HuaNprtc8MpG6bmiPoZigjaEu9xccxps",
                    ltc: "LbpjYYPwYBjoPQ44PrNZr7nTq7HkYgcoXN",
                    flo: "F6esyn5opgUDcEdJpujxS9WLfu8Zj9XUZQ"
                }
            }
        },{
            ...,
            payment: {
                addresses: {
                    btc: "1NxaBCFQwejSZbQfWcYNwgqML5wWoE3rK4",
                    ltc: "LPVPJuwctf3PNjpzt2G48rCFqvYwstXJ3z",
                    flo: "FCjgQ2N5oiptKEXMGT1xMMteG7X2kyRDgq"
                }
            }
        }]
    }
}
```

Using this new method to derive addresses, we can cut down the data required down from `~140` characters for each file to only `~12` characters. This is a savings of over `90%` and thus there was plenty of motivation to proceed. Under this proposal the data above would look like this:

```javascript
{
    ...,
    payment: {
        ...,
        bip44i: 1
    },
    storage: {
        files: [{
            ...,
            bip44i: 2
        },{
            ...,
            bip44i: 3
        }]
    }
}
```

## Specification

#### Adding BIP-44 Extended Public Keys to the Publisher Object

To support this new method of deriving addresses, we add extended public keys for each coin to the Publisher object under `bip44`. A Publisher that supports OIPIP-0003 would look like this:

```javascript
{
    alias: "Demo Publisher",
    floAddress: "FSwBnXTf2ygwDDTwArJBqKCoeRCuPAaxjf",
    timestamp: 1234567890,
    info: {
        ...
    },
    verification: {
        ...    
    },
    payment: {
        bip44: {
            btc: "xpub6CcVgN3WrfQEdWyFJNy1VAsc9qVsGmYC2PfbRS4KNo7DGoYj6stQpriKyN5spPbDUYUnAdyTk4SdiCJn7ZB8UZ7UcRPtmRU3Q9cndmBhRjT",
            ltc: "Ltub2YHY9o7PuL73T1Yg3WsVrNe1QSyvdQBUrQv9FCsxUmhQV7EpVyzHw19FhhC4y26xgm1SB6NUhmvn6ixpzyLqWuMHnXQq3zGFitFoAZfTn7z",
            flo: "Fpub1EJ8rsvUdWujAHK6s5bgr7QXWx3fZT9qF4br8a8joKzaxGQQYAZ8PPYXmursU1gzy395J97dKrWkjHkS1dTWXjBGstZLgBCRR1xKS8dtr8r"
        }
    }
}
```

To add a supported coin payment type, the Publisher only needs to publish an edit to add a single line. Payment to that coin is then supported across all Artifacts that the publisher recieves payment for.

The extended public keys should be derived by the path `m/44'/<coin>'/1'/0` . Account 1 is used for Publisher transactions (when publishing content), while Account 0 is used for User transactions (when consuming content). We use hardened derivation at this level to prevent the payment history of a user consuming content that is also a publisher being public.

##### Example Code

The following code is an example using `bip32` on how to generate an extended public key (full source can be found in [/oipip-0003/example1.js](https://github.com/oipwg/oipips/blob/master/oipip-0003/example1.js)).

```javascript
let bip32 = require('bip32');

var seed = Buffer.from('dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd', 'hex');
var root = bip32.fromSeed(seed, networks.flo.livenet);

// Flo SLIP-0044 index = 216 (pending...)
// Account #1 because Publishers use Account #1
var child = root.derivePath("m/44'/216'/1'/0");

var xPubKey = child.neutered().toBase58();
// Fpub1EJ8rsvUdWujAHK6s5bgr7QXWx3fZT9qF4br8a8joKzaxGQQYAZ8PPYXmursU1gzy395J97dKrWkjHkS1dTWXjBGstZLgBCRR1xKS8dtr8r
```

#### Adding the BIP-44 index to Artifacts

Now that we have the extended public key to derive from, we need to know what index number the address to be derived is located at. We do this by getting the next available address index and adding it on Artifact publish (or with an Edit if the Artifact was published before this proposal). This index number must be unique from any other index number already added to an Artifact, and must be less than `20` away from the last previously used index. We add one index to the Artifact payment section to support tracking of tips made to the Artifact, then add a single index for each of the files that need to support payment. If the last previously used index is `100` for example, the published Artifact would look like this:

```javascript
{
    ...,
    payment: {
        ...,
        bip44i: 101
    },
    storage: {
        files: [{
            // Paid File
            ...,
            bip44i: 102
        },{
            // Free File
            ...
        },{
            // Paid File
            ...,
            bip44i: 103
        }]
    }
}
```

#### Deriving Addresses on Payment

When a payment is to be made, the Wallet making the payment should derive the payment address from the extended public key of the Publisher along with the index for the specific file/payment action.

##### Example Code

The following code is an example using `bitcoinjs-lib` and `bip32` (full source can be found in [/oipip-0003/example2.js](https://github.com/oipwg/oipips/blob/master/oipip-0003/example2.js)).

```javascript
let bitcoin = require('bitcoinjs-lib');
let bip32 = require('bip32');

var xpub = "Fpub1EJ8rsvUdWujAHK6s5bgr7QXWx3fZT9qF4br8a8joKzaxGQQYAZ8PPYXmursU1gzy395J97dKrWkjHkS1dTWXjBGstZLgBCRR1xKS8dtr8r";
var node = bip32.fromBase58(xpub, networks.flo.livenet)

var index = 1;
var child = node.derive(index)

var publicAddress = bitcoin.address.toBase58Check(bitcoin.crypto.hash160(child.publicKey), networks.flo.livenet.pubKeyHash)
// FURkPkBmdFAB9TZeoxYGWko62kTFLZgc5w
```

## References

BIP-32: https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki

BIP-44: https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki

SLIP-0044: https://github.com/satoshilabs/slips/blob/master/slip-0044.md
