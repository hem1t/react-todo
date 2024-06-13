import React, { useContext, useState } from "react";

export enum TodoType {
  Today = "today",
  Daily = "daily",
  Weekly = "weekly",
  Monthly = "monthly",
  Yearly = "yearly",
}

const TypeContext = React.createContext(TodoType.Today);
const UpdateTypeContext = React.createContext(() => {});

export function useTodoType() {
  return useContext(TypeContext);
}

export function useUpdateTodoType() {
  return useContext(UpdateTypeContext);
}

export function TodoTypeProvider({ children }) {
  let [type, setType] = useState(TodoType.Today);

  function updateTodoType() {
    console.log(type);
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
    <TypeContext.Provider value={type}>
      <UpdateTypeContext.Provider value={updateTodoType}>
        {children}
      </UpdateTypeContext.Provider>
    </TypeContext.Provider>
  );
}

export default TodoTypeProvider;
