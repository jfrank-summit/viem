import { defineChain } from '../../utils/chain/defineChain.js'

export const autonomysTaurus = /*#__PURE__*/ defineChain({
  id: 490_000,
  name: 'Autuonomys Taurus Testnet EVM',
  nativeCurrency: {
    decimals: 18,
    name: 'AI3',
    symbol: 'AI3',
  },
  rpcUrls: {
    default: { http: ['https://auto-evm.taurus.autonomys.xyz/ws'] },
  },
  blockExplorers: {
    default: {
      name: 'Taurus EVM',
      url: 'https://taurus-evm.autonomys.xyz',
    },
  },
  contracts: {
    multicall3: {
      address: '0xca11bde05977b3631167028862be2a173976ca11',
      blockCreated: 7096959,
    },
  },
  testnet: true,
})
