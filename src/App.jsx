import { Container, Typography } from "@mui/material";
import AddItemForm from "./components/AddItemForm";
import DataGridComponent from "./components/DataGridComponent";
import EditItemForm from "./components/EditItemForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <Container>
        <Typography variant="h3" component="h1" gutterBottom>
          CRUD App with Material-UI DataGrid and Redux
        </Typography>
        <Routes>
          <Route path="/" exact component={DataGridComponent} />
          <Route path="EditItemForm" component={EditItemForm} />
        </Routes>
        <AddItemForm />
        <DataGridComponent />
      </Container>
    </Router>
  );
}

export default App;
