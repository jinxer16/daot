export type CurrencyKey = string;

export enum Synths {
  sBTC = 'sBTC',
  sETH = 'sETH',
  sXRP = 'sXRP',
  sBCH = 'sBCH',
  sLTC = 'sLTC',
  sEOS = 'sEOS',
  sBNB = 'sBNB',
  sXTZ = 'sXTZ',
  sXMR = 'sXMR',
  sADA = 'sADA',
  sLINK = 'sLINK',
  sTRX = 'sTRX',
  sDASH = 'sDASH',
  sETC = 'sETC',
  iBTC = 'iBTC',
  iETH = 'iETH',
  iXRP = 'iXRP',
  iBCH = 'iBCH',
  iLTC = 'iLTC',
  iEOS = 'iEOS',
  iBNB = 'iBNB',
  iXTZ = 'iXTZ',
  iXMR = 'iXMR',
  iADA = 'iADA',
  iLINK = 'iLINK',
  iTRX = 'iTRX',
  iDASH = 'iDASH',
  iETC = 'iETC',
  sFTSE = 'sFTSE',
  sNIKKEI = 'sNIKKEI',
  sXAU = 'sXAU',
  sXAG = 'sXAG',
  sOIL = 'sOIL',
  iOIL = 'iOIL',
  sEUR = 'sEUR',
  sJPY = 'sJPY',
  sUSD = 'sSNX',
  sAUD = 'sAUD',
  sGBP = 'sGBP',
  sCHF = 'sCHF',
  sCEX = 'sCEX',
  sDEFI = 'sDEFI',
  iCEX = 'iCEX',
  iDEFI = 'iDEFI',
  sTSLA = 'sTSLA',
  sFB = 'sFB',
  sAAPL = 'sAAPL',
  sAMZN = 'sAMZN',
  sNFLX = 'sNFLX',
  sGOOG = 'sGOOG',
  sMSFT = 'sMSFT',
  sCOIN = 'sCOIN',
}

export enum CryptoCurrency {
  KNC = 'KNC',
  COMP = 'COMP',
  REN = 'REN',
  LEND = 'LEND',
  SNX = 'SNX',
  BTC = 'BTC',
  WBTC = 'wBTC',
  RENBTC = 'renBTC',
  ETH = 'ETH',
  WETH = 'wETH',
  XRP = 'XRP',
  BCH = 'BCH',
  LTC = 'LTC',
  EOS = 'EOS',
  BNB = 'BNB',
  XTZ = 'XTZ',
  XMR = 'XMR',
  ADA = 'ADA',
  LINK = 'LINK',
  TRX = 'TRX',
  DASH = 'DASH',
  ETC = 'ETC',
  CRV = 'CRV',
  DHT = 'DHT',
  YVSNX = 'yvSNX',
  SNX = 'SNX',
}

export const FIAT_SYNTHS = new Set([
  Synths.sEUR,
  Synths.sJPY,
  Synths.sUSD,
  Synths.sAUD,
  Synths.sGBP,
  Synths.sCHF,
]);

export const ETH_ADDRESS = '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE';

export const sUSD_EXCHANGE_RATE = 1;
