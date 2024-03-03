const x = [
    {
      "_id": {
        "$oid": "5ca4bbc7a2dd94ee58162391"
      },
      "account_id": 2383777,
      "limit": 1000,
      "products": [
        "CurrencyService",
        "Derivatives",
        "InvestmentFund",
        "Commodity",
        "InvestmentStock"
      ]
    },
    {
      "_id": {
        "$oid": "5ca4bbc7a2dd94ee58162393"
      },
      "account_id": 2328304,
      "limit": 1000,
      "products": [
        "Derivatives",
        "InvestmentStock",
        "CurrencyService"
      ]
    },
    {
      "_id": {
        "$oid": "5ca4bbc7a2dd94ee58162397"
      },
      "account_id": 2668949,
      "limit": 1000,
      "products": [
        "Brokerage",
        "CurrencyService",
        "InvestmentStock",
        "Derivatives"
      ]
    },
    {
      "_id": {
        "$oid": "5ca4bbc7a2dd94ee58162398"
      },
      "account_id": 2976027,
      "limit": 1000,
      "products": [
        "Brokerage",
        "InvestmentStock"
      ]
    },
    {
      "_id": {
        "$oid": "5ca4bbc7a2dd94ee5816239a"
      },
      "account_id": 2370583,
      "limit": 1000,
      "products": [
        "Brokerage",
        "Commodity",
        "InvestmentStock"
      ]
    },
    {
      "_id": {
        "$oid": "5ca4bbc7a2dd94ee5816239b"
      },
      "account_id": 2870466,
      "limit": 1000,
      "products": [
        "Derivatives",
        "Brokerage",
        "Commodity",
        "InvestmentStock"
      ]
    },
    {
      "_id": {
        "$oid": "5ca4bbc7a2dd94ee581623a1"
      },
      "account_id": 2977982,
      "limit": 1000,
      "products": [
        "InvestmentFund",
        "Derivatives",
        "InvestmentStock",
        "CurrencyService"
      ]
    },
    {
      "_id": {
        "$oid": "5ca4bbc7a2dd94ee581623a2"
      },
      "account_id": 2616040,
      "limit": 1000,
      "products": [
        "InvestmentStock"
      ]
    },
    {
      "_id": {
        "$oid": "5ca4bbc7a2dd94ee581623a3"
      },
      "account_id": 2775273,
      "limit": 1000,
      "products": [
        "Brokerage",
        "Commodity",
        "InvestmentStock"
      ]
    },
    {
      "_id": {
        "$oid": "5ca4bbc7a2dd94ee581623a4"
      },
      "account_id": 2212024,
      "limit": 1000,
      "products": [
        "InvestmentFund",
        "Brokerage",
        "InvestmentStock"
      ]
    },
    {
      "_id": {
        "$oid": "5ca4bbc7a2dd94ee581623a5"
      },
      "account_id": 2433811,
      "limit": 1000,
      "products": [
        "CurrencyService",
        "InvestmentFund",
        "Brokerage",
        "InvestmentStock"
      ]
    },
    {
      "_id": {
        "$oid": "5ca4bbc7a2dd94ee581623a6"
      },
      "account_id": 2353465,
      "limit": 1000,
      "products": [
        "CurrencyService",
        "InvestmentStock"
      ]
    },
    {
      "_id": {
        "$oid": "5ca4bbc7a2dd94ee581623a7"
      },
      "account_id": 2464470,
      "limit": 1000,
      "products": [
        "Brokerage",
        "InvestmentStock"
      ]
    },
    {
      "_id": {
        "$oid": "5ca4bbc7a2dd94ee581623ac"
      },
      "account_id": 2276528,
      "limit": 1000,
      "products": [
        "InvestmentFund",
        "InvestmentStock"
      ]
    },
    {
      "_id": {
        "$oid": "5ca4bbc7a2dd94ee581623ad"
      },
      "account_id": 2383701,
      "limit": 1000,
      "products": [
        "InvestmentFund",
        "InvestmentStock"
      ]
    },
    {
      "_id": {
        "$oid": "5ca4bbc7a2dd94ee581623b8"
      },
      "account_id": 2475387,
      "limit": 1000,
      "products": [
        "InvestmentFund",
        "Derivatives",
        "InvestmentStock"
      ]
    },
    {
      "_id": {
        "$oid": "5ca4bbc7a2dd94ee581623bb"
      },
      "account_id": 2136137,
      "limit": 1000,
      "products": [
        "Commodity",
        "InvestmentStock",
        "InvestmentFund",
        "Derivatives"
      ]
    },
    {
      "_id": {
        "$oid": "5ca4bbc7a2dd94ee581623bc"
      },
      "account_id": 2831097,
      "limit": 1000,
      "products": [
        "Commodity",
        "InvestmentStock"
      ]
    },
    {
      "_id": {
        "$oid": "5ca4bbc7a2dd94ee581623c4"
      },
      "account_id": 2595194,
      "limit": 1000,
      "products": [
        "Commodity",
        "Derivatives",
        "InvestmentStock"
      ]
    },
    {
      "_id": {
        "$oid": "5ca4bbc7a2dd94ee581623c6"
      },
      "account_id": 2375872,
      "limit": 1000,
      "products": [
        "InvestmentStock"
      ]
    }
  ]

  x.forEach(m => delete m._id)
  console.log(JSON.stringify(x, null, 4))