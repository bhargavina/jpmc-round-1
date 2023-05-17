import React, { useEffect, useState } from "react";
import "./App.css";
import getTableData from "./servies/api";
import { FinancialInstrument } from "./servies/TableData.types";
import FinancialTable from "./containers/financialTable/FinancialTable";

function App() {
  const [tableData, setTableData] = useState<Array<FinancialInstrument>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    getTableData()
      .then((result) => setTableData(result))
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading || tableData.length === 0) {
    return (
      <div className="loadingContainer">
        <h3>LOADING...</h3>
      </div>
    );
  }

  return (
    <div className="App">
      <FinancialTable tableData={tableData} />
    </div>
  );
}

export default App;
