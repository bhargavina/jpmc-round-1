import { useState } from "react";
import TableHeader from "../../components/tableHeader/TableHeader";
import {
  FinancialInstrument,
  TableColumns,
} from "../../servies/TableData.types";
import {
  getBackgroundColor,
  getPriceColor,
  getSortedTableData,
} from "./helpers";
import "./FinancialTable.css";

export interface FinancialTableProps {
  tableData: Array<FinancialInstrument>;
}

export default function FinancialTable(props: FinancialTableProps) {
  const { tableData } = props;

  const [selectedSort, setSelectedSort] = useState<TableColumns | null>(null);

  const sortedTableData = getSortedTableData(tableData, selectedSort);

  function handleSortButtonClick(clickedColumn: TableColumns): void {
    // This helps each sort button act as a toggle button and unsort the rows
    if (selectedSort) {
      setSelectedSort(null);
    } else {
      setSelectedSort(clickedColumn);
    }
  }

  return (
    <table data-testid="financialTable">
      <thead>
        <tr>
          <TableHeader
            columnName="Ticker"
            // A sort button is disabled if selectedSort is not null and the
            // selectedSort must not be the current item
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
              selectedSort !== null && selectedSort !== TableColumns.ASSET_CLASS
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
            data-testid="financialTableRow"
          >
            <td data-testid="tickerCell">
              <p>{item.ticker}</p>
            </td>
            <td data-testid="priceCell">
              <p className="price" style={{ color: getPriceColor(item.price) }}>
                {item.price}
              </p>
            </td>
            <td data-testid="assetClassCell">
              <p>{item.assetClass}</p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
