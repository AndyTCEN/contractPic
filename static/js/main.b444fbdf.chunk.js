(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{199:function(t,e,n){t.exports=n.p+"static/media/mintbackground.0a441a89.jpg"},200:function(t,e,n){t.exports=n(480)},220:function(t,e){},229:function(t,e){},246:function(t,e){},248:function(t,e){},262:function(t,e){},263:function(t,e){},265:function(t,e){},266:function(t,e){},341:function(t,e){},343:function(t,e){},375:function(t,e){},377:function(t,e){},382:function(t,e){},384:function(t,e){},391:function(t,e){},392:function(t,e){},394:function(t,e){},406:function(t,e){},409:function(t,e){},414:function(t,e){},425:function(t,e){},428:function(t,e){},480:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),i=n(196),s=n.n(i),u=(n(205),n(197)),c=n(2),o=n.n(c),p=n(12),l=n(3),m=n(5),y=n(9),d=n(8),h=n(10),f=n(13),b=n(104),w=n.n(b),v=n(70);function x(){return new window.web3.eth.Contract(v.abi,v.address)}function g(t){return k.apply(this,arguments)}function k(){return(k=Object(p.a)(o.a.mark(function t(e){var n,a,r,i,s,u,c,p,l;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.accountAddress,a=e.totalQuantity,r=e.price,i=window.web3,t.next=6,i.eth.getBlock("latest");case 6:if(s=t.sent,u=s.gasLimit,i.utils.isAddress(n)&&!(a<1)&&0!==r){t.next=10;break}return t.abrupt("return",alert("System Error"));case 10:c=0,t.t0=a,t.next=1===t.t0?14:5===t.t0?16:10===t.t0?18:20;break;case 14:return c=1,t.abrupt("break",20);case 16:return c=6,t.abrupt("break",20);case 18:return c=13,t.abrupt("break",20);case 20:return p=x(),t.next=23,p.methods.mintNFT(c).estimateGas({from:n});case 23:return l=t.sent,t.next=26,p.methods.mintNFT(c).send({from:n,value:i.utils.toWei(r.toString(),"ether"),gasPrice:u,gas:l});case 26:case"end":return t.stop()}},t)}))).apply(this,arguments)}function T(t){return O.apply(this,arguments)}function O(){return(O=Object(p.a)(o.a.mark(function t(e){var n,a,r,i,s,u,c,p;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.accountAddress,a=e.totalQuantity,r=e.toAddress,i=window.web3,t.next=6,i.eth.getBlock("latest");case 6:if(s=t.sent,u=s.gasLimit,i.utils.isAddress(n)&&!(a<1)&&i.utils.isAddress(r)){t.next=10;break}return t.abrupt("return",alert("System Error"));case 10:return c=x(),t.next=13,c.methods.mintNFTToOther(a,r).estimateGas({from:n});case 13:return p=t.sent,t.next=16,c.methods.mintNFTToOther(a,r).send({from:n,gasPrice:u,gas:p});case 16:case"end":return t.stop()}},t)}))).apply(this,arguments)}function M(t){return j.apply(this,arguments)}function j(){return(j=Object(p.a)(o.a.mark(function t(e){var n,a,r,i,s,u;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=x(),a=e.account,r=window.web3,t.next=5,r.eth.getBlock("latest");case 5:return i=t.sent,s=i.gasLimit,t.next=9,n.methods.approve(a,0).estimateGas({from:a});case 9:return u=t.sent,t.next=12,n.methods.approve(a,0).send({from:a,gasPrice:s,gas:u});case 12:case"end":return t.stop()}},t)}))).apply(this,arguments)}function S(t){return E.apply(this,arguments)}function E(){return(E=Object(p.a)(o.a.mark(function t(e){var n,a,r,i,s,u;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=x(),a=e.account,r=window.web3,t.next=5,r.eth.getBlock("latest");case 5:return i=t.sent,s=i.gasLimit,t.next=9,n.methods.withdraw(a).estimateGas({from:a});case 9:return u=t.sent,t.next=12,n.methods.withdraw(a).send({from:a,gasPrice:s,gas:u});case 12:case"end":return t.stop()}},t)}))).apply(this,arguments)}function A(t){return I.apply(this,arguments)}function I(){return(I=Object(p.a)(o.a.mark(function t(e){var n,a,r,i,s,u;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=x(),a=e.account,r=window.web3,t.next=5,r.eth.getBlock("latest");case 5:return i=t.sent,s=i.gasLimit,t.next=9,n.methods.flipSaleActive().estimateGas({from:a});case 9:return u=t.sent,t.next=12,n.methods.flipSaleActive().send({from:a,gasPrice:s,gas:u});case 12:case"end":return t.stop()}},t)}))).apply(this,arguments)}function _(){return N.apply(this,arguments)}function N(){return(N=Object(p.a)(o.a.mark(function t(){var e,n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=x(),t.next=3,e.methods._isSaleActive().call();case 3:return n=t.sent,t.abrupt("return",n);case 5:case"end":return t.stop()}},t)}))).apply(this,arguments)}function C(t){return P.apply(this,arguments)}function P(){return(P=Object(p.a)(o.a.mark(function t(e){var n,a,r,i,s,u;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=x(),a=e.account,r=window.web3,t.next=5,r.eth.getBlock("latest");case 5:return i=t.sent,s=i.gasLimit,t.next=9,n.methods.flipReveal().estimateGas({from:a});case 9:return u=t.sent,t.next=12,n.methods.flipReveal().send({from:a,gasPrice:s,gas:u});case 12:case"end":return t.stop()}},t)}))).apply(this,arguments)}function B(){return F.apply(this,arguments)}function F(){return(F=Object(p.a)(o.a.mark(function t(){var e,n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=x(),t.next=3,e.methods._revealed().call();case 3:return n=t.sent,t.abrupt("return",n);case 5:case"end":return t.stop()}},t)}))).apply(this,arguments)}function R(){return Q.apply(this,arguments)}function Q(){return(Q=Object(p.a)(o.a.mark(function t(){var e,n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=x(),t.next=3,e.methods.totalSupply().call();case 3:return n=t.sent,t.abrupt("return",n);case 5:case"end":return t.stop()}},t)}))).apply(this,arguments)}function D(t){return L.apply(this,arguments)}function L(){return(L=Object(p.a)(o.a.mark(function t(e){var n,a,r;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=x(),a=e.owner,window.web3.utils.isAddress(a)){t.next=5;break}return t.abrupt("return",alert("System Error"));case 5:return t.next=7,n.methods.balanceOf(a).call();case 7:return r=t.sent,t.abrupt("return",r);case 9:case"end":return t.stop()}},t)}))).apply(this,arguments)}function U(){return X.apply(this,arguments)}function X(){return(X=Object(p.a)(o.a.mark(function t(){var e,n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=x(),t.next=3,e.methods.MAX_SUPPLY().call();case 3:return n=t.sent,t.abrupt("return",n);case 5:case"end":return t.stop()}},t)}))).apply(this,arguments)}function Y(){return W.apply(this,arguments)}function W(){return(W=Object(p.a)(o.a.mark(function t(){var e,n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=x(),t.next=3,e.methods.maxBalance().call();case 3:return n=t.sent,t.abrupt("return",n);case 5:case"end":return t.stop()}},t)}))).apply(this,arguments)}function G(t){return Z.apply(this,arguments)}function Z(){return(Z=Object(p.a)(o.a.mark(function t(e){var n,a,r,i,s,u,c;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=x(),a=e.account,r=e.totalQuantity,i=window.web3,t.next=6,i.eth.getBlock("latest");case 6:return s=t.sent,u=s.gasLimit,t.next=10,n.methods.setMaxBalance(r).estimateGas({from:a});case 10:return c=t.sent,t.next=13,n.methods.setMaxBalance(r).send({from:a,gasPrice:u,gas:c});case 13:case"end":return t.stop()}},t)}))).apply(this,arguments)}function q(){return H.apply(this,arguments)}function H(){return(H=Object(p.a)(o.a.mark(function t(){var e,n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=x(),t.next=3,e.methods.maxMint().call();case 3:return n=t.sent,t.abrupt("return",n);case 5:case"end":return t.stop()}},t)}))).apply(this,arguments)}function J(t){return $.apply(this,arguments)}function $(){return($=Object(p.a)(o.a.mark(function t(e){var n,a,r,i,s,u,c;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=x(),a=e.account,r=e.totalQuantity,i=window.web3,t.next=6,i.eth.getBlock("latest");case 6:return s=t.sent,u=s.gasLimit,t.next=10,n.methods.setMaxMint(r).estimateGas({from:a});case 10:return c=t.sent,t.next=13,n.methods.setMaxMint(r).send({from:a,gasPrice:u,gas:c});case 13:case"end":return t.stop()}},t)}))).apply(this,arguments)}function z(){return K.apply(this,arguments)}function K(){return(K=Object(p.a)(o.a.mark(function t(){var e,n,a;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=x(),t.next=3,e.methods.mintPrice().call();case 3:return n=t.sent,a=window.web3.utils.fromWei(n),t.abrupt("return",a);case 6:case"end":return t.stop()}},t)}))).apply(this,arguments)}function V(t){return tt.apply(this,arguments)}function tt(){return(tt=Object(p.a)(o.a.mark(function t(e){var n,a,r,i,s,u,c;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=x(),a=e.account,r=window.web3.utils.toWei(e.price),i=window.web3,t.next=6,i.eth.getBlock("latest");case 6:return s=t.sent,u=s.gasLimit,t.next=10,n.methods.setMintPrice(r).estimateGas({from:a});case 10:return c=t.sent,t.next=13,n.methods.setMintPrice(r).send({from:a,gasPrice:u,gas:c});case 13:case"end":return t.stop()}},t)}))).apply(this,arguments)}var et=function(t){function e(){return Object(l.a)(this,e),Object(y.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(m.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-md-8"},r.a.createElement("p",{className:""},"Address: ",this.props.Account),r.a.createElement("button",{className:"btn btn-secondary mt-3 mt-md-4 px-4",onClick:this.props.ClickFun},"Connect to MetaMask")),r.a.createElement("div",{className:"col-md-4"})))}}]),e}(a.Component),nt=function(t){function e(){return Object(l.a)(this,e),Object(y.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(m.a)(e,[{key:"render",value:function(){return r.a.createElement("ul",{className:"w3-ul w3-border w3-white w3-text-grey"},r.a.createElement("li",{className:"w3-padding w3-xxxlarge"},"\u767c\u884c\u7e3d\u6578 ",r.a.createElement("span",{className:"w3-tag w3-teal w3-xxxlarge w3-margin-left"},this.props.MaxSupply)),r.a.createElement("li",{className:"w3-padding w3-xxxlarge"},"\u8ce3\u51fa\u6578\u91cf ",r.a.createElement("span",{className:"w3-tag w3-blue w3-xxxlarge w3-margin-left"},this.props.SoldOutAmount)),r.a.createElement("li",{className:"w3-padding w3-xxxlarge"},"\u5269\u9918\u6578\u91cf ",r.a.createElement("span",{className:"w3-tag w3-red w3-xxxlarge w3-margin-left"},this.props.RemainAmount)))}}]),e}(a.Component),at=function(t){function e(){return Object(l.a)(this,e),Object(y.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(m.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"w3-third w3-margin-bottom"},r.a.createElement("div",{className:"w3-container w3-white"},r.a.createElement("p",null,r.a.createElement("b",null,this.props.Titel)),r.a.createElement("p",{className:"w3-opacity"},this.props.SoldPrice),r.a.createElement("p",null,this.props.Descript),r.a.createElement("button",{className:"w3-button w3-black w3-margin-bottom",onClick:this.props.ClickFun},this.props.BtnTxt)))}}]),e}(a.Component),rt=function(t){function e(){return Object(l.a)(this,e),Object(y.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(m.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"w3-border w3-margin-bottom"},r.a.createElement("div",{className:"w3-container w3-white"},r.a.createElement("p",null,r.a.createElement("b",null,this.props.Titel)),r.a.createElement("p",{className:"w3-opacity"},this.props.Status),r.a.createElement("p",null,this.props.Input1_Descript),r.a.createElement("input",{className:"w3-input",type:this.props.Input1_Type,name:this.props.Input1_Name,onChange:this.props.Input1_ChangeFun}),r.a.createElement("p",null,this.props.Input2_Descript),r.a.createElement("input",{className:"w3-panel w3-round-large",type:this.props.Input2_Type,name:this.props.Input2_Name,onChange:this.props.Input2_ChangeFun}),r.a.createElement("br",null),r.a.createElement("button",{className:"w3-button w3-black w3-margin-bottom",onClick:this.props.ClickFun},this.props.BtnTxt)))}}]),e}(a.Component),it=function(t){function e(){return Object(l.a)(this,e),Object(y.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(m.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"w3-third w3-margin-bottom"},r.a.createElement("div",{className:"w3-container w3-white"},r.a.createElement("p",null,r.a.createElement("b",null,this.props.Titel)),r.a.createElement("p",{className:"w3-opacity"},this.props.Status),r.a.createElement("p",null,this.props.Input1_Descript),r.a.createElement("input",{className:"w3-panel w3-round-large",type:this.props.Input1_Type,name:this.props.Input1_Name,onChange:this.props.Input1_ChangeFun}),r.a.createElement("br",null),r.a.createElement("button",{className:"w3-button w3-black w3-margin-bottom",onClick:this.props.ClickFun},this.props.BtnTxt)))}}]),e}(a.Component),st=function(t){function e(){return Object(l.a)(this,e),Object(y.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(m.a)(e,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",{className:"w3-wide w3-center w3-red w3-xxxlarge"},this.props.Content))}}]),e}(a.Component),ut=n(199),ct=n.n(ut),ot=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(y.a)(this,Object(d.a)(e).call(this,t))).state={account:"0x0",owneraccount:"0x0",isSaleActive:"",isRevealed:"",toAddress:"",mintPrice:0,setmintPrice:0,toQuantity:0,balanceQuantity:0,totalSupply:0,MAX_SUPPLY:0,Max_Balance:0,MAX_Mint:0,setMax_Mint:0,setMaxBalanceQuantity:0,connectShowable:!0,mintShowable:!1,controlShowable:!1},n.gasfee=45e4,n.gaslimit="1000000000",n.isSaleActive=n.isSaleActive.bind(Object(f.a)(Object(f.a)(n))),n.isRevealed=n.isRevealed.bind(Object(f.a)(Object(f.a)(n))),n.MAXSUPPLY=n.MAXSUPPLY.bind(Object(f.a)(Object(f.a)(n))),n.setMaxBalance=n.setMaxBalance.bind(Object(f.a)(Object(f.a)(n))),n.mint=n.mint.bind(Object(f.a)(Object(f.a)(n))),n.mintTo=n.mintTo.bind(Object(f.a)(Object(f.a)(n))),n.connect=n.connect.bind(Object(f.a)(Object(f.a)(n))),n.approve=n.approve.bind(Object(f.a)(Object(f.a)(n))),n.flipReveal=n.flipReveal.bind(Object(f.a)(Object(f.a)(n))),n.flipSaleActive=n.flipSaleActive.bind(Object(f.a)(Object(f.a)(n))),n.handleInputChange=n.handleInputChange.bind(Object(f.a)(Object(f.a)(n))),n.withdraw=n.withdraw.bind(Object(f.a)(Object(f.a)(n))),n.OwnerbalanceOf=n.OwnerbalanceOf.bind(Object(f.a)(Object(f.a)(n))),n.setMintPrice=n.setMintPrice.bind(Object(f.a)(Object(f.a)(n))),n.setMaxMint=n.setMaxMint.bind(Object(f.a)(Object(f.a)(n))),n.mintShow=n.mintShow.bind(Object(f.a)(Object(f.a)(n))),n.controlShow=n.controlShow.bind(Object(f.a)(Object(f.a)(n))),n}return Object(h.a)(e,t),Object(m.a)(e,[{key:"componentWillMount",value:function(){var t=Object(p.a)(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.loadWeb3();case 2:if(!this.state.connectShowable){t.next=5;break}return t.next=5,this.connect();case 5:if(!this.state.mintShowable){t.next=12;break}return t.next=8,this.MAXSUPPLY();case 8:return t.next=10,this.totalSupply();case 10:return t.next=12,this.mintPrice();case 12:if(!this.state.controlShowable){t.next=21;break}return t.next=15,this.MaxMint();case 15:return t.next=17,this.MAXBalance();case 17:return t.next=19,this.isRevealed();case 19:return t.next=21,this.isSaleActive();case 21:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"loadWeb3",value:function(){var t=Object(p.a)(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:window.ethereum?window.web3=new w.a(window.ethereum):window.web3?window.web3=new w.a(window.web3.currentProvider):(this.setState({connectShowable:!1}),window.alert("Non ethereum browser detected. You should consider Metamask!"));case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"connect",value:function(){var t=Object(p.a)(o.a.mark(function t(){var e,n=this;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=window.ethereum,t.next=3,e.request({method:"eth_requestAccounts"}).then(function(t){n.setState({account:t[0]})}).then(function(){n.connectShowAble()});case 3:e.on("accountsChanged",function(t){n.setState({account:t[0]}),n.connectShowAble()});case 4:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}()},{key:"connectShowAble",value:function(){this.mintShow(),this.controlShow()}},{key:"mintShow",value:function(){var t=function(t){return""!==t&&void 0!==t&&t.length>0}(this.state.account);this.setState({mintShowable:t})}},{key:"controlShow",value:function(){var t=function(t){return(""===t||void 0===t?"0x0":t.toUpperCase()).toUpperCase()===v.Walletaddress.toUpperCase()}(this.state.account);this.setState({controlShowable:t})}},{key:"mint",value:function(){var t=Object(p.a)(o.a.mark(function t(e){var n,a,r,i;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=this.state.account,a=e,r=this.state.mintPrice*a,i={accountAddress:n,totalQuantity:a,price:r,gasfee:this.gasfee,gaslimt:this.gaslimit},t.next=6,g(i);case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"mintTo",value:function(){var t=Object(p.a)(o.a.mark(function t(){var e,n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.state.account,n={accountAddress:e,totalQuantity:this.state.toQuantity,toAddress:this.state.toAddress,gasfee:this.gasfee,gaslimt:this.gaslimit},t.next=4,T(n);case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"totalSupply",value:function(){var t=Object(p.a)(o.a.mark(function t(){var e;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,R();case 2:e=t.sent,this.setState({totalSupply:e});case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"isSaleActive",value:function(){var t=Object(p.a)(o.a.mark(function t(){var e;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_();case 2:e=t.sent,this.setState({isSaleActive:e?"\u958b\u555f":"\u95dc\u9589"});case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"isRevealed",value:function(){var t=Object(p.a)(o.a.mark(function t(){var e;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B();case 2:e=t.sent,this.setState({isRevealed:e?"\u958b\u555f":"\u95dc\u9589"});case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"approve",value:function(){var t=Object(p.a)(o.a.mark(function t(){var e,n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.state.account,n={account:e,gasfee:this.gasfee,gaslimt:this.gaslimit},t.next=4,M(n);case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"withdraw",value:function(){var t=Object(p.a)(o.a.mark(function t(){var e,n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.state.account,n={account:e,gasfee:this.gasfee,gaslimt:this.gaslimit},t.next=4,S(n);case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"flipReveal",value:function(){var t=Object(p.a)(o.a.mark(function t(){var e,n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.state.account,n={account:e,gasfee:this.gasfee,gaslimt:this.gaslimit},t.next=4,C(n);case 4:return t.next=6,this.isRevealed();case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"flipSaleActive",value:function(){var t=Object(p.a)(o.a.mark(function t(){var e,n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.state.account,n={account:e,gasfee:this.gasfee,gaslimt:this.gaslimit},t.next=4,A(n);case 4:return t.next=6,this.isSaleActive();case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"OwnerbalanceOf",value:function(){var t=Object(p.a)(o.a.mark(function t(){var e,n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e={owner:this.state.owneraccount},t.next=3,D(e);case 3:n=t.sent,this.setState({balanceQuantity:n});case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"mintPrice",value:function(){var t=Object(p.a)(o.a.mark(function t(){var e;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,z();case 2:e=t.sent,this.setState({mintPrice:e});case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"setMintPrice",value:function(){var t=Object(p.a)(o.a.mark(function t(){var e,n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.state.account,n={account:e,price:this.state.setmintPrice,gasfee:this.gasfee,gaslimt:this.gaslimit},t.next=4,V(n);case 4:return t.next=6,this.mintPrice();case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"MAXSUPPLY",value:function(){var t=Object(p.a)(o.a.mark(function t(){var e;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,U();case 2:e=t.sent,this.setState({MAX_SUPPLY:e});case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"MAXBalance",value:function(){var t=Object(p.a)(o.a.mark(function t(){var e;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Y();case 2:e=t.sent,this.setState({Max_Balance:e});case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"setMaxBalance",value:function(){var t=Object(p.a)(o.a.mark(function t(){var e,n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.state.account,n={account:e,totalQuantity:this.state.setMaxBalanceQuantity,gasfee:this.gasfee,gaslimt:this.gaslimit},t.next=4,G(n);case 4:return t.next=6,this.MAXBalance();case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"MaxMint",value:function(){var t=Object(p.a)(o.a.mark(function t(){var e;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,q();case 2:e=t.sent,this.setState({MAX_Mint:e});case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"setMaxMint",value:function(){var t=Object(p.a)(o.a.mark(function t(){var e,n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.state.account,n={account:e,totalQuantity:this.state.setMax_Mint,gasfee:this.gasfee,gaslimt:this.gaslimit},t.next=4,J(n);case 4:return t.next=6,this.MaxMint();case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"handleInputChange",value:function(t){t.preventDefault();var e=t.target,n=e.value,a=e.name;this.setState(Object(u.a)({},a,n))}},{key:"render",value:function(){var t=this;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"",style:{maxwidth:"2000px",margintop:"46px"}},r.a.createElement("div",{className:"w3-black",id:"tour",style:{backgroundImage:"url(".concat(ct.a,")")}},r.a.createElement("div",{className:"w3-container w3-content w3-padding-64",style:{maxwidth:"800px"}},r.a.createElement(et,{Account:this.state.account,ClickFun:this.connect}),r.a.createElement("h2",{className:"w3-wide w3-center"},"Mint"),r.a.createElement("p",{className:"w3-opacity w3-center"},r.a.createElement("i",null,"Remember to book your tickets!")),r.a.createElement("br",null),this.state.mintShowable?r.a.createElement("div",null,r.a.createElement(nt,{MaxSupply:this.state.MAX_SUPPLY,SoldOutAmount:this.state.totalSupply,RemainAmount:this.state.MAX_SUPPLY-this.state.totalSupply}),r.a.createElement("div",{className:"w3-row-padding w3-padding-32",style:{margin:"0-16px"}},r.a.createElement(at,{Titel:"Mint 1\u500b",SoldPrice:"\u552e\u50f9\uff1a"+1*this.state.mintPrice+"ETH",ClickFun:function(){return t.mint(1)},Descript:"\u4e00\u500b\u525b\u525b\u597d\uff01",BtnTxt:"Mint"}),r.a.createElement(at,{Titel:"Mint 5+1\u500b",SoldPrice:"\u552e\u50f9\uff1a"+5*this.state.mintPrice+"ETH",ClickFun:function(){return t.mint(5)},Descript:"\u7279\u60e0!\u8cb7\u4e94\u9001\u4e00!",BtnTxt:"Mint 5+1"}),r.a.createElement(at,{Titel:"Mint 10+3\u500b",SoldPrice:"\u552e\u50f9\uff1a"+10*this.state.mintPrice+"ETH",ClickFun:function(){return t.mint(10)},Descript:"\u7279\u60e0!\u8cb7\u4e94\u9001\u4e00!",BtnTxt:"Mint 10+3"}))):r.a.createElement(st,{Content:"Please Connect Your MetaMask"})),this.state.controlShowable&&r.a.createElement("div",{className:"w3-container w3-content w3-padding-64",style:{maxwidth:"800px"}},r.a.createElement("h2",{className:"w3-wide w3-center"},"\u5f8c\u53f0\u64cd\u4f5c"),r.a.createElement("div",{className:"w3-row-padding w3-padding-32",style:{margin:"0-16px"}},r.a.createElement(rt,{Titel:"\u7a7a\u6295",Input1_Descript:"\u8f38\u5165\u7a7a\u6295\u5730\u5740",Input1_Type:"text",Input1_Name:"toAddress",Input1_ChangeFun:this.handleInputChange,Input2_Descript:"\u8f38\u5165\u7a7a\u6295\u6578\u91cf",Input2_Type:"Number",Input2_Name:"toQuantity",Input2_ChangeFun:this.handleInputChange,ClickFun:this.mintTo,BtnTxt:"\u7a7a\u6295"}),r.a.createElement(it,{Titel:"\u8a2d\u5b9aMint\u50f9\u683c",Status:"\u73fe\u5728\u50f9\u683c"+this.state.mintPrice+"Eth",Input1_Descript:"\u8f38\u5165Mint\u50f9\u683c",Input1_Type:"text",Input1_Name:"setmintPrice",Input1_ChangeFun:this.handleInputChange,ClickFun:this.setMintPrice,BtnTxt:"\u4fee\u6539"}),r.a.createElement(it,{Titel:"\u8a2d\u5b9a\u4e00\u6b21Mint\u6578\u91cf\u4e0a\u9650",Status:"\u73fe\u5728\u6578\u91cf\u4e0a\u9650"+this.state.MAX_Mint,Input1_Descript:"\u8f38\u5165Mint\u4e0a\u9650",Input1_Type:"text",Input1_Name:"setMax_Mint",Input1_ChangeFun:this.handleInputChange,ClickFun:this.setMaxBalance,BtnTxt:"\u4fee\u6539"}),r.a.createElement(it,{Titel:"\u8a2d\u5b9a\u6301\u6709NFT\u6578\u91cf\u4e0a\u9650",Status:"\u73fe\u5728\u6578\u91cf\u4e0a\u9650"+this.state.Max_Balance,Input1_Descript:"\u8f38\u5165NFT\u6578\u91cf\u4e0a\u9650",Input1_Type:"text",Input1_Name:"setMaxBalanceQuantity",Input1_ChangeFun:this.handleInputChange,ClickFun:this.setMaxMint,BtnTxt:"\u4fee\u6539"}),r.a.createElement(rt,{Titel:"\u67e5\u8a62\u6301\u6709\u6578\u91cf",Input1_Descript:"\u8f38\u5165\u67e5\u8a62\u5730\u5740",Input1_Type:"text",Input1_Name:"owneraccount",Input1_ChangeFun:this.handleInputChange,Input2_Descript:"\u6301\u6709\u6578\u91cf\uff1a"+this.state.balanceQuantity,Input2_Type:"hidden",ClickFun:this.OwnerbalanceOf,BtnTxt:"\u67e5\u8a62"}),r.a.createElement(at,{Titel:"\u76f2\u76d2\u958b\u555f/\u95dc\u9589",SoldPrice:"\u73fe\u5728\u72c0\u614b\uff1a"+this.state.isRevealed,ClickFun:function(){return t.flipReveal()},Descript:"\u76f2\u76d2\u958b\u555f/\u95dc\u9589",BtnTxt:"\u958b\u555f/\u95dc\u9589"}),r.a.createElement(at,{Titel:"\u92b7\u552e\u958b\u555f/\u95dc\u9589",SoldPrice:"\u73fe\u5728\u72c0\u614b\uff1a"+this.state.isSaleActive,ClickFun:function(){return t.flipSaleActive()},Descript:"\u92b7\u552e\u958b\u555f/\u95dc\u9589",BtnTxt:"\u958b\u555f/\u95dc\u9589"}),r.a.createElement(at,{Titel:"\u91d1\u9322\u8f49\u51fa",SoldPrice:"\u91d1\u9322\u8f49\u51fa",ClickFun:function(){return t.withdraw()},Descript:"\u91d1\u9322\u8f49\u51fa",BtnTxt:"\u8f49\u51fa"}))))))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(ot,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},70:function(t){t.exports={address:"0x6D717aC9f2a661658de2c0e9e0aB852896B050fB",Walletaddress:"0x1497E8e3C15147D908b4209B474CD2F78e689B3E",abi:[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{inputs:[],name:"ApprovalCallerNotOwnerNorApproved",type:"error"},{inputs:[],name:"ApprovalQueryForNonexistentToken",type:"error"},{inputs:[],name:"ApprovalToCurrentOwner",type:"error"},{inputs:[],name:"ApproveToCaller",type:"error"},{inputs:[],name:"BalanceQueryForZeroAddress",type:"error"},{inputs:[],name:"MintToZeroAddress",type:"error"},{inputs:[],name:"MintZeroQuantity",type:"error"},{inputs:[],name:"OwnerQueryForNonexistentToken",type:"error"},{inputs:[],name:"TransferCallerNotOwnerNorApproved",type:"error"},{inputs:[],name:"TransferFromIncorrectOwner",type:"error"},{inputs:[],name:"TransferToNonERC721ReceiverImplementer",type:"error"},{inputs:[],name:"TransferToZeroAddress",type:"error"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[],name:"MAX_SUPPLY",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"_isFomo",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"_isPreSaleActive",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"_isSaleActive",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"_revealed",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"addWhiteList",outputs:[{internalType:"bool",name:"success",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"baseExtension",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"flipReveal",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"flipSaleActive",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"maxBalance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"maxMint",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"quantity",type:"uint256"}],name:"mint721A",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenQuantity",type:"uint256"}],name:"mintNFT",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenQuantity",type:"uint256"},{internalType:"address",name:"to",type:"address"}],name:"mintNFTToOther",outputs:[],stateMutability:"payable",type:"function"},{inputs:[],name:"mintPrice",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"notRevealedUri",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenQuantity",type:"uint256"}],name:"preSale",outputs:[],stateMutability:"payable",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"_newBaseExtension",type:"string"}],name:"setBaseExtension",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"_newBaseURI",type:"string"}],name:"setBaseURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_maxBalance",type:"uint256"}],name:"setMaxBalance",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_maxMint",type:"uint256"}],name:"setMaxMint",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_mintPrice",type:"uint256"}],name:"setMintPrice",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"_notRevealedURI",type:"string"}],name:"setNotRevealedURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"setisFomo",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"setisPreSaleActive",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"}],name:"withdraw",outputs:[],stateMutability:"nonpayable",type:"function"}]}}},[[200,2,1]]]);
//# sourceMappingURL=main.b444fbdf.chunk.js.map