# Treasury

# Treasury.sol
The DAO contract contains the minimum viable core functionality required for a DAO. Primarily, this consists of the execute function, which can be passed any arbitrary function call to be made from the DAO's behalf, assuming the caller has the correct permissions.

Local Setup & Testing
Clone the repository:
```shell
git clone ...
```

Lookup the recommended Node version to use in the .nvmrc file and install and use the correct version:
```shell
nvm install 
nvm use
```
Install necessary dependencies:
```shell
npm install
```

Compile contracts to create typechain files:
```shell
npm run compile
```

Run the tests
```shell
npm run test
```

Local Hardhat deployment
To deploy the base Fractal contracts open a terminal and run:
```shell
npx hardhat node
```
This will deploy the following contracts and log the addresses they were deployed to:
