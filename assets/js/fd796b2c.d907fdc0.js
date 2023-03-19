"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9217],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>h});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),d=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(a),u=o,h=p["".concat(c,".").concat(u)]||p[u]||m[u]||r;return a?n.createElement(h,i(i({ref:t},l),{},{components:a})):n.createElement(h,i({ref:t},l))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},176:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var n=a(7462),o=(a(7294),a(3905));const r={},i="dodao.dev EIP-2535 Diamond smart contract",s={unversionedId:"smart-contract",id:"smart-contract",title:"dodao.dev EIP-2535 Diamond smart contract",description:"TLDR;",source:"@site/docs/smart-contract.md",sourceDirName:".",slug:"/smart-contract",permalink:"/docs/smart-contract",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/smart-contract.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"How Dodao.dev dApp works",permalink:"/docs/how-dodao-works"},next:{title:"Multiplying Gitcoin grant with Dodao",permalink:"/docs/user-stories/gitcoin-user-story"}},c={},d=[{value:"motivation to use Diamonds",id:"motivation-to-use-diamonds",level:2},{value:"Basics of the approach",id:"basics-of-the-approach",level:2},{value:"how Dodao Diamond looks like",id:"how-dodao-diamond-looks-like",level:2},{value:"Task and user account facets:",id:"task-and-user-account-facets",level:3},{value:"Token facets:",id:"token-facets",level:3},{value:"Connected contracts facets:",id:"connected-contracts-facets",level:3},{value:"Witnet oracle facets:",id:"witnet-oracle-facets",level:3}],l={toc:d},p="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"dodaodev-eip-2535-diamond-smart-contract"},"dodao.dev EIP-2535 Diamond smart contract"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"TLDR;\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This article describes how useful was Diamonds standard to implement\ndodao Task management, mint ERC-1155 tokens, connect Diamonds between\nmultiple EVM chains and call github Web2 API.")),(0,o.kt)("h2",{id:"motivation-to-use-diamonds"},"motivation to use Diamonds"),(0,o.kt)("p",null,"When starting developing ",(0,o.kt)("a",{parentName:"p",href:"https://dodao.dev"},"Dodao.dev")," uses ",(0,o.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-2535"},"EIP-2535 Diamond standard")," to create managable and upgradable smart contracts."),(0,o.kt)("p",null,"Diamonds EIP is giving you the idea of Diamonds itself and the technology behind it, it is a great booster to get familiar with in-depth solidity features such as ",(0,o.kt)("inlineCode",{parentName:"p"},"DELEGATECALL")," which is used to redirect function calls from main Diamond contract to its Facets and storage structs on which Diamond Storage is based on."),(0,o.kt)("p",null,"Diamond consists of diamond facade contract and its facets.\nDiamonds rely on the feature of ",(0,o.kt)("inlineCode",{parentName:"p"},"DELEGATECALL"),", which executes the remote smart contracts code in the caller smart contract storage context."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"A -> Diamond -> Facet (delegatecall) msg.sender = A (updates happen on Diamond's storage)"),"\n",(0,o.kt)("a",{parentName:"p",href:"https://blog.cryptostars.is/solidity-call-and-delegatecall-function-17b483a3c538"},"More..")),(0,o.kt)("p",null,"The facade Diamond is usually generic and ",(0,o.kt)("inlineCode",{parentName:"p"},"DELEGATECALL"),"s into its facets to implementation specific function calls."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Diamond storage relies on Solidity structs that contain sets of state\nvariables that are easy to read and write. A struct can be defined\nwith state variables and then used in a particular position in\ncontract storage. The position can be determined by a hash of a unique\nstring. ",(0,o.kt)("a",{parentName:"p",href:"https://dev.to/mudgen/how-diamond-storage-works-90e"},"More.."))),(0,o.kt)("h2",{id:"basics-of-the-approach"},"Basics of the approach"),(0,o.kt)("p",null,"Dodao smart contract is based on ",(0,o.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/assets/eip-2535/reference/EIP2535-Diamonds-Reference-Implementation.zip"},"EIP-2535 Diamond-1 reference implementation"),", which provides Diamond facade, Diamond init used for facet deployment and upgrades, DiamondCut facet for used for adding and removing facet functions from the Diamond, OwnerShip facet which maintains contract ownership and Louper facet which allows Diamond inspection. ",(0,o.kt)("strong",{parentName:"p"},"Diamond-1 reference implementation")," is the generic, not very optimized Diamond implementation which is easy to understand, there are also Diamond-2 and Diamond-3 implementations which ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mudgen/diamond"},"optimize Diamond Cuts and Louper functions for different use cases"),"."),(0,o.kt)("p",null,"Diamond reference implementation deploy scripts and tests are written for ",(0,o.kt)("strong",{parentName:"p"},"hardhat"),", we have modified it to include project specific facets and added functions for facets add, upgrade and removal and exposed it as Hardhat tasks to be used from CLI. To minimize facets size in order to fit into ",(0,o.kt)("a",{parentName:"p",href:"https://ethereum.org/en/developers/tutorials/downsizing-contracts-to-fight-the-contract-size-limit/"},"24KB EVM limitation")," I have implemented facet library linking and deployment. There is a great ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/hardhat-contract-sizer"},"hardhat contract-sizer")," plugin which allows monitoring your facets sizes."),(0,o.kt)("p",null,"Additionally we have added functions to ",(0,o.kt)("a",{parentName:"p",href:"https://hardhat.org/hardhat-runner/plugins/nomiclabs-hardhat-etherscan#using-programmatically"},"programmatically verify deployed contracts"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Louper facet allows inspecting Diamonds programmatically both on and\noff-chain. There is a great project ",(0,o.kt)("a",{parentName:"p",href:"https://louper.dev"},"louper.dev")," which allows Diamond\ninspection from your web browser.")),(0,o.kt)("p",null,"Diamonds standard allows ",(0,o.kt)("strong",{parentName:"p"},"flexible smart contract development"),", by keeping the main Diamond facade contract as a single entry point address and allowing deploy required facets when it is ready."),(0,o.kt)("h2",{id:"how-dodao-diamond-looks-like"},"how Dodao Diamond looks like"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"dodao.dev is a decentralized and permission-less task marketplace for\ntech talents and art creators, and relies on several facet and library\ngroups implementing its on-chain functionality, which are constantly\nbeing developed and upgraded while keeping the simple and maintainable\ncode structure.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"smart contract architecture",src:a(2570).Z,width:"4092",height:"732"})),(0,o.kt)("h3",{id:"task-and-user-account-facets"},"Task and user account facets:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"TaskCreateFacet.sol")," - creates non-upgradable Task contracts, which are not linked to the Diamond directly, use their own storage and use ",(0,o.kt)("inlineCode",{parentName:"p"},"CALL"),"s to push necessary data back to the main diamond."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"TaskDataFacet.sol")," - contains functions which read Tasks data from the Task contracts created by ",(0,o.kt)("inlineCode",{parentName:"p"},"TaskCreateFacet"),", it also manages Task contracts blacklist."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"LibTasks.sol")," and ",(0,o.kt)("strong",{parentName:"p"},"LibTasksAudit.sol")," - provide underlying functions for the above facets."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"LibChat.sol")," - provides in-Task chat functions."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"AccountsFacet.sol")," - manages user accounts, it is being called by Task contracts when a user participates or completes the Task, it also manages Accounts blacklist."),(0,o.kt)("h3",{id:"token-facets"},"Token facets:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"TokenFacet.sol")," - creates ERC-1155 compatible fungible and non-fungible(NFT) tokens, its implementation is based on Enjin reference implementation rewritten to use Diamond storage and some project-specific functions and features added."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"LibTokens.sol")," - provides underlying functions for the ",(0,o.kt)("inlineCode",{parentName:"p"},"TokenFacet")," facet."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"TokenDataFacet.sol")," - contains more project specific functions, again with Diamonds you can easily distribute necessary functions between several facets to maintain the 24KB EVM limitation."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"LibTokenData.sol")," - provides underlying functions for the ",(0,o.kt)("inlineCode",{parentName:"p"},"TokenDataFacet")," facet."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The only drawback of using a Diamond for ERC-1155 tokens is that only\none token ticker(name) can be set for a single contract address, it\ncan be mitigated by creating several Diamonds sharing the same facets.")),(0,o.kt)("h3",{id:"connected-contracts-facets"},"Connected contracts facets:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"InterchainFacet.sol")," - implements ",(0,o.kt)("a",{parentName:"p",href:"https://moonbeam.network/blog/cross-chain-smart-contracts/"},"Moonbeam Connected contracts")," concept by enabling connection with Axelar/Hyperlane/LayerZero and Wormhole omnichain protocols. Diamond concept of facede contract and Diamond Storage for protocol specific configuration simplified the implementation of the idea to connect contracts between different chains a lot, it is always much easier to know that there is a single static contract address on every chain to be called, which enables better maintainability and security."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"LibTokenData.sol")," - provides underlying functions for the ",(0,o.kt)("inlineCode",{parentName:"p"},"Interchain")," facet."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"LibUtils.sol")," - provide some generic functions to be reused by multiple facets."),(0,o.kt)("h3",{id:"witnet-oracle-facets"},"Witnet oracle facets:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"WitnetFacet.sol")," - implements the connection with ",(0,o.kt)("a",{parentName:"p",href:"https://docs.witnet.io/"},"Witnet oracles")," to query Github repository data used to automatically sign Task review."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"LibWitnetRequest.sol")," - provides underlying functions for the ",(0,o.kt)("inlineCode",{parentName:"p"},"WitnetFacet")," facet."),(0,o.kt)("p",null,"Feel free to clone, fork, reuse or contribute to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/devopsdao/devopsdao-smart-contract-diamond"},"dodao smart contract diamond"),"."),(0,o.kt)("p",null,"All the facets use and share several Diamond storages and an AppStorage(it is not recommended to mix Diamond storage and contract storage because of the way how solidity stores data in structs), Diamond storage allows great flexibility of storing and accessing data as the data at a certain pointer can be access from every facet linked to the Diamond."))}m.isMDXComponent=!0},2570:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dodao-smart-contract-arch-mermaid-b7bb44ab88bb4ac7e970b5ac1cb09816.png"}}]);