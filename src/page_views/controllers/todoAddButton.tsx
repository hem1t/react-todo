import { useNavigate } from "react-router-dom";
import { BufferAction, BufferActionType, RepeatType, TodoTaskElement, useTodoBufferWriterContext } from "../../models/todoBufferContext";
import { useTodoCreatorContext } from "../../models/todoCreatorContext";
import { PositiveButton } from "../components/Buttons";

let repeat_type = {
    'weekly': RepeatType.Weekly,
    'monthly': RepeatType.Monthly,
    'yearly': RepeatType.Yearly
}

export const TodoAddButton = () => {
  let creatorTodo = useTodoCreatorContext();
  let todo_buffer = useTodoBufferWriterContext();
  let navigate = useNavigate();

  return <PositiveButton text="Done" onClick={() => {
    let task: TodoTaskElement = {
        task_name: creatorTodo.title,
        descrp: creatorTodo.description,
        color: creatorTodo.color,
        isAllDay: (creatorTodo.allDay? creatorTodo.allDay: {
            starttime: [creatorTodo.startTime.hour, creatorTodo.startTime.minute],
            endtime: [creatorTodo.endTime.hour, creatorTodo.endTime.minute]
        }),
        repeat: (
            creatorTodo.repeat.type === 'never'? RepeatType.Never:
            {
                type: repeat_type[creatorTodo.repeat.type],
                days: creatorTodo.repeat.data
            }
        ) 
    };
    let todoAction: BufferAction = {
        type: BufferActionType.Push,
        task,
        index: 0
    }
    todo_buffer(todoAction);
    navigate("/");
  }}></PositiveButton>;
};
