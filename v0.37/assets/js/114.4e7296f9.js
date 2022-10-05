(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{743:function(e,t,a){"use strict";a.r(t);var c=a(1),l=Object(c.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"adr-043-blockhchain-reactor-riri-org"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adr-043-blockhchain-reactor-riri-org"}},[e._v("#")]),e._v(" ADR 043: Blockhchain Reactor Riri-Org")]),e._v(" "),a("h2",{attrs:{id:"changelog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),a("ul",[a("li",[e._v("18-06-2019: Initial draft")]),e._v(" "),a("li",[e._v("08-07-2019: Reviewed")]),e._v(" "),a("li",[e._v("29-11-2019: Implemented")]),e._v(" "),a("li",[e._v("14-02-2020: Updated with the implementation details")])]),e._v(" "),a("h2",{attrs:{id:"context"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),a("p",[e._v("The blockchain reactor is responsible for two high level processes:sending/receiving blocks from peers and FastSync-ing blocks to catch upnode who is far behind. The goal of "),a("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/v0.37.x/docs/architecture/adr-040-blockchain-reactor-refactor.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("ADR-40"),a("OutboundLink")],1),e._v(" was to refactor these two processes by separating business logic currently wrapped up in go-channels into pure "),a("code",[e._v("handle*")]),e._v(" functions. While the ADR specified what the final form of the reactor might look like it lacked guidance on intermediary steps to get there.\nThe following diagram illustrates the state of the "),a("a",{attrs:{href:"https://github.com/tendermint/tendermint/pull/3561",target:"_blank",rel:"noopener noreferrer"}},[e._v("blockchain-reorg"),a("OutboundLink")],1),e._v(" reactor which will be referred to as "),a("code",[e._v("v1")]),e._v(".")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/tendermint/tendermint/blob/f9e556481654a24aeb689bdadaf5eab3ccd66829/docs/architecture/img/blockchain-reactor-v1.png",alt:"v1 Blockchain Reactor ArchitectureDiagram"}})]),e._v(" "),a("p",[e._v("While "),a("code",[e._v("v1")]),e._v(" of the blockchain reactor has shown significant improvements in terms of simplifying the concurrency model, the current PR has run into few roadblocks.")]),e._v(" "),a("ul",[a("li",[e._v("The current PR large and difficult to review.")]),e._v(" "),a("li",[e._v("Block gossiping and fast sync processes are highly coupled to the shared "),a("code",[e._v("Pool")]),e._v(" data structure.")]),e._v(" "),a("li",[e._v("Peer communication is spread over multiple components creating complex dependency graph which must be mocked out during testing.")]),e._v(" "),a("li",[e._v("Timeouts modeled as stateful tickers introduce non-determinism in tests")])]),e._v(" "),a("p",[e._v("This ADR is meant to specify the missing components and control necessary to achieve "),a("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/v0.37.x/docs/architecture/adr-040-blockchain-reactor-refactor.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("ADR-40"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"decision"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),a("p",[e._v("Partition the responsibilities of the blockchain reactor into a set of components which communicate exclusively with events. Events will contain timestamps allowing each component to track time as internal state. The internal state will be mutated by a set of "),a("code",[e._v("handle*")]),e._v(" which will produce event(s). The integration between components will happen in the reactor and reactor tests will then become integration tests between components. This design will be known as "),a("code",[e._v("v2")]),e._v(".")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/tendermint/tendermint/blob/584e67ac3fac220c5c3e0652e3582eca8231e814/docs/architecture/img/blockchain-reactor-v2.png",alt:"v2 Blockchain Reactor ArchitectureDiagram"}})]),e._v(" "),a("h3",{attrs:{id:"fast-sync-related-communication-channels"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fast-sync-related-communication-channels"}},[e._v("#")]),e._v(" Fast Sync Related Communication Channels")]),e._v(" "),a("p",[e._v("The diagram below shows the fast sync routines and the types of channels and queues used to communicate with each other.\nIn addition the per reactor channels used by the sendRoutine to send messages over the Peer MConnection are shown.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/tendermint/tendermint/blob/5cf570690f989646fb3b615b734da503f038891f/docs/architecture/img/blockchain-v2-channels.png",alt:"v2 Blockchain Channels and QueuesDiagram"}})]),e._v(" "),a("h3",{attrs:{id:"reactor-changes-in-detail"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reactor-changes-in-detail"}},[e._v("#")]),e._v(" Reactor changes in detail")]),e._v(" "),a("p",[e._v("The reactor will include a demultiplexing routine which will send each message to each sub routine for independent processing. Each sub routine will then select the messages it's interested in and call the handle specific function specified in "),a("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/v0.37.x/docs/architecture/adr-040-blockchain-reactor-refactor.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("ADR-40"),a("OutboundLink")],1),e._v('. The demuxRoutine acts as "pacemaker" setting the time in which events are expected to be handled.')]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBkZW11eFJvdXRpbmUobXNncywgc2NoZWR1bGVNc2dzLCBwcm9jZXNzb3JNc2dzLCBpb01zZ3MpIHsKCXRpbWVyIDo9IHRpbWUuTmV3VGlja2VyKGludGVydmFsKQoJZm9yIHsKCQlzZWxlY3QgewoJCQljYXNlICZsdDstdGltZXIuQzoKCQkJCW5vdyA6PSBldlRpbWVDaGVja3t0aW1lLk5vdygpfQoJCQkJc2NoZWR1bGVyTXNncyAmbHQ7LSBub3cKCQkJCXByb2Nlc3Nvck1zZ3MgJmx0Oy0gbm93CgkJCQlpb01zZ3MgJmx0Oy0gbm93CgkJCWNhc2UgbXNnOj0gJmx0Oy0gbXNnczoKCQkJCW1zZy50aW1lID0gdGltZS5Ob3coKQoJCQkJLy8gVGhlc2UgY2hhbm5lbHMgc2hvdWxkIHByb2R1Y2UgYmFja3ByZXNzdXJlIGJlZm9yZQoJCQkJLy8gYmVpbmcgZnVsbCB0byBhdm9pZCBzdGFydmluZyBlYWNoIG90aGVyCgkJCQlzY2hlZHVsZXJNc2dzICZsdDstIG1zZwoJCQkJcHJvY2Vzc29yTXNncyAmbHQ7LSBtc2cKCQkJCWlvTWVzZ3MgJmx0Oy0gbXNnCgkJCQlpZiBtc2cgPT0gc3RvcCB7CgkJCQkJYnJlYWs7CgkJCQl9CgkJfQoJfQp9CgpmdW5jIHByb2Nlc3NSb3V0aW5lKGlucHV0IGNoYW4gTWVzc2FnZSwgb3V0cHV0IGNoYW4gTWVzc2FnZSkgewoJcHJvY2Vzc29yIDo9IE5ld1Byb2Nlc3NvciguLikKCWZvciB7CgkJbXNnIDo9ICZsdDstIGlucHV0CgkJc3dpdGNoIG1zZyA6PSBtc2cuKHR5cGUpIHsKCQkJY2FzZSBiY0Jsb2NrUmVxdWVzdE1lc3NhZ2U6CgkJCQlvdXRwdXQgJmx0Oy0gcHJvY2Vzc29yLmhhbmRsZUJsb2NrUmVxdWVzdChtc2cpKQoJCQkuLi4KCQkJY2FzZSBzdG9wOgoJCQkJcHJvY2Vzc29yLnN0b3AoKQoJCQkJYnJlYWs7Cgl9Cn0KCmZ1bmMgc2NoZWR1bGVSb3V0aW5lKGlucHV0IGNoYW4gTWVzc2FnZSwgb3V0cHV0IGNoYW4gTWVzc2FnZSkgewoJc2NoZWxkdWVyID0gTmV3U2NoZWR1bGVyKC4uLikKCWZvciB7CgkJbXNnIDo9ICZsdDstbXNncwoJCXN3aXRjaCBtc2cgOj0gaW5wdXQuKHR5cGUpIHsKCQkJY2FzZSBiY0Jsb2NrUmVzcG9uc2VNZXNzYWdlOgoJCQkJb3V0cHV0ICZsdDstIHNjaGVkdWxlci5oYW5kbGVCbG9ja1Jlc3BvbnNlKG1zZykKCQkJLi4uCgkJCWNhc2Ugc3RvcDoKCQkJCXNjaGVkdWxlLnN0b3AoKQoJCQkJYnJlYWs7CgkJfQoJfQp9Cg=="}}),e._v(" "),a("h2",{attrs:{id:"lifecycle-management"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lifecycle-management"}},[e._v("#")]),e._v(" Lifecycle management")]),e._v(" "),a("p",[e._v("A set of routines for individual processes allow processes to run in parallel with clear lifecycle management. "),a("code",[e._v("Start")]),e._v(", "),a("code",[e._v("Stop")]),e._v(", and "),a("code",[e._v("AddPeer")]),e._v(" hooks currently present in the reactor will delegate to the sub-routines allowing them to manage internal state independent without further coupling to the reactor.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAociAqQmxvY2tDaGFpblJlYWN0b3IpIFN0YXJ0KCkgewoJci5tc2dzIDo9IG1ha2UoY2hhbiBNZXNzYWdlLCBtYXhJbkZsaWdodCkKCXNjaGVkdWxlck1zZ3MgOj0gbWFrZShjaGFuIE1lc3NhZ2UpCglwcm9jZXNzb3JNc2dzIDo9IG1ha2UoY2hhbiBNZXNzYWdlKQoJaW9Nc2dzIDo9IG1ha2UoY2hhbiBNZXNzYWdlKQoKCWdvIHByb2Nlc3NvclJvdXRpbmUocHJvY2Vzc29yTXNncywgci5tc2dzKQoJZ28gc2NoZWR1bGVSb3V0aW5lKHNjaGVkdWxlck1zZ3MsIHIubXNncykKCWdvIGlvUm91dGluZShpb01zZ3MsIHIubXNncykKCS4uLgp9CgpmdW5jIChiY1IgKkJsb2NrY2hhaW5SZWFjdG9yKSBSZWNlaXZlKC4uLikgewoJLi4uCglyLm1zZ3MgJmx0Oy0gbXNnCgkuLi4KfQoKZnVuYyAociAqQmxvY2tjaGFpblJlYWN0b3IpIFN0b3AoKSB7CgkuLi4KCXIubXNncyAmbHQ7LSBzdG9wCgkuLi4KfQoKLi4uCmZ1bmMgKHIgKkJsb2NrY2hhaW5SZWFjdG9yKSBTdG9wKCkgewoJLi4uCglyLm1zZ3MgJmx0Oy0gc3RvcAoJLi4uCn0KLi4uCgpmdW5jIChyICpCbG9ja2NoYWluUmVhY3RvcikgQWRkUGVlcihwZWVyIHAycC5QZWVyKSB7CgkuLi4KCXIubXNncyAmbHQ7LSBiY0FkZFBlZXJFdntwZWVyLklEfQoJLi4uCn0KCg=="}}),e._v(" "),a("h2",{attrs:{id:"io-handling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#io-handling"}},[e._v("#")]),e._v(" IO handling")]),e._v(" "),a("p",[e._v("An io handling routine within the reactor will isolate peer communication. Message going through the ioRoutine will usually be one way, using "),a("code",[e._v("p2p")]),e._v(" APIs. In the case in which the "),a("code",[e._v("p2p")]),e._v(" API such as "),a("code",[e._v("trySend")]),e._v(" return errors, the ioRoutine can funnel those message back to the demuxRoutine for distribution to the other routines. For instance errors from the ioRoutine can be consumed by the scheduler to inform better peer selection implementations.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAociAqQmxvY2tjaGFpblJlYWNvcikgaW9Sb3V0aW5lKGlvTWVzZ3MgY2hhbiBNZXNzYWdlLCBvdXRNc2dzIGNoYW4gTWVzc2FnZSkgewoJLi4uCglmb3IgewoJCW1zZyA6PSAmbHQ7LWlvTXNncwoJCXN3aXRjaCBtc2cgOj0gbXNnLih0eXBlKSB7CgkJCWNhc2Ugc2NCbG9ja1JlcXVlc3RNZXNzYWdlOgoJCQkJcXVldWVkIDo9IHIuc2VuZEJsb2NrUmVxdWVzdFRvUGVlciguLi4pCgkJCQlpZiBxdWV1ZWQgewoJCQkJCW91dE1zZ3MgJmx0Oy0gaW9TZW5kUXVldWVkey4uLn0KCQkJCX0KCQkJY2FzZSBzY1N0YXR1c1JlcXVlc3RNZXNzYWdlCgkJCQlyLnNlbmRTdGF0dXNSZXF1ZXN0VG9QZWVyKC4uLikKCQkJY2FzZSBiY1BlZXJFcnJvcgoJCQkJci5Td3RpY2guU3RvcFBlZXJGb3JFcnJvcihtc2cuc3JjKQoJCQkJLi4uCgkJCS4uLgoJCQljYXNlIGJjRmluaXNoZWQKCQkJCWJyZWFrOwoJCX0KCX0KfQoK"}}),e._v(" "),a("h3",{attrs:{id:"processor-internals"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#processor-internals"}},[e._v("#")]),e._v(" Processor Internals")]),e._v(" "),a("p",[e._v("The processor is responsible for ordering, verifying and executing blocks. The Processor will maintain an internal cursor "),a("code",[e._v("height")]),e._v(" refering to the last processed block. As a set of blocks arrive unordered, the Processor will check if it has "),a("code",[e._v("height+1")]),e._v(" necessary to process the next block. The processor also maintains the map "),a("code",[e._v("blockPeers")]),e._v(" of peers to height, to keep track of which peer provided the block at "),a("code",[e._v("height")]),e._v(". "),a("code",[e._v("blockPeers")]),e._v(" can be used in"),a("code",[e._v("handleRemovePeer(...)")]),e._v(" to reschedule all unprocessed blocks provided by a peer who has errored.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBQcm9jZXNzb3Igc3RydWN0IHsKCWhlaWdodCBpbnQ2NCAvLyB0aGUgaGVpZ2h0IGN1cnNvcgoJc3RhdGUgLi4uCglibG9ja3MgW2hlaWdodF0qQmxvY2sJIC8vIGtlZXAgYSBzZXQgb2YgYmxvY2tzIGluIG1lbW9yeSB1bnRpbCB0aGV5IGFyZSBwcm9jZXNzZWQKCWJsb2NrUGVlcnMgW2hlaWdodF1QZWVySUQgLy8ga2VlcCB0cmFjayBvZiB3aGljaCBoZWlnaHRzIGNhbWUgZnJvbSB3aGljaCBwZWVySUQKCWxhc3RUb3VjaCB0aW1lc3RhbXAKfQoKZnVuYyAocHJvYyAqUHJvY2Vzc29yKSBoYW5kbGVCbG9ja1Jlc3BvbnNlKHBlZXJJRCwgYmxvY2spIHsKICAgIGlmIGJsb2NrLmhlaWdodCAmbHQ7PSBoZWlnaHQgfHwgYmxvY2tbYmxvY2suaGVpZ2h0XSB7Cgl9IGVsc2UgaWYgYmxvY2tzW2Jsb2NrLmhlaWdodF0gewoJCXJldHVybiBlcnJEdXBsaWNhdGVCbG9ja3t9Cgl9IGVsc2UgIHsKCQlibG9ja3NbYmxvY2suaGVpZ2h0XSA9IGJsb2NrCgl9CgoJaWYgYmxvY2tzW2hlaWdodF0gJmFtcDsmYW1wOyBibG9ja3NbaGVpZ2h0KzFdIHsKCQkuLi4gPSBzdGF0ZS5WYWxpZGF0b3JzLlZlcmlmeUNvbW1pdCguLi4pCgkJLi4uID0gc3RvcmUuU2F2ZUJsb2NrKC4uLikKCQlzdGF0ZSwgZXJyID0gYmxvY2tFeGVjLkFwcGx5QmxvY2soLi4uKQoJCS4uLgoJCWlmIGVyciA9PSBuaWwgewoJCQlkZWxldGUgYmxvY2tzW2hlaWdodF0KCQkJaGVpZ2h0KysKCQkJbGFzdFRvdWNoID0gbXNnLnRpbWUKCQkJcmV0dXJuIHBjQmxvY2tQcm9jZXNzZWR7aGVpZ2h0LTF9CgkJfSBlbHNlIHsKCQkJLi4uIC8vIERlbGV0ZSBhbGwgdW5wcm9jZXNzZWQgYmxvY2sgZnJvbSB0aGUgcGVlcgoJCQlyZXR1cm4gcGNCbG9ja1Byb2Nlc3NFcnJvcntwZWVySUQsIGhlaWdodH0KCQl9Cgl9Cn0KCmZ1bmMgKHByb2MgKlByb2Nlc3NvcikgaGFuZGxlUmVtb3ZlUGVlcihwZWVySUQpIHsKCWV2ZW50cyA9IFtdCgkvLyBEZWxldGUgYWxsIHVucHJvY2Vzc2VkIGJsb2NrcyBmcm9tIHBlZXJJRAoJZm9yIGkgPSBoZWlnaHQ7IGkgJmx0OyBsZW4oYmxvY2tzKTsgaSsrIHsKCQlpZiBibG9ja1BlZXJzW2ldID09IHBlZXJJRCB7CgkJCWV2ZW50cyA9IGFwcGVuZChldmVudHMsIHBjQmxvY2tSZXNjaGVkdWxle2hlaWdodH0pCgoJCQlkZWxldGUgYmxvY2tbaGVpZ2h0XQoJCX0KCX0KCXJldHVybiBldmVudHMKfQoKZnVuYyBoYW5kbGVUaW1lQ2hlY2tFdih0aW1lKSB7CglpZiB0aW1lIC0gbGFzdFRvdWNoICZndDsgdGltZW91dCB7CgkJLy8gVGltZW91dCB0aGUgcHJvY2Vzc29yCgkJLi4uCgl9Cn0K"}}),e._v(" "),a("h2",{attrs:{id:"schedule"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#schedule"}},[e._v("#")]),e._v(" Schedule")]),e._v(" "),a("p",[e._v("The Schedule maintains the internal state used for scheduling blockRequestMessages based on some scheduling algorithm. The schedule needs to maintain state on:")]),e._v(" "),a("ul",[a("li",[e._v("The state "),a("code",[e._v("blockState")]),e._v(" of every block seem up to height of maxHeight")]),e._v(" "),a("li",[e._v("The set of peers and their peer state "),a("code",[e._v("peerState")])]),e._v(" "),a("li",[e._v("which peers have which blocks")]),e._v(" "),a("li",[e._v("which blocks have been requested from which peers")])]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBibG9ja1N0YXRlIGludAoKY29uc3QgKAoJYmxvY2tTdGF0ZU5ldyA9IGlvdGEKCWJsb2NrU3RhdGVQZW5kaW5nLAoJYmxvY2tTdGF0ZVJlY2VpdmVkLAoJYmxvY2tTdGF0ZVByb2Nlc3NlZAopCgp0eXBlIHNjaGVkdWxlIHsKICAgIC8vIGEgbGlzdCBvZiBibG9ja3MgaW4gd2hpY2ggYmxvY2tTdGF0ZQoJYmxvY2tTdGF0ZXMgICAgICAgIG1hcFtoZWlnaHRdYmxvY2tTdGF0ZQoKICAgIC8vIGEgbWFwIG9mIHdoaWNoIGJsb2NrcyBhcmUgYXZhaWxhYmxlIGZyb20gd2hpY2ggcGVlcnMKCWJsb2NrUGVlcnMgICAgICAgICBtYXBbaGVpZ2h0XW1hcFtwMnAuSURdc2NQZWVyCgogICAgLy8gYSBtYXAgb2YgcGVlcklEIHRvIHNjaGVkdWxlIHNwZWNpZmljIHBlZXIgc3RydWN0IGBzY1BlZXJgCglwZWVycyAgICAgICAgICAgICAgbWFwW3AycC5JRF1zY1BlZXIKCiAgICAvLyBhIG1hcCBvZiBoZWlnaHRzIHRvIHRoZSBwZWVyIHdlIGFyZSB3YWl0aW5nIGZvciBhIHJlc3BvbnNlIGZyb20KCXBlbmRpbmcgbWFwW2hlaWdodF1zY1BlZXIKCgl0YXJnZXRQZW5kaW5nICBpbnQgLy8gdGhlIG51bWJlciBvZiBibG9ja3Mgd2Ugd2FudCBpbiBibG9ja1N0YXRlUGVuZGluZwoJdGFyZ2V0UmVjZWl2ZWQgaW50IC8vIHRoZSBudW1iZXIgb2YgYmxvY2tzIHdlIHdhbnQgaW4gYmxvY2tTdGF0ZVJlY2VpdmVkCgoJcGVlclRpbWVvdXQgICAgICAgIGludAoJcGVlck1pblNwZWVkICAgICAgIGludAp9CgpmdW5jIChzYyAqc2NoZWR1bGUpIG51bUJsb2NrSW5TdGF0ZShzdGF0ZSBibG9ja1N0YXRlKSB1aW50MzIgewoJbnVtIDo9IDAKCWZvciBpIDo9IHNjLm1pbkhlaWdodCgpOyBpICZsdDs9IHNjLm1heEhlaWdodCgpOyBpKysgewoJCWlmIHNjLmJsb2NrU3RhdGVbaV0gPT0gc3RhdGUgewoJCQludW0rKwoJCX0KCX0KCXJldHVybiBudW0KfQoKCmZ1bmMgKHNjICpzY2hlZHVsZSkgcG9wU2NoZWR1bGUobWF4UmVxdWVzdCBpbnQpIFtdc2NCbG9ja1JlcXVlc3RNZXNzYWdlIHsKCS8vIFdlIG9ubHkgd2FudCB0byBzY2hlZHVsZSByZXF1ZXN0cyBzdWNoIHRoYXQgd2UgaGF2ZSBsZXNzIHRoYW4gc2MudGFyZ2V0UGVuZGluZyBhbmQgc2MudGFyZ2V0UmVjZWl2ZWQKCS8vIFRoaXMgZW5zdXJlcyB3ZSBkb24ndCBzYXR1cmF0ZSB0aGUgbmV0d29yayBvciBmbG9vZCB0aGUgcHJvY2Vzc29yIHdpdGggdW5wcm9jZXNzZWQgYmxvY2tzCgl0b2RvIDo9IG1pbihzYy50YXJnZXRQZW5kaW5nIC0gc2MubnVtQmxvY2tJblN0YXRlKGJsb2NrU3RhdGVQZW5kaW5nKSwgc2MubnVtQmxvY2tJblN0YXRlKGJsb2NrU3RhdGVSZWNlaXZlZCkpCglldmVudHMgOj0gW11zY0Jsb2NrUmVxdWVzdE1lc3NhZ2V7fQoJZm9yIGkgOj0gc2MubWluSGVpZ2h0KCk7IGkgJmx0OyBzYy5tYXhNYXhIZWlnaHQoKTsgaSsrIHsKCQlpZiB0b2RvID09IDAgewoJCQlicmVhawoJCX0KCQlpZiBibG9ja1N0YXRlc1tpXSA9PSBibG9ja1N0YXRlTmV3IHsKCQkJcGVlciA9IHNjLnNlbGVjdFBlZXIoYmxvY2tQZWVyc1tpXSkKCQkJc2MuYmxvY2tTdGF0ZXNbaV0gPSBibG9ja1N0YXRlUGVuZGluZwoJCQlzYy5wZW5kaW5nW2ldID0gcGVlcgoJCQlldmVudHMgPSBhcHBlbmQoZXZlbnRzLCBzY0Jsb2NrUmVxdWVzdE1lc3NhZ2V7cGVlcklEOiBwZWVyLnBlZXJJRCwgaGVpZ2h0OiBpfSkKCQkJdG9kby0tCgkJfQoJfQoJcmV0dXJuIGV2ZW50cwp9Ci4uLgoKdHlwZSBzY1BlZXIgc3RydWN0IHsKCXBlZXJJRCAgICAgICAgICAgICAgIHAycC5JRAoJbnVtT3VzdGFuZGluZ1JlcXVlc3QgaW50CglsYXN0VG91Y2hlZCAgICAgICAgICB0aW1lLlRpbWUKCW1vbml0b3IgICAgICAgICAgICAgIGZsb3cuTW9uaXRvcgp9Cgo="}}),e._v(" "),a("h1",{attrs:{id:"scheduler"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scheduler"}},[e._v("#")]),e._v(" Scheduler")]),e._v(" "),a("p",[e._v("The scheduler is configured to maintain a target "),a("code",[e._v("n")]),e._v(" of in flight\nmessages and will use feedback from "),a("code",[e._v("_blockResponseMessage")]),e._v(",\n"),a("code",[e._v("_statusResponseMessage")]),e._v(" and "),a("code",[e._v("_peerError")]),e._v(" produce an optimal assignment\nof scBlockRequestMessage at each "),a("code",[e._v("timeCheckEv")]),e._v(".")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"CmZ1bmMgaGFuZGxlU3RhdHVzUmVzcG9uc2UocGVlcklELCBoZWlnaHQsIHRpbWUpIHsKCXNjaGVkdWxlLnRvdWNoUGVlcihwZWVySUQsIHRpbWUpCglzY2hlZHVsZS5zZXRQZWVySGVpZ2h0KHBlZXJJRCwgaGVpZ2h0KQp9CgpmdW5jIGhhbmRsZUJsb2NrUmVzcG9uc2VNZXNzYWdlKHBlZXJJRCwgaGVpZ2h0LCBibG9jaywgdGltZSkgewoJc2NoZWR1bGUudG91Y2hQZWVyKHBlZXJJRCwgdGltZSkKCXNjaGVkdWxlLm1hcmtSZWNlaXZlZChwZWVySUQsIGhlaWdodCwgc2l6ZShibG9jaykpCn0KCmZ1bmMgaGFuZGxlTm9CbG9ja1Jlc3BvbnNlTWVzc2FnZShwZWVySUQsIGhlaWdodCwgdGltZSkgewoJc2NoZWR1bGUudG91Y2hQZWVyKHBlZXJJRCwgdGltZSkKCS8vIHJlc2NoZWR1bGUgdGhhdCBibG9jaywgcHVuaXNoIHBlZXIuLi4KICAgIC4uLgp9CgpmdW5jIGhhbmRsZVBlZXJFcnJvcihwZWVySUQpICB7CiAgICAvLyBSZW1vdmUgdGhlIHBlZXIsIHJlc2NoZWR1bGUgdGhlIHJlcXVlc3RzCiAgICAuLi4KfQoKZnVuYyBoYW5kbGVUaW1lQ2hlY2tFdih0aW1lKSB7CgkvLyBjbGVhbiBwZWVyIGxpc3QKCiAgICBldmVudHMgPSBbXQoJZm9yIHBlZXJJRCA6PSByYW5nZSBzY2hlZHVsZS5wZWVyc05vdFRvdWNoZWRTaW5jZSh0aW1lKSB7CgkJcGVuZGluZyA9IHNjaGVkdWxlLnBlbmRpbmdGcm9tKHBlZXJJRCkKCQlzY2hlZHVsZS5zZXRQZWVyU3RhdGUocGVlcklELCB0aW1lZG91dCkKCQlzY2hlZHVsZS5yZXNldEJsb2NrcyhwZW5kaW5nKQoJCWV2ZW50cyA9IGFwcGVuZChldmVudHMsIHBlZXJUaW1lb3V0e3BlZXJJRH0pCiAgICB9CgoJZXZlbnRzID0gYXBwZW5kKGV2ZW50cywgc2NoZWR1bGUucG9wU2NoZWR1bGUoKSkKCglyZXR1cm4gZXZlbnRzCn0K"}}),e._v(" "),a("h2",{attrs:{id:"peer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#peer"}},[e._v("#")]),e._v(" Peer")]),e._v(" "),a("p",[e._v("The Peer Stores per peer state based on messages received by the scheduler.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBQZWVyIHN0cnVjdCB7CglsYXN0VG91Y2hlZCB0aW1lc3RhbXAKCWxhc3REb3dubG9hZGVkIHRpbWVzdGFtcAoJcGVuZGluZyBtYXBbaGVpZ2h0XXN0cnVjdHt9CgloZWlnaHQgaGVpZ2h0IC8vIG1heCBoZWlnaHQgZm9yIHRoZSBwZWVyCglzdGF0ZSB7CgkJcGVuZGluZywgICAvLyB3ZSBrbm93IHRoZSBwZWVyIGJ1dCBub3QgdGhlIGhlaWdodAoJCWFjdGl2ZSwgICAgLy8gd2Uga25vdyB0aGUgaGVpZ2h0CgkJdGltZW91dCAgICAvLyB0aGUgcGVlciBoYXMgdGltZWQgb3V0Cgl9Cn0K"}}),e._v(" "),a("h2",{attrs:{id:"status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),a("p",[e._v("Implemented")]),e._v(" "),a("h2",{attrs:{id:"consequences"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),a("h3",{attrs:{id:"positive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),a("ul",[a("li",[e._v("Test become deterministic")]),e._v(" "),a("li",[e._v("Simulation becomes a-termporal: no need wait for a wall-time timeout")]),e._v(" "),a("li",[e._v("Peer Selection can be independently tested/simulated")]),e._v(" "),a("li",[e._v("Develop a general approach to refactoring reactors")])]),e._v(" "),a("h3",{attrs:{id:"negative"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),a("h3",{attrs:{id:"neutral"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),a("h3",{attrs:{id:"implementation-path"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation-path"}},[e._v("#")]),e._v(" Implementation Path")]),e._v(" "),a("ul",[a("li",[e._v("Implement the scheduler, test the scheduler, review the rescheduler")]),e._v(" "),a("li",[e._v("Implement the processor, test the processor, review the processor")]),e._v(" "),a("li",[e._v("Implement the demuxer, write integration test, review integration tests")])]),e._v(" "),a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/v0.37.x/docs/architecture/adr-040-blockchain-reactor-refactor.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("ADR-40"),a("OutboundLink")],1),e._v(": The original blockchain reactor re-org proposal")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/tendermint/tendermint/pull/3561",target:"_blank",rel:"noopener noreferrer"}},[e._v("Blockchain re-org"),a("OutboundLink")],1),e._v(": The current blockchain reactor re-org implementation (v1)")])])],1)}),[],!1,null,null,null);t.default=l.exports}}]);