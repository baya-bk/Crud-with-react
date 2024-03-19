// EditItemForm.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const EditItemForm = ({ items }) => {
  const [formData, setFormData] = useState(items);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., dispatch an action to update the item)
    // Then navigate back to the previous page
    navigate.goBack();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <label>Role:</label>
      <input
        type="text"
        name="role"
        value={formData.role}
        onChange={handleChange}
      />
      <label>Location:</label>
      <input
        type="text"
        name="location"
        value={formData.location}
        onChange={handleChange}
      />
      <button type="submit">Save</button>
    </form>
  );
};

EditItemForm.propTypes = {
  items: PropTypes.object.isRequired,
};

export default EditItemForm;
