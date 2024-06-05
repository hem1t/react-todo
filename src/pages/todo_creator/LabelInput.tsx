import { useTodoCreatorContext, useTodoCreatorDispatcherContext } from './todoContext';

function getTC(color: string) {
    return {
    "color": color,
    }
}

export const LabelInput = () => {
    let setting = useTodoCreatorContext();
    let updateSetting = useTodoCreatorDispatcherContext();

    return (
            <input 
            type="text" 
            placeholder={setting.title_placeholder}
            className={
                "border-b-[1.5px] border-appborder px-2 pt-2 focus:outline-none "
                +"text-[15px] text-center font-semibold "
                +"sm:border-b-[2px] "
            }
            style={getTC(setting.color)}
            onChange={
                (event) => {
                    updateSetting({ type: 'title', data: {title: event.target.value} });
                }
            }
            />
    )
}
