# Technical Interview

# Introduction

Welcome to the Decent Labs technical interview - The intent of this interview is to learn how you think through technical problems. Therefore, a huge emphasis will be placed on your critical thinking and how you approach technical specs.

# *Please Read Below*
Please read through this task in its entirety. We would like to spend as little time on setup as possible. Here is a list of items you should have setup before our assigned interview time.

- Fork - https://github.com/decent-dao/tech-challange
- Contracts folder
1. Install Node Modules (nvm use / npm install)
2. Compile Contracts (npm run compile)
3. Run Tests (npm run test)
4. Deploy Contracts / Local Blockchain Instance (npx hardhat node - *TERMINAL ONE*)
5. Port created typechain file to interface file (initial one there)

- Interface folder
1. Install Node Modules (nvm use / npm install)
2. Port typechain file from contracts to src file (initial one there)
3. Start Project (npm run start - *TERMINAL TWO*)

- Connect wallet using Metamask (Must connect to hardhat instance by switching network and importing a hardhat account)
https://support.chainstack.com/hc/en-us/articles/4408642503449-Using-MetaMask-with-a-Hardhat-node

- Import 1st hardhat account (You can find your private keys in the first terminal where you ran npx hardhat node)
https://mammothinteractive.com/metamask-how-to-get-funds-on-hardhat-network/#:~:text=Click%20on%20your%20account%20icon,This%20account%20has%2010000%20Eth.

- Make a deposit transaction 
1. Add the VotestokenWithSupply address found in 1st terminal after deploying contracts 
2. Add a number to total amount
3. Click deposit.
*Note* Sometimes you may need to reset your metamask account to be able to create a transaction. 
https://wealthquint.com/reset-metamask-wallet-account-30599/#:~:text=To%20reset%20MetaMask%20Wallet%2C%20In,MetaMask%20Wallet%20will%20be%20reset.

Please reach out if you have any issues getting your dev env setup. I am happy to help. We will start the conversation off getting to know each other, discuss the technical tasks, and get to writing the code.

Please do not start working on the actual challenge. ONLY setup will be allowed before the interview. However, you may review the code beforehand to get an understanding of the codebase.
# *Please Read Above*

# Technical Task

This codebase contains two separate packages:
 - Interface - A typescript react app utilizing tailwind
 - Contracts - A hardhat repo with solidity contracts, a test-suite, and deployments

The two packages exist within this monorepo to represent the smart-contract and the frontend-client of a simple token treasury. Your goals:
 - develop treasury smart-contracts
 - create smart-contract tests
 - deploy contracts
 - read a users balance from the client
 - deposit to the treasury from the client
 - withdraw from the treasury from the client.

Please find a detailed list of action items below.

The code is modular enough to allow a frontend engineer to only focus on the frontend and a solidity engineer to only focus on the contracts. Do not be stressed if you do not know one of them. Acknowledge your weaknesses and focus on your strengths!

# Technical Goals - Smart Contracts

Smart Contracts(Treasury.sol):
 - Create a smart contract which allows an arbitrary user to deposit an arbitrary erc20 token
 - Maintain a public running balance of the user => token => deposits
 - A user w/ a balance should be able to withdraw tokens from their balance

Compile Contracts 
```shell
npm run compile
```

Run Tests
```shell
npm run tests
```

Deploy contracts to a local node
```shell
npx hardhat node
```

# Technical Goals - Client

- Copy generated types from hardhat into src directory

Build frontend 
```shell
npm run start
```

Client(Treasury.tsx)
- Should have a field which states your current balance.
- Input boxes for a user to indicate the amount and the token address they wish to deposit or withdraw.
- Two buttons which allow a user to deposit and withdraw from the treasury.

Transactions(hooks/useDeposit.ts)
- Create a hook for Withdrawing - you may use useDeposit as a template.
- Hook up useWithdraw within the treasury component.
- When a transaction is pending - disable the two buttons.

Listeners(context/userData/useuserBalance.ts)
- Create a listener derived from the typechain for the withdraw event.
- You may use the deposit filter as a template.
- When a transaction occurs which triggers the withdraw method, the data should update without having to refresh the page.

# Scoring Criteria  

- Solidity Understanding
- React Understanding
- Web3 Understanding
- Tech-stack Familiarity
- Tech-doc Thinking Process

Please take your time reviewing the code base and discussing your plan of attack. This step in the process is way more important then writing lines of code.
