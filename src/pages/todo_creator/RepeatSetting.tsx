import { useTodoCreatorContext, useTodoCreatorDispatcherContext} from './todoContext';
import { Repeat } from './settings_ds';
import { useState } from 'react';

let repeatLabels = ['never', 'weekly', 'monthly', 'yearly'];
let initial: Repeat = {type: { name: 'never'}};

export const RepeatSetting = () => {
    let setting = useTodoCreatorContext();
    let settingsDispatch = useTodoCreatorDispatcherContext();

    let [repeatData, setRepeatData] = useState(initial);

    return (
        <div className={
        "flex border border-apporange justify-center text-apporange " 
        +"text-[11px] font-[600] rounded-full overflow-clip"
        }>
        {
            repeatLabels.map((name) => {
            let selected_style = setting.repeat.type.name === name ? "bg-apporange text-white": "";
            return (
                <div className={
                "flex justify-center px-2 rounded-full flex-1 cursor-pointer " + selected_style
                }
                onClick={ () => { settingsDispatch({ type: 'repeat', data: { type: { name: name } } }) } }
                >
                {name}
                </div>
            )
            })
        }
        </div>
    );
}
