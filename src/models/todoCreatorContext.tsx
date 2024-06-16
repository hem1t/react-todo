import { createContext, useContext, useReducer } from "react";
import Color from "../data/colors";
import labels from "../data/todo_labels";

interface Repeat {
  type: "never" | "weekly" | "monthly" | "yearly";
  data: any;
}

class Todo {
  title_placeholder = "";
  title = "";
  color = Color.LAVENDER;
  repeat: Repeat = { type: "never", data: null };
  startTime = { hour: 0, minute: 0 };
  endTime = { hour: 0, minute: 0 };
  allDay = false;
  description = "";

  constructor() {
    let key = Math.floor(Math.random() * labels.length);
    this.title_placeholder = labels[key];
    this.title = labels[key];
  }
}

interface Action {
  type:
    | "title"
    | "color"
    | "repeat"
    | "starttime"
    | "endtime"
    | "allday"
    | "desc";
  data: any;
}

function updateSettings(settings: Todo, change: Action) {
  switch (change.type) {
    case "title":
      return { ...settings, title: change.data };
    case "color":
      return { ...settings, color: change.data };
    case "repeat":
      return {
        ...settings,
        repeat: change.data,
      };
    case "starttime":
      return {
        ...settings,
        startTime: change.data,
      };
    case "endtime":
      return {
        ...settings,
        endTime: change.data,
      };
    case "allday":
      return {
        ...settings,
        allDay: change.data,
      };
    default:
      throw Error("not right dispatch on todo add settings");
  }
}

let todoCreatorContext = createContext(new Todo());
let todoCreatorDispatcherContext = createContext((_: Action) => {});

export const useTodoCreatorContext = () => useContext(todoCreatorContext);
export const useTodoCreatorDispatcherContext = () =>
  useContext(todoCreatorDispatcherContext);

export function TodoCreatorProvider({ children }: { children: any }) {
  let [creatorSetting, updateCreatorSetting] = useReducer(
    updateSettings,
    new Todo()
  );

  return (
    <todoCreatorDispatcherContext.Provider value={updateCreatorSetting}>
      <todoCreatorContext.Provider value={creatorSetting}>
        {children}
      </todoCreatorContext.Provider>
    </todoCreatorDispatcherContext.Provider>
  );
}
