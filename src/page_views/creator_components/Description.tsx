import { useTodoCreatorContext } from "../../models/todoCreatorContext";

export const Description = () => {
  let settings = useTodoCreatorContext();

  let settingStyles = {
    color: settings.color,
    // borderColor: settings.color,
  };

  return (
    <textarea
      className={
        "border-2 resize-none rounded-[15px] " +
        "p-1 pl-2.5 focus:outline-none text-sm font-[500]"
      }
      style={settingStyles}
      rows={4}
      placeholder="Description"
    ></textarea>
  );
};
