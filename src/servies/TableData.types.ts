// export enum AssetClass {
//   EQUITIES = "Equities",
//   MACRO = "Macro",
//   CREDIT = "Credit",
// }

export const AssetClass: { EQUITIES: string; MACRO: string; CREDIT: string } = {
  EQUITIES: "Equities",
  MACRO: "Macro",
  CREDIT: "Credit",
};

export interface FinancialInstrument {
  ticker: string;
  price: number;
  assetClass: string;
  // assetClass: AssetClass | string;
}

export enum TableColumns {
  TICKER = "TICKER",
  PRICE = "PRICE",
  ASSET_CLASS = "ASSET_CLASS",
}
