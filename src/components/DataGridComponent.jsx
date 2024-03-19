import { useSelector, useDispatch } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import { deleteItem } from "../actions";
import PropTypes from "prop-types"; // Import PropTypes
import { useNavigate } from "react-router-dom";

const DataGridComponent = () => {
  const items = useSelector((state) => state.items.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    dispatch(deleteItem(id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "role", headerName: "Role", width: 150 },
    { field: "location", headerName: "Location", width: 150 },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,

      renderCell: (params) => (
        <div>
          <button onClick={() => navigate(`/edit/${params.row.id}`)}>
            Edit
          </button>{" "}
          <button onClick={() => handleDelete(params.row.id)}>Delete</button>
        </div>
      ),
    },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={items} columns={columns} pageSize={5} />
    </div>
  );
};
DataGridComponent.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default DataGridComponent;
