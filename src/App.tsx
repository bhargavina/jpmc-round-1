import React, { useEffect, useState } from "react";
import "./App.css";
import getTableData from "./servies/api";
import { FinancialInstrument, TableColumns } from "./servies/TableData.types";
import {
  getBackgroundColor,
  getPriceColor,
  getSortedTableData,
} from "./helpers";
import TableHeader from "./components/tableHeader/TableHeader";

function App() {
  const [tableData, setTableData] = useState<Array<FinancialInstrument>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedSort, setSelectedSort] = useState<TableColumns | null>(null);

  const sortedTableData = getSortedTableData(tableData, selectedSort);

  useEffect(() => {
    setIsLoading(true);
    getTableData()
      .then((result) => setTableData(result))
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  }, []);

  function handleSortButtonClick(clickedColumn: TableColumns): void {
    console.log("handleSortButtonClick: ");
    if (selectedSort) {
      setSelectedSort(null);
    } else {
      setSelectedSort(clickedColumn);
    }
  }

  if (isLoading || tableData.length === 0) {
    return (
      <div className="loadingContainer">
        <h3>LOADING...</h3>
      </div>
    );
  }

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <TableHeader
              columnName="Ticker"
              isDisabled={
                selectedSort !== null && selectedSort !== TableColumns.TICKER
              }
              isSelected={selectedSort === TableColumns.TICKER}
              handleSortButtonClick={() =>
                handleSortButtonClick(TableColumns.TICKER)
              }
            />

            <TableHeader
              columnName="Price"
              isDisabled={
                selectedSort !== null && selectedSort !== TableColumns.PRICE
              }
              isSelected={selectedSort === TableColumns.PRICE}
              handleSortButtonClick={() =>
                handleSortButtonClick(TableColumns.PRICE)
              }
            />

            <TableHeader
              columnName="Asset Class"
              isDisabled={
                selectedSort !== null &&
                selectedSort !== TableColumns.ASSET_CLASS
              }
              isSelected={selectedSort === TableColumns.ASSET_CLASS}
              handleSortButtonClick={() =>
                handleSortButtonClick(TableColumns.ASSET_CLASS)
              }
            />
          </tr>
        </thead>

        <tbody>
          {sortedTableData!.map((item: FinancialInstrument) => (
            <tr
              key={item.ticker}
              style={{ backgroundColor: getBackgroundColor(item.assetClass) }}
            >
              <td>
                <p>{item.ticker}</p>
              </td>
              <td>
                <p
                  className="price"
                  style={{ color: getPriceColor(item.price) }}
                >
                  {item.price}
                </p>
              </td>
              <td>
                <p>{item.assetClass}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
