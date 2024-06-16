import {
  useTodoCreatorContext,
  useTodoCreatorDispatcherContext,
} from "../../data_components/todoContext";
import { colors } from "../../data_components/settings_ds";

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
      {Object.entries(colors).map(([name, color]) => {
        return (
          <div
            className={
              "size-3.5 rounded-full cursor-pointer " +
              (setting.color === color
                ? "outline outline-[2px] outline-gray-500"
                : "")
            }
            onClick={() => {
              settingsDispatch({ type: "color", data: { color: color } });
            }}
            style={getBG(color)}
            key={name}
          ></div>
        );
      })}
    </div>
  );
};
