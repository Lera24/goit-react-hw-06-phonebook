import { createStore, combineReducers } from "redux";
import { ADD, REMOVE, FILTER } from "./contacts-type";
import { composeWithDevTools } from "redux-devtools-extension";

const reducerItems = (state = [], { type, payload }) => {
  switch (type) {
    case ADD:
      return [payload, ...state];
    case REMOVE:
      return state.filter((contact) => contact.name !== payload);
    default:
      return state;
  }
};

const reducerFilter = (state = "", { type, payload }) => {
  switch (type) {
    case FILTER:
      return payload;
    default:
      return state;
  }
};

const contactsReducer = combineReducers({
  items: reducerItems,
  filter: reducerFilter,
});

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
