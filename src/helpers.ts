import {
  AssetClass,
  FinancialInstrument,
  TableColumns,
} from "./servies/TableData.types";

export function getBackgroundColor(assetClass: string): string {
  switch (assetClass) {
    // case AssetClass.MACRO: {
    //   return "#FFF";
    // }
    // case AssetClass.EQUITIES: {
    //   return "#D7E5F0";
    // }
    // case AssetClass.CREDIT: {
    //   return "#D6F2D5";
    // }
    case AssetClass.MACRO: {
      return "#FFF";
    }
    case AssetClass.EQUITIES: {
      return "#D7E5F0";
    }
    case AssetClass.CREDIT: {
      return "#D6F2D5";
    }
    default:
      return "#FFF";
  }
}

export function getPriceColor(price: number): string {
  if (price >= 0) {
    return "#000";
  }
  return "#FF0000";
}

export function getSortedTableData(
  tableData: Array<FinancialInstrument>,
  selectedSort: TableColumns | null,
): Array<FinancialInstrument> | null {
  switch (selectedSort) {
    case TableColumns.PRICE: {
      const copy = tableData.map((item) => ({ ...item }));
      return copy.sort(
        (a: FinancialInstrument, b: FinancialInstrument) => a.price - b.price
      );
    }
    case TableColumns.TICKER: {
      const copy = tableData.map((item) => ({ ...item }));
      return copy.sort((a: FinancialInstrument, b: FinancialInstrument) => {
        if (a.ticker < b.ticker) {
          return -1;
        }
        if (a.ticker > b.ticker) {
          return 1;
        }
        return 0;
      });
    }
    case TableColumns.ASSET_CLASS: {
      const sortedArray: Array<FinancialInstrument> = [];
      const sortedObject: any = {};
      tableData.forEach((item) => {
        if (sortedObject.hasOwnProperty(item.assetClass)) {
          sortedObject[item.assetClass] = [
            ...sortedObject[item.assetClass],
            item,
          ];
        } else {
          sortedObject[item.assetClass] = [item];
        }
      });
      sortedObject[AssetClass.EQUITIES].forEach((item: FinancialInstrument) =>
        sortedArray.push(item)
      );
      sortedObject[AssetClass.MACRO].forEach((item: FinancialInstrument) =>
        sortedArray.push(item)
      );
      sortedObject[AssetClass.CREDIT].forEach((item: FinancialInstrument) =>
        sortedArray.push(item)
      );
      return sortedArray;
    }
    default:
      return tableData;
  }
}
