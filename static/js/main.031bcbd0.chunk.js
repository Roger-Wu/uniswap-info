(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{178:function(e,t,a){e.exports=a(512)},183:function(e,t,a){},327:function(e,t,a){},329:function(e,t,a){},362:function(e,t){},364:function(e,t){},391:function(e,t){},436:function(e,t){},510:function(e,t,a){},512:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(174),r=a.n(o),d=(a(183),a(97)),u=a.n(d),i=a(175),c=a(30),l=a(31),m=a(34),p=a(32),y=a(33),h=a(50),b=a(73),f=a(51),E=(a(327),function(e){function t(e){return Object(c.a)(this,t),Object(m.a)(this,Object(p.a)(t).call(this,e))}return Object(y.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e="https://www.etherscan.io/address/"+this.props.tokenAddress,t="https://www.etherscan.io/address/"+this.props.exchangeAddress;return s.a.createElement("table",{className:"TokenPoolDetails"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Symbol"),s.a.createElement("th",null,"Token"),s.a.createElement("th",null,"Exchange"),s.a.createElement("th",null,"Pool Size (ETH)"),s.a.createElement("th",null,"Pool Size (",this.props.curFactory,")"),s.a.createElement("th",null,"Pool Share"),s.a.createElement("th",null,"Accrued Fees (Estimated)"))),s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",null,this.props.curFactory),s.a.createElement("td",null,s.a.createElement("a",{href:e,target:"_blank"},s.a.createElement("div",{className:"truncate"},this.props.tokenAddress))),s.a.createElement("td",null,s.a.createElement("a",{href:t,target:"_blank"},s.a.createElement("div",{className:"truncate"},this.props.exchangeAddress))),s.a.createElement("td",null,this.props.curEthPoolTotal),s.a.createElement("td",null,this.props.curTokenPoolTotal),s.a.createElement("td",null,this.props.curPoolShare),s.a.createElement("td",null,this.props.myCollectedEthFees,this.props.myCollectedTokenFees))))}}]),t}(s.a.Component));a(329);function k(e){return e.eventList.map(function(t){return function(e,t){var a="https://etherscan.io/tx/"+e.tx,n="https://etherscan.io/block/"+e.block,o="https://etherscan.io/address/"+e.provider,r="";e.provider.toUpperCase()===t.toUpperCase()&&(r="myTransaction");return s.a.createElement("tr",{key:e.id,className:r},s.a.createElement("td",null,e.type),s.a.createElement("td",null,s.a.createElement("a",{href:a,target:"_blank"},s.a.createElement("div",{className:"truncate"},e.tx))),s.a.createElement("td",null,s.a.createElement("a",{href:n,target:"_blank"},e.block)),s.a.createElement("td",null,(e.block,"-")),s.a.createElement("td",null,s.a.createElement("a",{href:o,target:"_blank"},s.a.createElement("div",{className:"truncate"},e.provider))),s.a.createElement("td",null,e.numEth),s.a.createElement("td",null,e.numTokens),s.a.createElement("td",null,e.liquidtyProviderFee),s.a.createElement("td",null,e.curPoolShare))}(t,e.myAddress)})}var v=function(e){function t(e){return Object(c.a)(this,t),Object(m.a)(this,Object(p.a)(t).call(this,e))}return Object(y.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("table",{className:"TokenPoolHistory"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Event"),s.a.createElement("th",null,"Tx"),s.a.createElement("th",null,"Block"),s.a.createElement("th",null,"Time"),s.a.createElement("th",null,"Address"),s.a.createElement("th",null,"Pool Adjustment (ETH)"),s.a.createElement("th",null,"Pool Adjustment (",this.props.curFactory,")"),s.a.createElement("th",null,"Provider Fee"),s.a.createElement("th",null,"Pool Share"))),s.a.createElement("tbody",null,k(this.props)))}}]),t}(s.a.Component),g={initial:"ANT",tokens:{"0xBTC":{address:"0x701564Aa6E26816147D4fa211a0779F1B774Bb9B",decimals:8},ADX:{address:"0xb800445dd982C1311523fD465aC44f55093B2b5B",decimals:4},AGI:{address:"0xdF02FFeaFdB79e564ae9fdaC6545C5f4c2178400",decimals:8},ANT:{address:"0x077d52B047735976dfdA76feF74d4d988AC25196",decimals:18},ASTRO:{address:"0xbd4479C98DC21563Ba822c3C206D8339698e2dd4",decimals:4},BAT:{address:"0x2E642b8D59B45a1D8c5aEf716A84FF44ea665914",decimals:18},BOOTY:{address:"0xEf465915f2D6d8183a7D5eE134A53f00c780d3E9",decimals:18},BORIS:{address:"0x4E0E28d426caf318747B8E05C8B0564A580E39a7",decimals:18},BNB:{address:"0x255e60c9d597dcaa66006a904ed36424f7b26286",decimals:18},BNTY:{address:"0xD1f3e9B413f5c9Fd56F044699c64ff710E7e5A9A",decimals:18},BPT:{address:"0xb2744df7BfbB4802F44fd1B1fD9012502d4AF704",decimals:18},BTU:{address:"0xeA3A62838477082d8f2106c43796D636dc78d8A4",decimals:18},CND:{address:"0x21B8a991A203A440c83450564FDefa3DB10A5004",decimals:18},CVC:{address:"0x1C6c712b1F4a7c263B1DBd8F97fb447c945d3b9a",decimals:8},DAI:{address:"0x09cabec1ead1c0ba254b09efb3ee13841712be14",decimals:18},DNT:{address:"0xaA3B3810c8AaDA6cBd2Ce262699903ad7AE6a7ef",decimals:18},DTH:{address:"0xE18256CD23EFcDC4f95581e86f61EA1b09afD02a",decimals:18},e11:{address:"0x4785cEDbd89C818D60988dc5979b029F3900B54b",decimals:18},ENTRP:{address:"0xa1c467dC897a36689dbbADcC212B212b4f526E49",decimals:18},FUN:{address:"0x60a87cC7Fca7E53867facB79DA73181B1bB4238B",decimals:8},GNO:{address:"0xe8e45431b93215566ba923a7e611b7342ea954df",decimals:18},GRID:{address:"0x4B17685b330307C751B47f33890c8398dF4Fe407",decimals:12},GUSD:{address:"0xD883264737Ed969d2696eE4B4cAF529c2Fc2A141",decimals:2},HBZ:{address:"0xD1A8c5ba35752E4b62C71C795A3F6481FaA4D36e",decimals:18},HUM:{address:"0x7d31fc38dDD7d6907F820F4268f1d8D5d5797826",decimals:18},ICN:{address:"0x467fB51D54d7e51eE925F7f1a81AD5f2a0211169",decimals:18},KIWI:{address:"0x380FDc8bB8722915076a09479d1bbC75e69c8Be0",decimals:8},KNC:{address:"0x49c4f9bc14884f6210f28342ced592a633801a8b",decimals:18},LBA:{address:"0xE79fE64771d5351b936eEaC6222682C3D878063E",decimals:18},LINK:{address:"0xf173214c720f58e03e194085b1db28b50acdeead",decimals:18},LOOM:{address:"0x417cb32bc991fbbdcae230c7c4771cc0d69daa6b",decimals:18},LPT:{address:"0xc4a1C45D5546029Fd57128483aE65b56124BFA6A",decimals:18},MANA:{address:"0xc6581ce3a005e2801c1e0903281bbd318ec5b5c2",decimals:18},MKR:{address:"0x2C4Bd064b998838076fa341A83d007FC2FA50957",decimals:18},MLN:{address:"0xaec97872D14aC79e95Fff18c169BFd183efc6962",decimals:18},NMR:{address:"0x2Bf5A5bA29E60682fC56B2Fcf9cE07Bef4F6196f",decimals:18},nUSD:{address:"0x69f276aBd6456152d519D23086031DA7c73F91b8",decimals:18},PNK:{address:"0xF506828B166de88cA2EDb2A98D960aBba0D2402A",decimals:18},PRG:{address:"0x817e391bAf312Dc5078CD7A98a7A0255ac63Ca48",decimals:6},PTOY:{address:"0xE8Bc0a210aAF86dAb4DD600facA5CfE492e2e084",decimals:8},REN:{address:"0x43892992B0b102459E895B88601Bb2C76736942c",decimals:18},REP:{address:"0x48b04d2a05b6b604d8d5223fd1984f191ded51af",decimals:18},RHOC:{address:"0x394e524b47A3AB3D3327f7fF6629dC378c1494a3",decimals:8},SALT:{address:"0xC0C59cDe851bfcbdddD3377EC10ea54A18Efb937",decimals:8},SAN:{address:"0x8a8D7aD4b89D91983cd069C58C4AA9F2f4166298",decimals:18},SIM:{address:"0x174dFb6E6E78C95678580b553eeE7F282B28C795",decimals:2},SNT:{address:"0x1aec8f11a7e78dc22477e91ed924fab46e3a88fd",decimals:18},SPANK:{address:"0x4e395304655f0796bc3bc63709db72173b9ddf98",decimals:18},NEXO:{address:"0x069C97DBA948175D10af4b2414969e0B88d44669",decimals:18},TRAC:{address:"0x38577ccec0cefFD178FD3Be66e1c6f531BFa410e",decimals:18},VERI:{address:"0x17e5BF07D696eaf0d14caA4B44ff8A1E17B34de3",decimals:18},WETH:{address:"0xA2881A90Bf33F03E7a3f803765Cd2ED5c8928dFb",decimals:18},ZRX:{address:"0xae76c84c9262cdb9abc0c2c8888e62db8e22a0bf",decimals:18}}},x={abi:[{anonymous:!1,inputs:[{indexed:!0,name:"buyer",type:"address"},{indexed:!0,name:"eth_sold",type:"uint256"},{indexed:!0,name:"tokens_bought",type:"uint256"}],name:"TokenPurchase",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"buyer",type:"address"},{indexed:!0,name:"tokens_sold",type:"uint256"},{indexed:!0,name:"eth_bought",type:"uint256"}],name:"EthPurchase",type:"event"},{name:"AddLiquidity",inputs:[{type:"address",name:"provider",indexed:!0},{type:"uint256",name:"   ",indexed:!0},{type:"uint256",name:"token_amount",indexed:!0}],anonymous:!1,type:"event"},{name:"RemoveLiquidity",inputs:[{type:"address",name:"provider",indexed:!0},{type:"uint256",name:"eth_amount",indexed:!0},{type:"uint256",name:"token_amount",indexed:!0}],anonymous:!1,type:"event"},{name:"Transfer",inputs:[{type:"address",name:"_from",indexed:!0},{type:"address",name:"_to",indexed:!0},{type:"uint256",name:"_value",indexed:!1}],anonymous:!1,type:"event"},{name:"Approval",inputs:[{type:"address",name:"_owner",indexed:!0},{type:"address",name:"_spender",indexed:!0},{type:"uint256",name:"_value",indexed:!1}],anonymous:!1,type:"event"},{name:"setup",outputs:[],inputs:[{type:"address",name:"token_addr"}],constant:!1,payable:!1,type:"function",gas:175875},{name:"addLiquidity",outputs:[{type:"uint256",name:"out"}],inputs:[{type:"uint256",name:"min_liquidity"},{type:"uint256",name:"max_tokens"},{type:"uint256",name:"deadline"}],constant:!1,payable:!0,type:"function",gas:82616},{name:"removeLiquidity",outputs:[{type:"uint256",name:"out"},{type:"uint256",name:"out"}],inputs:[{type:"uint256",name:"amount"},{type:"uint256",name:"min_eth"},{type:"uint256",name:"min_tokens"},{type:"uint256",name:"deadline"}],constant:!1,payable:!1,type:"function",gas:116814},{name:"__default__",outputs:[],inputs:[],constant:!1,payable:!0,type:"function"},{name:"ethToTokenSwapInput",outputs:[{type:"uint256",name:"out"}],inputs:[{type:"uint256",name:"min_tokens"},{type:"uint256",name:"deadline"}],constant:!1,payable:!0,type:"function",gas:12757},{name:"ethToTokenTransferInput",outputs:[{type:"uint256",name:"out"}],inputs:[{type:"uint256",name:"min_tokens"},{type:"uint256",name:"deadline"},{type:"address",name:"recipient"}],constant:!1,payable:!0,type:"function",gas:12965},{name:"ethToTokenSwapOutput",outputs:[{type:"uint256",name:"out"}],inputs:[{type:"uint256",name:"tokens_bought"},{type:"uint256",name:"deadline"}],constant:!1,payable:!0,type:"function",gas:50463},{name:"ethToTokenTransferOutput",outputs:[{type:"uint256",name:"out"}],inputs:[{type:"uint256",name:"tokens_bought"},{type:"uint256",name:"deadline"},{type:"address",name:"recipient"}],constant:!1,payable:!0,type:"function",gas:50671},{name:"tokenToEthSwapInput",outputs:[{type:"uint256",name:"out"}],inputs:[{type:"uint256",name:"tokens_sold"},{type:"uint256",name:"min_eth"},{type:"uint256",name:"deadline"}],constant:!1,payable:!1,type:"function",gas:47503},{name:"tokenToEthTransferInput",outputs:[{type:"uint256",name:"out"}],inputs:[{type:"uint256",name:"tokens_sold"},{type:"uint256",name:"min_eth"},{type:"uint256",name:"deadline"},{type:"address",name:"recipient"}],constant:!1,payable:!1,type:"function",gas:47712},{name:"tokenToEthSwapOutput",outputs:[{type:"uint256",name:"out"}],inputs:[{type:"uint256",name:"eth_bought"},{type:"uint256",name:"max_tokens"},{type:"uint256",name:"deadline"}],constant:!1,payable:!1,type:"function",gas:50175},{name:"tokenToEthTransferOutput",outputs:[{type:"uint256",name:"out"}],inputs:[{type:"uint256",name:"eth_bought"},{type:"uint256",name:"max_tokens"},{type:"uint256",name:"deadline"},{type:"address",name:"recipient"}],constant:!1,payable:!1,type:"function",gas:50384},{name:"tokenToTokenSwapInput",outputs:[{type:"uint256",name:"out"}],inputs:[{type:"uint256",name:"tokens_sold"},{type:"uint256",name:"min_tokens_bought"},{type:"uint256",name:"min_eth_bought"},{type:"uint256",name:"deadline"},{type:"address",name:"token_addr"}],constant:!1,payable:!1,type:"function",gas:51007},{name:"tokenToTokenTransferInput",outputs:[{type:"uint256",name:"out"}],inputs:[{type:"uint256",name:"tokens_sold"},{type:"uint256",name:"min_tokens_bought"},{type:"uint256",name:"min_eth_bought"},{type:"uint256",name:"deadline"},{type:"address",name:"recipient"},{type:"address",name:"token_addr"}],constant:!1,payable:!1,type:"function",gas:51098},{name:"tokenToTokenSwapOutput",outputs:[{type:"uint256",name:"out"}],inputs:[{type:"uint256",name:"tokens_bought"},{type:"uint256",name:"max_tokens_sold"},{type:"uint256",name:"max_eth_sold"},{type:"uint256",name:"deadline"},{type:"address",name:"token_addr"}],constant:!1,payable:!1,type:"function",gas:54928},{name:"tokenToTokenTransferOutput",outputs:[{type:"uint256",name:"out"}],inputs:[{type:"uint256",name:"tokens_bought"},{type:"uint256",name:"max_tokens_sold"},{type:"uint256",name:"max_eth_sold"},{type:"uint256",name:"deadline"},{type:"address",name:"recipient"},{type:"address",name:"token_addr"}],constant:!1,payable:!1,type:"function",gas:55019},{name:"tokenToExchangeSwapInput",outputs:[{type:"uint256",name:"out"}],inputs:[{type:"uint256",name:"tokens_sold"},{type:"uint256",name:"min_tokens_bought"},{type:"uint256",name:"min_eth_bought"},{type:"uint256",name:"deadline"},{type:"address",name:"exchange_addr"}],constant:!1,payable:!1,type:"function",gas:49342},{name:"tokenToExchangeTransferInput",outputs:[{type:"uint256",name:"out"}],inputs:[{type:"uint256",name:"tokens_sold"},{type:"uint256",name:"min_tokens_bought"},{type:"uint256",name:"min_eth_bought"},{type:"uint256",name:"deadline"},{type:"address",name:"recipient"},{type:"address",name:"exchange_addr"}],constant:!1,payable:!1,type:"function",gas:49532},{name:"tokenToExchangeSwapOutput",outputs:[{type:"uint256",name:"out"}],inputs:[{type:"uint256",name:"tokens_bought"},{type:"uint256",name:"max_tokens_sold"},{type:"uint256",name:"max_eth_sold"},{type:"uint256",name:"deadline"},{type:"address",name:"exchange_addr"}],constant:!1,payable:!1,type:"function",gas:53233},{name:"tokenToExchangeTransferOutput",outputs:[{type:"uint256",name:"out"}],inputs:[{type:"uint256",name:"tokens_bought"},{type:"uint256",name:"max_tokens_sold"},{type:"uint256",name:"max_eth_sold"},{type:"uint256",name:"deadline"},{type:"address",name:"recipient"},{type:"address",name:"exchange_addr"}],constant:!1,payable:!1,type:"function",gas:53423},{name:"getEthToTokenInputPrice",outputs:[{type:"uint256",name:"out"}],inputs:[{type:"uint256",name:"eth_sold"}],constant:!0,payable:!1,type:"function",gas:5542},{name:"getEthToTokenOutputPrice",outputs:[{type:"uint256",name:"out"}],inputs:[{type:"uint256",name:"tokens_bought"}],constant:!0,payable:!1,type:"function",gas:6872},{name:"getTokenToEthInputPrice",outputs:[{type:"uint256",name:"out"}],inputs:[{type:"uint256",name:"tokens_sold"}],constant:!0,payable:!1,type:"function",gas:5637},{name:"getTokenToEthOutputPrice",outputs:[{type:"uint256",name:"out"}],inputs:[{type:"uint256",name:"eth_bought"}],constant:!0,payable:!1,type:"function",gas:6897},{name:"tokenAddress",outputs:[{type:"address",name:"out"}],inputs:[],constant:!0,payable:!1,type:"function",gas:1413},{name:"factoryAddress",outputs:[{type:"address",name:"out"}],inputs:[],constant:!0,payable:!1,type:"function",gas:1443},{name:"balanceOf",outputs:[{type:"uint256",name:"out"}],inputs:[{type:"address",name:"_owner"}],constant:!0,payable:!1,type:"function",gas:1645},{name:"transfer",outputs:[{type:"bool",name:"out"}],inputs:[{type:"address",name:"_to"},{type:"uint256",name:"_value"}],constant:!1,payable:!1,type:"function",gas:75034},{name:"transferFrom",outputs:[{type:"bool",name:"out"}],inputs:[{type:"address",name:"_from"},{type:"address",name:"_to"},{type:"uint256",name:"_value"}],constant:!1,payable:!1,type:"function",gas:110907},{name:"approve",outputs:[{type:"bool",name:"out"}],inputs:[{type:"address",name:"_spender"},{type:"uint256",name:"_value"}],constant:!1,payable:!1,type:"function",gas:38769},{name:"allowance",outputs:[{type:"uint256",name:"out"}],inputs:[{type:"address",name:"_owner"},{type:"address",name:"_spender"}],constant:!0,payable:!1,type:"function",gas:1925},{name:"name",outputs:[{type:"bytes32",name:"out"}],inputs:[],constant:!0,payable:!1,type:"function",gas:1623},{name:"symbol",outputs:[{type:"bytes32",name:"out"}],inputs:[],constant:!0,payable:!1,type:"function",gas:1653},{name:"decimals",outputs:[{type:"uint256",name:"out"}],inputs:[],constant:!0,payable:!1,type:"function",gas:1683},{name:"totalSupply",outputs:[{type:"uint256",name:"out"}],inputs:[],constant:!0,payable:!1,type:"function",gas:1713}]},_=a(177),F=a.n(_);a(510);function A(e){var t=e.activeFactory;return e.tokensInRow.map(function(e){var a="?token="+e;return e===t?s.a.createElement("td",{key:e,className:"token-selector-active"},s.a.createElement("div",{className:"token-selector-active"},e)):s.a.createElement("td",{key:e},s.a.createElement("a",{href:a},e))})}function T(e){var t=[];t.push([]);for(var a=e.activeFactory,n=Object.keys(g.tokens),o=0;o<n.length;o++){1===t[t.length-1].length&&t.push([]);var r=n[o];t[t.length-1].push(r)}return t.map(function(e,t){return s.a.createElement("tr",{key:t},s.a.createElement(A,{tokensInRow:e,activeFactory:a}))})}var D=function(e){function t(){var e;Object(c.a)(this,t),(e=Object(m.a)(this,Object(p.a)(t).call(this))).retrieveData=function(){if(!e.didRequestData)if("undefined"!==typeof web3){if(e.web3Provider=window.web3.currentProvider,window.web3=new F.a(window.web3.currentProvider),console.log(e.state.curFactory),"undefined"===typeof e.state.curFactory)return;var t=g.tokens[e.state.curFactory].address,a=Math.pow(10,g.tokens[e.state.curFactory].decimals),n=new window.web3.eth.Contract(x.abi,t),s=Object(h.a)(Object(h.a)(e));n.methods.tokenAddress().call().then(function(e){s.setState({tokenAddress:e})}),e.didRequestData=!0,window.web3.eth.getCoinbase().then(function(o){null===o&&(o="Locked"),e.myAddress=o,e.setState({myAddress:o});var r={address:t,fromBlock:6627944,toBlock:"latest"};n.getPastEvents("allEvents",r).then(function(t){console.log(t);var n,o=[],r=0,d=0,u=0,i=0,c=new f.BigNumber(0),l=new f.BigNumber(0),m=0,p=0;t.forEach(function(t){var s,y,h=t.event,b={type:h,curPoolShare:0,numEth:0,numTokens:0,id:t.id,tx:t.transactionHash,provider:t.returnValues.provider,block:t.blockNumber,liquidtyProviderFee:"-",volume:0};if("AddLiquidity"===h)s=t.returnValues[1]/1e18,y=t.returnValues.token_amount/a,b.type="Add Liquidty",b.provider.toUpperCase()===e.state.myAddress.toUpperCase()&&(m+=s,p+=y);else if("RemoveLiquidity"===h)s=-t.returnValues.eth_amount/1e18,y=-t.returnValues.token_amount/a,b.type="Remove Liquidty",b.provider.toUpperCase()===e.state.myAddress.toUpperCase()&&(m+=s,p+=y);else if("TokenPurchase"===h)s=t.returnValues.eth_sold/1e18,y=-t.returnValues.tokens_bought/a,b.provider=t.returnValues.buyer,b.type="Token Purchase",b.volume=s,b.liquidtyProviderFee=(s*e.state.providerFeePercent).toFixed(4)+" ETH";else if("EthPurchase"===h)s=-t.returnValues.eth_bought/1e18,y=t.returnValues.tokens_sold/a,b.provider=t.returnValues.buyer,b.type="Eth Purchase",b.volume=-s,b.liquidtyProviderFee=(y*e.state.providerFeePercent).toFixed(4)+" "+e.state.curFactory;else if("Transfer"===h){var E=t.returnValues[0],k=t.returnValues[1],v=new f.BigNumber(t.returnValues[2]);return"0x0000000000000000000000000000000000000000"===k?(l=l.minus(v),E.toUpperCase()===e.myAddress.toUpperCase()&&(c=c.minus(v))):(l=l.plus(v),k.toUpperCase()===e.myAddress.toUpperCase()&&(c=c.plus(v))),u=new f.BigNumber(c.dividedBy(l)),(isNaN(u)||0==u.toFixed(4))&&(u=0,m=0,p=0),0==(i=(100*u).toFixed(2))?i="-":i+="%",void(n.curPoolShare=i)}n=b,r+=s,d+=y,b.numEth=s.toFixed(4),b.numTokens=y.toFixed(4),b.curPoolShare=i,o.push(b)}),o.reverse();var y=(u*r-m).toFixed(2),h=(u*d-p).toFixed(2);if(0==y?y="":y+=" ETH",h=0==h?"":0==y.length?h+" "+e.state.curFactory:", "+h+" "+e.state.curFactory,e.didReceiveData=!0,s.setState({eventList:o,curEthPoolTotal:r.toFixed(4),curTokenPoolTotal:d.toFixed(4),curPoolShare:i,myCollectedEthFees:y,myCollectedTokenFees:h}),o.length>0){var b=o[0],E=o[o.length-1],k={};window.web3.eth.getBlock(b.block).then(function(e){var t=e.timestamp,a=e.number;window.web3.eth.getBlock(E.block).then(function(e){var n=e.timestamp,o=e.number,r=a-o,d=t-n;s.state.eventList.forEach(function(e){var t=(e.block-o)/r,a=new Date(1e3*(t*d+n)),s=a.getMonth()+"-"+a.getDate()+"-"+a.getFullYear();e.volume>0&&(s in k||(k[s]=0),k[s]+=e.volume)}),s.setState({volumeDataMap:k,didReceiveData:!0})})})}else s.setState({didReceiveData:!0})})})}else e.isWeb3=!1},b.b.global.animation=!1,e.appName="Uniswap Events",e.isWeb3=!0,e.isWeb3Locked=!1,e.didReceiveData=!1;var a=g.initial;if("URLSearchParams"in window){var n=new URLSearchParams(window.location.search);n.has("token")&&(a=n.get("token"))}(e.curFactory=a,e.state={myAddress:"Locked",tokenAddress:"",curEthPoolTotal:"-",curTokenPoolTotal:"-",curPoolShare:"-",myCollectedEthFees:"",myCollectedTokenFees:"",didRequestData:!1,didReceiveData:!1,curFactory:a,providerFeePercent:.003,eventList:[],volumeDataMap:{}},window.ethereum)?function(){var t=Object(i.a)(u.a.mark(function t(){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,window.ethereum.enable();case 3:e.retrieveData(),t.next=10;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0),e.retrieveData();case 10:case"end":return t.stop()}},t,this,[[0,6]])}));return function(){return t.apply(this,arguments)}}()():window.web3?e.retrieveData():e.isWeb3=!1;return e}return Object(y.a)(t,e),Object(l.a)(t,[{key:"renderTokenPoolHistory",value:function(){return 0==this.didReceiveData?s.a.createElement("img",{className:"LoadingImage",src:"./loading3.gif"}):s.a.createElement(v,{eventList:this.state.eventList,curFactory:this.state.curFactory,myAddress:this.state.myAddress})}},{key:"renderTokenPoolDetails",value:function(){if(0==this.curFactory.length)return s.a.createElement("div",null);var e=g.tokens[this.state.curFactory].address;return s.a.createElement(E,{curFactory:this.state.curFactory,tokenAddress:this.state.tokenAddress,curEthPoolTotal:this.state.curEthPoolTotal,curTokenPoolTotal:this.state.curTokenPoolTotal,curPoolShare:this.state.curPoolShare,myCollectedEthFees:this.state.myCollectedEthFees,myCollectedTokenFees:this.state.myCollectedTokenFees,exchangeAddress:e})}},{key:"renderVolumeChart",value:function(){if(0==this.didReceiveData)return s.a.createElement("div",null);for(var e=[],t=[],a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],n=29;n>=0;n--){var o=new Date(Date.now()-864e5*n);e.push(a[o.getMonth()]+" "+o.getDate()+", "+o.getFullYear());var r=o.getMonth()+"-"+o.getDate()+"-"+o.getFullYear();r in this.state.volumeDataMap?t.push(this.state.volumeDataMap[r].toFixed(4)):t.push(0)}var d={labels:e,datasets:[{label:"Swap Volume (ETH)",backgroundColor:"rgba(160,160,160,0.4)",borderWidth:0,hoverBackgroundColor:"rgba(102,153,203,1)",hoverBorderWidth:0,data:t}]};return s.a.createElement("div",{className:"volumeChart"},s.a.createElement(b.a,{data:d,height:250,options:{maintainAspectRatio:!1}}))}},{key:"renderTokenSelector",value:function(){return s.a.createElement("table",{className:"token-selector"},s.a.createElement("tbody",null,s.a.createElement(T,{activeFactory:this.state.curFactory})))}},{key:"renderAttribution",value:function(){return s.a.createElement("p",{className:"attribution"},s.a.createElement("a",{href:"https://github.com/conlan/uniswap-info",target:"_blank"},"Github")," - ",s.a.createElement("a",{href:"https://uniswap.io",target:"_blank"},"Uniswap")," - ",s.a.createElement("a",{href:"https://gifer.com/en/1Atv",target:"_blank"},"GIF"))}},{key:"render",value:function(){return this.isWeb3?s.a.createElement("div",null,s.a.createElement("div",{className:"sidenav"},this.renderTokenSelector()),s.a.createElement("div",{className:"main-content"},this.renderTokenPoolDetails(),this.renderVolumeChart(),this.renderTokenPoolHistory(),this.renderAttribution())):s.a.createElement("div",{className:"InstallMetaMask"},s.a.createElement("div",null,s.a.createElement("img",{src:"./metamask-locked.png"}),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("a",{href:"https://metamask.io/",target:"_blank"},"Get MetaMask"),s.a.createElement("p",{className:"InstallMetaMaskText"},"or"),s.a.createElement("a",{href:"https://brave.com",target:"_blank"},"Switch to Brave")))}}]),t}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[178,2,1]]]);
//# sourceMappingURL=main.031bcbd0.chunk.js.map