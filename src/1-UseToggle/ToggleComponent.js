import useToggle from "./useToggle";
export default function ToggleComponent() {
  const [value, toggleValue] = useToggle(false);

  return (
    <div>
      <div>{value.toString()}</div>
      <button
        onClick={toggleValue}
        style={{ width: "100pt", height: "20pt", margin: "1rem" }}
      >
        Toggle
      </button>
      <button
        onClick={() => toggleValue(true)}
        style={{ width: "100pt", height: "20pt", margin: "1rem" }}
      >
        Make True
      </button>
      <button
        onClick={() => toggleValue(false)}
        style={{ width: "100pt", height: "20pt", margin: "1rem" }}
      >
        Make False
      </button>
    </div>
  );
}
