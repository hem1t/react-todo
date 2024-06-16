import React, { useContext, useState } from "react";
import TodoType from "../data/todo_types";

let ANY: any;

let FilterContext = React.createContext<[TodoType, () => void]>(ANY);

export function useFilterContext() {
  return useContext(FilterContext);
}

export function TodoFilterProvider({ children }: any) {
  let [type, setType] = useState(TodoType.Today);

  function updateTodoType() {
    switch (type) {
      case TodoType.Today:
        setType(TodoType.Daily);
        break;
      case TodoType.Daily:
        setType(TodoType.Weekly);
        break;
      case TodoType.Weekly:
        setType(TodoType.Monthly);
        break;
      case TodoType.Monthly:
        setType(TodoType.Yearly);
        break;
      case TodoType.Yearly:
        setType(TodoType.Today);
        break;
      default:
        throw Error("TodoType is set to " + type);
    }
  }

  return (
    <FilterContext.Provider value={[type, updateTodoType]}>
      {children}
    </FilterContext.Provider>
  );
}

export default TodoFilterProvider;