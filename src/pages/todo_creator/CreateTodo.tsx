import { Head } from "../../components/Head"
import { LabelInput } from "./LabelInput";
import { ColorSelector } from "./ColorSelector";
import { RepeatSetting } from "./RepeatSetting";
import { TodoCreatorProvider } from "../../data_components/todoContext";
import { AllDay, CheckBox } from "./AllDay";
import { TimePrompt } from "./TimePrompt";


export const CreateTodo = () => {
  return (
    <TodoCreatorProvider>
      <div
        className={
          'flex flex-col h-full justify-start '
          +'w-[310px] sm:min-w-[370px] sm:max-w-[410px]'
        }
      >
        <Head text="add"/>
        <div 
          className={
          'flex-1 flex flex-col justify-start gap-5 px-2 ' 
          +'border-2 border-appborder overflow-hidden ' 
          +'rounded-[15px] pt-2 mt-5 md:border-[3px] lg:border-4'
          }
        >
          <LabelInput />
          <ColorSelector />
          <RepeatSetting />
          <AllDay />
          <TimePrompt />
        </div>
      </div>
    </TodoCreatorProvider>
  )
}

