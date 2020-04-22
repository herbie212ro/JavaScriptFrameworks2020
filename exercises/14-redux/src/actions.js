import * as types from "./constants/actionTypes";

export const increaseCount = () => {
  return {
    type: types.INCREASE_COUNT,
  };
};

export const decreaseCount = () => {
  return {
    type: types.DECREASE_COUNT,
  };
};

export const toggle = () => {
  return {
    type: types.TOGGLEVISIBILITY,
  };
};

export const pickColor = (color) => {
  return {
    type: types.WHATCOLOR,
    color: color,
  };
};

export const setInput = (todoInput) => {
  return {
    type: types.TODOINPUT,
    todoInput: todoInput,
  };
};

export const addTodo = () => {
  return {
    type: types.ADDTODO,
  };
};
