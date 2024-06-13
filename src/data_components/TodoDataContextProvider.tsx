import { createContext, useContext, useReducer } from "react";
import { TodoSettings, defaultTodoSettings } from "./todoContext";

export interface TodoData {
  id: number;
  data: TodoSettings;
}

let initial: TodoData[] = [
  {
    id: 0,
    data: new defaultTodoSettings(),
  },
  {
    id: 1,
    data: new defaultTodoSettings(),
  },
  {
    id: 2,
    data: new defaultTodoSettings(),
  },
];

let todoDataContext = createContext(initial);
let updatetodoDataContext = createContext((_: Action) => {});

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

function updateTodoData(data: TodoData[], action: Action) {
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
  let [state, dispatch] = useReducer(updateTodoData, initial);

  return (
    <updatetodoDataContext.Provider value={dispatch}>
      <todoDataContext.Provider value={state}>
        {children}
      </todoDataContext.Provider>
    </updatetodoDataContext.Provider>
  );
};
