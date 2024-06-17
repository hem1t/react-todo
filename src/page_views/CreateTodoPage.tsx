import { Head } from "./components/Head";
import { TaskNameInput } from "./creator_components/LabelInput";
import { ColorSelector } from "./creator_components/ColorSelector";
import { RepeatSetting } from "./creator_components/RepeatSetting";
import { AllDay } from "./creator_components/AllDay";
import { TimePrompt } from "./creator_components/TimePrompt";
import { Description } from "./creator_components/Description";
import { NegativeButton } from "./components/Buttons";
import { Link } from "react-router-dom";
import { TodoAddButton } from "./controllers/todoAddButton";

export const CreateTodo = () => {
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
            <TaskNameInput />
            <ColorSelector />
            <Description />
          </div>
          <RepeatSetting />
          <div className="flex flex-col items-center px-8 gap-2">
            {/* <AllDay /> */}
            {/* <TimePrompt /> */}
          </div>
        </div>
        <div className="flex ml-[-2px] mb-[-2px]">
          <Link to="/" className="flex-1">
            <NegativeButton text="Cancel" />
          </Link>
          <TodoAddButton />
        </div>
      </div>
    </div>
  );
};
