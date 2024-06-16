import {
  useTodoCreatorContext,
  useTodoCreatorDispatcherContext,
} from "../../data_components/todoContext";

export const LabelInput = () => {
  let setting = useTodoCreatorContext();
  let updateSetting = useTodoCreatorDispatcherContext();

  let settingStyle = {
    color: setting.color,
  };

  return (
    <input
      type="text"
      placeholder={setting.title_placeholder}
      className={
        "border-b-[1.5px] border-appborder px-2 pt-2 focus:outline-none " +
        "text-[15px] text-center font-semibold " +
        "sm:border-b-[2px] "
      }
      style={settingStyle}
      onChange={(event) => {
        updateSetting({ type: "title", data: { title: event.target.value } });
        console.log(setting);
      }}
    />
  );
};
