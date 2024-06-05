import {  useTodoCreatorContext, useTodoCreatorDispatcherContext } from "./todoContext";
import { colors } from "./settings_ds";

function getBG(color: string) {
  return {
    'background-color': color,
  };
}

export const ColorSelector = () => {
    let setting = useTodoCreatorContext();
    let settingsDispatch = useTodoCreatorDispatcherContext();

  return (
         <div className="flex flex-wrap gap-1 m-1 justify-center">
          {
            Object.entries(colors).map( ([name, color]) => 
              {
                return (
                  <div 
                    className={
                      "rounded-full text-white text-[11px] px-2 select-none cursor-pointer font-[500] "
                      +"sm:text-[13px] sm:font-[600] sm:pb-[1px] "
                      + (setting.color === color? "outline outline-2 outline-black": "")
                    }
                    onClick={() => { settingsDispatch({ type: "color", data: {color: color}}) }}
                    style = { getBG(color) }
                  >
                    {name}
                  </div>
                );
              }
            )
          }
         </div>
  )
}
