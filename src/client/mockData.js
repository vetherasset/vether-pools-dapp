
export const NetworkData = () => {
   return ({
      "volume": '240001120000000000000000',
      "pools": 8,
      "users": 123,
      "totalStaked":'2400001120000000000000000'
   }) 
   }

export const PoolData = () => {
   return [
      {
         'symbol': 'ETH',
         'address': '0x0000000000000000000000000000000000000000',
         'price': 200,
         'volume': '230001120000000000000000',
         'depth': '200000000000000000000',
         'balance':'1000000000000000000',
         'txCount': 12,
         'roi': 0.23,
         'units':'241120000000000000000',
      }, {
         'symbol': 'KNC',
         'address': '0xe6b7068b4893be8980961b7a722fc92813931b56',
         'price': 2,
         'volume': '120001120000000000000000',
         'depth': '12001120000000000000000',
         'balance':'241120000000000000000',
         'txCount': 5,
         'roi': 0.15,
         'units':'241120000000000000000',
      }, {
         'symbol': 'MKR',
         'address': '0xe160f2895068a6030c389ed8ffc408d182a9033d',
         'price': 400,
         'volume': '130001120000000000000000',
         'depth': '11001120000000000000000',
         'balance':'241120000000000000000',
         'txCount': 5,
         'roi': 0.12,
         'units':'241120000000000000000',
      }, {
         'symbol': 'MAI',
         'address': '0x6b175474e89094c44da98b954eedeac495271d0f',
         'price': 1,
         'volume': '130001120000000000000000',
         'depth': '11001120000000000000000',
         'balance':'241120000000000000000',
         'txCount': 5,
         'roi': 0.12,
         'units':'241120000000000000000',
      }
   ]
}
export const CDPData = () => {
   return [
      {
         'cdp': '0',
         'address':'0x31bb711de2e457066c6281f231fb473fc5c2afd3',
         'debt': '200000000000000000000',
         'collateral': '3000000000000000000',
         'canLiquidate': 'false',
         'status':'Safe'
      
      },
      {
         'cdp': '1',
         'address':'0xD50e4AfCe1196881414DcF7747582F9f1640683a',
         'debt': '82000000000000000000',
         'collateral': '2000000000000000000',
         'canLiquidate': 'false',
         'status':'Safe'
      },
      {
         'cdp': '2',
         'address':'0x30574192140A8fF18B5694cDd7C8D9D206E48835',
         'debt': '1003000000000000000000',
         'collateral': '10000000000000000000',
         'canLiquidate': 'false',
         'status':'Safe'
      },
      {
         'cdp': '3',
         'address':'0x778AC40Dd075ec086674a84FeB8B5C38D3be0C18',
         'debt': '113000000000000000000',
         'collateral': '1000000000000000000',
         'canLiquidate': 'true',
         'liquidateFee': '7390000000000000000',
         'status':'UnSafe'
      },
      {
         'cdp': '4',
         'address':'0xe06A4c047363B1eBc641b4135CCf65c0586D6427',
         'debt': '61000000000000000000',
         'collateral': '2000000000000000000',
         'canLiquidate': 'false',
         'status':'Safe'
      },
      {
         'cdp': '5',
         'address':'0xB95B7686fd283a8a0B7F99813029C11313197da7',
         'debt': '1210000000000000000000',
         'collateral': '3000000000000000000',
         'canLiquidate': 'true',
         'liquidateFee': '60590000000000000000',
         'status':'UnSafe'
      }
   ]
}

export const WalletData = () => {
   return(
      {
         address: "0x31bb711de2e457066c6281f231fb473fc5c2afd3",
         tokens: [
            {
               "symbol": "ETH",
               "name": 'Ethereum',
               "balance": '1120000000000000000',
               address: "0x0000000000000000000000000000000000000000",
               totalSupply: "1000000000000000000000000"
            },
            {
               "symbol": "KNC",
               "name": 'Kyber Network Token',
               "balance": '11230000000000000000',
               address: "0xe6b7068b4893be8980961b7a722fc92813931b56",
               totalSupply: "1000000000000000000000000"
            },
            {
               "symbol": "BNT",
               "name": 'Bancor Network Token',
               "balance": '112340000000000000000',
               address: "0x519734ec8854b749ba48be4073dfd71e110ceadb",
               totalSupply: "1000000000000000000000000"
            },
            {
               "symbol": "DAI",
               "name": 'Multi-collateral DAI',
               "balance": '3576382508375810000',
               address: "0x6b175474e89094c44da98b954eedeac495271d0f",
               totalSupply: "95883410210926619021526051"
            },
            {
               "symbol": "SAI",
               "name": 'Single-collateral DAI',
               "balance": '3576382508375810000',
               address: "0x767f7dadaa0398ae75646a5fa48ce5ae95fdebef",
               totalSupply: "95883410210926619021526051"
            },
            {
               "symbol": "VETH",
               "name": 'Vether',
               "balance": '3576382508375810000',
               address: "0xVETH711de2e457066c6281f231fb473fc5c2afd3",
               totalSupply: "95883410210926619021526051"
            },
            {
               "symbol": "SNX",
               "name": 'Synthetix Network Token',
               "balance": '1120000000000000000',
               address: "0x31bb711de2e4534366c6281f231fb473fc5c2afd3",
               totalSupply: "95883410210926619021526051"
            }
         ]
      }
   )
}

export const StakeData = () => {
   return [
      {
         "symbol": "ETH",
         'address': "0x0000000000000000000000000000000000000000",
         "name": 'Ethereum',
         "units": '1120000000000000000'
      },
      {
         "symbol": "CAN",
         'address': "0x00000000000000000012340000000000000000000",
         "name": 'CanYaCoin',
         "units": '11230000000000000000'
      },
      {
         "symbol": "LINK",
         'address': "0x00000000012340000012340000000000000000000",
         "name": 'Chainlink',
         "units": '112340000000000000000'
      }
   ]
}

export const tokenArray2 = () => {
   return [{
      "tokenInfo": {},
      "balance": 1.9317e+18,
      "totalIn": 0,
      "totalOut": 0
   },
   {
      "tokenInfo": {
         "address": "0x06afad679999600ed84b8ad0a0f5ef65e4dbb57c",
         "name": "CanYaCoin",
         "decimals": "6",
         "symbol": "CAN",
         "totalSupply": "100000000000000",
         "owner": "0x",
         "lastUpdated": 1512277079,
         "issuancesCount": 0,
         "holdersCount": 3,
         "price": false
      },
      "balance": 2750000000,
      "totalIn": 0,
      "totalOut": 0
   },
   {
      "tokenInfo": {
         "address": "0x076641af1b8f06b7f8c92587156143c109002cbe",
         "name": "SoPay",
         "decimals": "18",
         "symbol": "SOP",
         "totalSupply": "4499999952000000000000000000",
         "owner": "0x236e032949cc87ec42888d26889aea2fa28f02f5",
         "lastUpdated": 1589067916,
         "issuancesCount": 2,
         "holdersCount": 229715,
         "ethTransfersCount": 3,
         "price": {
            "rate": 5.30336698568e-5,
            "diff": 10.4,
            "diff7d": -9.06,
            "ts": 1589625430,
            "marketCapUsd": null,
            "availableSupply": null,
            "volume24h": 177.645006687415,
            "diff30d": -2.072422528994693,
            "currency": "USD"
         }
      },
      "balance": 1.6e+19,
      "totalIn": 0,
      "totalOut": 0
   },
   {
      "tokenInfo": {
         "address": "0x0cf0ee63788a0849fe5297f3407f701e122cc023",
         "name": "Streamr DATAcoin",
         "decimals": "18",
         "symbol": "DATA",
         "totalSupply": "987154514000000000000000000",
         "owner": "0x1bb7804d12fa4f70ab63d0bbe8cb0b1992694338",
         "lastUpdated": 1589624233,
         "issuancesCount": 0,
         "holdersCount": 445072,
         "ethTransfersCount": 1,
         "price": {
            "rate": 0.0744191520114,
            "diff": 0.38,
            "diff7d": -0.89,
            "ts": 1589625427,
            "marketCapUsd": 49661937.1205933,
            "availableSupply": 667327371.762927,
            "volume24h": 2053670.98453055,
            "diff30d": 87.18181864751148,
            "currency": "USD"
         }
      },
      "balance": 4.7665298064850355e+17,
      "totalIn": 0,
      "totalOut": 0
   },
   {
      "tokenInfo": {
         "address": "0x0f5d2fb29fb7d3cfee444a200298f468908cc942",
         "name": "Decentraland",
         "decimals": 18,
         "symbol": "MANA",
         "totalSupply": "2197842965034152513924741837",
         "owner": "0xa66d83716c7cfe425b44d0f7ef92de263468fb3d",
         "lastUpdated": 1589625883,
         "issuancesCount": 16191,
         "holdersCount": 38391,
         "description": "A virtual world that runs on open standards",
         "ethTransfersCount": 17,
         "price": {
            "rate": 0.0363704790365,
            "diff": -5,
            "diff7d": -4.11,
            "ts": 1589625427,
            "marketCapUsd": 49833483.05584099,
            "availableSupply": 1370162955.67155,
            "volume24h": 26071248.6023745,
            "diff30d": 35.231102641971745,
            "currency": "USD"
         }
      },
      "balance": 7.996114625021105e+18,
      "totalIn": 0,
      "totalOut": 0
   },
   {
      "tokenInfo": {
         "address": "0x0f8b6440a1f7be3354fe072638a5c0f500b044be",
         "decimals": "18",
         "name": "Katerium.com",
         "owner": "0x9cbdc97ee6c7400ef983de0422cea7e4470d3025",
         "symbol": "KTH",
         "totalSupply": "777777777777000000000000000000",
         "lastUpdated": 1589586113,
         "issuancesCount": 0,
         "holdersCount": 7324,
         "price": false
      },
      "balance": 7.77e+20,
      "totalIn": 0,
      "totalOut": 0
   },
   {
      "tokenInfo": {
         "address": "0x1234567461d3f8db7496581774bd869c83d51c93",
         "name": "BitClave",
         "decimals": "18",
         "symbol": "CAT",
         "totalSupply": "2000000000000000000000000000",
         "owner": "0x3c6025652c63b2aa17a66d709d54e455ac82303f",
         "lastUpdated": 1589588239,
         "issuancesCount": 0,
         "holdersCount": 220374,
         "ethTransfersCount": 0,
         "price": {
            "rate": 0.0001377,
            "diff": 0,
            "diff7d": 0,
            "ts": 1589625428,
            "marketCapUsd": 69042.00967039801,
            "availableSupply": 501394405.74,
            "volume24h": 0,
            "diff30d": 101.38710725589988,
            "currency": "USD"
         }
      },
      "balance": 2.0e+18,
      "totalIn": 0,
      "totalOut": 0
   },
   {
      "tokenInfo": {
         "address": "0x127cae460d6e8d039f1371f54548190efe73e756",
         "name": "ShiftCashExtraBonus",
         "decimals": "0",
         "symbol": "SCB",
         "totalSupply": "999999",
         "owner": "",
         "lastUpdated": 1588735553,
         "issuancesCount": 0,
         "holdersCount": 54795,
         "ethTransfersCount": 0,
         "price": false
      },
      "balance": 1,
      "totalIn": 0,
      "totalOut": 0
   },
   {
      "tokenInfo": {
         "address": "0x1d462414fe14cf489c7a21cac78509f4bf8cd7c0",
         "name": "CanYaCoin",
         "decimals": "6",
         "symbol": "CAN",
         "totalSupply": "100000000000000",
         "owner": "",
         "lastUpdated": 1589517493,
         "issuancesCount": 0,
         "holdersCount": 63230,
         "ethTransfersCount": 8,
         "price": {
            "rate": 0.0112979202006,
            "diff": -13.8,
            "diff7d": -31.12,
            "ts": 1589625428,
            "marketCapUsd": 1082645.7199774547,
            "availableSupply": 95826993,
            "volume24h": 151.167456358428,
            "diff30d": 0.3641131905465045,
            "currency": "USD"
         }
      },
      "balance": 2692230877,
      "totalIn": 0,
      "totalOut": 0
   },
   {
      "tokenInfo": {
         "address": "0x225b991d88fe12ca4e5c3a98441dbd081c4a50d4",
         "name": "Shares",
         "decimals": "0",
         "symbol": "SHARE",
         "totalSupply": "7387500000000000",
         "owner": "",
         "lastUpdated": 1544054769,
         "issuancesCount": 0,
         "holdersCount": 15,
         "price": false
      },
      "balance": 10000000000000,
      "totalIn": 0,
      "totalOut": 0
   },
   {
      "tokenInfo": {
         "address": "0x31bb711de2e457066c6281f231fb473fc5c2afd3",
         "decimals": "18",
         "name": "Vether",
         "symbol": "VETH",
         "totalSupply": "1000000000000000000000000",
         "lastUpdated": 1589625741,
         "issuancesCount": 0,
         "holdersCount": 72,
         "price": false
      },
      "balance": 9.60994621656469e+19,
      "totalIn": 0,
      "totalOut": 0
   },
   {
      "tokenInfo": {
         "address": "0x426ca1ea2406c07d75db9585f22781c096e3d0e0",
         "decimals": "8",
         "name": "Minereum",
         "symbol": "MNE",
         "totalSupply": "3832979752889966290",
         "lastUpdated": 1589625755,
         "issuancesCount": 0,
         "holdersCount": 1181444,
         "price": false
      },
      "balance": 3200000000000,
      "totalIn": 0,
      "totalOut": 0
   },
   {
      "tokenInfo": {
         "address": "0x4485561db76614ff727f8e0a3ea95690b8b16022",
         "name": "Invox Finance Token",
         "decimals": "18",
         "symbol": "INVOX",
         "totalSupply": "464000000000000000000000000",
         "owner": "0xc9f45bb89c4ec5f34d65f567dc5d34e43455bcf5",
         "lastUpdated": 1588990515,
         "issuancesCount": 0,
         "holdersCount": 44235,
         "ethTransfersCount": 0,
         "price": false
      },
      "balance": 6.60103567973596e+19,
      "totalIn": 0,
      "totalOut": 0
   },
   {
      "tokenInfo": {
         "address": "0x49e033122c8300a6d5091acf667494466ee4a9d2",
         "name": "MEET.ONE",
         "decimals": "18",
         "symbol": "MEET.ONE",
         "totalSupply": "10000000000000000000000000000",
         "owner": "0x8672a1a82111f76900c9679bdc18bb7383535deb",
         "lastUpdated": 1589528867,
         "issuancesCount": 0,
         "holdersCount": 93068,
         "ethTransfersCount": 0,
         "price": false
      },
      "balance": 6.12156e+19,
      "totalIn": 0,
      "totalOut": 0
   },
   {
      "tokenInfo": {
         "address": "0x4dc3643dbc642b72c158e7f3d2ff232df61cb6ce",
         "name": "Amber Token",
         "decimals": "18",
         "symbol": "AMB",
         "totalSupply": "361477437535701402159030000",
         "owner": "0x0000000000000000000000000000000000000000",
         "lastUpdated": 1589619496,
         "issuancesCount": 0,
         "holdersCount": 378225,
         "ethTransfersCount": 2,
         "price": {
            "rate": 0.00811702960633,
            "diff": 6.43,
            "diff7d": -4.65,
            "ts": 1589625427,
            "marketCapUsd": 2934117.7837070855,
            "availableSupply": 361476787.200448,
            "volume24h": 97488.6513618759,
            "diff30d": -7.1273929752139935,
            "currency": "USD"
         }
      },
      "balance": 1.1e+17,
      "totalIn": 0,
      "totalOut": 0
   },
   {
      "tokenInfo": {
         "address": "0x4f3afec4e5a3f2a6a1a411def7d7dfe50ee057bf",
         "name": "Digix Gold Token",
         "decimals": "9",
         "symbol": "DGX",
         "totalSupply": "120600000000000",
         "owner": "",
         "lastUpdated": 1589624537,
         "issuancesCount": 0,
         "holdersCount": 1963,
         "ethTransfersCount": 0,
         "price": {
            "rate": 56.9515792484,
            "diff": 0.84,
            "diff7d": 2.02,
            "ts": 1589625430,
            "marketCapUsd": 6670656.481782033,
            "availableSupply": 117128.560257957,
            "volume24h": 10403.53952484,
            "diff30d": -2.448063831819013,
            "currency": "USD"
         }
      },
      "balance": 88926143,
      "totalIn": 0,
      "totalOut": 0
   },
   {
      "tokenInfo": {
         "address": "0x519475b31653e46d20cd09f9fdcf3b12bdacb4f5",
         "name": "VIU",
         "decimals": "18",
         "symbol": "VIU",
         "totalSupply": "1000000000000000000000000000",
         "owner": "",
         "lastUpdated": 1589623116,
         "issuancesCount": 0,
         "holdersCount": 955627,
         "ethTransfersCount": 5,
         "price": false
      },
      "balance": 8.651420364888795e+19,
      "totalIn": 0,
      "totalOut": 0
   },
   {
      "tokenInfo": {
         "address": "0x52903256dd18d85c2dc4a6c999907c9793ea61e3",
         "name": "INS Promo",
         "decimals": "0",
         "symbol": "INSP",
         "totalSupply": "1801086",
         "owner": "0x",
         "lastUpdated": 1514203156,
         "issuancesCount": 0,
         "holdersCount": 855607,
         "ethTransfersCount": 5,
         "price": false
      },
      "balance": 777,
      "totalIn": 0,
      "totalOut": 0
   },
   {
      "tokenInfo": {
         "address": "0x58b6a8a3302369daec383334672404ee733ab239",
         "name": "Livepeer Token",
         "decimals": "18",
         "symbol": "LPT",
         "totalSupply": "20881811821101972436495663",
         "owner": "0x8573f2f5a3bd960eee3d998473e50c75cdbe6828",
         "lastUpdated": 1589622267,
         "issuancesCount": 3,
         "holdersCount": 2558033,
         "ethTransfersCount": 0,
         "price": {
            "rate": 1.68911398695,
            "diff": -9.35,
            "diff7d": 21.4,
            "ts": 1589625432,
            "marketCapUsd": null,
            "availableSupply": null,
            "volume24h": 47245.423291834,
            "diff30d": 236.363077775352,
            "currency": "USD"
         }
      },
      "balance": 4.2825797834932147e+18,
      "totalIn": 0,
      "totalOut": 0
   },
   {
      "tokenInfo": {
         "address": "0x5c406d99e04b8494dc253fcc52943ef82bca7d75",
         "name": "cUSD Currency",
         "decimals": "6",
         "symbol": "cUSD",
         "totalSupply": "2000000000000000",
         "owner": "0x312100debd03e6bca7991c55fad75927666ada98",
         "lastUpdated": 1589531082,
         "issuancesCount": 0,
         "holdersCount": 183804,
         "price": {
            "rate": 0.00161762236422,
            "diff": -24.1,
            "diff7d": -58.02,
            "ts": 1589625436,
            "marketCapUsd": null,
            "availableSupply": null,
            "volume24h": 298.511277537684,
            "diff30d": -62.76220968682071,
            "currency": "USD"
         }
      },
      "balance": 1000000,
      "totalIn": 0,
      "totalOut": 0
   },
   {
      "tokenInfo": {
         "address": "0x6758b7d441a9739b98552b373703d8d3d14f9e62",
         "name": "POA ERC20 on Foundation",
         "decimals": "18",
         "symbol": "POA20",
         "totalSupply": "19525566425718077433072205",
         "owner": "0xd819e948b14ca6aad2b7ffd333ccdf732b129eed",
         "lastUpdated": 1589598531,
         "issuancesCount": 536,
         "holdersCount": 561,
         "ethTransfersCount": 0,
         "price": false
      },
      "balance": 2.5031173932205998e+20,
      "totalIn": 0,
      "totalOut": 0
   },
   {
      "tokenInfo": {
         "address": "0x68e14bb5a45b9681327e16e528084b9d962c1a39",
         "name": "BitClave - Consumer Activity Token",
         "decimals": "18",
         "symbol": "CAT",
         "totalSupply": "1687761278000000000000000000",
         "owner": "0x9f89388141c632c4c6f36d1060d5f50604ee3abc",
         "lastUpdated": 1580503529,
         "issuancesCount": 0,
         "holdersCount": 95015,
         "ethTransfersCount": 2,
         "price": false
      },
      "balance": 1.7124e+22,
      "totalIn": 0,
      "totalOut": 0
   },
   {
      "tokenInfo": {
         "address": "0x6b175474e89094c44da98b954eedeac495271d0f",
         "name": "Multi-collateral DAI",
         "decimals": "18",
         "symbol": "DAI",
         "totalSupply": "96018378545904676493317423",
         "owner": "",
         "lastUpdated": 1574171752734,
         "issuancesCount": 0,
         "holdersCount": 70195,
         "description": "Decentralized multi-collateral stablecoin soft-pegged to the US Dollar by MakerDao.",
         "image": "https://ethplorer.io/images/mcd-dai.png",
         "website": "https://makerdao.com/",
         "price": {
            "rate": 1.00279032655,
            "diff": 0.18,
            "diff7d": -0.01,
            "ts": 1589625436,
            "marketCapUsd": 109747335.77822219,
            "availableSupply": 109441956.979977,
            "volume24h": 12102503.7517559,
            "diff30d": -0.48673576646395134,
            "currency": "USD"
         }
      },
      "balance": 1.037196608111233e+20,
      "totalIn": 0,
      "totalOut": 0
   },
   {
      "tokenInfo": {
         "address": "0x6b753d0bc0b6cdb322b6f9f5bdae52c453bd3c54",
         "name": "",
         "decimals": "18",
         "symbol": "",
         "totalSupply": "50000000000000000",
         "owner": "",
         "lastUpdated": 1541081829,
         "issuancesCount": 0,
         "holdersCount": 1,
         "price": false
      },
      "balance": 50000000000000000,
      "totalIn": 0,
      "totalOut": 0
   },
   {
      "tokenInfo": {
         "address": "0x6fa76d852a89cf42f58f85fd89fe3385769e6d5e",
         "name": "Shares",
         "decimals": "0",
         "symbol": "SHARE",
         "totalSupply": "249814380173333341",
         "owner": "",
         "lastUpdated": 1557017838,
         "issuancesCount": 0,
         "holdersCount": 151,
         "price": false
      },
      "balance": 160000000000000,
      "totalIn": 0,
      "totalOut": 0
   },
   {
      "tokenInfo": {
         "address": "0x71d01db8d6a2fbea7f8d434599c237980c234e4c",
         "name": "Gladius Token",
         "decimals": "8",
         "symbol": "GLA",
         "totalSupply": "1868199937324748",
         "owner": "",
         "lastUpdated": 1588566150,
         "issuancesCount": 0,
         "holdersCount": 9553,
         "ethTransfersCount": 15,
         "price": false
      },
      "balance": 250000000000,
      "totalIn": 0,
      "totalOut": 0
   },
   {
      "tokenInfo": {
         "address": "0x77fe30b2cf39245267c0a5084b66a560f1cf9e1f",
         "name": "Azbit",
         "decimals": "18",
         "symbol": "AZ",
         "totalSupply": "62850058312999999999999944022",
         "owner": "0xacee5fec2e8861507a09c4f7a592dec36294dd48",
         "lastUpdated": 1589585815,
         "issuancesCount": 5,
         "holdersCount": 352951,
         "price": false
      },
      "balance": 1.87133e+23,
      "totalIn": 0,
      "totalOut": 0
   },
   {
      "tokenInfo": {
         "address": "0x7b2f9706cd8473b4f5b7758b0171a9933fc6c4d6",
         "name": "An Etheal Promo",
         "decimals": "0",
         "symbol": "HEALP",
         "totalSupply": "1313662",
         "owner": "0x06b2387c7f56ecb61009bb31375b84e4be7f80b3",
         "lastUpdated": 1589567017,
         "issuancesCount": 0,
         "holdersCount": 1228047,
         "ethTransfersCount": 0,
         "price": false
      },
      "balance": 911,
      "totalIn": 0,
      "totalOut": 0
   },
   {
      "tokenInfo": {
         "address": "0x7e9e431a0b8c4d532c745b1043c7fa29a48d4fba",
         "name": "eosDAC Community Owned EOS Block Producer ERC20 Tokens",
         "decimals": "18",
         "symbol": "eosDAC",
         "totalSupply": "1200000000000000000000000000",
         "owner": "0x92c9f71fbc532befba6da4278df37cc3a81c1fad",
         "lastUpdated": 1533293416193,
         "issuancesCount": 0,
         "holdersCount": 97091,
         "website": "https://www.eosdac.io/",
         "facebook": "eosdac",
         "twitter": "eosdac",
         "reddit": "EOSDAC",
         "ethTransfersCount": 0,
         "price": {
            "rate": 0.00731096295489,
            "diff": 4.57,
            "diff7d": -1.49,
            "ts": 1589625429,
            "marketCapUsd": 4830756.6197232725,
            "availableSupply": 660755176.7845,
            "volume24h": 13194.4725374323,
            "diff30d": 253.33243645751054,
            "currency": "USD"
         }
      },
      "balance": 1.224312e+20,
      "totalIn": 0,
      "totalOut": 0
   },
   {
      "tokenInfo": {
         "address": "0x86fa049857e0209aa7d9e616f7eb3b3b78ecfdb0",
         "name": "EOS",
         "decimals": 18,
         "symbol": "EOS",
         "totalSupply": "1000000000000000000000000000",
         "owner": "0xd0a6e6c54dbc68db5db3a091b171a77407ff7ccf",
         "lastUpdated": 1531913635,
         "issuancesCount": 0,
         "holdersCount": 331093,
         "description": "https://eos.io/",
         "ethTransfersCount": 224,
         "price": false
      },
      "balance": 1.224312437365582e+20,
      "totalIn": 0,
      "totalOut": 0
   },
   {
      "tokenInfo": {
         "address": "0x94d6b4fb35fb08cb34aa716ab40049ec88002079",
         "name": "Cryptonex (CNX) - Global Blockchain Acquiring",
         "decimals": 8,
         "symbol": "CNX",
         "totalSupply": "100000001000000000",
         "owner": "0xd7d0f507e4ecb367f435939fee0605413cacddb6",
         "lastUpdated": 1589169894,
         "issuancesCount": 0,
         "holdersCount": 43303,
         "description": "https://cryptonex.org",
         "ethTransfersCount": 2,
         "price": false
      },
      "balance": 100000000000,
      "totalIn": 0,
      "totalOut": 0
   },
   {
      "tokenInfo": {
         "address": "0x96a65609a7b84e8842732deb08f56c3e21ac6f8a",
         "name": "Centra",
         "decimals": "18",
         "symbol": "CTR",
         "totalSupply": "99999999500000000000000000",
         "owner": "0x387792f7d2aa6e7fa1312261cf36f5f6f6b97c00",
         "lastUpdated": 1589291167,
         "issuancesCount": 0,
         "holdersCount": 15276,
         "image": "https://ethplorer.io/images/centra.png",
         "description": "Centra has designed the world's first Multi-Blockchain Debit Card that connects to a Smart & Insured Wallet. Spend your cryptocurrencies in real time anywhere that accepts Visa or Mastercard.\n\nhttps://www.centra.tech\nhttps://www.facebook.com/CentraCard\nhttps://twitter.com/Centra_Card",
         "ethTransfersCount": 2419,
         "price": false
      },
      "balance": 1.5e+18,
      "totalIn": 0,
      "totalOut": 0
   },
   {
      "tokenInfo": {
         "address": "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2",
         "name": "Maker",
         "decimals": "18",
         "symbol": "MKR",
         "totalSupply": "1005576746334595672811789",
         "owner": "0x0000000000000000000000000000000000000000",
         "lastUpdated": 1589625772,
         "issuancesCount": 196,
         "holdersCount": 20925,
         "description": "Maker Token for Makerdao governance and fees.\n\nhttp://makerdao.com/\nhttps://twitter.com/makerdao\nhttps://reddit.com/r/makerdao\nhttps://chat.makerdao.com for questions/discussion",
         "ethTransfersCount": 0,
         "price": {
            "rate": 330.585142268,
            "diff": 1.31,
            "diff7d": -2.32,
            "ts": 1589625426,
            "marketCapUsd": 332428733.5299628,
            "availableSupply": 1005576.75172367,
            "volume24h": 4280257.29569693,
            "diff30d": 12.144596545419148,
            "currency": "USD"
         }
      },
      "balance": 21834913705042856,
      "totalIn": 0,
      "totalOut": 0
   },
   {
      "tokenInfo": {
         "address": "0xa2dca1505b07e39f96ce41e875b447f46d50c6fc",
         "name": "Ethercash\uff08\u4ee5\u592a\u73b0\u91d1\uff09",
         "decimals": "18",
         "symbol": "ETHS",
         "totalSupply": "600000000000000000000000000",
         "owner": "",
         "lastUpdated": 1589185483,
         "issuancesCount": 0,
         "holdersCount": 112255,
         "price": false
      },
      "balance": 1.0e+18,
      "totalIn": 0,
      "totalOut": 0
   },
   {
      "tokenInfo": {
         "address": "0xac9bb427953ac7fddc562adca86cf42d988047fd",
         "name": "Scatter.cx",
         "decimals": "18",
         "symbol": "STT",
         "totalSupply": "138715684821663442101208978",
         "owner": "0xf7a6e5d7a4a13767de79445e09b431bd05a98aaf",
         "lastUpdated": 1589588388,
         "issuancesCount": 0,
         "holdersCount": 95581,
         "price": false
      },
      "balance": 4.0e+18,
      "totalIn": 0,
      "totalOut": 0
   },
   {
      "tokenInfo": {
         "address": "0xaf47ebbd460f21c2b3262726572ca8812d7143b0",
         "name": "Promodl",
         "decimals": "0",
         "symbol": "PMOD",
         "totalSupply": "1055",
         "owner": "",
         "lastUpdated": 1589505503,
         "issuancesCount": 0,
         "holdersCount": 349514,
         "price": false
      },
      "balance": 5,
      "totalIn": 0,
      "totalOut": 0
   },
   {
      "tokenInfo": {
         "address": "0xb04cfa8a26d602fb50232cee0daf29060264e04b",
         "name": "Monaco",
         "decimals": 8,
         "symbol": "MCO",
         "totalSupply": "947639947295656",
         "owner": "0xf9a5e0436c01cc15708449e480fa5f2d6a5b55ca",
         "lastUpdated": 1517218603425,
         "totalIn": 260421466091123,
         "totalOut": 260421466091123,
         "issuancesCount": 0,
         "holdersCount": 8753,
         "website": "https://www.mona.co/",
         "ethTransfersCount": 13,
         "price": false
      },
      "balance": 143100107388,
      "totalIn": 0,
      "totalOut": 0
   },
   {
      "tokenInfo": {
         "address": "0xb31c219959e06f9afbeb36b388a4bad13e802725",
         "name": "",
         "decimals": "18",
         "symbol": "",
         "totalSupply": "75000000000000000000000000000",
         "owner": "0x6693bc7a3f8875b36c9bbe57c4917a1506e5a327",
         "lastUpdated": 1589484366,
         "issuancesCount": 0,
         "holdersCount": 177430,
         "ethTransfersCount": 0,
         "price": {
            "rate": 2.37880688028e-5,
            "diff": 0.32,
            "diff7d": 46.92,
            "ts": 1589625433,
            "marketCapUsd": 425243.59297653195,
            "availableSupply": 17876339458.3119,
            "volume24h": 0,
            "diff30d": 27.008737636418957,
            "currency": "USD"
         }
      },
      "balance": 4.0e+20,
      "totalIn": 0,
      "totalOut": 0
   },
   {
      "tokenInfo": {
         "address": "0xb8c77482e45f1f44de1745f52c74426c631bdd52",
         "name": "BNB",
         "decimals": "18",
         "symbol": "BNB",
         "totalSupply": "16579517055253348798759097",
         "owner": "0x00c5e04176d95a286fcce0e68c683ca0bfec8454",
         "lastUpdated": 1589620963,
         "issuancesCount": 6,
         "holdersCount": 313027,
         "ethTransfersCount": 46,
         "price": {
            "rate": 16.1315484661,
            "diff": -0.32,
            "diff7d": -5.97,
            "ts": 1589625368,
            "marketCapUsd": 2509048024.017386,
            "availableSupply": 155536713,
            "volume24h": 342201952.227965,
            "diff30d": 6.726445169001408,
            "currency": "USD"
         }
      },
      "balance": 1.9465821782562486e+18,
      "totalIn": 0,
      "totalOut": 0
   },
   {
      "tokenInfo": {
         "address": "0xbddab785b306bcd9fb056da189615cc8ece1d823",
         "name": "Ebakus",
         "decimals": "18",
         "symbol": "EBK",
         "totalSupply": "100000000000000000000000000",
         "owner": "0xe5ccfca59acd6a3dea18a97a8d12a1fc5be09b13",
         "lastUpdated": 1580066294,
         "issuancesCount": 0,
         "holdersCount": 400617,
         "ethTransfersCount": 0,
         "price": false
      },
      "balance": 5.986172419897386e+18,
      "totalIn": 0,
      "totalOut": 0
   },
   {
      "tokenInfo": {
         "address": "0xc011a72400e58ecd99ee497cf89e3775d4bd732f",
         "name": "Synthetix Network Token",
         "decimals": "18",
         "symbol": "SNX",
         "totalSupply": "183794781888412837027403799",
         "owner": "0xeb3107117fead7de89cd14d463d340a2e6917769",
         "lastUpdated": 1589168287,
         "issuancesCount": 0,
         "holdersCount": 14023,
         "ethTransfersCount": 0,
         "price": {
            "rate": 0.848482518496,
            "diff": 2.8,
            "diff7d": -5.14,
            "ts": 1589625429,
            "marketCapUsd": 153961308.82565486,
            "availableSupply": 181454897.973105,
            "volume24h": 1298409.28687405,
            "diff30d": 23.14541594106987,
            "currency": "USD"
         }
      },
      "balance": 1.88780759e+19,
      "totalIn": 0,
      "totalOut": 0
   },
   {
      "tokenInfo": {
         "address": "0xc12d1c73ee7dc3615ba4e37e4abfdbddfa38907e",
         "name": "KickToken",
         "decimals": "8",
         "symbol": "KICK",
         "totalSupply": "125134065825303013780",
         "owner": "0x49203c89e0d42420b6d7212baf4a77c57708e3f9",
         "lastUpdated": 1589625225,
         "issuancesCount": 0,
         "holdersCount": 1247648,
         "ethTransfersCount": 0,
         "price": {
            "rate": 7.48874184822e-6,
            "diff": -15.66,
            "diff7d": 6.8,
            "ts": 1589625427,
            "marketCapUsd": 334143.9384949581,
            "availableSupply": 44619502884.1034,
            "volume24h": 175522.203463055,
            "diff30d": 54.54933106562652,
            "currency": "USD"
         }
      },
      "balance": 88888800000000,
      "totalIn": 0,
      "totalOut": 0
   },
   {
      "tokenInfo": {
         "address": "0xc92e74b131d7b1d46e60e07f3fae5d8877dd03f0",
         "decimals": "8",
         "name": "Minereum",
         "symbol": "MNE",
         "totalSupply": "3832995747262862290",
         "lastUpdated": 1588712453,
         "issuancesCount": 0,
         "holdersCount": 1177097,
         "price": false
      },
      "balance": 3200000000000,
      "totalIn": 0,
      "totalOut": 0
   },
   {
      "tokenInfo": {
         "address": "0xca9e21e709aea8e274c98304f75bb5e1e096626c",
         "name": "JPThor",
         "decimals": "18",
         "symbol": "JPTHOR",
         "totalSupply": "1000000000000000000000000000",
         "owner": "",
         "lastUpdated": 1532672017,
         "issuancesCount": 0,
         "holdersCount": 2,
         "price": false
      },
      "balance": 1.0e+21,
      "totalIn": 0,
      "totalOut": 0
   },
   {
      "tokenInfo": {
         "address": "0xcd3673af09e76c74d889aabab68ca0645566a3a1",
         "name": "Unicorn Candy Coin",
         "decimals": "18",
         "symbol": "Candy",
         "totalSupply": "12000000000000000000000000",
         "owner": "0x9740cd40296744a0ae2afd115933a791da4c2ad8",
         "lastUpdated": 1588016195,
         "issuancesCount": 0,
         "holdersCount": 19096,
         "ethTransfersCount": 0,
         "price": false
      },
      "balance": 2.5e+19,
      "totalIn": 0,
      "totalOut": 0
   },
   {
      "tokenInfo": {
         "address": "0xd4ae0807740df6fbaa7a258907132a2ac8d52fbc",
         "name": "KEOSToken",
         "decimals": "18",
         "symbol": "KEOS",
         "totalSupply": "1500000000000000000000000000",
         "owner": "0x131d572afc76e74726a075a4e0955286ba6a8108",
         "lastUpdated": 1542416126,
         "issuancesCount": 0,
         "holdersCount": 90533,
         "ethTransfersCount": 0,
         "price": false
      },
      "balance": 1.224312e+20,
      "totalIn": 0,
      "totalOut": 0
   },
   {
      "tokenInfo": {
         "address": "0xd4de05944572d142fbf70f3f010891a35ac15188",
         "name": "Bulleon Promo Token",
         "decimals": "18",
         "symbol": "BULLEON PROMO",
         "totalSupply": "400000000000000000000000000",
         "owner": "0xbc63ca1bb8afde0cebb68a10bc43de49857ebec1",
         "lastUpdated": 1588788223,
         "issuancesCount": 0,
         "holdersCount": 216088,
         "price": false
      },
      "balance": 3.65e+20,
      "totalIn": 0,
      "totalOut": 0
   },
   {
      "tokenInfo": {
         "address": "0xdb455c71c1bc2de4e80ca451184041ef32054001",
         "name": "Jury.Online Token",
         "decimals": "18",
         "symbol": "JOT",
         "totalSupply": "18601983950707444511082496",
         "owner": "0x160e529055d084add9634fe1c2059109c8ce044e",
         "lastUpdated": 1589222354,
         "issuancesCount": 0,
         "holdersCount": 82674,
         "ethTransfersCount": 0,
         "price": false
      },
      "balance": 5.0e+17,
      "totalIn": 0,
      "totalOut": 0
   },
   {
      "tokenInfo": {
         "address": "0xdee02d94be4929d26f67b64ada7acf1914007f10",
         "name": "Rune",
         "decimals": "18",
         "symbol": "RUNE",
         "totalSupply": "1000000000000000000000000000",
         "owner": "",
         "lastUpdated": 1576929301,
         "issuancesCount": 0,
         "holdersCount": 123,
         "price": false
      },
      "balance": 7.42677e+23,
      "totalIn": 0,
      "totalOut": 0
   },
   {
      "tokenInfo": {
         "address": "0xe530441f4f73bdb6dc2fa5af7c3fc5fd551ec838",
         "name": "GSENetwork",
         "decimals": "4",
         "symbol": "GSE",
         "totalSupply": "1000000000000000",
         "owner": "0xaefb0ec922dee45739ac2a4edf358f70e1272d79",
         "lastUpdated": 1589601193,
         "issuancesCount": 0,
         "holdersCount": 305197,
         "ethTransfersCount": 0,
         "price": {
            "rate": 4.60293910537e-5,
            "diff": -6.14,
            "diff7d": -0.84,
            "ts": 1589625431,
            "marketCapUsd": null,
            "availableSupply": null,
            "volume24h": 6117.38216300004,
            "diff30d": -10.118437636286444,
            "currency": "USD"
         }
      },
      "balance": 110000,
      "totalIn": 0,
      "totalOut": 0
   },
   {
      "tokenInfo": {
         "address": "0xe814aee960a85208c3db542c53e7d4a6c8d5f60f",
         "name": "DAY",
         "decimals": "18",
         "symbol": "DAY",
         "totalSupply": "1233235237822551430186660",
         "owner": "0x5330df4f2042ea3e3c58dd15e50ff6539fcd1b82",
         "lastUpdated": 1589589278,
         "issuancesCount": 0,
         "holdersCount": 3343,
         "ethTransfersCount": 5,
         "price": {
            "rate": 0.149266009186,
            "diff": 28.09,
            "diff7d": 44.87,
            "ts": 1589625427,
            "marketCapUsd": 142493.29741614623,
            "availableSupply": 954626.563631012,
            "volume24h": 529.556034601399,
            "diff30d": 27.24612637611068,
            "currency": "USD"
         }
      },
      "balance": 1.332296495200799e+20,
      "totalIn": 0,
      "totalOut": 0
   },
   {
      "tokenInfo": {
         "address": "0xeccab39acb2caf9adba72c1cb92fdc106b993e0b",
         "name": "Azbit",
         "decimals": "18",
         "symbol": "AZ",
         "totalSupply": "18829812153000000000000000000",
         "owner": "0xafcc2ddbd77932a8a729c48678143b0b2f9ba891",
         "lastUpdated": 1589396471,
         "issuancesCount": 1,
         "holdersCount": 115241,
         "ethTransfersCount": 0,
         "price": false
      },
      "balance": 1.87133e+23,
      "totalIn": 0,
      "totalOut": 0
   },
   {
      "tokenInfo": {
         "address": "0xef68e7c694f40c8202821edf525de3782458639f",
         "name": "loopring",
         "decimals": 18,
         "symbol": "LRC",
         "totalSupply": "1395076054523857892274603100",
         "owner": "",
         "lastUpdated": 1589494083,
         "issuancesCount": 0,
         "holdersCount": 71976,
         "description": "loopriiinng\n\nloopring.org",
         "ethTransfersCount": 13272,
         "price": false
      },
      "balance": 5.0e+18,
      "totalIn": 0,
      "totalOut": 0
   },
   {
      "tokenInfo": {
         "address": "0xefbd6d7def37ffae990503ecdb1291b2f7e38788",
         "name": "Evolution",
         "decimals": "18",
         "symbol": "EVO",
         "totalSupply": "5000000000000000000000000000",
         "owner": "",
         "lastUpdated": 1589528891,
         "issuancesCount": 0,
         "holdersCount": 60258,
         "ethTransfersCount": 0,
         "price": false
      },
      "balance": 1.2287e+22,
      "totalIn": 0,
      "totalOut": 0
   },
   {
      "tokenInfo": {
         "address": "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
         "name": "Tronix",
         "decimals": "6",
         "symbol": "TRX",
         "totalSupply": "100000000000000000",
         "owner": "",
         "lastUpdated": 1589614422,
         "issuancesCount": 0,
         "holdersCount": 1004394,
         "alert": "TRX (Tronix) has launched its own mainnet",
         "ethTransfersCount": 13,
         "price": false
      },
      "balance": 50000000,
      "totalIn": 0,
      "totalOut": 0
   },
   {
      "tokenInfo": {
         "address": "0xf244176246168f24e3187f7288edbca29267739b",
         "name": "Havven",
         "decimals": "18",
         "symbol": "HAV",
         "totalSupply": "100000000000000000000000000",
         "owner": "0xb10c85274d2a58ddec72c1d826e75256ff93dead",
         "lastUpdated": 1530303005,
         "issuancesCount": 0,
         "holdersCount": 69292,
         "ethTransfersCount": 3,
         "price": false
      },
      "balance": 1.88780759e+19,
      "totalIn": 0,
      "totalOut": 0
   },
   {
      "tokenInfo": {
         "address": "0xf3e014fe81267870624132ef3a646b8e83853a96",
         "name": "VIN",
         "decimals": "18",
         "symbol": "VIN",
         "totalSupply": "1000000000000000000000000000",
         "owner": "0x3c014997175d1354888d665c9eb1a5c8d46cbd36",
         "lastUpdated": 1530300548,
         "issuancesCount": 0,
         "holdersCount": 478310,
         "ethTransfersCount": 0,
         "price": false
      },
      "balance": 7.77e+18,
      "totalIn": 0,
      "totalOut": 0
   }]
}
