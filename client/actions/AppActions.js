import callApi from "../utils/apiCaller";

// Export Constants
export const ADD_INVENTORY = "ADD_INVENTORY";

function addInventory(inventory) {
  return {
    type: ADD_INVENTORY,
    inventory
  };
}

export function fetchInventory() {
  return (dispatch) => {
    return callApi("images", "get").then(res => {
      dispatch(addInventory(res.images));
    });
  }
}
