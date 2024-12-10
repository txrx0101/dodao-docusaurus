# current development status

Here are the technical details on what was actually completed and the ongoing development.

#### definitions

I am using word **implementation** when something is done to a certain state.
I am using phrase **started implementation** when some development has been started, but not completed
I am using phrase **refactoring** when a there was a previous implementation and it was significantly changed
If something is not mentioned it means that the development has not been started.

### smart contract:

- EIP-2535 Diamond smart contract architecture which simplifies smart contract upgradability and maintenance by using contract facets and contract libraries approach.

- The implemented architecture strong point that while remaining upgradable it enforces immutability of created Task contracts, meaning that Task smart contract code cannot be changed by anyone after task creation, and the Task data can be only modified by the users involved in the Task upon their assigned privileges

- hardhat tasks and deployment scripts implementation, dodao Task related business flow unit tests and end-to end test, improving smart contract tests coverage, preparation for automatic smart contract verification at contract deployment

- principal implementation of ERC-1155 support for Diamond contract, ERC-1155 unit test port to hardhat

- implementation of tags support in smart contract

- implementation of Task contracts data accessor contract(TaskDataFacet), which enables batch Task load for faster startup and Task allowlists

- implementation of Task token balance collection function, which is a part of future multi-token Task contract functionality

- implementation of Task contracts data callbacks to the main diamond contract which enables optimized user wallet address storage for faster Task data load and accounts allowlists and future implementation of statistical dashboard

- Task contract refactoring to enable receiving original "msg.sender" via Connected contracts implementations(Axelar/Hyperlane/LayerZero/Wormhole)

- started implementation of Connected contracts functionality and tested smart contract deployment to other chains

### Diamond HLD diagram

Here is how current [dodao smart contract diamond](https://github.com/devopsdao/devopsdao-smart-contract-diamond) architecture looks like.

![smart contract architecture](./img/dodao-smart-contract-arch-mermaid.png)

Note:

- Diamond storage contains Tasks, Accounts lists, Token, Connected contracts configuration and aggregated data

- Task contract storage contains the Task data

#### definitions

The current readiness status for the mainnet launch is mentioned in the [braces].

[ready] - means generally ready, only minor changes may be required for the mainnet launch
[mvp] - means provides basic functionality, needs more development and testing for the mainnet launch
[dev] - under development, has some functionality, but is not ready for testing
[mock] - mocked-up contract, development has not yet started

### Task and user account facets:

TaskCreateFacet.sol [ready] - creates non-upgradable Task contracts using factory pattern, which are not linked to the Diamond directly, use their own storage and use CALLs to push necessary data back to the main diamond.

TaskDataFacet.sol [ready] - contains functions which read Tasks data from the Task contracts created by TaskCreateFacet, it also manages Task contracts blacklist.

LibTasks.sol [ready] and LibTasksAudit.sol [ready] - provide underlying functions for the above facets.

LibChat.sol [ready] - provides in-Task chat functions.

AccountsFacet.sol [mvp] - manages user accounts, it is being called by Task contracts when a user participates or completes the Task, it also manages Accounts blacklist.

LibUtils.sol [dev] - provide some generic functions to be reused by multiple facets.

### Token facets:

TokenFacet.sol [mvp] - creates ERC-1155 compatible fungible and non-fungible(NFT) tokens, its implementation is based on Enjin reference implementation rewritten to use Diamond storage and some project-specific functions and features added. Is generally ready for implementation of complex user stories based on the already developed token functionality.

LibTokens.sol [ready] - provides ERC-1155 functions for the TokenFacet facet.

TokenDataFacet.sol [mvp] - contains more project specific ERC-1155 related functions.

LibTokenData.sol [mvp] - provides underlying functions for the TokenDataFacet facet.

### Connected contracts facets:

InterchainFacet.sol [mock] - implements Moonbeam Connected contracts Axelar/Hyperlane/LayerZero/Wormhole protocol specific functions

LibInterchain.sol [dev] - provides underlying functions for the Interchain facet.

TasksInterchainFacet.sol [dev] - implements Moonbeam Connected contracts concept by enabling interaction with the Task contracts via Axelar/Hyperlane/LayerZero and Wormhole Connected contracts protocols.

AxelarFacet.sol [dev] - implements Axelar specific functions to interchain calls

HyperlaneFacet.sol [dev] - implements Hyperlane specific functions to interchain calls

LayerzeroFacet.sol [dev] - implements LayerZero specific functions to interchain calls

WormholeFacet.sol [dev] - implements Wormhole specific functions to interchain calls

### Witnet oracle facets:

WitnetFacet.sol [dev] - implements the connection with Witnet oracles to query Github repository data used to automatically sign Task review.

LibWitnetRequest.sol [dev] - provides underlying functions for the WitnetFacet facet.

### APP:

![roadmap|690x385, 100%](upload://ergDjkitQHQC6dG43n4groQqCGl.jpeg)

- refactor of data loading to make use of data accessor contract by loading Task data in batches

- creation of Task contract events monitoring system which enables instant Task refresh on contract updates

- started implementation of data analysis functions for the future dashboard

- refactoring in order to support refactored Task contract and preparation for Connected contracts implementation

- refactoring wallet connection functions in order to provide better user experience

- implementation of Metamask connection for the Web version

- refactoring of Wallet Connect functions for WalletConnect 1.0, keeping close with WalletConnect community for future migration to WalletConnect 2.0

- fixing bugs in WebThree dart library in order to support tuples in the smart contract interface dart code generator necessary for implementing the Connected contracts

- started implementation of Connected contracts functionality

- started implementation of user roles based on NFTs

- started implementation of NFT tags functionality

- successfully tested dApp builds for Web, Android and Linux

### UI:

![design update|690x385](upload://lpFgb9QBD5PYlIBVqlY3tWvqeSQ.jpeg)

- new UI design prototype, started implementation of the new design in code

- decided on the future lottie usage for in-app animations and performed first tests in order for team designer to start working on it

- task dialog widget to Task page refactor

- implementation of material design principles for the UI, such as FAB, widget animation, swipes

- implementation of telegram-like search widget and tags search

- refactor of in-app navigation which enables task hyperlinks for future public and hackaton tasks, refactor of most widgets in order to support widget animation

- implementation of skeletons for data load providing a better user experience

- implementation of detailed Task Participant list for future connection with smart contract

- implementation of Task details page and Task chat

- implementation of Auditor page

- started implementation of Accounts page which will provide accounts overview and details

- implementation of tags manager widget for future integration with the smart contract and NFT tags

- started implementation of NFT manager widget for future integration with the smart contract for creating, minting and displaying available NFTs

- implementation of adding a Github repository to the Task and checking the repository pull requests via Witnet Oracle

Check