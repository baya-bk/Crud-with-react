import { EDIT_ITEM, DELETE_ITEM } from "./actions";
export const initialState = {
  items: [
    { id: 1, name: "John Doe", role: "Developer", location: "New York" },
    { id: 2, name: "Jane Smith", role: "Designer", location: "San Francisco" },
    { id: 3, name: "Alice Johnson", role: "Manager", location: "Chicago" },
    { id: 4, name: "Bob Brown", role: "Developer", location: "Los Angeles" },
    { id: 5, name: "Eve Wilson", role: "Tester", location: "Seattle" },
  ],
};
const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_ITEM:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id ? action.payload.newItem : item
        ),
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};
export default itemsReducer;
