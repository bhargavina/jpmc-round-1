import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FinancialTable, { FinancialTableProps } from "../FinancialTable";

const mockTableData = [
  {
    ticker: "ALPHA",
    price: 3150.67,
    assetClass: "Credit",
    // assetClass: AssetClass.CREDIT,
  },
  {
    ticker: "BETA",
    price: 3791.37,
    assetClass: "Equities",
    // assetClass: AssetClass.EQUITIES,
  },
  {
    ticker: "GAMMA",
    price: 2299.1,
    assetClass: "Equities",
    // assetClass: AssetClass.EQUITIES,
  },
  {
    ticker: "DELTA",
    price: 3132.66,
    assetClass: "Equities",
    // assetClass: AssetClass.EQUITIES,
  },
  {
    ticker: "EPSILON",
    price: 1168.46,
    assetClass: "Credit",
    // assetClass: AssetClass.CREDIT,
  },
  {
    ticker: "ZETA",
    price: -2716.78,
    assetClass: "Credit",
    // assetClass: AssetClass.CREDIT,
  },
  {
    ticker: "ETA",
    price: 3089.2,
    assetClass: "Macro",
    // assetClass: AssetClass.MACRO,
  },
  {
    ticker: "THETA",
    price: 1075.44,
    assetClass: "Macro",
    // assetClass: AssetClass.MACRO,
  },
  {
    ticker: "IOTA",
    price: 1096.64,
    assetClass: "Macro",
    // assetClass: AssetClass.MACRO,
  },
  {
    ticker: "KAPPA",
    price: 2321.17,
    assetClass: "Credit",
    // assetClass: AssetClass.CREDIT,
  },
  {
    ticker: "LAMBDA",
    price: -1472.2,
    assetClass: "Credit",
    // assetClass: AssetClass.CREDIT,
  },
  {
    ticker: "MU",
    price: 2136.64,
    assetClass: "Macro",
    // assetClass: AssetClass.MACRO,
  },
  {
    ticker: "NU",
    price: 2744.89,
    assetClass: "Macro",
    // assetClass: AssetClass.MACRO,
  },
  {
    ticker: "OMIKRON",
    price: 2735.1,
    assetClass: "Equities",
    // assetClass: AssetClass.EQUITIES,
  },
  {
    ticker: "SIGMA",
    price: -1854.19,
    assetClass: "Equities",
    // assetClass: AssetClass.EQUITIES,
  },
  {
    ticker: "TAU",
    price: 2082.71,
    assetClass: "Macro",
    // assetClass: AssetClass.MACRO,
  },
  {
    ticker: "OMEGA",
    price: 2306.35,
    assetClass: "Equities",
    // assetClass: AssetClass.EQUITIES,
  },
  {
    ticker: "PSI",
    price: -2997.78,
    assetClass: "Credit",
    // assetClass: AssetClass.CREDIT,
  },
];

test("Renders the table", async () => {
  const financialTableProps: FinancialTableProps = {
    tableData: mockTableData
  }

  render(<FinancialTable {...financialTableProps} />);

  const table = screen.getByTestId("financialTable");
  expect(table).toBeVisible();

  const rows = screen.getAllByTestId("financialTableRow");
  expect(rows.length).toEqual(financialTableProps.tableData.length)
});
