import * as types from "./constants/actionTypes";

const reducer = (
  /**
   * Starting state.
   * You may want to add more values here
   */
  state = {
    count: 0,
    todos: ["Finish this assignment", "Read a book"],
    isVisible: true,

    todoInput: "",
    addInput: "",
  },
  action
) => {
  console.log("action", action);
  switch (action.type) {
    case types.INCREASE_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    case types.DECREASE_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };
    case types.TOGGLEVISIBILITY:
      return {
        ...state,
        isVisible: !state.isVisible,
      };
    case types.WHATCOLOR:
      return {
        ...state,
        color: action.color,
      };
    case types.TODOINPUT:
      return {
        ...state,
        todoInput: action.todoInput,
      };
    case types.ADDTODO:
      return {
        ...state,
        todos: [...state.todos, state.todoinput],
      };

    /**
     * Add additional case statements here
     */
    default:
      return state;
  }
};

export default reducer;
