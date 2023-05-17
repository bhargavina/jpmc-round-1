import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FinancialTable, { FinancialTableProps } from "../FinancialTable";

const mockTableData = [
  {
    ticker: "ALPHA",
    price: 3150.67,
    assetClass: "Credit",
  },
  {
    ticker: "BETA",
    price: 3791.37,
    assetClass: "Equities",
  },
  {
    ticker: "GAMMA",
    price: 2299.1,
    assetClass: "Equities",
  },
  {
    ticker: "DELTA",
    price: 3132.66,
    assetClass: "Equities",
  },
  {
    ticker: "EPSILON",
    price: 1168.46,
    assetClass: "Credit",
  },
  {
    ticker: "ZETA",
    price: -2716.78,
    assetClass: "Credit",
  },
  {
    ticker: "ETA",
    price: 3089.2,
    assetClass: "Macro",
  },
  {
    ticker: "THETA",
    price: 1075.44,
    assetClass: "Macro",
  },
  {
    ticker: "IOTA",
    price: 1096.64,
    assetClass: "Macro",
  },
  {
    ticker: "KAPPA",
    price: 2321.17,
    assetClass: "Credit",
  },
  {
    ticker: "LAMBDA",
    price: -1472.2,
    assetClass: "Credit",
  },
  {
    ticker: "MU",
    price: 2136.64,
    assetClass: "Macro",
  },
  {
    ticker: "NU",
    price: 2744.89,
    assetClass: "Macro",
  },
  {
    ticker: "OMIKRON",
    price: 2735.1,
    assetClass: "Equities",
  },
  {
    ticker: "SIGMA",
    price: -1854.19,
    assetClass: "Equities",
  },
  {
    ticker: "TAU",
    price: 2082.71,
    assetClass: "Macro",
  },
  {
    ticker: "OMEGA",
    price: 2306.35,
    assetClass: "Equities",
  },
  {
    ticker: "PSI",
    price: -2997.78,
    assetClass: "Credit",
  },
];

test("Renders the table", async () => {
  const financialTableProps: FinancialTableProps = {
    tableData: mockTableData,
  };

  render(<FinancialTable {...financialTableProps} />);

  const table = screen.getByTestId("financialTable");
  expect(table).toBeVisible();

  const tickerHeading = screen.getByText("Ticker");
  expect(tickerHeading).toBeVisible();

  const priceHeading = screen.getByText("Price");
  expect(priceHeading).toBeVisible();

  const assetClassHeading = screen.getByText("Asset Class");
  expect(assetClassHeading).toBeVisible();

  const rows = screen.getAllByTestId("financialTableRow");
  expect(rows.length).toEqual(financialTableProps.tableData.length);
});

test("Renders the cells correctly", async () => {
  const financialTableProps: FinancialTableProps = {
    tableData: mockTableData,
  };

  render(<FinancialTable {...financialTableProps} />);

  const tickerCells = screen.getAllByTestId("tickerCell");
  expect(tickerCells.length).toEqual(financialTableProps.tableData.length);

  const priceCells = screen.getAllByTestId("priceCell");
  expect(priceCells.length).toEqual(financialTableProps.tableData.length);

  const assetClassCells = screen.getAllByTestId("assetClassCell");
  expect(assetClassCells.length).toEqual(financialTableProps.tableData.length);
});
