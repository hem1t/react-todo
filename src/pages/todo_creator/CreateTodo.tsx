import { Head } from "../../components/Head";
import { LabelInput } from "./LabelInput";
import { ColorSelector } from "./ColorSelector";
import { RepeatSetting } from "./RepeatSetting";
import {
  TodoCreatorProvider,
  useTodoCreatorContext,
} from "../../data_components/todoContext";
import { AllDay } from "./AllDay";
import { TimePrompt } from "./TimePrompt";
import { Description } from "./Description";
import { NegativeButton, PositiveButton } from "../../components/Buttons";
import { Link } from "react-router-dom";
import {
  useTodoDataContext,
  useUpdateTodoDataContext,
} from "../../data_components/TodoDataContextProvider";

export const CreateTodo = () => {
  let updateTodoData = useUpdateTodoDataContext();
  let todoData = useTodoDataContext();
  let settings = useTodoCreatorContext();

  return (
    <div
      className={
        "flex flex-col h-full justify-start " +
        "w-[310px] sm:min-w-[370px] sm:max-w-[410px]"
      }
    >
      <Head text="add" />
      <div
        className={
          "border-2 border-appborder overflow-hidden " +
          "rounded-[15px] pt-2 mt-5 md:border-[3px] lg:border-4"
        }
      >
        <div className="flex flex-col justify-start gap-11 px-4 pb-11 pt-2">
          <div className="flex flex-col gap-2">
            <LabelInput />
            <ColorSelector />
            <Description />
          </div>
          <RepeatSetting />
          <div className="flex flex-col items-center px-8 gap-2">
            <AllDay />
            <TimePrompt />
          </div>
        </div>
        <div className="flex ml-[-2px] mb-[-2px]">
          <Link to="/" className="flex-1">
            <NegativeButton text="Cancel" />
          </Link>
          <PositiveButton
            text="Add"
            onClick={() => {
              console.log("adding", settings);
              console.log(todoData.length);
              updateTodoData({
                type: "add",
                data: {
                  id: todoData.length,
                  data: { ...settings },
                },
              });
              console.log(todoData);
            }}
          />
        </div>
      </div>
    </div>
  );
};
