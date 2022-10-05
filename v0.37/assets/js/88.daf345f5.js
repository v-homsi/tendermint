(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{653:function(e,t,a){"use strict";a.r(t);var n=a(1),i=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"adr-013-need-for-symmetric-cryptography"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adr-013-need-for-symmetric-cryptography"}},[e._v("#")]),e._v(" ADR 013: Need for symmetric cryptography")]),e._v(" "),a("h2",{attrs:{id:"context"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),a("p",[e._v("We require symmetric ciphers to handle how we encrypt keys in the sdk,\nand to potentially encrypt "),a("code",[e._v("priv_validator.json")]),e._v(" in tendermint.")]),e._v(" "),a("p",[e._v("Currently we use AEAD's to support symmetric encryption,\nwhich is great since we want data integrity in addition to privacy and authenticity.\nWe don't currently have a scenario where we want to encrypt without data integrity,\nso it is fine to optimize our code to just use AEAD's.\nCurrently there is not a way to switch out AEAD's easily, this ADR outlines a way\nto easily swap these out.")]),e._v(" "),a("h3",{attrs:{id:"how-do-we-encrypt-with-aead-s"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-do-we-encrypt-with-aead-s"}},[e._v("#")]),e._v(" How do we encrypt with AEAD's")]),e._v(" "),a("p",[e._v("AEAD's typically require a nonce in addition to the key.\nFor the purposes we require symmetric cryptography for,\nwe need encryption to be stateless.\nBecause of this we use random nonces.\n(Thus the AEAD must support random nonces)")]),e._v(" "),a("p",[e._v("We currently construct a random nonce, and encrypt the data with it.\nThe returned value is "),a("code",[e._v("nonce || encrypted data")]),e._v(".\nThe limitation of this is that does not provide a way to identify\nwhich algorithm was used in encryption.\nConsequently decryption with multiple algoritms is sub-optimal.\n(You have to try them all)")]),e._v(" "),a("h2",{attrs:{id:"decision"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),a("p",[e._v("We should create the following two methods in a new "),a("code",[e._v("crypto/encoding/symmetric")]),e._v(" package:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"golang",base64:"ZnVuYyBFbmNyeXB0KGFlYWQgY2lwaGVyLkFFQUQsIHBsYWludGV4dCBbXWJ5dGUpIChjaXBoZXJ0ZXh0IFtdYnl0ZSwgZXJyIGVycm9yKQpmdW5jIERlY3J5cHQoa2V5IFtdYnl0ZSwgY2lwaGVydGV4dCBbXWJ5dGUpIChwbGFpbnRleHQgW11ieXRlLCBlcnIgZXJyb3IpCmZ1bmMgUmVnaXN0ZXIoYWVhZCBjaXBoZXIuQUVBRCwgYWxnb19uYW1lIHN0cmluZywgTmV3QWVhZCBmdW5jKGtleSBbXWJ5dGUpIChjaXBoZXIuQWVhZCwgZXJyb3IpKSBlcnJvcgo="}}),e._v(" "),a("p",[e._v("This allows you to specify the algorithm in encryption, but not have to specify\nit in decryption.\nThis is intended for ease of use in downstream applications, in addition to people\nlooking at the file directly.\nOne downside is that for the encrypt function you must have already initialized an AEAD,\nbut I don't really see this as an issue.")]),e._v(" "),a("p",[e._v("If there is no error in encryption, Encrypt will return "),a("code",[e._v("algo_name || nonce || aead_ciphertext")]),e._v(".\n"),a("code",[e._v("algo_name")]),e._v(" should be length prefixed, using standard varuint encoding.\nThis will be binary data, but thats not a problem considering the nonce and ciphertext are also binary.")]),e._v(" "),a("p",[e._v("This solution requires a mapping from aead type to name.\nWe can achieve this via reflection.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"golang",base64:"ZnVuYyBnZXRUeXBlKG15dmFyIGludGVyZmFjZXt9KSBzdHJpbmcgewogICAgaWYgdCA6PSByZWZsZWN0LlR5cGVPZihteXZhcik7IHQuS2luZCgpID09IHJlZmxlY3QuUHRyIHsKICAgICAgICByZXR1cm4gJnF1b3Q7KiZxdW90OyArIHQuRWxlbSgpLk5hbWUoKQogICAgfSBlbHNlIHsKICAgICAgICByZXR1cm4gdC5OYW1lKCkKICAgIH0KfQo="}}),e._v(" "),a("p",[e._v("Then we maintain a map from the name returned from "),a("code",[e._v("getType(aead)")]),e._v(" to "),a("code",[e._v("algo_name")]),e._v(".")]),e._v(" "),a("p",[e._v("In decryption, we read the "),a("code",[e._v("algo_name")]),e._v(", and then instantiate a new AEAD with the key.\nThen we call the AEAD's decrypt method on the provided nonce/ciphertext.")]),e._v(" "),a("p",[a("code",[e._v("Register")]),e._v(" allows a downstream user to add their own desired AEAD to the symmetric package.\nIt will error if the AEAD name is already registered.\nThis prevents a malicious import from modifying / nullifying an AEAD at runtime.")]),e._v(" "),a("h2",{attrs:{id:"implementation-strategy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation-strategy"}},[e._v("#")]),e._v(" Implementation strategy")]),e._v(" "),a("p",[e._v("The golang implementation of what is proposed is rather straight forward.\nThe concern is that we will break existing private keys if we just switch to this.\nIf this is concerning, we can make a simple script which doesn't require decoding privkeys,\nfor converting from the old format to the new one.")]),e._v(" "),a("h2",{attrs:{id:"status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),a("p",[e._v("Proposed.")]),e._v(" "),a("h2",{attrs:{id:"consequences"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),a("h3",{attrs:{id:"positive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),a("ul",[a("li",[e._v("Allows us to support new AEAD's, in a way that makes decryption easier")]),e._v(" "),a("li",[e._v("Allows downstream users to add their own AEAD")])]),e._v(" "),a("h3",{attrs:{id:"negative"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),a("ul",[a("li",[e._v("We will have to break all private keys stored on disk.\nThey can be recovered using seed words, and upgrade scripts are simple.")])]),e._v(" "),a("h3",{attrs:{id:"neutral"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),a("ul",[a("li",[e._v("Caller has to instantiate the AEAD with the private key.\nHowever it forces them to be aware of what signing algorithm they are using, which is a positive.")])])],1)}),[],!1,null,null,null);t.default=i.exports}}]);