(this["webpackJsonpsubstrate-front-end-template"]=this["webpackJsonpsubstrate-front-end-template"]||[]).push([[0],{469:function(e){e.exports=JSON.parse('{"APP_NAME":"dappCon","DEVELOPMENT_KEYRING":true,"RPC":{}}')},518:function(e){e.exports=JSON.parse('{"PROVIDER_SOCKET":"wss://rpc.shiden.astar.network"}')},519:function(e){e.exports=JSON.parse('{"SmartContract":{"_enum":{"Evm":"H160","Wasm":"AccountId"}},"EraRewardAndStake":{"rewards":"Balance","staked":"Balance"},"EraIndex":"u32","StakingLedger":{"total":"Balance","active":"Balance"},"EraStakingPoints":{"total":"Balance","stakers":"BTreeMap<AccountId, Balance>","former_staked_era":"u32","claimed_rewards":"Balance"}}')},521:function(e,t){},529:function(e,t){},554:function(e,t){},556:function(e,t){},566:function(e,t){},568:function(e,t){},598:function(e,t){},600:function(e,t){},607:function(e,t){},608:function(e,t){},625:function(e,t){},647:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),c=n(139),s=n.n(c),o=n(1),i=n(684),u=n(674),l=n(691),j=n(686),p=n(675),b=n(676),d=n(672),O=n(479),f=n(693),x=(n(503),n(16)),h=n.n(x),S=n(29),y=n(23),v=n(470),m=n(468),C=n.n(m),g=n(687),E=n(677),k=n(225),R=n(309),N=n(469),w=n(518),T=n(519),P=["REACT_APP_PROVIDER_SOCKET","REACT_APP_DEVELOPMENT_KEYRING"].reduce((function(e,t){return void 0!==Object({NODE_ENV:"production",PUBLIC_URL:"/dappcon",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0})[t]&&(e[t.slice(10)]=Object({NODE_ENV:"production",PUBLIC_URL:"/dappcon",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0})[t]),e}),{}),_=Object(y.a)(Object(y.a)(Object(y.a)(Object(y.a)({},N),w),P),{},{types:T}),I=n(4),D=C.a.parse(window.location.search).rpc||_.PROVIDER_SOCKET;console.log("Connected socket: ".concat(D));var A={socket:D,jsonrpc:Object(y.a)(Object(y.a)({},v.a),_.RPC),types:_.types,keyring:null,keyringState:null,api:null,apiError:null,apiState:null},q=function(e,t){switch(t.type){case"CONNECT_INIT":return Object(y.a)(Object(y.a)({},e),{},{apiState:"CONNECT_INIT"});case"CONNECT":return Object(y.a)(Object(y.a)({},e),{},{api:t.payload,apiState:"CONNECTING"});case"CONNECT_SUCCESS":return Object(y.a)(Object(y.a)({},e),{},{apiState:"READY"});case"CONNECT_ERROR":return Object(y.a)(Object(y.a)({},e),{},{apiState:"ERROR",apiError:t.payload});case"LOAD_KEYRING":return Object(y.a)(Object(y.a)({},e),{},{keyringState:"LOADING"});case"SET_KEYRING":return Object(y.a)(Object(y.a)({},e),{},{keyring:t.payload,keyringState:"READY"});case"KEYRING_ERROR":return Object(y.a)(Object(y.a)({},e),{},{keyring:null,keyringState:"ERROR"});default:throw new Error("Unknown type: ".concat(t.type))}},U=!1,Y=r.a.createContext(),L=function(e){var t=Object(y.a)({},A);["socket","types"].forEach((function(n){t[n]="undefined"===typeof e[n]?t[n]:e[n]}));var n=Object(a.useReducer)(q,t),r=Object(o.a)(n,2),c=r[0],s=r[1];return function(e,t){var n=e.apiState,a=e.socket,r=e.jsonrpc,c=e.types;if(!n){t({type:"CONNECT_INIT"});var s=new g.a(a),o=new E.a({provider:s,types:c,rpc:r});o.on("connected",(function(){t({type:"CONNECT",payload:o}),o.isReady.then((function(e){return t({type:"CONNECT_SUCCESS"})}))})),o.on("ready",(function(){return t({type:"CONNECT_SUCCESS"})})),o.on("error",(function(e){return t({type:"CONNECT_ERROR",payload:e})}))}}(c,s),function(e,t){var n=function(){var e=Object(S.a)(h.a.mark((function e(){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"LOAD_KEYRING"}),e.prev=1,e.next=4,Object(k.b)(_.APP_NAME);case 4:return e.next=6,Object(k.a)();case 6:n=(n=e.sent).map((function(e){var t=e.address,n=e.meta;return{address:t,meta:Object(y.a)(Object(y.a)({},n),{},{name:"".concat(n.name," (").concat(n.source,")")})}})),R.a.loadAll({isDevelopment:_.DEVELOPMENT_KEYRING},n),t({type:"SET_KEYRING",payload:R.a}),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),console.error(e.t0),t({type:"KEYRING_ERROR"});case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}();if(!e.keyringState){if(U)return t({type:"SET_KEYRING",payload:R.a});U=!0,n()}}(c,s),Object(I.jsx)(Y.Provider,{value:c,children:e.children})},F=function(){return Object(y.a)({},Object(a.useContext)(Y))},H={paramConversion:{num:["Compact<Balance>","BalanceOf","u8","u16","u32","u64","u128","i8","i16","i32","i64","i128"]}},K=n(15),G=n(648);function B(e){var t=e.accountPair,n=void 0===t?null:t,r=e.label,c=e.setStatus,s=e.color,i=void 0===s?"blue":s,u=e.style,l=void 0===u?null:u,j=e.type,p=void 0===j?"QUERY":j,b=e.attrs,d=void 0===b?null:b,O=e.disabled,f=void 0!==O&&O,x=F().api,v=Object(a.useState)(null),m=Object(o.a)(v,2),C=m[0],g=m[1],E=Object(a.useState)(null),R=Object(o.a)(E,2),N=R[0],w=R[1],T=d.palletRpc,P=d.callable,_=d.inputParams,D=d.paramFields,A=function(){return"SUDO-TX"===p},q=function(){return"UNCHECKED-SUDO-TX"===p};Object(a.useEffect)((function(){Object(S.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(x&&x.query.sudo){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,x.query.sudo.key();case 4:(t=e.sent).isEmpty?w(null):w(t.toString());case 6:case"end":return e.stop()}}),e)})))()}),[x]);var U,Y=function(){var e=Object(S.a)(h.a.mark((function e(){var t,a,r,c,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.address,a=n.meta,r=a.source,!a.isInjected){e.next=9;break}return e.next=4,Object(k.c)(r);case 4:s=e.sent,c=t,x.setSigner(s.signer),e.next=10;break;case 9:c=n;case 10:return e.abrupt("return",c);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(e){var t=e.status;return t.isFinalized?c("\ud83d\ude09 Finalized. Block hash: ".concat(t.asFinalized.toString())):c("Current transaction status: ".concat(t.type))},B=function(e){return c("\ud83d\ude1e Transaction Failed: ".concat(e.toString()))},M=function(){var e=Object(S.a)(h.a.mark((function e(){var t,n,a,r,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y();case 2:n=e.sent,a=ee(D,_),r=a?x.tx.sudo.sudo((t=x.tx[T])[P].apply(t,Object(K.a)(a))):x.tx.sudo.sudo(x.tx[T][P]()),c=r.signAndSend(n,L).catch(B),g((function(){return c}));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),X=function(){var e=Object(S.a)(h.a.mark((function e(){var t,n,a,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y();case 2:n=e.sent,a=x.tx.sudo.sudoUncheckedWeight((t=x.tx[T])[P].apply(t,Object(K.a)(_)),0),r=a.signAndSend(n,L).catch(B),g((function(){return r}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Q=function(){var e=Object(S.a)(h.a.mark((function e(){var t,n,a,r,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y();case 2:return n=e.sent,a=ee(D,_),r=a?(t=x.tx[T])[P].apply(t,Object(K.a)(a)):x.tx[T][P](),e.next=7,r.signAndSend(n,L).catch(B);case 7:c=e.sent,g((function(){return c}));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=Object(S.a)(h.a.mark((function e(){var t,n,a,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=ee(D,_),a=n?(t=x.tx[T])[P].apply(t,Object(K.a)(n)):x.tx[T][P](),e.next=4,a.send(L).catch(B);case 4:r=e.sent,g((function(){return r}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(e){return e.isNone?c("None"):c(e.toString())},z=function(){var e=Object(S.a)(h.a.mark((function e(){var t,n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=ee(D,_),e.next=3,(t=x.query[T])[P].apply(t,Object(K.a)(n).concat([W]));case 3:a=e.sent,g((function(){return a}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(S.a)(h.a.mark((function e(){var t,n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=ee(D,_,{emptyAsNull:!1}),e.next=3,(t=x.rpc[T])[P].apply(t,Object(K.a)(n).concat([W]));case 3:a=e.sent,g((function(){return a}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Z=function(){var e=x.consts[T][P];e.isNone?c("None"):c(e.toString())},$=function(){var e=Object(S.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:C&&(C(),g(null)),c("Sending..."),A()&&M()||q()&&X()||"SIGNED-TX"===p&&Q()||"UNSIGNED-TX"===p&&V()||"QUERY"===p&&z()||"RPC"===p&&J()||"CONSTANT"===p&&Z();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ee=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{emptyAsNull:!0},a=t.map((function(e){return"object"===typeof e&&null!==e&&"string"===typeof e.value?e.value.trim():"string"===typeof e?e.trim():e})),r=e.map((function(e,t){return Object(y.a)(Object(y.a)({},e),{},{value:a[t]||null})}));return r.reduce((function(e,t){var a=t.type,r=void 0===a?"string":a,c=t.value;if(null==c||""===c)return n.emptyAsNull?[].concat(Object(K.a)(e),[null]):e;var s=c;return r.indexOf("Vec<")>=0?(s=(s=s.split(",").map((function(e){return e.trim()}))).map((function(e){return te(r)?e.indexOf(".")>=0?Number.parseFloat(e):Number.parseInt(e):e})),[].concat(Object(K.a)(e),[s])):(te(r)&&(s=s.indexOf(".")>=0?Number.parseFloat(s):Number.parseInt(s)),[].concat(Object(K.a)(e),[s]))}),[])},te=function(e){return H.paramConversion.num.some((function(t){return e.indexOf(t)>=0}))};return Object(I.jsx)(G.a,{basic:!0,color:i,style:l,type:"submit",onClick:$,disabled:f||!T||!P||!(0===D.length||D.every((function(e,t){var n=_[t];if(e.optional)return!0;if(null==n)return!1;var a="object"===typeof n?n.value:n;return null!==a&&""!==a})))||(A()||q())&&(U=n,!(N&&U&&U.address===N)),children:r})}function M(e){return Object(I.jsxs)(G.a.Group,{children:[Object(I.jsx)(B,Object(y.a)({label:"Unsigned",type:"UNSIGNED-TX",color:"grey"},e)),Object(I.jsx)(G.a.Or,{}),Object(I.jsx)(B,Object(y.a)({label:"Signed",type:"SIGNED-TX",color:"blue"},e)),Object(I.jsx)(G.a.Or,{}),Object(I.jsx)(B,Object(y.a)({label:"SUDO",type:"SUDO-TX",color:"red"},e))]})}function X(e){var t=F(),a=t.api,r=t.apiState,c=t.keyring,s=t.keyringState;return"READY"===r&&(window.api=a),"READY"===s&&(window.keyring=c),window.util=n(6),window.utilCrypto=n(46),null}var Q=n(680),V=n(678),W=n(682),z=n(692),J=n(150);n(679),n(643);function Z(e){var t=F().api,n=Object(a.useState)([]),r=Object(o.a)(n,2),c=r[0],s=r[1],i=Object(a.useState)(0),u=Object(o.a)(i,2),j=u[0],p=u[1],b=Object(a.useState)(0),d=Object(o.a)(b,2),O=d[0],f=d[1],x=Object(a.useState)(0),h=Object(o.a)(x,2),S=h[0],y=h[1],v=Object(a.useState)(0),m=Object(o.a)(v,2),C=m[0],g=m[1],E=Object(a.useState)(0),k=Object(o.a)(E,2),R=k[0],N=k[1],w=Object(a.useState)(0),T=Object(o.a)(w,2),P=T[0],_=T[1],D=Object(a.useState)(0),A=Object(o.a)(D,2),q=A[0],U=A[1],Y=Object(a.useState)(0),L=Object(o.a)(Y,2),H=L[0],K=L[1],G=Object(a.useState)(0),B=Object(o.a)(G,2),M=B[0],X=B[1],W=Object(a.useState)([]),z=Object(o.a)(W,2),J=(z[0],z[1],function(e){return{Evm:e}});return Object(a.useEffect)((function(){t.query.dappsStaking.registeredDapps.keys().then((function(e){console.log("registeredDapps result",e);var t=e.map((function(e){return"0x"+e.toString().slice(-40)}));console.log(t);var n=t.map((function(e){return{key:e,value:e,text:e}}));console.log("updateCallables callables",n),s(n)})).catch(console.error)}),[t.query.dappsStaking]),Object(a.useEffect)((function(e,n){console.log("doQuery selectedContract is",j),function(){var e;t.query.dappsStaking.contractLastStaked(J(j),(function(t){e=t.isNone?"never":t.unwrap().toString(),console.log("queryLastStaked res",e),y(e)})).catch(console.error)}(),function(){var e;t.query.dappsStaking.contractLastClaimed(J(j),(function(t){e=t.isNone?"never":t.unwrap().toHuman(),console.log("queryLastClaimed res",e),f(e)})).catch(console.error)}()}),[j]),Object(a.useEffect)((function(){!function(){var e;console.log("queryDeveloper selectedContract is",j),t.query.dappsStaking.registeredDapps(J(j),(function(t){e=t.isNone?"none":t.unwrap().toHuman(),console.log("queryDeveloper res",e),N(e)})).catch(console.error)}(),console.log("queryContractEraStake selectedContract is",j,"last staked",S),t.query.dappsStaking.contractEraStake(J(j),S,(function(e){e.isNone?(console.log("queryContractEraStake result.isNone"),_(0),U(0),K(0)):(console.log("queryContractEraStake res",e.unwrap().toHuman()),_(e.unwrap().total.toHuman()),console.log("queryContractEraStake total",e.unwrap().total.toHuman()),U(e.unwrap().claimed_rewards.toHuman()),console.log("queryContractEraStake total",e.unwrap().claimed_rewards.toHuman()),X(e.unwrap().former_staked_era.toString()),K(e.unwrap().stakers.size),console.log("queryContractEraStake total",e.unwrap().stakers.size))})).catch(console.error)}),[S]),Object(I.jsxs)(l.a.Column,{width:8,children:[Object(I.jsx)("h1",{children:"Contract Explorer"}),Object(I.jsxs)(Q.a,{children:[Object(I.jsx)(Q.a.Field,{children:Object(I.jsx)(V.a,{placeholder:"Contract",fluid:!0,label:"Contract",onChange:function(e,t){N(0),y(0),f(0),K("?"),U("?"),console.log("onContractChange value",t.value),p(t.value),g(t.value)},search:!0,selection:!0,value:C,options:c})}),Object(I.jsx)($,{developer:R,numStakers:H,lastClaimed:O,lastStaked:S,totalStaked:P,claimedRewards:q,contract:j,previousStaked:M})]})]})}function $(e){return Object(I.jsxs)("div",{style:{overflowWrap:"break-word"},children:[Object(I.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(e.contract)}),Object(I.jsxs)(W.a,{children:[Object(I.jsxs)(W.a.Header,{children:[Object(I.jsxs)(W.a.Row,{children:[Object(I.jsx)(W.a.HeaderCell,{children:"Contract Address"}),Object(I.jsx)(W.a.HeaderCell,{children:e.contract})]}),Object(I.jsxs)(W.a.Row,{children:[Object(I.jsx)(W.a.HeaderCell,{children:"Developer's account:"}),Object(I.jsx)(W.a.HeaderCell,{children:e.developer})]})]}),Object(I.jsxs)(W.a.Body,{children:[Object(I.jsxs)(W.a.Row,{children:[Object(I.jsx)(W.a.Cell,{children:Object(I.jsx)(z.a,{as:"h2",children:Object(I.jsxs)(z.a.Content,{children:[e.lastStaked,Object(I.jsx)(z.a.Subheader,{children:"Contract Last Staked"})]})})}),Object(I.jsx)(W.a.Cell,{children:Object(I.jsx)(z.a,{as:"h2",children:Object(I.jsxs)(z.a.Content,{children:[e.lastClaimed,Object(I.jsx)(z.a.Subheader,{children:"Contract Last Claimed"})]})})}),Object(I.jsx)(W.a.Cell,{children:Object(I.jsx)(z.a,{as:"h2",children:Object(I.jsxs)(z.a.Content,{children:[Object(I.jsx)(J.a,{name:"user"}),e.numStakers,Object(I.jsx)(z.a.Subheader,{children:"Number of Stakers"})]})})})]}),Object(I.jsxs)(W.a.Row,{children:[Object(I.jsx)(W.a.Cell,{children:Object(I.jsx)(z.a,{as:"h2",children:Object(I.jsxs)(z.a.Content,{children:[e.totalStaked,Object(I.jsx)(z.a.Subheader,{children:"Total Staked"})]})})}),Object(I.jsx)(W.a.Cell,{children:Object(I.jsx)(z.a,{as:"h2",children:Object(I.jsxs)(z.a.Content,{children:[e.claimedRewards,Object(I.jsx)(z.a.Subheader,{children:"Claimed Rewards"})]})})}),Object(I.jsx)(W.a.Cell,{children:Object(I.jsx)(z.a,{as:"h2",children:Object(I.jsxs)(z.a.Content,{children:[e.previousStaked,Object(I.jsx)(z.a.Subheader,{children:"Previously staked era"})]})})})]})]})]})]})}function ee(e){return F().api?Object(I.jsx)(Z,Object(y.a)({},e)):null}var te=n(683),ne=n(688),ae=1e18;function re(e){var t=F().api,n=Object(a.useState)(0),r=Object(o.a)(n,2),c=r[0],s=r[1],i=Object(a.useState)(0),u=Object(o.a)(i,2),j=u[0],p=u[1],b=Object(a.useState)(0),d=Object(o.a)(b,2),O=d[0],f=d[1];return Object(a.useEffect)((function(){var e;return t.query.dappsStaking.currentEra((function(e){s(e.toNumber())})),t.query.dappsStaking.eraRewardsAndStakes(c,(function(e){if(e.isNone)p("<None>");else{var t=parseInt(e.unwrap().staked.valueOf()/ae);p(t)}})).catch(console.error),t.query.dappsStaking.blockRewardAccumulator((function(e){if(e.isNone)f("<None>");else{var t=parseInt(e/ae);f(t)}})).catch(console.error),function(){return e}}),[t.query.dappsStaking.blockRewardAccumulator,c]),Object(I.jsx)(l.a.Column,{children:Object(I.jsxs)(te.a,{children:[Object(I.jsx)(te.a.Content,{textAlign:"center",children:Object(I.jsx)(ne.a,{label:"TVL in dApps",value:j})}),Object(I.jsxs)(te.a.Content,{extra:!0,children:["upcoming rewards",Object(I.jsx)(J.a,{name:"hand point right outline"}),O]})]})})}function ce(e){return F().api.query.dappsStaking?Object(I.jsx)(re,Object(y.a)({},e)):null}var se=n(685);function oe(e){var t=F().api,n=Object(a.useState)(0),r=Object(o.a)(n,2),c=r[0],s=r[1],i=Object(a.useState)(0),u=Object(o.a)(i,2),j=u[0],p=u[1],b=Object(a.useState)(0),d=Object(o.a)(b,2),O=d[0],f=d[1],x=t.consts.dappsStaking.blockPerEra.toNumber(),h=t.query.dappsStaking.currentEra,S=t.derive.chain.bestNumber;return Object(a.useEffect)((function(){var e=null;return S((function(e){f(e%x/x),p(x-e%x)})).then((function(t){e=t})).catch(console.error),t.query.dappsStaking.currentEra((function(e){s(e.toNumber())})).catch(console.error),function(){return e&&e()}}),[h,S]),Object(I.jsx)(l.a.Column,{children:Object(I.jsxs)(te.a,{color:"purple",children:[Object(I.jsx)(te.a.Content,{textAlign:"center",children:Object(I.jsx)(ne.a,{label:"Current Era",value:c})}),Object(I.jsxs)(te.a.Content,{extra:!0,children:[Object(I.jsx)(se.a,{percent:O,indicating:!0,success:!0}),"Blocks until new era :",Object(I.jsx)(J.a,{name:"time"})," ",j]})]})})}function ie(e){return F().api.query.dappsStaking.currentEra?Object(I.jsx)(oe,Object(y.a)({},e)):null}n(681);var ue=n(22),le=n(673),je=n(223),pe=function(e){return e.type.toString().startsWith("Option<")};function be(e){var t=F(),n=t.api,r=t.jsonrpc,c=e.accountPair,s=Object(a.useState)(null),i=Object(o.a)(s,2),u=i[0],j=i[1],p=Object(a.useState)("QUERY"),b=Object(o.a)(p,2),d=b[0],O=b[1],f=Object(a.useState)([{key:"dappsStaking",value:"dappsStaking",text:"dappsStaking"}]),x=Object(o.a)(f,2),h=x[0],S=(x[1],Object(a.useState)([])),v=Object(o.a)(S,2),m=v[0],C=v[1],g=Object(a.useState)([]),E=Object(o.a)(g,2),k=E[0],R=E[1],N={palletRpc:"",callable:"",inputParams:[]},w=Object(a.useState)(N),T=Object(o.a)(w,2),P=T[0],_=T[1],D=P.palletRpc,A=P.callable,q=P.inputParams;Object(a.useEffect)((function(){if(n&&""!==D){var e=Object.keys(function(e,t){return"QUERY"===t?e.query:"EXTRINSIC"===t?e.tx:"RPC"===t?e.rpc:e.consts}(n,d)[D]).sort().map((function(e){return{key:e,value:e,text:e}}));console.log("updateCallables",e),C(e)}}),[n,d,D]),Object(a.useEffect)((function(){if(n&&""!==D&&""!==A){var e=[];if("QUERY"===d){console.log("interxType QUERY");var t=n.query[D][A].meta.type;console.log("metaType = ",t),t.isPlain||(t.isMap?(console.log("metaType isMap"),e=[{name:t.asMap.key.toString(),type:t.asMap.key.toString(),optional:!1}],console.log("paramFields = ",e)):t.isDoubleMap&&(console.log("metaType isDoubleMap"),e=[{name:t.asDoubleMap.key1.toString(),type:t.asDoubleMap.key1.toString(),optional:!1},{name:t.asDoubleMap.key2.toString(),type:t.asDoubleMap.key2.toString(),optional:!1}],console.log("paramFields = ",e)))}else if("EXTRINSIC"===d){console.log("interxType EXTRINSIC");var a=n.tx[D][A].meta.args;a&&a.length>0&&(e=a.map((function(e){return{name:e.name.toString(),type:e.type.toString(),optional:pe(e)}})))}else if("RPC"===d){var c=[];r[D]&&r[D][A]&&(c=r[D][A].params),c.length>0&&(e=c.map((function(e){return{name:e.name,type:e.type,optional:e.isOptional||!1}})))}else"CONSTANT"===d&&(e=[]);R(e)}else R([])}),[n,d,D,A,r]);var U=function(e,t){_((function(e){var n,a=t.state,r=t.value;if("object"===typeof a){var c=a.ind,s=a.paramField.type,o=Object(K.a)(e.inputParams);o[c]={type:s,value:r},n=Object(y.a)(Object(y.a)({},e),{},{inputParams:o})}else if("palletRpc"===a){var i;n=Object(y.a)(Object(y.a)({},e),{},(i={},Object(ue.a)(i,a,r),Object(ue.a)(i,"callable",""),Object(ue.a)(i,"inputParams",[]),i))}else if("callable"===a){var u;n=Object(y.a)(Object(y.a)({},e),{},(u={},Object(ue.a)(u,a,r),Object(ue.a)(u,"inputParams",[]),u))}return n}))},Y=function(e,t){O(t.value),_(N)},L=function(e){return"RPC"===e?"Optional Parameter":"Leaving this field as blank will submit a NONE value"};return Object(I.jsxs)(l.a.Column,{width:8,children:[Object(I.jsx)("h1",{children:"dApps-Staking Pallet Interactor"}),Object(I.jsxs)(Q.a,{children:[Object(I.jsxs)(Q.a.Group,{style:{overflowX:"auto"},inline:!0,children:[Object(I.jsx)("label",{children:"Interaction Type"}),Object(I.jsx)(Q.a.Radio,{label:"Extrinsic",name:"interxType",value:"EXTRINSIC",checked:"EXTRINSIC"===d,onChange:Y}),Object(I.jsx)(Q.a.Radio,{label:"Query",name:"interxType",value:"QUERY",checked:"QUERY"===d,onChange:Y}),Object(I.jsx)(Q.a.Radio,{label:"RPC",name:"interxType",value:"RPC",checked:"RPC"===d,onChange:Y}),Object(I.jsx)(Q.a.Radio,{label:"Constant",name:"interxType",value:"CONSTANT",checked:"CONSTANT"===d,onChange:Y})]}),Object(I.jsx)(Q.a.Field,{children:Object(I.jsx)(V.a,{placeholder:"Pallets / RPC",fluid:!0,label:"Pallet / RPC",onChange:U,search:!0,selection:!0,state:"palletRpc",value:D,options:h})}),Object(I.jsx)(Q.a.Field,{children:Object(I.jsx)(V.a,{placeholder:"Callables",fluid:!0,label:"Callable",onChange:U,search:!0,selection:!0,state:"callable",value:A,options:m})}),k.map((function(e,t){return Object(I.jsxs)(Q.a.Field,{children:[Object(I.jsx)(le.a,{placeholder:e.type,fluid:!0,type:"text",label:e.name,state:{ind:t,paramField:e},value:q[t]?q[t].value:"",onChange:U}),e.optional?Object(I.jsx)(je.a,{basic:!0,pointing:!0,color:"teal",content:L(d)}):null]},"".concat(e.name,"-").concat(e.type))})),Object(I.jsx)(Q.a.Field,{style:{textAlign:"center"},children:Object(I.jsx)(de,{accountPair:c,setStatus:j,attrs:{interxType:d,palletRpc:D,callable:A,inputParams:q,paramFields:k}})}),Object(I.jsx)("div",{style:{overflowWrap:"break-word"},children:u})]})]})}function de(e){var t=e.attrs.interxType;return"QUERY"===t?(console.log("TxButton InteractorSubmit props = ",e),Object(I.jsx)(B,Object(y.a)({label:"Query",type:"QUERY",color:"blue"},e))):"EXTRINSIC"===t?Object(I.jsx)(M,Object(y.a)({},e)):"RPC"===t||"CONSTANT"===t?Object(I.jsx)(B,Object(y.a)({label:"Submit",type:t,color:"blue"},e)):void 0}function Oe(e){return F().api.tx?Object(I.jsx)(be,Object(y.a)({},e)):null}function fe(e){var t=F().api,n=Object(a.useState)(0),r=Object(o.a)(n,2),c=r[0],s=r[1],i=Object(a.useState)("unknown"),u=Object(o.a)(i,2),j=u[0],p=u[1];return Object(a.useEffect)((function(){var e;return t.query.dappsStaking.preApprovalIsEnabled((function(e){p(e.toString())})),e=t.query.dappsStaking.registeredDapps.keys().then((function(e){s(e.length)})).catch(console.error),function(){return e}}),[t.query.dappsStaking,t.query.dappsStaking.registeredDapps]),Object(I.jsx)(l.a.Column,{children:Object(I.jsxs)(te.a,{children:[Object(I.jsx)(te.a.Content,{textAlign:"center",children:Object(I.jsx)(ne.a,{label:"dApps Count",value:c})}),Object(I.jsxs)(te.a.Content,{extra:!0,children:["preappoval enabled: ",j]})]})})}function xe(e){var t=F().api;return t.query.dappsStaking&&t.query.dappsStaking.registeredDapps?Object(I.jsx)(fe,Object(y.a)({},e)):null}function he(e){var t=F(),n=t.api,r=t.socket,c=Object(a.useState)({}),s=Object(o.a)(c,2),i=s[0],u=s[1];return Object(a.useEffect)((function(){var e=function(){var e=Object(S.a)(h.a.mark((function e(){var t,a,r,c,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([n.rpc.system.chain(),n.rpc.system.name(),n.rpc.system.version()]);case 3:t=e.sent,a=Object(o.a)(t,3),r=a[0],c=a[1],s=a[2],u({chain:r,nodeName:c,nodeVersion:s}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();e()}),[n.rpc.system]),Object(I.jsx)(l.a.Column,{children:Object(I.jsxs)(te.a,{children:[Object(I.jsxs)(te.a.Content,{children:[Object(I.jsx)(te.a.Header,{children:i.nodeName}),Object(I.jsx)(te.a.Meta,{children:Object(I.jsx)("span",{children:i.chain})}),Object(I.jsx)(te.a.Description,{children:r})]}),Object(I.jsxs)(te.a.Content,{extra:!0,children:[Object(I.jsx)(J.a,{name:"setting"}),"v",i.nodeVersion]})]})})}function Se(e){var t=F().api;return t.rpc&&t.rpc.system&&t.rpc.system.chain&&t.rpc.system.name&&t.rpc.system.version?Object(I.jsx)(he,Object(y.a)({},e)):null}function ye(e){var t=Object(a.useState)(""),n=Object(o.a)(t,2),r=n[0],c=n[1],s=[{key:"Shiden",text:"Shiden (mainnet)",value:"wss://rpc.shiden.astar.network"},{key:"Shibuya",text:"Shibuya (testnet)",value:"wss://rpc.shibuya.astar.network"},{key:"Local",text:"Local",value:"ws://127.0.0.1:9944"}],i=s.length>0?s[0].name:"";Object(a.useEffect)((function(){console.log("useEffect selected Network",r)}),[r,i]);return Object(I.jsx)(d.a,{children:Object(I.jsx)(V.a,{search:!0,selection:!0,clearable:!0,placeholder:"Select the Network",options:s,onChange:function(e,t){var n;n=t.value,c(n)},value:r})})}function ve(e){return F().api.query?Object(I.jsx)(ye,Object(y.a)({},e)):null}function me(){var e,t=Object(a.useState)(null),n=Object(o.a)(t,2),r=n[0],c=(n[1],F()),s=c.apiState,x=c.keyring,h=c.keyringState,S=c.apiError,y=r&&"READY"===h&&x.getPair(r),v=function(e){return Object(I.jsx)(i.a,{active:!0,children:Object(I.jsx)(u.a,{size:"small",children:e})})};if("ERROR"===s)return e=S,Object(I.jsx)(l.a,{centered:!0,columns:2,padded:!0,children:Object(I.jsx)(l.a.Column,{children:Object(I.jsx)(j.a,{negative:!0,compact:!0,floating:!0,header:"Error Connecting to Substrate",content:"".concat(JSON.stringify(e,null,4))})})});if("READY"!==s)return v("Connecting to Substrate");if("READY"!==h)return v("Loading accounts (please review any extension's authorization)");var m=Object(a.createRef)();return Object(I.jsxs)("div",{ref:m,children:[Object(I.jsx)(p.a,{context:m,children:Object(I.jsx)(l.a,{centered:!0,columns:2})}),Object(I.jsx)(b.a,{}),Object(I.jsxs)(d.a,{children:[Object(I.jsx)("style",{children:"\n            html, body {\n              background-color: #252839 !important;\n            }\n            p {\n              align-content: center;\n              background-color: #495285;\n              color: #fff;\n              display: flex;\n              flex-direction: column;\n              justify-content: center;\n              min-height: 6em;\n            }\n            p > span {\n              opacity: 0.4;\n              text-align: center;\n            }\n          }\n          "}),Object(I.jsxs)(l.a,{stackable:!0,columns:"equal",children:[Object(I.jsxs)(l.a.Row,{children:[Object(I.jsx)(O.a,{src:"".concat("/dappcon","/assets/astar_dashboard.png"),size:"huge"}),Object(I.jsx)(ve,{})]}),Object(I.jsxs)(l.a.Row,{stretched:!0,children:[Object(I.jsx)(ie,{}),Object(I.jsx)(xe,{}),Object(I.jsx)(ce,{}),Object(I.jsx)(Se,{})]}),Object(I.jsx)(b.a,{}),Object(I.jsx)(l.a.Row,{children:Object(I.jsx)(f.a,{raised:!0,children:Object(I.jsx)(ee,{})})}),Object(I.jsx)(b.a,{}),Object(I.jsx)(l.a.Row,{children:Object(I.jsx)(f.a,{raised:!0,children:Object(I.jsx)(Oe,{accountPair:y})})})]})]}),Object(I.jsx)(X,{})]})}function Ce(){return Object(I.jsx)(L,{children:Object(I.jsx)(me,{})})}s.a.render(Object(I.jsx)(Ce,{}),document.getElementById("root"))}},[[647,1,2]]]);
//# sourceMappingURL=main.15bdec55.chunk.js.map