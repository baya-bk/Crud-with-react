export const EDIT_ITEM = "EDIT_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";

export const editItem = (id, newItem) => ({
  type: EDIT_ITEM,
  payload: { id, newItem },
});

export const deleteItem = (id) => ({
  type: DELETE_ITEM,
  payload: { id },
});

export const addItem = (item) => ({
  type: "ADD_ITEM",
  payload: item,
});
