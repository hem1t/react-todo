import { useTodoBufferReaderContext } from "../../models/todoBufferContext";
import { TodoElement } from "../components/TodoElement";

export const TodoLister = () => {
  let todos = useTodoBufferReaderContext();

  return (
    <div className={"flex-1 flex flex-col "}>
      {todos.map((todo, index) => {
        return <TodoElement key={index} name={todo.task_name} color={todo.color} />;
      })}
    </div>
  );
};
