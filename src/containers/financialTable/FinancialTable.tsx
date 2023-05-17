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

interface FinancialTableProps {
  tableData: Array<FinancialInstrument>;
}

export default function FinancialTable(props: FinancialTableProps) {
  const { tableData } = props;

  const [selectedSort, setSelectedSort] = useState<TableColumns | null>(null);

  const sortedTableData = getSortedTableData(tableData, selectedSort);

  function handleSortButtonClick(clickedColumn: TableColumns): void {
    if (selectedSort) {
      setSelectedSort(null);
    } else {
      setSelectedSort(clickedColumn);
    }
  }

  return (
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
          >
            <td>
              <p>{item.ticker}</p>
            </td>
            <td>
              <p className="price" style={{ color: getPriceColor(item.price) }}>
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
  );
}
