import { Head } from "../components/Head";
import AddButton from "../components/AddButton";
import { Link } from "react-router-dom";
import { useTodoDataContext } from "../data_components/TodoDataContextProvider";

export const TodoPage = () => {
  let todoData = useTodoDataContext();

  console.log(todoData);

  return (
    <div
      className={
        "flex flex-col h-full justify-start " +
        "w-[310px] sm:min-w-[370px] sm:max-w-[410px]"
      }
    >
      <Head text="todo" />
      <div
        className={
          "flex-1 flex flex-col justify-between gap-0 " +
          "border-2 border-appborder overflow-hidden " +
          "rounded-[15px] pt-11 mt-5 md:border-[3px] lg:border-4"
        }
      >
        <div className={"flex-1 flex flex-col "}>
          {todoData.map((todo) => {
            return <div key={todo.id}>{todo.data.title}</div>;
          })}
        </div>
        <Link to="/add_todo">
          <AddButton />
        </Link>
      </div>
    </div>
  );
};
