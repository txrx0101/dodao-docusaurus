"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5114],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var r=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(o),h=a,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||n;return o?r.createElement(m,s(s({ref:t},c),{},{components:o})):r.createElement(m,s({ref:t},c))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,s=new Array(n);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var u=2;u<n;u++)s[u]=o[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}h.displayName="MDXCreateElement"},2803:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>n,metadata:()=>i,toc:()=>u});var r=o(7462),a=(o(7294),o(3905));const n={},s="Dodao processes",i={unversionedId:"dodao-processes",id:"dodao-processes",title:"Dodao processes",description:"Roles",source:"@site/docs/dodao-processes.md",sourceDirName:".",slug:"/dodao-processes",permalink:"/docs/dodao-processes",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/dodao-processes.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Translate your site",permalink:"/docs/docusaurus howto/tutorial-extras/translate-your-site"},next:{title:"How Dodao.dev dApp works",permalink:"/docs/how-dodao-works"}},l={},u=[{value:"Roles",id:"roles",level:2},{value:"Task types",id:"task-types",level:2},{value:"Wallet connection:",id:"wallet-connection",level:2},{value:"Task creation (Customer) New State",id:"task-creation-customer-new-state",level:2},{value:"Task participation (Performer) New State",id:"task-participation-performer-new-state",level:2},{value:"Performer selection (Customer) Agreed State",id:"performer-selection-customer-agreed-state",level:2},{value:"Working on a Task (Performer) Progress State",id:"working-on-a-task-performer-progress-state",level:2},{value:"Submitting a Task for the Review (Performer) Review State",id:"submitting-a-task-for-the-review-performer-review-state",level:2},{value:"Reviewing a Task (Customer) Review State",id:"reviewing-a-task-customer-review-state",level:2},{value:"Withdrawing funds (Performer) Complete State",id:"withdrawing-funds-performer-complete-state",level:2},{value:"Audit process Audit State",id:"audit-process-audit-state",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"dodao-processes"},"Dodao processes"),(0,a.kt)("h2",{id:"roles"},"Roles"),(0,a.kt)("p",null,"Customer - When you create a task, you are in a Customer role.\nPerformer - When you take a task, you are in a Performer role.\nAuditor - When you Audit a task, you are in a Auditor role."),(0,a.kt)("h2",{id:"task-types"},"Task types"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Public"),(0,a.kt)("li",{parentName:"ul"},"Private"),(0,a.kt)("li",{parentName:"ul"},"Hackathon")),(0,a.kt)("h2",{id:"wallet-connection"},"Wallet connection:"),(0,a.kt)("p",null,"When you open Dodao.dev dApp, it will show you publicly viewable Tasks. In order to create a new Task, take or Audit an existing Task you must connect your wallet."),(0,a.kt)("p",null,"Currently two options are supported: Metamask and WalletConnect."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Metamask is supported on Desktop and Mobile. To connect with Metamask on Desktop, please install Metamask browser plugin. To connect with Metamask on Mobile, please install MetamaskdAppfor Android or IOS and open Dodao in Metamask in-app browser.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Wallet connect is supported on Desktop and Mobile. To connect with WalletConnect on Desktop, please install WalletConnect compatible wallet on your mobile device and scan the QR code. Connection via the WalletConnect on Mobile devices is available both from Dodao native dApp and Dodao web dApp. To connect via the WalletConnect on Mobile, please press connect, and the WalletConnect compatible wallet will be opened. If it is not installed, we suggest to install Metamask, Trustwallet or Alphawallet."))),(0,a.kt)("p",null,'After connecting, you will see the "Wallet connected" message.'),(0,a.kt)("p",null,"Below are the Dodao process descriptions, with a user (role) and a task ","[state]","."),(0,a.kt)("h2",{id:"task-creation-customer-new-state"},"Task creation (Customer) ","[New State]"),(0,a.kt)("p",null,"To create a Task, press create Task button, then the Task creation dialog will appear. You should put a Task Title which shortly describes the nature of the task and a full Description of it, you can checkout Task creation best practices for Task creation recommendations.\nCurrently you can fund the Task with DEV and aUSDC tokens. After you are done, press create button and then your wallet will prompt you to confirm the transaction, in the case when you fund with aUSDC you will first have to approve aUSDC token spend by Dodao smart contract. After the transaction is minted, the task will appear in the Customer tab for you, and in Tasks for other Dodao users."),(0,a.kt)("h2",{id:"task-participation-performer-new-state"},"Task participation (Performer) ","[New State]"),(0,a.kt)("p",null,"To take the task as a Performer, navigate to the Tasks page and pick the Task you like, read its Description and if you are convinced you can make it fill-in the Task appication text box and click Participate. Your wallet will ask for transaction confirmation. After the transaction is minted, Task will move to the Applied tab on the Perfomer page, and the Customer will see that a Performer has applied for a task."),(0,a.kt)("h2",{id:"performer-selection-customer-agreed-state"},"Performer selection (Customer) ","[Agreed State]"),(0,a.kt)("p",null,"When someone has applied to work on the Task, Customer will see it on the Selection tab of the Customer page.\nCustomer can select one of the Performers who have applied for a Task. When a Performer is selected he will see a Task in the Working tab of the Performer page, other Performers will see lost Tasks in the Lost tab."),(0,a.kt)("h2",{id:"working-on-a-task-performer-progress-state"},"Working on a Task (Performer) ","[Progress State]"),(0,a.kt)("p",null,"When you are selected to work on the Task as a Performer, you will see it on the Working tab, you should then write your short plans for implementing the Task and press Start the task button. Your wallet will ask for transaction confirmation. After the transaction is minted, the Task will change its color to indicate that the Task is in the Progress state.."),(0,a.kt)("h2",{id:"submitting-a-task-for-the-review-performer-review-state"},"Submitting a Task for the Review (Performer) ","[Review State]"),(0,a.kt)("p",null,"After finishing your work on the Task, you should submit it for the Review, you should then write your notes for the Customer, probably include a link to your work, or pass it via the agreed with the Customer method offchain and press Review button. Your wallet will ask for transaction confirmation. After the transaction is minted, the Task will change its color to indicate that the Task is in the Review state."),(0,a.kt)("h2",{id:"reviewing-a-task-customer-review-state"},"Reviewing a Task (Customer) ","[Review State]"),(0,a.kt)("p",null,"When a Performer has sent his work for a Review, you will see your task in the Review state on the Progress tab of the Customer page. You should then carefully review the received work from the Performer and if you are convinced that the Task is implemented, press Sign review button. Your wallet will ask for transaction confirmation. After the transaction is minted, the Task will move to the Completed tab of the Customer page, the Performer will also see it on the Completed tab of the Performer page."),(0,a.kt)("h2",{id:"withdrawing-funds-performer-complete-state"},"Withdrawing funds (Performer) ","[Complete State]"),(0,a.kt)("p",null,"When a Customer has signed the Review, you can withdraw your earned funds to a preferred chain(Moonbase or one which is supported by Axelar). Select the preferred chain and press Withdraw button. Your wallet will ask for transaction confirmation. After the transaction is minted, you will receive funds to your wallet."),(0,a.kt)("h2",{id:"audit-process-audit-state"},"Audit process ","[Audit State]"),(0,a.kt)("p",null,"When a task is in Agreed, Progress, Review stage Customer can apply for an Audit. When a task is in a Review stage a Performer can apply for an Audit. A 10% audit fee is paid by topping up the task contract during the application."),(0,a.kt)("p",null,"When a task is sent to Audit, it is available for Auditors to apply for it, then the Initiator of the audit can select the Auditor(note: maybe we will make it random). When an Auditor is selected he carefully reviews the task and asks the Performer to send him his work, the Auditor must analyze if the work matches the tasks requirements and within 48 hours make his decision either to: set the task to a Completed stage, or return it back to the New stage for a new Performer selection. When the work does not match the task requirements, Auditor based on on his professional expertise has a right to ask the Performer to send his corrections if he believes that it is minor and the work can be improved within the Audit period. Auditor role is to effectively and economically resolve the issue raised between the Customer and Performer, for which he gets 10% Audit fee."))}p.isMDXComponent=!0}}]);