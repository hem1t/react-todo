import { createContext, useContext, useReducer } from "react"
import {colors, Repeat, questions}  from "./settings_ds";

interface TodoSettings {
  title_placeholder: string,
  title: string,
  color: string,
  repeat: Repeat,
  titleTouched: boolean,
  startTime: Date,
  endTime: Date,
  allDay: boolean,
  description: string,
}

class defaultTodoSettings implements TodoSettings {
  title_placeholder = "";
  title = "";
  color = colors['lavender'];
  repeat: Repeat = { type: { name: 'never' } };
  titleTouched = false;
  startTime = new Date();
  endTime = new Date();
  allDay = false;
  description = "";

  constructor() {
    let key = Math.floor(Math.random() * questions.length);
    this.title_placeholder = questions[key];
    this.title = questions[key];
    this.endTime.setHours(this.startTime.getHours() + 1);
  }
}

interface Action {
  type: 'title' | 'color' | 'repeat' | 'touched title' | 'starttime' | 'endtime' | 'allday' | 'desc',
  data: any
}

function updateSettings(settings: TodoSettings, change: Action) {
  switch(change.type) {
    case 'title':
      return {...settings, title: change.data.title};
    case 'color':
      return {...settings, color: change.data.color};
    case 'repeat':
      return {
        ...settings,
        repeat: change.data
      };
    default:
      throw Error("not right dispatch on todo add settings");
  }
}

let todoCreatorContext = createContext(new defaultTodoSettings());
let todoCreatorDispatcherContext = createContext((_: Action) => {});

export const useTodoCreatorContext = () => useContext(todoCreatorContext);
export const useTodoCreatorDispatcherContext = () => useContext(todoCreatorDispatcherContext);

export function TodoCreatorProvider({ children }: {children: any}) {
    let [creatorSetting, updateCreatorSetting] = useReducer(updateSettings, new defaultTodoSettings());

    return (
        <todoCreatorDispatcherContext.Provider value={updateCreatorSetting}>
            <todoCreatorContext.Provider value={creatorSetting}>
                { children }
            </todoCreatorContext.Provider>
        </todoCreatorDispatcherContext.Provider>
    );
}