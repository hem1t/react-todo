import { createContext, useContext, useReducer } from "react";
import { colors, Repeat, questions } from "./settings_ds";

export interface TodoSettings {
  title_placeholder: string;
  title: string;
  color: string;
  repeat: Repeat;
  startTime: Time;
  endTime: Time;
  allDay: boolean;
  description: string;
}

export interface Time {
  hour: number;
  minute: number;
}

class defaultTodoSettings implements TodoSettings {
  title_placeholder = "";
  title = "";
  color = colors["lavender"];
  repeat: Repeat = { type: "never", data: null };
  startTime = { hour: 0, minute: 0 };
  endTime = { hour: 0, minute: 0 };
  allDay = false;
  description = "";

  constructor() {
    let key = Math.floor(Math.random() * questions.length);
    this.title_placeholder = questions[key];
    this.title = questions[key];
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

function updateSettings(settings: TodoSettings, change: Action) {
  switch (change.type) {
    case "title":
      return { ...settings, title: change.data.title };
    case "color":
      return { ...settings, color: change.data.color };
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

let todoCreatorContext = createContext(new defaultTodoSettings());
let todoCreatorDispatcherContext = createContext((_: Action) => {});

export const useTodoCreatorContext = () => useContext(todoCreatorContext);
export const useTodoCreatorDispatcherContext = () =>
  useContext(todoCreatorDispatcherContext);

export function TodoCreatorProvider({ children }: { children: any }) {
  let [creatorSetting, updateCreatorSetting] = useReducer(
    updateSettings,
    new defaultTodoSettings()
  );

  return (
    <todoCreatorDispatcherContext.Provider value={updateCreatorSetting}>
      <todoCreatorContext.Provider value={creatorSetting}>
        {children}
      </todoCreatorContext.Provider>
    </todoCreatorDispatcherContext.Provider>
  );
}
