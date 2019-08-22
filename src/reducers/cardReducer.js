import { SIGNIN } from "../actions/cardAction";

export default function cardReducer(state = [], action) {
  switch (action.type) {
    case SIGNIN: {
      state = [...state, action.payload];
      return state;
    }
    default: {
      return state;
    }
  }
}
