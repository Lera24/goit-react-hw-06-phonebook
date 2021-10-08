import { ADD, REMOVE, FILTER } from "./contacts-type";
import shortid from "shortid";

export const addItem = (name, number) => ({
  type: ADD,
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
});

export const removeItem = (name) => ({
  type: REMOVE,
  payload: name,
});

export const filterItem = (value) => ({
  type: FILTER,
  payload: value,
});
