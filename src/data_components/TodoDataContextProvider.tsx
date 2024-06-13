import { createContext, useContext, useReducer } from "react";
import { TodoSettings } from "./todoContext";

export interface TodoData {
  id: number;
  data: TodoSettings;
}

let initial: TodoData[] = [];

let todoDataContext = createContext(initial);
let updatetodoDataContext = createContext(() => {});

export const useTodoDataContext = () => {
  return useContext(todoDataContext);
};

export const useUpdateTodoDataContext = () => {
  return useContext(updatetodoDataContext);
};

interface Action {
  type: "add" | "update" | "remove";
  data: TodoData;
}

function reducer(data: TodoData[], action: Action) {
  switch (action.type) {
    case "add":
      return [...data, action.data];
    case "update":
      return data.map((d) => {
        action.data.id !== d.id ? d : action.data;
      });
    case "remove":
      return data.filter((d) => {
        action.data.id !== d.id;
      });
    default:
      throw Error("Error!!!");
  }
}

export const TodoDataContextProvider = ({ children }: { children: any }) => {
  let [state, dispatch] = useReducer(reducer, initial);

  return (
    <todoDataContext.Provider value={state}>
      <updatetodoDataContext.Provider value={dispatch}>
        {children}
      </updatetodoDataContext.Provider>
    </todoDataContext.Provider>
  );
};
