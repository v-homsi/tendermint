(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{746:function(I,y,b){"use strict";b.r(y);var g=b(1),c=Object(g.a)({},(function(){var I=this,y=I.$createElement,b=I._self._c||y;return b("ContentSlotsDistributor",{attrs:{"slot-key":I.$parent.slotKey}},[b("h1",{attrs:{id:"configuration"}},[b("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[I._v("#")]),I._v(" Configuration")]),I._v(" "),b("p",[I._v("Tendermint Core can be configured via a TOML file in\n"),b("code",[I._v("$TMHOME/config/config.toml")]),I._v(". Some of these parameters can be overridden by\ncommand-line flags. For most users, the options in the "),b("code",[I._v("##### main base configuration options #####")]),I._v(" are intended to be modified while config options\nfurther below are intended for advance power users.")]),I._v(" "),b("h2",{attrs:{id:"options"}},[b("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[I._v("#")]),I._v(" Options")]),I._v(" "),b("p",[I._v("The default configuration file create by "),b("code",[I._v("tendermint init")]),I._v(" has all\nthe parameters set with their default values. It will look something\nlike the file below, however, double check by inspecting the\n"),b("code",[I._v("config.toml")]),I._v(" created with your version of "),b("code",[I._v("tendermint")]),I._v(" installed:")]),I._v(" "),b("tm-code-block",{staticClass:"codeblock",attrs:{language:"toml",base64:"IyBUaGlzIGlzIGEgVE9NTCBjb25maWcgZmlsZS4KIyBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90b21sLWxhbmcvdG9tbAoKIyBOT1RFOiBBbnkgcGF0aCBiZWxvdyBjYW4gYmUgYWJzb2x1dGUgKGUuZy4gJnF1b3Q7L3Zhci9teWF3ZXNvbWVhcHAvZGF0YSZxdW90Oykgb3IKIyByZWxhdGl2ZSB0byB0aGUgaG9tZSBkaXJlY3RvcnkgKGUuZy4gJnF1b3Q7ZGF0YSZxdW90OykuIFRoZSBob21lIGRpcmVjdG9yeSBpcwojICZxdW90OyRIT01FLy50ZW5kZXJtaW50JnF1b3Q7IGJ5IGRlZmF1bHQsIGJ1dCBjb3VsZCBiZSBjaGFuZ2VkIHZpYSAkVE1IT01FIGVudiB2YXJpYWJsZQojIG9yIC0taG9tZSBjbWQgZmxhZy4KCiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjCiMjIyAgICAgICAgICAgICAgICAgICBNYWluIEJhc2UgQ29uZmlnIE9wdGlvbnMgICAgICAgICAgICAgICAgICAgICAgIyMjCiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjCgojIFRDUCBvciBVTklYIHNvY2tldCBhZGRyZXNzIG9mIHRoZSBBQkNJIGFwcGxpY2F0aW9uLAojIG9yIHRoZSBuYW1lIG9mIGFuIEFCQ0kgYXBwbGljYXRpb24gY29tcGlsZWQgaW4gd2l0aCB0aGUgVGVuZGVybWludCBiaW5hcnkKcHJveHlfYXBwID0gJnF1b3Q7dGNwOi8vMTI3LjAuMC4xOjI2NjU4JnF1b3Q7CgojIEEgY3VzdG9tIGh1bWFuIHJlYWRhYmxlIG5hbWUgZm9yIHRoaXMgbm9kZQptb25pa2VyID0gJnF1b3Q7YW5vbnltb3VzJnF1b3Q7CgojIElmIHRoaXMgbm9kZSBpcyBtYW55IGJsb2NrcyBiZWhpbmQgdGhlIHRpcCBvZiB0aGUgY2hhaW4sIEJsb2NrU3luYwojIGFsbG93cyB0aGVtIHRvIGNhdGNodXAgcXVpY2tseSBieSBkb3dubG9hZGluZyBibG9ja3MgaW4gcGFyYWxsZWwKIyBhbmQgdmVyaWZ5aW5nIHRoZWlyIGNvbW1pdHMKYmxvY2tfc3luYyA9IHRydWUKCiMgRGF0YWJhc2UgYmFja2VuZDogZ29sZXZlbGRiIHwgY2xldmVsZGIgfCBib2x0ZGIgfCByb2Nrc2RiIHwgYmFkZ2VyZGIKIyAqIGdvbGV2ZWxkYiAoZ2l0aHViLmNvbS9zeW5kdHIvZ29sZXZlbGRiIC0gbW9zdCBwb3B1bGFyIGltcGxlbWVudGF0aW9uKQojICAgLSBwdXJlIGdvCiMgICAtIHN0YWJsZQojICogY2xldmVsZGIgKHVzZXMgbGV2aWdvIHdyYXBwZXIpCiMgICAtIGZhc3QKIyAgIC0gcmVxdWlyZXMgZ2NjCiMgICAtIHVzZSBjbGV2ZWxkYiBidWlsZCB0YWcgKGdvIGJ1aWxkIC10YWdzIGNsZXZlbGRiKQojICogYm9sdGRiICh1c2VzIGV0Y2QncyBmb3JrIG9mIGJvbHQgLSBnaXRodWIuY29tL2V0Y2QtaW8vYmJvbHQpCiMgICAtIEVYUEVSSU1FTlRBTAojICAgLSBtYXkgYmUgZmFzdGVyIGlzIHNvbWUgdXNlLWNhc2VzIChyYW5kb20gcmVhZHMgLSBpbmRleGVyKQojICAgLSB1c2UgYm9sdGRiIGJ1aWxkIHRhZyAoZ28gYnVpbGQgLXRhZ3MgYm9sdGRiKQojICogcm9ja3NkYiAodXNlcyBnaXRodWIuY29tL3RlY2JvdC9nb3JvY2tzZGIpCiMgICAtIEVYUEVSSU1FTlRBTAojICAgLSByZXF1aXJlcyBnY2MKIyAgIC0gdXNlIHJvY2tzZGIgYnVpbGQgdGFnIChnbyBidWlsZCAtdGFncyByb2Nrc2RiKQojICogYmFkZ2VyZGIgKHVzZXMgZ2l0aHViLmNvbS9kZ3JhcGgtaW8vYmFkZ2VyKQojICAgLSBFWFBFUklNRU5UQUwKIyAgIC0gdXNlIGJhZGdlcmRiIGJ1aWxkIHRhZyAoZ28gYnVpbGQgLXRhZ3MgYmFkZ2VyZGIpCmRiX2JhY2tlbmQgPSAmcXVvdDtnb2xldmVsZGImcXVvdDsKCiMgRGF0YWJhc2UgZGlyZWN0b3J5CmRiX2RpciA9ICZxdW90O2RhdGEmcXVvdDsKCiMgT3V0cHV0IGxldmVsIGZvciBsb2dnaW5nLCBpbmNsdWRpbmcgcGFja2FnZSBsZXZlbCBvcHRpb25zCmxvZ19sZXZlbCA9ICZxdW90O21haW46aW5mbyxzdGF0ZTppbmZvLHN0YXRlc3luYzppbmZvLCo6ZXJyb3ImcXVvdDsKCiMgT3V0cHV0IGZvcm1hdDogJ3BsYWluJyAoY29sb3JlZCB0ZXh0KSBvciAnanNvbicKbG9nX2Zvcm1hdCA9ICZxdW90O3BsYWluJnF1b3Q7CgojIyMjIyBhZGRpdGlvbmFsIGJhc2UgY29uZmlnIG9wdGlvbnMgIyMjIyMKCiMgUGF0aCB0byB0aGUgSlNPTiBmaWxlIGNvbnRhaW5pbmcgdGhlIGluaXRpYWwgdmFsaWRhdG9yIHNldCBhbmQgb3RoZXIgbWV0YSBkYXRhCmdlbmVzaXNfZmlsZSA9ICZxdW90O2NvbmZpZy9nZW5lc2lzLmpzb24mcXVvdDsKCiMgUGF0aCB0byB0aGUgSlNPTiBmaWxlIGNvbnRhaW5pbmcgdGhlIHByaXZhdGUga2V5IHRvIHVzZSBhcyBhIHZhbGlkYXRvciBpbiB0aGUgY29uc2Vuc3VzIHByb3RvY29sCnByaXZfdmFsaWRhdG9yX2tleV9maWxlID0gJnF1b3Q7Y29uZmlnL3ByaXZfdmFsaWRhdG9yX2tleS5qc29uJnF1b3Q7CgojIFBhdGggdG8gdGhlIEpTT04gZmlsZSBjb250YWluaW5nIHRoZSBsYXN0IHNpZ24gc3RhdGUgb2YgYSB2YWxpZGF0b3IKcHJpdl92YWxpZGF0b3Jfc3RhdGVfZmlsZSA9ICZxdW90O2RhdGEvcHJpdl92YWxpZGF0b3Jfc3RhdGUuanNvbiZxdW90OwoKIyBUQ1Agb3IgVU5JWCBzb2NrZXQgYWRkcmVzcyBmb3IgVGVuZGVybWludCB0byBsaXN0ZW4gb24gZm9yCiMgY29ubmVjdGlvbnMgZnJvbSBhbiBleHRlcm5hbCBQcml2VmFsaWRhdG9yIHByb2Nlc3MKcHJpdl92YWxpZGF0b3JfbGFkZHIgPSAmcXVvdDsmcXVvdDsKCiMgUGF0aCB0byB0aGUgSlNPTiBmaWxlIGNvbnRhaW5pbmcgdGhlIHByaXZhdGUga2V5IHRvIHVzZSBmb3Igbm9kZSBhdXRoZW50aWNhdGlvbiBpbiB0aGUgcDJwIHByb3RvY29sCm5vZGVfa2V5X2ZpbGUgPSAmcXVvdDtjb25maWcvbm9kZV9rZXkuanNvbiZxdW90OwoKIyBNZWNoYW5pc20gdG8gY29ubmVjdCB0byB0aGUgQUJDSSBhcHBsaWNhdGlvbjogc29ja2V0IHwgZ3JwYwphYmNpID0gJnF1b3Q7c29ja2V0JnF1b3Q7CgojIElmIHRydWUsIHF1ZXJ5IHRoZSBBQkNJIGFwcCBvbiBjb25uZWN0aW5nIHRvIGEgbmV3IHBlZXIKIyBzbyB0aGUgYXBwIGNhbiBkZWNpZGUgaWYgd2Ugc2hvdWxkIGtlZXAgdGhlIGNvbm5lY3Rpb24gb3Igbm90CmZpbHRlcl9wZWVycyA9IGZhbHNlCgoKIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMKIyMjICAgICAgICAgICAgICAgICBBZHZhbmNlZCBDb25maWd1cmF0aW9uIE9wdGlvbnMgICAgICAgICAgICAgICAgICAjIyMKIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMKCiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMKIyMjICAgICAgIFJQQyBTZXJ2ZXIgQ29uZmlndXJhdGlvbiBPcHRpb25zICAgICAgICAgICMjIwojIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjCltycGNdCgojIFRDUCBvciBVTklYIHNvY2tldCBhZGRyZXNzIGZvciB0aGUgUlBDIHNlcnZlciB0byBsaXN0ZW4gb24KbGFkZHIgPSAmcXVvdDt0Y3A6Ly8xMjcuMC4wLjE6MjY2NTcmcXVvdDsKCiMgQSBsaXN0IG9mIG9yaWdpbnMgYSBjcm9zcy1kb21haW4gcmVxdWVzdCBjYW4gYmUgZXhlY3V0ZWQgZnJvbQojIERlZmF1bHQgdmFsdWUgJ1tdJyBkaXNhYmxlcyBjb3JzIHN1cHBvcnQKIyBVc2UgJ1smcXVvdDsqJnF1b3Q7XScgdG8gYWxsb3cgYW55IG9yaWdpbgpjb3JzX2FsbG93ZWRfb3JpZ2lucyA9IFtdCgojIEEgbGlzdCBvZiBtZXRob2RzIHRoZSBjbGllbnQgaXMgYWxsb3dlZCB0byB1c2Ugd2l0aCBjcm9zcy1kb21haW4gcmVxdWVzdHMKY29yc19hbGxvd2VkX21ldGhvZHMgPSBbJnF1b3Q7SEVBRCZxdW90OywgJnF1b3Q7R0VUJnF1b3Q7LCAmcXVvdDtQT1NUJnF1b3Q7LCBdCgojIEEgbGlzdCBvZiBub24gc2ltcGxlIGhlYWRlcnMgdGhlIGNsaWVudCBpcyBhbGxvd2VkIHRvIHVzZSB3aXRoIGNyb3NzLWRvbWFpbiByZXF1ZXN0cwpjb3JzX2FsbG93ZWRfaGVhZGVycyA9IFsmcXVvdDtPcmlnaW4mcXVvdDssICZxdW90O0FjY2VwdCZxdW90OywgJnF1b3Q7Q29udGVudC1UeXBlJnF1b3Q7LCAmcXVvdDtYLVJlcXVlc3RlZC1XaXRoJnF1b3Q7LCAmcXVvdDtYLVNlcnZlci1UaW1lJnF1b3Q7LCBdCgojIFRDUCBvciBVTklYIHNvY2tldCBhZGRyZXNzIGZvciB0aGUgZ1JQQyBzZXJ2ZXIgdG8gbGlzdGVuIG9uCiMgTk9URTogVGhpcyBzZXJ2ZXIgb25seSBzdXBwb3J0cyAvYnJvYWRjYXN0X3R4X2NvbW1pdApncnBjX2xhZGRyID0gJnF1b3Q7JnF1b3Q7CgojIE1heGltdW0gbnVtYmVyIG9mIHNpbXVsdGFuZW91cyBjb25uZWN0aW9ucy4KIyBEb2VzIG5vdCBpbmNsdWRlIFJQQyAoSFRUUCZhbXA7V2ViU29ja2V0KSBjb25uZWN0aW9ucy4gU2VlIG1heF9vcGVuX2Nvbm5lY3Rpb25zCiMgSWYgeW91IHdhbnQgdG8gYWNjZXB0IGEgbGFyZ2VyIG51bWJlciB0aGFuIHRoZSBkZWZhdWx0LCBtYWtlIHN1cmUKIyB5b3UgaW5jcmVhc2UgeW91ciBPUyBsaW1pdHMuCiMgMCAtIHVubGltaXRlZC4KIyBTaG91bGQgYmUgJmx0OyB7dWxpbWl0IC1Tbn0gLSB7TWF4TnVtSW5ib3VuZFBlZXJzfSAtIHtNYXhOdW1PdXRib3VuZFBlZXJzfSAtIHtOIG9mIHdhbCwgZGIgYW5kIG90aGVyIG9wZW4gZmlsZXN9CiMgMTAyNCAtIDQwIC0gMTAgLSA1MCA9IDkyNCA9IH45MDAKZ3JwY19tYXhfb3Blbl9jb25uZWN0aW9ucyA9IDkwMAoKIyBBY3RpdmF0ZSB1bnNhZmUgUlBDIGNvbW1hbmRzIGxpa2UgL2RpYWxfc2VlZHMgYW5kIC91bnNhZmVfZmx1c2hfbWVtcG9vbAp1bnNhZmUgPSBmYWxzZQoKIyBNYXhpbXVtIG51bWJlciBvZiBzaW11bHRhbmVvdXMgY29ubmVjdGlvbnMgKGluY2x1ZGluZyBXZWJTb2NrZXQpLgojIERvZXMgbm90IGluY2x1ZGUgZ1JQQyBjb25uZWN0aW9ucy4gU2VlIGdycGNfbWF4X29wZW5fY29ubmVjdGlvbnMKIyBJZiB5b3Ugd2FudCB0byBhY2NlcHQgYSBsYXJnZXIgbnVtYmVyIHRoYW4gdGhlIGRlZmF1bHQsIG1ha2Ugc3VyZQojIHlvdSBpbmNyZWFzZSB5b3VyIE9TIGxpbWl0cy4KIyAwIC0gdW5saW1pdGVkLgojIFNob3VsZCBiZSAmbHQ7IHt1bGltaXQgLVNufSAtIHtNYXhOdW1JbmJvdW5kUGVlcnN9IC0ge01heE51bU91dGJvdW5kUGVlcnN9IC0ge04gb2Ygd2FsLCBkYiBhbmQgb3RoZXIgb3BlbiBmaWxlc30KIyAxMDI0IC0gNDAgLSAxMCAtIDUwID0gOTI0ID0gfjkwMAptYXhfb3Blbl9jb25uZWN0aW9ucyA9IDkwMAoKIyBNYXhpbXVtIG51bWJlciBvZiB1bmlxdWUgY2xpZW50SURzIHRoYXQgY2FuIC9zdWJzY3JpYmUKIyBJZiB5b3UncmUgdXNpbmcgL2Jyb2FkY2FzdF90eF9jb21taXQsIHNldCB0byB0aGUgZXN0aW1hdGVkIG1heGltdW0gbnVtYmVyCiMgb2YgYnJvYWRjYXN0X3R4X2NvbW1pdCBjYWxscyBwZXIgYmxvY2suCm1heF9zdWJzY3JpcHRpb25fY2xpZW50cyA9IDEwMAoKIyBNYXhpbXVtIG51bWJlciBvZiB1bmlxdWUgcXVlcmllcyBhIGdpdmVuIGNsaWVudCBjYW4gL3N1YnNjcmliZSB0bwojIElmIHlvdSdyZSB1c2luZyBHUlBDIChvciBMb2NhbCBSUEMgY2xpZW50KSBhbmQgL2Jyb2FkY2FzdF90eF9jb21taXQsIHNldCB0bwojIHRoZSBlc3RpbWF0ZWQgIyBtYXhpbXVtIG51bWJlciBvZiBicm9hZGNhc3RfdHhfY29tbWl0IGNhbGxzIHBlciBibG9jay4KbWF4X3N1YnNjcmlwdGlvbnNfcGVyX2NsaWVudCA9IDUKCiMgSG93IGxvbmcgdG8gd2FpdCBmb3IgYSB0eCB0byBiZSBjb21taXR0ZWQgZHVyaW5nIC9icm9hZGNhc3RfdHhfY29tbWl0LgojIFdBUk5JTkc6IFVzaW5nIGEgdmFsdWUgbGFyZ2VyIHRoYW4gMTBzIHdpbGwgcmVzdWx0IGluIGluY3JlYXNpbmcgdGhlCiMgZ2xvYmFsIEhUVFAgd3JpdGUgdGltZW91dCwgd2hpY2ggYXBwbGllcyB0byBhbGwgY29ubmVjdGlvbnMgYW5kIGVuZHBvaW50cy4KIyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3RlbmRlcm1pbnQvdGVuZGVybWludC9pc3N1ZXMvMzQzNQp0aW1lb3V0X2Jyb2FkY2FzdF90eF9jb21taXQgPSAmcXVvdDsxMHMmcXVvdDsKCiMgTWF4aW11bSBzaXplIG9mIHJlcXVlc3QgYm9keSwgaW4gYnl0ZXMKbWF4X2JvZHlfYnl0ZXMgPSAxMDAwMDAwCgojIE1heGltdW0gc2l6ZSBvZiByZXF1ZXN0IGhlYWRlciwgaW4gYnl0ZXMKbWF4X2hlYWRlcl9ieXRlcyA9IDEwNDg1NzYKCiMgVGhlIHBhdGggdG8gYSBmaWxlIGNvbnRhaW5pbmcgY2VydGlmaWNhdGUgdGhhdCBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgSFRUUFMgc2VydmVyLgojIE1pZ3RoIGJlIGVpdGhlciBhYnNvbHV0ZSBwYXRoIG9yIHBhdGggcmVsYXRlZCB0byB0ZW5kZXJtaW50J3MgY29uZmlnIGRpcmVjdG9yeS4KIyBJZiB0aGUgY2VydGlmaWNhdGUgaXMgc2lnbmVkIGJ5IGEgY2VydGlmaWNhdGUgYXV0aG9yaXR5LAojIHRoZSBjZXJ0RmlsZSBzaG91bGQgYmUgdGhlIGNvbmNhdGVuYXRpb24gb2YgdGhlIHNlcnZlcidzIGNlcnRpZmljYXRlLCBhbnkgaW50ZXJtZWRpYXRlcywKIyBhbmQgdGhlIENBJ3MgY2VydGlmaWNhdGUuCiMgTk9URTogYm90aCB0bHNfY2VydF9maWxlIGFuZCB0bHNfa2V5X2ZpbGUgbXVzdCBiZSBwcmVzZW50IGZvciBUZW5kZXJtaW50IHRvIGNyZWF0ZSBIVFRQUyBzZXJ2ZXIuCiMgT3RoZXJ3aXNlLCBIVFRQIHNlcnZlciBpcyBydW4uCnRsc19jZXJ0X2ZpbGUgPSAmcXVvdDsmcXVvdDsKCiMgVGhlIHBhdGggdG8gYSBmaWxlIGNvbnRhaW5pbmcgbWF0Y2hpbmcgcHJpdmF0ZSBrZXkgdGhhdCBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgSFRUUFMgc2VydmVyLgojIE1pZ3RoIGJlIGVpdGhlciBhYnNvbHV0ZSBwYXRoIG9yIHBhdGggcmVsYXRlZCB0byB0ZW5kZXJtaW50J3MgY29uZmlnIGRpcmVjdG9yeS4KIyBOT1RFOiBib3RoIHRsc19jZXJ0X2ZpbGUgYW5kIHRsc19rZXlfZmlsZSBtdXN0IGJlIHByZXNlbnQgZm9yIFRlbmRlcm1pbnQgdG8gY3JlYXRlIEhUVFBTIHNlcnZlci4KIyBPdGhlcndpc2UsIEhUVFAgc2VydmVyIGlzIHJ1bi4KdGxzX2tleV9maWxlID0gJnF1b3Q7JnF1b3Q7CgojIHBwcm9mIGxpc3RlbiBhZGRyZXNzIChodHRwczovL2dvbGFuZy5vcmcvcGtnL25ldC9odHRwL3Bwcm9mKQpwcHJvZl9sYWRkciA9ICZxdW90OyZxdW90OwoKIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIwojIyMgICAgICAgICAgIFAyUCBDb25maWd1cmF0aW9uIE9wdGlvbnMgICAgICAgICAgICAgIyMjCiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMKW3AycF0KCiMgQWRkcmVzcyB0byBsaXN0ZW4gZm9yIGluY29taW5nIGNvbm5lY3Rpb25zCmxhZGRyID0gJnF1b3Q7dGNwOi8vMC4wLjAuMDoyNjY1NiZxdW90OwoKIyBBZGRyZXNzIHRvIGFkdmVydGlzZSB0byBwZWVycyBmb3IgdGhlbSB0byBkaWFsCiMgSWYgZW1wdHksIHdpbGwgdXNlIHRoZSBzYW1lIHBvcnQgYXMgdGhlIGxhZGRyLAojIGFuZCB3aWxsIGludHJvc3BlY3Qgb24gdGhlIGxpc3RlbmVyIG9yIHVzZSBVUG5QCiMgdG8gZmlndXJlIG91dCB0aGUgYWRkcmVzcy4KZXh0ZXJuYWxfYWRkcmVzcyA9ICZxdW90OyZxdW90OwoKIyBDb21tYSBzZXBhcmF0ZWQgbGlzdCBvZiBzZWVkIG5vZGVzIHRvIGNvbm5lY3QgdG8Kc2VlZHMgPSAmcXVvdDsmcXVvdDsKCiMgQ29tbWEgc2VwYXJhdGVkIGxpc3Qgb2Ygbm9kZXMgdG8ga2VlcCBwZXJzaXN0ZW50IGNvbm5lY3Rpb25zIHRvCnBlcnNpc3RlbnRfcGVlcnMgPSAmcXVvdDsmcXVvdDsKCiMgVVBOUCBwb3J0IGZvcndhcmRpbmcKdXBucCA9IGZhbHNlCgojIFBhdGggdG8gYWRkcmVzcyBib29rCmFkZHJfYm9va19maWxlID0gJnF1b3Q7Y29uZmlnL2FkZHJib29rLmpzb24mcXVvdDsKCiMgU2V0IHRydWUgZm9yIHN0cmljdCBhZGRyZXNzIHJvdXRhYmlsaXR5IHJ1bGVzCiMgU2V0IGZhbHNlIGZvciBwcml2YXRlIG9yIGxvY2FsIG5ldHdvcmtzCmFkZHJfYm9va19zdHJpY3QgPSB0cnVlCgojIE1heGltdW0gbnVtYmVyIG9mIGluYm91bmQgcGVlcnMKbWF4X251bV9pbmJvdW5kX3BlZXJzID0gNDAKCiMgTWF4aW11bSBudW1iZXIgb2Ygb3V0Ym91bmQgcGVlcnMgdG8gY29ubmVjdCB0bywgZXhjbHVkaW5nIHBlcnNpc3RlbnQgcGVlcnMKbWF4X251bV9vdXRib3VuZF9wZWVycyA9IDEwCgojIExpc3Qgb2Ygbm9kZSBJRHMsIHRvIHdoaWNoIGEgY29ubmVjdGlvbiB3aWxsIGJlIChyZSllc3RhYmxpc2hlZCBpZ25vcmluZyBhbnkgZXhpc3RpbmcgbGltaXRzCnVuY29uZGl0aW9uYWxfcGVlcl9pZHMgPSAmcXVvdDsmcXVvdDsKCiMgTWF4aW11bSBwYXVzZSB3aGVuIHJlZGlhbGluZyBhIHBlcnNpc3RlbnQgcGVlciAoaWYgemVybywgZXhwb25lbnRpYWwgYmFja29mZiBpcyB1c2VkKQpwZXJzaXN0ZW50X3BlZXJzX21heF9kaWFsX3BlcmlvZCA9ICZxdW90OzBzJnF1b3Q7CgojIFRpbWUgdG8gd2FpdCBiZWZvcmUgZmx1c2hpbmcgbWVzc2FnZXMgb3V0IG9uIHRoZSBjb25uZWN0aW9uCmZsdXNoX3Rocm90dGxlX3RpbWVvdXQgPSAmcXVvdDsxMDBtcyZxdW90OwoKIyBNYXhpbXVtIHNpemUgb2YgYSBtZXNzYWdlIHBhY2tldCBwYXlsb2FkLCBpbiBieXRlcwptYXhfcGFja2V0X21zZ19wYXlsb2FkX3NpemUgPSAxMDI0CgojIFJhdGUgYXQgd2hpY2ggcGFja2V0cyBjYW4gYmUgc2VudCwgaW4gYnl0ZXMvc2Vjb25kCnNlbmRfcmF0ZSA9IDUxMjAwMDAKCiMgUmF0ZSBhdCB3aGljaCBwYWNrZXRzIGNhbiBiZSByZWNlaXZlZCwgaW4gYnl0ZXMvc2Vjb25kCnJlY3ZfcmF0ZSA9IDUxMjAwMDAKCiMgU2V0IHRydWUgdG8gZW5hYmxlIHRoZSBwZWVyLWV4Y2hhbmdlIHJlYWN0b3IKcGV4ID0gdHJ1ZQoKIyBTZWVkIG1vZGUsIGluIHdoaWNoIG5vZGUgY29uc3RhbnRseSBjcmF3bHMgdGhlIG5ldHdvcmsgYW5kIGxvb2tzIGZvcgojIHBlZXJzLiBJZiBhbm90aGVyIG5vZGUgYXNrcyBpdCBmb3IgYWRkcmVzc2VzLCBpdCByZXNwb25kcyBhbmQgZGlzY29ubmVjdHMuCiMKIyBEb2VzIG5vdCB3b3JrIGlmIHRoZSBwZWVyLWV4Y2hhbmdlIHJlYWN0b3IgaXMgZGlzYWJsZWQuCnNlZWRfbW9kZSA9IGZhbHNlCgojIENvbW1hIHNlcGFyYXRlZCBsaXN0IG9mIHBlZXIgSURzIHRvIGtlZXAgcHJpdmF0ZSAod2lsbCBub3QgYmUgZ29zc2lwZWQgdG8gb3RoZXIgcGVlcnMpCnByaXZhdGVfcGVlcl9pZHMgPSAmcXVvdDsmcXVvdDsKCiMgVG9nZ2xlIHRvIGRpc2FibGUgZ3VhcmQgYWdhaW5zdCBwZWVycyBjb25uZWN0aW5nIGZyb20gdGhlIHNhbWUgaXAuCmFsbG93X2R1cGxpY2F0ZV9pcCA9IGZhbHNlCgojIFBlZXIgY29ubmVjdGlvbiBjb25maWd1cmF0aW9uLgpoYW5kc2hha2VfdGltZW91dCA9ICZxdW90OzIwcyZxdW90OwpkaWFsX3RpbWVvdXQgPSAmcXVvdDszcyZxdW90OwoKIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIwojIyMgICAgICAgICAgTWVtcG9vbCBDb25maWd1cmF0dGlvbiBPcHRpb24gICAgICAgICAgIyMjCiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMKW21lbXBvb2xdCgpyZWNoZWNrID0gdHJ1ZQpicm9hZGNhc3QgPSB0cnVlCndhbF9kaXIgPSAmcXVvdDsmcXVvdDsKCiMgTWF4aW11bSBudW1iZXIgb2YgdHJhbnNhY3Rpb25zIGluIHRoZSBtZW1wb29sCnNpemUgPSA1MDAwCgojIExpbWl0IHRoZSB0b3RhbCBzaXplIG9mIGFsbCB0eHMgaW4gdGhlIG1lbXBvb2wuCiMgVGhpcyBvbmx5IGFjY291bnRzIGZvciByYXcgdHJhbnNhY3Rpb25zIChlLmcuIGdpdmVuIDFNQiB0cmFuc2FjdGlvbnMgYW5kCiMgbWF4X3R4c19ieXRlcz01TUIsIG1lbXBvb2wgd2lsbCBvbmx5IGFjY2VwdCA1IHRyYW5zYWN0aW9ucykuCm1heF90eHNfYnl0ZXMgPSAxMDczNzQxODI0CgojIFNpemUgb2YgdGhlIGNhY2hlICh1c2VkIHRvIGZpbHRlciB0cmFuc2FjdGlvbnMgd2Ugc2F3IGVhcmxpZXIpIGluIHRyYW5zYWN0aW9ucwpjYWNoZV9zaXplID0gMTAwMDAKCiMgRG8gbm90IHJlbW92ZSBpbnZhbGlkIHRyYW5zYWN0aW9ucyBmcm9tIHRoZSBjYWNoZSAoZGVmYXVsdDogZmFsc2UpCiMgU2V0IHRvIHRydWUgaWYgaXQncyBub3QgcG9zc2libGUgZm9yIGFueSBpbnZhbGlkIHRyYW5zYWN0aW9uIHRvIGJlY29tZSB2YWxpZAojIGFnYWluIGluIHRoZSBmdXR1cmUuCmtlZXAtaW52YWxpZC10eHMtaW4tY2FjaGUgPSBmYWxzZQoKIyBNYXhpbXVtIHNpemUgb2YgYSBzaW5nbGUgdHJhbnNhY3Rpb24uCiMgTk9URTogdGhlIG1heCBzaXplIG9mIGEgdHggdHJhbnNtaXR0ZWQgb3ZlciB0aGUgbmV0d29yayBpcyB7bWF4X3R4X2J5dGVzfS4KbWF4X3R4X2J5dGVzID0gMTA0ODU3NgoKIyBNYXhpbXVtIHNpemUgb2YgYSBiYXRjaCBvZiB0cmFuc2FjdGlvbnMgdG8gc2VuZCB0byBhIHBlZXIKIyBJbmNsdWRpbmcgc3BhY2UgbmVlZGVkIGJ5IGVuY29kaW5nIChvbmUgdmFyaW50IHBlciB0cmFuc2FjdGlvbikuCiMgWFhYOiBVbnVzZWQgZHVlIHRvIGh0dHBzOi8vZ2l0aHViLmNvbS90ZW5kZXJtaW50L3RlbmRlcm1pbnQvaXNzdWVzLzU3OTYKbWF4X2JhdGNoX2J5dGVzID0gMTA0ODU3NjAKCiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMKIyMjICAgICAgICAgU3RhdGUgU3luYyBDb25maWd1cmF0aW9uIE9wdGlvbnMgICAgICAgICMjIwojIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjCltzdGF0ZXN5bmNdCiMgU3RhdGUgc3luYyByYXBpZGx5IGJvb3RzdHJhcHMgYSBuZXcgbm9kZSBieSBkaXNjb3ZlcmluZywgZmV0Y2hpbmcsIGFuZCByZXN0b3JpbmcgYSBzdGF0ZSBtYWNoaW5lCiMgc25hcHNob3QgZnJvbSBwZWVycyBpbnN0ZWFkIG9mIGZldGNoaW5nIGFuZCByZXBsYXlpbmcgaGlzdG9yaWNhbCBibG9ja3MuIFJlcXVpcmVzIHNvbWUgcGVlcnMgaW4KIyB0aGUgbmV0d29yayB0byB0YWtlIGFuZCBzZXJ2ZSBzdGF0ZSBtYWNoaW5lIHNuYXBzaG90cy4gU3RhdGUgc3luYyBpcyBub3QgYXR0ZW1wdGVkIGlmIHRoZSBub2RlCiMgaGFzIGFueSBsb2NhbCBzdGF0ZSAoTGFzdEJsb2NrSGVpZ2h0ICZndDsgMCkuIFRoZSBub2RlIHdpbGwgaGF2ZSBhIHRydW5jYXRlZCBibG9jayBoaXN0b3J5LAojIHN0YXJ0aW5nIGZyb20gdGhlIGhlaWdodCBvZiB0aGUgc25hcHNob3QuCmVuYWJsZSA9IGZhbHNlCgojIFJQQyBzZXJ2ZXJzIChjb21tYS1zZXBhcmF0ZWQpIGZvciBsaWdodCBjbGllbnQgdmVyaWZpY2F0aW9uIG9mIHRoZSBzeW5jZWQgc3RhdGUgbWFjaGluZSBhbmQKIyByZXRyaWV2YWwgb2Ygc3RhdGUgZGF0YSBmb3Igbm9kZSBib290c3RyYXBwaW5nLiBBbHNvIG5lZWRzIGEgdHJ1c3RlZCBoZWlnaHQgYW5kIGNvcnJlc3BvbmRpbmcKIyBoZWFkZXIgaGFzaCBvYnRhaW5lZCBmcm9tIGEgdHJ1c3RlZCBzb3VyY2UsIGFuZCBhIHBlcmlvZCBkdXJpbmcgd2hpY2ggdmFsaWRhdG9ycyBjYW4gYmUgdHJ1c3RlZC4KIwojIEZvciBDb3Ntb3MgU0RLLWJhc2VkIGNoYWlucywgdHJ1c3RfcGVyaW9kIHNob3VsZCB1c3VhbGx5IGJlIGFib3V0IDIvMyBvZiB0aGUgdW5ib25kaW5nIHRpbWUgKH4yCiMgd2Vla3MpIGR1cmluZyB3aGljaCB0aGV5IGNhbiBiZSBmaW5hbmNpYWxseSBwdW5pc2hlZCAoc2xhc2hlZCkgZm9yIG1pc2JlaGF2aW9yLgpycGNfc2VydmVycyA9ICZxdW90OyZxdW90Owp0cnVzdF9oZWlnaHQgPSAwCnRydXN0X2hhc2ggPSAmcXVvdDsmcXVvdDsKdHJ1c3RfcGVyaW9kID0gJnF1b3Q7MHMmcXVvdDsKCiMgVGVtcG9yYXJ5IGRpcmVjdG9yeSBmb3Igc3RhdGUgc3luYyBzbmFwc2hvdCBjaHVua3MsIGRlZmF1bHRzIHRvIHRoZSBPUyB0ZW1wZGlyICh0eXBpY2FsbHkgL3RtcCkuCiMgV2lsbCBjcmVhdGUgYSBuZXcsIHJhbmRvbWx5IG5hbWVkIGRpcmVjdG9yeSB3aXRoaW4sIGFuZCByZW1vdmUgaXQgd2hlbiBkb25lLgp0ZW1wX2RpciA9ICZxdW90OyZxdW90OwoKIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIwojIyMgICAgICAgQmxvY2sgU3luYyBDb25maWd1cmF0aW9uIE9wdGlvbnMgICAgICAgICAgIyMjCiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMKW2Jsb2Nrc3luY10KCiMgQmxvY2sgU3luYyB2ZXJzaW9uIHRvIHVzZToKIyAKIyBJbiB2MC4zNywgdjEgYW5kIHYyIG9mIHRoZSBibG9jayBzeW5jIHByb3RvY29scyB3ZXJlIGRlcHJlY2F0ZWQuCiMgUGxlYXNlIHVzZSB2MCBpbnN0ZWFkLgojCiMgICAxKSAmcXVvdDt2MCZxdW90OyAtIHRoZSBkZWZhdWx0IGJsb2NrIHN5bmMgaW1wbGVtZW50YXRpb24KdmVyc2lvbiA9ICZxdW90O3YwJnF1b3Q7CgojIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjCiMjIyAgICAgICAgIENvbnNlbnN1cyBDb25maWd1cmF0aW9uIE9wdGlvbnMgICAgICAgICAjIyMKIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIwpbY29uc2Vuc3VzXQoKd2FsX2ZpbGUgPSAmcXVvdDtkYXRhL2NzLndhbC93YWwmcXVvdDsKCiMgSG93IGxvbmcgd2Ugd2FpdCBmb3IgYSBwcm9wb3NhbCBibG9jayBiZWZvcmUgcHJldm90aW5nIG5pbAp0aW1lb3V0X3Byb3Bvc2UgPSAmcXVvdDszcyZxdW90OwojIEhvdyBtdWNoIHRpbWVvdXRfcHJvcG9zZSBpbmNyZWFzZXMgd2l0aCBlYWNoIHJvdW5kCnRpbWVvdXRfcHJvcG9zZV9kZWx0YSA9ICZxdW90OzUwMG1zJnF1b3Q7CiMgSG93IGxvbmcgd2Ugd2FpdCBhZnRlciByZWNlaXZpbmcgKzIvMyBwcmV2b3RlcyBmb3Ig4oCcYW55dGhpbmfigJ0gKGllLiBub3QgYSBzaW5nbGUgYmxvY2sgb3IgbmlsKQp0aW1lb3V0X3ByZXZvdGUgPSAmcXVvdDsxcyZxdW90OwojIEhvdyBtdWNoIHRoZSB0aW1lb3V0X3ByZXZvdGUgaW5jcmVhc2VzIHdpdGggZWFjaCByb3VuZAp0aW1lb3V0X3ByZXZvdGVfZGVsdGEgPSAmcXVvdDs1MDBtcyZxdW90OwojIEhvdyBsb25nIHdlIHdhaXQgYWZ0ZXIgcmVjZWl2aW5nICsyLzMgcHJlY29tbWl0cyBmb3Ig4oCcYW55dGhpbmfigJ0gKGllLiBub3QgYSBzaW5nbGUgYmxvY2sgb3IgbmlsKQp0aW1lb3V0X3ByZWNvbW1pdCA9ICZxdW90OzFzJnF1b3Q7CiMgSG93IG11Y2ggdGhlIHRpbWVvdXRfcHJlY29tbWl0IGluY3JlYXNlcyB3aXRoIGVhY2ggcm91bmQKdGltZW91dF9wcmVjb21taXRfZGVsdGEgPSAmcXVvdDs1MDBtcyZxdW90OwojIEhvdyBsb25nIHdlIHdhaXQgYWZ0ZXIgY29tbWl0dGluZyBhIGJsb2NrLCBiZWZvcmUgc3RhcnRpbmcgb24gdGhlIG5ldwojIGhlaWdodCAodGhpcyBnaXZlcyB1cyBhIGNoYW5jZSB0byByZWNlaXZlIHNvbWUgbW9yZSBwcmVjb21taXRzLCBldmVuCiMgdGhvdWdoIHdlIGFscmVhZHkgaGF2ZSArMi8zKS4KdGltZW91dF9jb21taXQgPSAmcXVvdDsxcyZxdW90OwoKIyBIb3cgbWFueSBibG9ja3MgdG8gbG9vayBiYWNrIHRvIGNoZWNrIGV4aXN0ZW5jZSBvZiB0aGUgbm9kZSdzIGNvbnNlbnN1cyB2b3RlcyBiZWZvcmUgam9pbmluZyBjb25zZW5zdXMKIyBXaGVuIG5vbi16ZXJvLCB0aGUgbm9kZSB3aWxsIHBhbmljIHVwb24gcmVzdGFydAojIGlmIHRoZSBzYW1lIGNvbnNlbnN1cyBrZXkgd2FzIHVzZWQgdG8gc2lnbiB7ZG91YmxlX3NpZ25fY2hlY2tfaGVpZ2h0fSBsYXN0IGJsb2Nrcy4KIyBTbywgdmFsaWRhdG9ycyBzaG91bGQgc3RvcCB0aGUgc3RhdGUgbWFjaGluZSwgd2FpdCBmb3Igc29tZSBibG9ja3MsIGFuZCB0aGVuIHJlc3RhcnQgdGhlIHN0YXRlIG1hY2hpbmUgdG8gYXZvaWQgcGFuaWMuCmRvdWJsZV9zaWduX2NoZWNrX2hlaWdodCA9IDAKCiMgTWFrZSBwcm9ncmVzcyBhcyBzb29uIGFzIHdlIGhhdmUgYWxsIHRoZSBwcmVjb21taXRzIChhcyBpZiBUaW1lb3V0Q29tbWl0ID0gMCkKc2tpcF90aW1lb3V0X2NvbW1pdCA9IGZhbHNlCgojIEVtcHR5QmxvY2tzIG1vZGUgYW5kIHBvc3NpYmxlIGludGVydmFsIGJldHdlZW4gZW1wdHkgYmxvY2tzCmNyZWF0ZV9lbXB0eV9ibG9ja3MgPSB0cnVlCmNyZWF0ZV9lbXB0eV9ibG9ja3NfaW50ZXJ2YWwgPSAmcXVvdDswcyZxdW90OwoKIyBSZWFjdG9yIHNsZWVwIGR1cmF0aW9uIHBhcmFtZXRlcnMKcGVlcl9nb3NzaXBfc2xlZXBfZHVyYXRpb24gPSAmcXVvdDsxMDBtcyZxdW90OwpwZWVyX3F1ZXJ5X21hajIzX3NsZWVwX2R1cmF0aW9uID0gJnF1b3Q7MnMmcXVvdDsKCiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMKIyMjICAgVHJhbnNhY3Rpb24gSW5kZXhlciBDb25maWd1cmF0aW9uIE9wdGlvbnMgICAgICMjIwojIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjClt0eF9pbmRleF0KCiMgV2hhdCBpbmRleGVyIHRvIHVzZSBmb3IgdHJhbnNhY3Rpb25zCiMKIyBUaGUgYXBwbGljYXRpb24gd2lsbCBzZXQgd2hpY2ggdHhzIHRvIGluZGV4LiBJbiBzb21lIGNhc2VzIGEgbm9kZSBvcGVyYXRvciB3aWxsIGJlIGFibGUKIyB0byBkZWNpZGUgd2hpY2ggdHhzIHRvIGluZGV4IGJhc2VkIG9uIGNvbmZpZ3VyYXRpb24gc2V0IGluIHRoZSBhcHBsaWNhdGlvbi4KIwojIE9wdGlvbnM6CiMgICAxKSAmcXVvdDtudWxsJnF1b3Q7CiMgICAyKSAmcXVvdDtrdiZxdW90OyAoZGVmYXVsdCkgLSB0aGUgc2ltcGxlc3QgcG9zc2libGUgaW5kZXhlciwgYmFja2VkIGJ5IGtleS12YWx1ZSBzdG9yYWdlIChkZWZhdWx0cyB0byBsZXZlbERCOyBzZWUgREJCYWNrZW5kKS4KIyAJCS0gV2hlbiAmcXVvdDtrdiZxdW90OyBpcyBjaG9zZW4gJnF1b3Q7dHguaGVpZ2h0JnF1b3Q7IGFuZCAmcXVvdDt0eC5oYXNoJnF1b3Q7IHdpbGwgYWx3YXlzIGJlIGluZGV4ZWQuCmluZGV4ZXIgPSAmcXVvdDtrdiZxdW90OwoKIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIwojIyMgICAgICAgSW5zdHJ1bWVudGF0aW9uIENvbmZpZ3VyYXRpb24gT3B0aW9ucyAgICAgIyMjCiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMKW2luc3RydW1lbnRhdGlvbl0KCiMgV2hlbiB0cnVlLCBQcm9tZXRoZXVzIG1ldHJpY3MgYXJlIHNlcnZlZCB1bmRlciAvbWV0cmljcyBvbgojIFByb21ldGhldXNMaXN0ZW5BZGRyLgojIENoZWNrIG91dCB0aGUgZG9jdW1lbnRhdGlvbiBmb3IgdGhlIGxpc3Qgb2YgYXZhaWxhYmxlIG1ldHJpY3MuCnByb21ldGhldXMgPSBmYWxzZQoKIyBBZGRyZXNzIHRvIGxpc3RlbiBmb3IgUHJvbWV0aGV1cyBjb2xsZWN0b3IocykgY29ubmVjdGlvbnMKcHJvbWV0aGV1c19saXN0ZW5fYWRkciA9ICZxdW90OzoyNjY2MCZxdW90OwoKIyBNYXhpbXVtIG51bWJlciBvZiBzaW11bHRhbmVvdXMgY29ubmVjdGlvbnMuCiMgSWYgeW91IHdhbnQgdG8gYWNjZXB0IGEgbGFyZ2VyIG51bWJlciB0aGFuIHRoZSBkZWZhdWx0LCBtYWtlIHN1cmUKIyB5b3UgaW5jcmVhc2UgeW91ciBPUyBsaW1pdHMuCiMgMCAtIHVubGltaXRlZC4KbWF4X29wZW5fY29ubmVjdGlvbnMgPSAzCgojIEluc3RydW1lbnRhdGlvbiBuYW1lc3BhY2UKbmFtZXNwYWNlID0gJnF1b3Q7dGVuZGVybWludCZxdW90OwoK"}}),I._v(" "),b("h2",{attrs:{id:"empty-blocks-vs-no-empty-blocks"}},[b("a",{staticClass:"header-anchor",attrs:{href:"#empty-blocks-vs-no-empty-blocks"}},[I._v("#")]),I._v(" Empty blocks VS no empty blocks")]),I._v(" "),b("h3",{attrs:{id:"create-empty-blocks-true"}},[b("a",{staticClass:"header-anchor",attrs:{href:"#create-empty-blocks-true"}},[I._v("#")]),I._v(" create_empty_blocks = true")]),I._v(" "),b("p",[I._v("If "),b("code",[I._v("create_empty_blocks")]),I._v(" is set to "),b("code",[I._v("true")]),I._v(" in your config, blocks will be\ncreated ~ every second (with default consensus parameters). You can regulate\nthe delay between blocks by changing the "),b("code",[I._v("timeout_commit")]),I._v(". E.g. "),b("code",[I._v('timeout_commit = "10s"')]),I._v(" should result in ~ 10 second blocks.")]),I._v(" "),b("h3",{attrs:{id:"create-empty-blocks-false"}},[b("a",{staticClass:"header-anchor",attrs:{href:"#create-empty-blocks-false"}},[I._v("#")]),I._v(" create_empty_blocks = false")]),I._v(" "),b("p",[I._v("In this setting, blocks are created when transactions received.")]),I._v(" "),b("p",[I._v("Note after the block H, Tendermint creates something we call a \"proof block\"\n(only if the application hash changed) H+1. The reason for this is to support\nproofs. If you have a transaction in block H that changes the state to X, the\nnew application hash will only be included in block H+1. If after your\ntransaction is committed, you want to get a light-client proof for the new state\n(X), you need the new block to be committed in order to do that because the new\nblock has the new application hash for the state X. That's why we make a new\n(empty) block if the application hash changes. Otherwise, you won't be able to\nmake a proof for the new state.")]),I._v(" "),b("p",[I._v("Plus, if you set "),b("code",[I._v("create_empty_blocks_interval")]),I._v(" to something other than the\ndefault ("),b("code",[I._v("0")]),I._v("), Tendermint will be creating empty blocks even in the absence of\ntransactions every "),b("code",[I._v("create_empty_blocks_interval")]),I._v(". For instance, with\n"),b("code",[I._v("create_empty_blocks = false")]),I._v(" and "),b("code",[I._v('create_empty_blocks_interval = "30s"')]),I._v(",\nTendermint will only create blocks if there are transactions, or after waiting\n30 seconds without receiving any transactions.")]),I._v(" "),b("h2",{attrs:{id:"consensus-timeouts-explained"}},[b("a",{staticClass:"header-anchor",attrs:{href:"#consensus-timeouts-explained"}},[I._v("#")]),I._v(" Consensus timeouts explained")]),I._v(" "),b("p",[I._v("There's a variety of information about timeouts in "),b("RouterLink",{attrs:{to:"/tendermint-core/running-in-production.html"}},[I._v("Running in\nproduction")])],1),I._v(" "),b("p",[I._v("You can also find more detailed technical explanation in the spec: "),b("a",{attrs:{href:"https://arxiv.org/abs/1807.04938",target:"_blank",rel:"noopener noreferrer"}},[I._v("The latest\ngossip on BFT consensus"),b("OutboundLink")],1),I._v(".")]),I._v(" "),b("tm-code-block",{staticClass:"codeblock",attrs:{language:"toml",base64:"W2NvbnNlbnN1c10KLi4uCgp0aW1lb3V0X3Byb3Bvc2UgPSAmcXVvdDszcyZxdW90Owp0aW1lb3V0X3Byb3Bvc2VfZGVsdGEgPSAmcXVvdDs1MDBtcyZxdW90Owp0aW1lb3V0X3ByZXZvdGUgPSAmcXVvdDsxcyZxdW90Owp0aW1lb3V0X3ByZXZvdGVfZGVsdGEgPSAmcXVvdDs1MDBtcyZxdW90Owp0aW1lb3V0X3ByZWNvbW1pdCA9ICZxdW90OzFzJnF1b3Q7CnRpbWVvdXRfcHJlY29tbWl0X2RlbHRhID0gJnF1b3Q7NTAwbXMmcXVvdDsKdGltZW91dF9jb21taXQgPSAmcXVvdDsxcyZxdW90Owo="}}),I._v(" "),b("p",[I._v("Note that in a successful round, the only timeout that we absolutely wait no\nmatter what is "),b("code",[I._v("timeout_commit")]),I._v(".")]),I._v(" "),b("p",[I._v("Here's a brief summary of the timeouts:")]),I._v(" "),b("ul",[b("li",[b("code",[I._v("timeout_propose")]),I._v(" = how long we wait for a proposal block before prevoting\nnil")]),I._v(" "),b("li",[b("code",[I._v("timeout_propose_delta")]),I._v(" = how much timeout_propose increases with each round")]),I._v(" "),b("li",[b("code",[I._v("timeout_prevote")]),I._v(" = how long we wait after receiving +2/3 prevotes for\nanything (ie. not a single block or nil)")]),I._v(" "),b("li",[b("code",[I._v("timeout_prevote_delta")]),I._v(" = how much the timeout_prevote increases with each\nround")]),I._v(" "),b("li",[b("code",[I._v("timeout_precommit")]),I._v(" = how long we wait after receiving +2/3 precommits for\nanything (ie. not a single block or nil)")]),I._v(" "),b("li",[b("code",[I._v("timeout_precommit_delta")]),I._v(" = how much the timeout_precommit increases with\neach round")]),I._v(" "),b("li",[b("code",[I._v("timeout_commit")]),I._v(" = how long we wait after committing a block, before starting\non the new height (this gives us a chance to receive some more precommits,\neven though we already have +2/3)")])])],1)}),[],!1,null,null,null);y.default=c.exports}}]);