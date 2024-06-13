import {
  useTodoCreatorContext,
  useTodoCreatorDispatcherContext,
} from "../../data_components/todoContext";

let repeatLabels = ["never", "weekly", "monthly", "yearly"];

const repeatDefaults = (type: string) => {
  switch (type) {
    case "never":
      return null;
    case "weekly":
      return [true, false, false, false, false, false, false];
    case "monthly":
      return [5];
    case "yearly":
      return [[1, 1]];
  }
};

const WeekDay = ({ day, letter }: { day: number; letter: string }) => {
  let setting = useTodoCreatorContext();
  let settingsDispatch = useTodoCreatorDispatcherContext();

  return (
    <div
      className={
        "rounded-full size-5 text-center flex items-center " +
        "justify-center cursor-pointer font-bold text-gray-600 " +
        (setting.repeat.data[day] ? "shadow-week" : "")
      }
      onClick={() => {
        let newData = setting.repeat.data;
        if (setting.repeat.data[day]) {
          newData[day] = false;
          settingsDispatch({
            type: "repeat",
            data: { type: "weekly", data: newData },
          });
        } else {
          newData[day] = true;
          settingsDispatch({
            type: "repeat",
            data: { type: "weekly", data: newData },
          });
        }
      }}
    >
      {letter}
    </div>
  );
};

const WeeklyRepeat = () => {
  return (
    <div className="flex justify-around text-[11px] select-none">
      {["S", "M", "T", "W", "T", "F", "S"].map((s, i) => {
        return <WeekDay key={i} day={i} letter={s} />;
      })}
    </div>
  );
};

const MonthlyRepeat = () => {
  return <div>Not implemented!</div>;
};

const YearlyRepeat = () => {
  return <div>Not implemented!</div>;
};

export const RepeatSetting = () => {
  let setting = useTodoCreatorContext();
  let settingsDispatch = useTodoCreatorDispatcherContext();

  return (
    <div className="flex flex-col justify-between gap-3">
      <div
        className={
          "flex border border-apporange justify-center text-apporange " +
          "text-[12px] font-[600] rounded-full overflow-clip " +
          "sm:text-[14px] select-none"
        }
      >
        {repeatLabels.map((type, i) => {
          return (
            <div
              key={i}
              className={
                "flex justify-center px-2 rounded-full flex-1 " +
                "cursor-pointer sm:pb-[3px] " +
                (setting.repeat.type === type ? "bg-apporange text-white" : "")
              }
              onClick={() => {
                settingsDispatch({
                  type: "repeat",
                  data: { type: type, data: repeatDefaults(type) },
                });
              }}
            >
              {type}
            </div>
          );
        })}
      </div>
      <div className="border border-gray-300 rounded-md py-3">
        {setting.repeat.type == "weekly" ? (
          <WeeklyRepeat />
        ) : setting.repeat.type == "monthly" ? (
          <MonthlyRepeat />
        ) : setting.repeat.type == "yearly" ? (
          <YearlyRepeat />
        ) : (
          <div className="text-sm text-center select-none text-gray-500 font-bold">
            Never Repeat
          </div>
        )}
      </div>
    </div>
  );
};
