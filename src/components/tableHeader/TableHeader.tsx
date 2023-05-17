import { MouseEventHandler } from "react";
import SortIcon from "../../assets/svg/SortIcon";
import "./TableHeader.css";

export interface TableHeaderProps {
  columnName: string;
  isDisabled: boolean;
  isSelected: boolean;
  handleSortButtonClick: MouseEventHandler<HTMLButtonElement>;
}

export default function TableHeader(props: TableHeaderProps) {
  const {
    columnName = "",
    isDisabled = false,
    isSelected = false,
    handleSortButtonClick = () => null,
  } = props;

  return (
    <th>
      <div className="tableHeader">
        <h4>{columnName}</h4>
        <button
          disabled={isDisabled}
          onClick={handleSortButtonClick}
          className={isSelected ? "selectedButton" : ""}
          data-testid="sortButton"
        >
          <SortIcon
            height="1.5rem"
            width="1.5rem"
            isDisabled={isDisabled}
          />
        </button>
      </div>
    </th>
  );
}
