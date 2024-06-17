import { useState } from "react";
import {
  useTodoCreatorContext,
  useTodoCreatorDispatcherContext,
} from "../../models/todoCreatorContext";

let repeatLabels = ["never", "weekly", "monthly", "yearly"];

const repeatDefaults = (type: string) => {
  switch (type) {
    case "never":
      return null;
    case "weekly":
      return [true, false, false, false, false, false, false];
    case "monthly":
      return [5, 1, 2];
    case "yearly":
      return [
        [1, 1],
        [5, 12],
        [31, 12],
      ];
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

const MonthElement = ({ n, i }: any) => {
  let settings = useTodoCreatorContext();
  let dispatchSettings = useTodoCreatorDispatcherContext();

  return (
    <div
      key={i}
      className={
        "flex justify-center items-center cursor-pointer " +
        "text-[11px] size-4 text-center focus:outline-1 focus:outline-gray-500 " +
        "bg-apporange rounded-full text-white select-none "
      }
      onClick={() => {
        settings.repeat.data?.splice(i, 1);
        dispatchSettings({
          type: "repeat",
          data: {
            type: "monthly",
            data: settings.repeat.data,
          },
        });
      }}
      onMouseEnter={(event) => {
        event.currentTarget.innerText = "-";
      }}
      onMouseLeave={(event) => {
        event.currentTarget.innerText = String(n);
      }}
    >
      {String(n)}
    </div>
  );
};

const MonthlyRepeat = () => {
  let settings = useTodoCreatorContext();
  let dispatchSettings = useTodoCreatorDispatcherContext();

  let [inp, setInp] = useState(0);

  return (
    <div className="flex justify-between">
      <div className="flex flex-wrap gap-1 px-1 items-center">
        {settings.repeat.data.map((n: number, i: number) => {
          return <MonthElement n={n} i={i} />;
        })}
      </div>
      <div className="flex flex-col">
        <input
          className="size-5 text-center text-[12px] rounded-bl-sm rounded-tr-md focus:outline-none border border-gray-300"
          onChange={(event) => {
            let num = Number(event.target.value);
            setInp(isNaN(num) ? 0 : num);
          }}
          value={inp}
        ></input>
        <div
          className={
            "flex justify-center items-center " +
            "p-2 select-none text-[16px] rounded-sm " +
            "bg-apporange text-white font-bold size-5 cursor-pointer"
          }
          onClick={() => {
            if (settings.repeat.data?.length !== 15) {
              dispatchSettings({
                type: "repeat",
                data: {
                  type: "monthly",
                  data: [
                    ...settings.repeat.data,
                    Math.max(1, Math.min(31, Number(inp))),
                  ],
                },
              });
            }
            setInp(0);
          }}
        >
          +
        </div>
      </div>
    </div>
  );
};

const YearlyElement = ({
  date,
  month,
  i,
  removeMethod
}: {
  date: number;
  month: number;
  i: number;
  removeMethod: () => {}
}) => {
  return (
    <div
      key={i}
      className={
        "flex justify-center items-center cursor-pointer " +
        "text-[11px] text-center focus:outline-1 focus:outline-gray-500 " +
        "bg-apporange rounded-lg text-white select-none " +
        "h-5 w-8 p-[2px]"
      }
      onMouseEnter={(event) => {
        event.currentTarget.innerText = "-";
      }}
      onMouseLeave={(event) => {
        event.currentTarget.innerText = String(
          String(date) + "/" + String(month)
        );
      }}
      onClick={removeMethod}
    >
      {date}/{month}
    </div>
  );
};

const YearlyRepeat = () => {
  let setting = useTodoCreatorContext();
  let updateSetting = useTodoCreatorDispatcherContext();
  let [date, setDate] = useState(0);
  let [month, setMonth] = useState(0);

  return (
    <div className="flex justify-center m-1">
      <div className="flex-1 flex gap-1 px-2 items-center flex-wrap">
        {setting.repeat.data.map(([d, m], i) => {
          return <YearlyElement key={i} i={i} date={d} month={m} 
            removeMethod={() => {
              updateSetting({
                type: "repeat",
                data: {
                  type: "yearly",
                  data: setting.repeat.data.filter((_, index) => {
                    index !== i
                  })
                }
              });
            }}
           />;
        })}
      </div>
      <div className="flex flex-col gap-[1px]">
        <div className="flex gap-[2px]">
          <input
            className="size-5 text-center rounded-[7px] border border-gray-400"
            onChange={(event) => {
              let val = Number(event.target.value)
              setDate(Math.max(Math.min(val, 31), 1));
            }}
            value={date}
          />
          <input
            className="size-5 text-center rounded-[7px] border border-gray-400"
            onChange={(event) => {
              let val = Number(event.target.value);
              setMonth(Math.max(Math.min(val, 12), 1));
            }}
            value={month}
          />
        </div>
        <button
          className="bg-apporange text-white rounded-[8px] font-bold"
          onClick={() => {
            if (setting.repeat.data.length !== 10) {
              updateSetting({
                type: "repeat",
                data: {
                  type: "yearly",
                  data: [...setting.repeat.data, [date, month]],
                },
              });
            }
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

const stringToDiv = (s: string) => {
  return s.split("").map((c, i) => {
    return (
      <p key={i} className="w-full">
        {c}
      </p>
    );
  });
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
      <div className="flex">
        <div className="flex flex-wrap w-3 text-[10px] text-gray-400 leading-[.5rem]">
          {setting.repeat.type == "weekly" ? (
            stringToDiv("DAYS")
          ) : setting.repeat.type == "monthly" ? (
            stringToDiv("DATE")
          ) : setting.repeat.type == "yearly" ? (
            stringToDiv("DATE")
          ) : (
            <div></div>
          )}
        </div>
        <div className="flex-1 flex items-center border border-gray-300 rounded-md">
          <div className="flex-1">
            {setting.repeat.type == "weekly" ? (
              <WeeklyRepeat key={1} />
            ) : setting.repeat.type == "monthly" ? (
              <MonthlyRepeat key={2} />
            ) : setting.repeat.type == "yearly" ? (
              <YearlyRepeat key={3} />
            ) : (
              <div
                key={4}
                className="text-sm text-center select-none text-gray-500 font-bold"
              >
                Never Repeat
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
