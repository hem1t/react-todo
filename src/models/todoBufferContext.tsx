import React, { useContext, useReducer } from "react";
import Color from "../data/colors";

let bufferReaderContext = React.createContext(new Array<TodoTaskElement>());
let bufferWriterContext = React.createContext((_: BufferAction) => {});

export function useTodoBufferReaderContext() {
  return useContext(bufferReaderContext);
}

export function useTodoBufferWriterContext() {
  return useContext(bufferWriterContext);
}

export enum BufferActionType {
  Push,
  Remove,
  Update,
}

export interface BufferAction {
  type: BufferActionType;
  index: number;
  task: TodoTaskElement;
}

export enum RepeatType {
  Weekly,
  Monthly,
  Yearly,
  Never,
}

export interface TodoTaskElement {
  task_name: string;
  descrp: string;
  color: Color;
  isAllDay:
    | true
    | {
        starttime: [number, number];
        endtime: [number, number];
      };
  repeat: RepeatType.Never | {
    type: RepeatType;
    days:
      | Boolean[] // Represeting 7 Days on every boolean
      | number[] // Day in month
      | Array<[number, number]>; // Day && month
  };
}

function bufferDispatchRunner(
  current: Array<TodoTaskElement>,
  action: BufferAction
) {
  switch (action.type) {
    case BufferActionType.Push:
      return [...current, action.task];
    case BufferActionType.Remove:
      return current.filter((_, i) => {
        return i !== action.index;
      });
    case BufferActionType.Update:
      return current.map((task, i) => {
        if (i === action.index) {
          return action.task;
        }
        return task;
      });
  }
}

let sample_lists = [
  { task_name: "Task 1", color: Color.BANANA },
  { task_name: "Task 2", color: Color.BASIL },
  { task_name: "Task 3", color: Color.GRAPE }
];

export function TodoBufferProvider({ children }: any) {
  let [state, dispatch] = useReducer(
    bufferDispatchRunner,
    new Array<TodoTaskElement>()
  );

  return (
    <bufferReaderContext.Provider value={state}>
      <bufferWriterContext.Provider value={dispatch}>
        {children}
      </bufferWriterContext.Provider>
    </bufferReaderContext.Provider>
  );
}
