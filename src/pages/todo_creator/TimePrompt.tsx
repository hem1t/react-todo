import { useState } from "react";
import { useTodoCreatorContext, useTodoCreatorDispatcherContext } from "../../data_components/todoContext"

export const AskTime = () => {
  let [time, setTime] = useState();
}

export const TimePrompt = () => {
  let settings = useTodoCreatorContext();
  let settingsDispatch = useTodoCreatorDispatcherContext();

  return (
    <div>
        <div>
          <p>
            Start time
          </p>
          <div>

          </div>
        </div>
        <div></div>
    </div>
  )
}
