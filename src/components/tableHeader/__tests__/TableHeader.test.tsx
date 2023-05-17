import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TableHeader, { TableHeaderProps } from "../TableHeader";

test("Renders the table header and simulates click of sort button", async () => {
  const tableHeaderProps: TableHeaderProps = {
    columnName: "Column Name",
    isDisabled: false,
    isSelected: true,
    handleSortButtonClick: () => null,
  };
  render(<TableHeader {...tableHeaderProps} />);

  const headerText = screen.getByText(tableHeaderProps.columnName);
  expect(headerText).toBeVisible();
});

test("Simulates click of sort button", async () => {
  const tableHeaderProps: TableHeaderProps = {
    columnName: "Column Name",
    isDisabled: false,
    isSelected: true,
    handleSortButtonClick: () => null,
  };
  render(<TableHeader {...tableHeaderProps} />);

  const sortButton = screen.getByTestId("sortButton");
  fireEvent.click(sortButton);
  expect(sortButton).toHaveClass("selectedButton");

  const sortIcon = screen.getByTestId("sortIcon");
  expect(sortIcon).toBeVisible();
});

test("Simulates sort button when some other column is clicked", async () => {
  const tableHeaderProps: TableHeaderProps = {
    columnName: "Column Name",
    isDisabled: true,
    isSelected: false,
    handleSortButtonClick: () => null,
  };
  render(<TableHeader {...tableHeaderProps} />);

  const sortButton = screen.getByTestId("sortButton");
  expect(sortButton).toBeDisabled();
});
