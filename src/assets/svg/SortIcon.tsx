interface SortIconProps {
  isSelected?: boolean;
  isDisabled?: boolean;
  height?: string | number;
  width?: string | number;
}

export default function SortIcon(props: SortIconProps) {
  const { isDisabled = false } = props;

  function getFillColor() {
    if (isDisabled) {
      return "#A8A8A8";
    }
    return "#1A1A1A";
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="48"
      viewBox="0 96 960 960"
      width="48"
      data-testid="sortIcon"
    >
      <path
        d="M120 816v-60h240v60H120Zm0-210v-60h480v60H120Zm0-210v-60h720v60H120Z"
        fill={getFillColor()}
      />
    </svg>
  );
}
