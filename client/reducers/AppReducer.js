import { ADD_INVENTORY } from "../actions/AppActions";
const initialState = { inventory: [] };

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INVENTORY:
      return { ...state, inventory: action.inventory };
    default:
      return state;
  }
}

export default AppReducer;
