export default {
  baseUrl: process.env.NODE_ENV === 'production' ? 'https://pizza-api.orbiter.finance' : '/send',
  credential: false,
  localProvider: {
    5: 'VUE_APP_HP_G', // Goerli
    22: 'VUE_APP_HP_AR_G',// Arbitrum Goerli
    77: 'VUE_APP_HP_OP_G',// Optimism Goerli
  },
  localWSProvider: {
    5: 'VUE_APP_WP_G', // Goerli
    22: 'VUE_APP_WP_AR_G', // Arbitrum Goerli
    77: 'VUE_APP_WP_OP_G',// Optimism Goerli
  },

  supportLocalNetWorksIDs: [
    '1',
    '2',
    '3',
    '5',
    '6',
    '7',
    '22',
    '33',
    '66',
    '77',
  ],
  localChainID_netChainID: {
    1: '1', // mainnet
    2: '42161', // Arbitrum
    3: '1', // zk
    4: '1', // starknet  
    5: '5', // Goerli
    6: '137', // polygon
    7: '10', // optimism
    22: '421613', // Arbitrum(G)
    33: '4', // zktest
    44: '4', // starknet(R)
    66: '80001', // polygon(R)
    77: '420', // Optimism(G)
  },
  localChainMap: {
    Mainnet: 1,
    Arbitrum: 2,
    ZkSync: 3,
    Polygon: 6,
    Optimism: 7,
    Goerli: 5,
    'Arbitrum(G)': 22,
    'ZkSync(R)': 33,
    'Polygon(R)': 66,
    'Optimism(G)': 77,
  },
  txExploreUrl: {
    1: 'https://etherscan.io/tx/', // /tx/  /address/
    5: 'https://goerli.etherscan.io/tx/', // /tx/  /address/
    2: 'https://arbiscan.io/tx/', // /tx/  /address/
    22: 'https://goerli-rollup-explorer.arbitrum.io/tx/',
    3: 'https://zkscan.io/explorer/transactions/',
    33: 'https://rinkeby.zkscan.io/explorer/transactions/', // /explorer/transactions/   /explorer/accounts/
    6: 'https://polygonscan.com/tx/',
    66: 'https://mumbai.polygonscan.com/tx/',
    7: 'https://optimistic.etherscan.io/tx/',
    77: 'https://blockscout.com/optimism/goerli/tx/',
  },
  accountExploreUrl: {
    1: 'https://etherscan.io/address/', // /tx/  /address/
    5: 'https://goerli.etherscan.io/address/', // /tx/  /address/
    2: 'https://arbiscan.io/address/', // /tx/  /address/
    22: 'https://goerli-rollup-explorer.arbitrum.io/address/',
    3: 'https://zkscan.io/explorer/accounts/',
    33: 'https://rinkeby.zkscan.io/explorer/accounts/', // /explorer/transactions/   /explorer/accounts/
    6: 'https://polygonscan.com/address/',
    66: 'https://mumbai.polygonscan.com/address/',
    7: 'https://optimistic.etherscan.io/address/',
    77: 'https://blockscout.com/optimism/goerli/address/',
  },
  dTokenAddress: {
    ETH: {
      5: "0xcccEFCd2C78bBAD5713206FaffB5D90793391cE7",
      22: "0x77AFB8dD7ECB5Ba016ADbf7A9A43423628601f92",
      77: "0x18B71888B5EfFfF0600aDd1B1C41122b15263C8f"
    },
    DAI: {
      5: "0x6BeA37BDeED2bB274bB233D681848550137FfDa8",
      22: "0x29652Be4ad9BDb327df12CD25B3DfF8A360baB8e",
      77: "0x17f5F4612dcdEF38ec904763559E6449da8EA454"
    },
    USDC: {
      5: "0x3F1a802222Ed8AD89A91EC5c83691002C0A1715C",
      22: "0x564F545D621A78c56CDaFc2750928af3fF0A9Fc8",
      77: "0xcca3aDA92703515Ee9F0d6823770B2b2ca982083"
    },
  },
  destAddress: {
    ETH: {
      5: "0xe81e56b839C916F903b123E0DEf49D24e4F42546",
      22: "0x036aD453DfCd3B5c84C07325Fe9DB755454cdE74",
      77: "0xFA349027d543524DD8E6C80f22cf98b4696655e3"
    },
    DAI: {
      5: "0x7dBaE72a0E42f0FB97Fb74d9257D5c063Fc19BaD",
      22: "0xada0853C6f4AD4838Ee6C4E279A56F2189437B41",
      77: "0xfFF2B30c453B48De74C143fdb6E409a4F9763eeC"
    },
    USDC: {
      5: "0x3C24671C1c39dB6edD342bD520817D3ccE55f61D",
      22: "0x31480a75E20cFaE471d8747d28b7ae80008578AE",
      77: "0x16D17416d388BA56deDAed664136626B021AAf97"
    }
  },
  sourceAddress: {
    ETH: {
      5: "0xE2bB06002Ab03e261A0C3D512418473b40602CF6",
      22: "0xb4a7BC20033bfF205E4f84a8b2d2087665588A5E",
      77: "0xC00216987308C363Bb1B357f7b04a652C9d1925d"
    },
    DAI: {
      5: "0xB203802488db38598748D21073355Fd9612BA543",
      22: "0x2fbF1A5d7fF0E5878f3ab106204C8BEAd5be167d",
      77: "0xDB2D1eC512496f07BE428b159101Cc82fAaBdeE6"
    },
    USDC: {
      5: "0xF6500386fb589C971F80B66BaE297603b133c39A",
      22: "0xF4508c4609c27c9EE7b53e51A0C39EC81cd871f6",
      77: "0x34f92293c241D5132153dea057443481023BAaB5"
    }
  },

  coinAddress: {
    ETH: {
      5: "0x0000000000000000000000000000000000000000",
      22: "0x0000000000000000000000000000000000000000",
      77: "0x0000000000000000000000000000000000000000"
    },
    DAI: {
      5: "0x5C221E77624690fff6dd741493D735a17716c26B",
      22: "0x3d9835F9cB196f8A88b0d4F9586C3E427af1Ffe0",
      77: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1"
    },
    USDC: {
      5: "0xd35CCeEAD182dcee0F148EbaC9447DA2c4D449c4",
      22: "0xEA70a40Df1432A1b38b916A51Fb81A4cc805a963",
      77: "0x7E07E15D2a87A24492740D16f5bdF58c16db0c4E"
    }
  },
  precision: {
    ETH: 18,
    DAI: 18,
    USDC: 6
  },
}
