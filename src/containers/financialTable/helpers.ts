import {
  AssetClass,
  FinancialInstrument,
  TableColumns,
} from "../../servies/TableData.types";

export function getBackgroundColor(assetClass: AssetClass | string): string {
  // Get backgroundColor based on assetClass
  switch (assetClass) {
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
  // If the price of a financial instrument is negative, it should have red color
  if (price >= 0) {
    return "#000";
  }
  return "#FF0000";
}

export function getSortedTableData(
  tableData: Array<FinancialInstrument>,
  selectedSort: TableColumns | null
): Array<FinancialInstrument> | null {
  switch (selectedSort) {
    case TableColumns.PRICE: {
      // Returns a copy of the tableData where the rows are sorted in descending order of their price
      const copy = tableData.map((item) => ({ ...item }));
      return copy.sort(
        (a: FinancialInstrument, b: FinancialInstrument) => b.price - a.price
      );
    }
    case TableColumns.TICKER: {
      const copy = tableData.map((item) => ({ ...item }));
      // Returns a copy of the tableData where the rows are sorted in alphabetical order of their ticker names
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
      // sortedObject stores all the items of tableData according to its asset class
      tableData.forEach((item: FinancialInstrument) => {
        if (sortedObject.hasOwnProperty(item.assetClass)) {
          sortedObject[item.assetClass] = [
            ...sortedObject[item.assetClass],
            item,
          ];
        } else {
          sortedObject[item.assetClass] = [item];
        }
      });
      // According to the order of the asset class specified, the items are added to the sortedArray
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
