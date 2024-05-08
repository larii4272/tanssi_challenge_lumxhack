# 🏗 Scaffold-ETH 2



npm i axios(verificar )

npm i cors

yarn install

yarn compile

2. Run a local network in the first terminal:
yarn chain

3. On a second terminal, deploy the test contract:
yarn deploy

4. On a third terminal, start your NextJS app:
yarn start


yarn generate para criar uma chavepara sepolia
enviar faucet de sepolia para a chave criada ( (wallet address) )
deploy sepolia
DEPLOYER_PRIVATE_KEY=0x800c7fa1e0b605c0f16ed6ff0fced80bfa4e7467abbeeace8c840b81af7861ed

ects/tokenBeneficio$ yarn generate
👛 Generating new Wallet
📄 Private Key saved to packages/hardhat/.env file
🪄 Generated wallet address: 0x5d70de61f6F0353E6687B62bd87151Ed9dE5D562



antes de fazer o deploy certificar a rede:
packages/nextjs/scaffold.config.ts
  targetNetworks: [chains.sepolia],
  ou
  targetNetworks: [chains.hardhat],


  yarn deploy --network sepolia 

  yarn verify --network sepolia