import Color from "../../data/colors";
import {
  useTodoCreatorContext,
  useTodoCreatorDispatcherContext,
} from "../../models/todoCreatorContext";

function getBG(color: string) {
  return {
    backgroundColor: color,
  };
}

export const ColorSelector = () => {
  let setting = useTodoCreatorContext();
  let settingsDispatch = useTodoCreatorDispatcherContext();

  return (
    <div className="flex flex-wrap gap-1.5 m-1 justify-center">
      {Object.entries(Color).map(([name, color]) => {
        return (
          <div
            className={
              "size-3.5 rounded-full cursor-pointer " +
              (setting.color === color
                ? "outline outline-[2px] outline-gray-500"
                : "")
            }
            onClick={() => {
              console.log(name, color, setting.color);
              settingsDispatch({ type: "color", data: color });
            }}
            style={getBG(color)}
            key={name}
          ></div>
        );
      })}
    </div>
  );
};
