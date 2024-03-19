import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addItem } from "../actions";

const AddItemForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleAddItem = () => {
    const newItem = { id: uuidv4(), name };
    dispatch(addItem(newItem));
    setName("");
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter item name"
      />
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
};

export default AddItemForm;
