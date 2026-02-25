import { useState, useRef, useEffect } from "react";
import ReusableButton from "./ReusableButton";
import ReusableInput from "./ReusableInput";

const ItemForm = ({ onAdd }) => {

  const [value, setValue] = useState("");
  const noteRef = useRef(); // Uncontrolled input

  useEffect(() => {
    noteRef.current.focus(); // Focus on mount
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;

    onAdd(value);
    setValue("");
    noteRef.current.value = ""; // reset uncontrolled input
  };

  return (
    <form className="form-group" onSubmit={handleSubmit}>
      {/* Controlled Input */}
      <ReusableInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter item name"
      />

      {/* Uncontrolled Input */}
      <input
        type="text"
        placeholder="Optional note"
        ref={noteRef}
      />

      <ReusableButton text="Add" className="add-btn" />
    </form>
  );
};

export default ItemForm;