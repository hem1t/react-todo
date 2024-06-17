import { useState } from "react";
import { useTodoCreatorContext, useTodoCreatorDispatcherContext } from "../../models/todoCreatorContext";

export const AskTime = ({
  onChange,
}: {
  onChange: (hour: number, minute: number) => void;
}) => {
  let [minute, setMinute] = useState(0);
  let [hour, setHour] = useState(0);

  let settings = useTodoCreatorContext();
  let disabled = settings.allDay;

  return (
    <div className="flex items-center gap-0.5">
      <input
        type="text"
        className={
          "shadow shadow-inner w-8 border-2 rounded-md " +
          "text-center select-none "
        }
        onChange={(event) => {
          setHour(Math.min(Math.max(parseInt(event.target.value), 0), 24));
          onChange(hour, minute);
        }}
        value={String(hour).padStart(2, "0")}
        disabled={disabled}
      ></input>
      <span className="flex justify-center items-center">:</span>
      <input
        type="text"
        className={
          "shadow shadow-inner w-8 border-2 rounded-md " +
          "text-center select-none "
        }
        onChange={(event) => {
          setMinute(Math.min(Math.max(parseInt(event.target.value), 0), 24));
          onChange(hour, minute);
        }}
        value={String(minute).padStart(2, "0")}
        disabled={disabled}
      ></input>
    </div>
  );
};

export const TimePrompt = () => {
  let settingsDispatch = useTodoCreatorDispatcherContext();


  return (
    <div className="flex justify-between gap-5">
      <div className="flex flex-col gap-1">
        <p className="text-gray-600 text-sm">Start time</p>
        <div>
          <AskTime
            onChange={(hour, minute) => {
              settingsDispatch({
                type: "starttime",
                data: { hour: hour, minute: minute },
              });
            }}
          />
        </div>
      </div>
      <div className="w-[2px] bg-gray-300"></div>
      <div className="flex flex-col gap-1">
        <p className="text-gray-600 text-sm">End time</p>
        <div>
          <AskTime
            onChange={(hour, minute) => {
              settingsDispatch({
                type: "starttime",
                data: { hour: hour, minute: minute },
              });
            }}
          />
        </div>
      </div>
    </div>
  );
};
