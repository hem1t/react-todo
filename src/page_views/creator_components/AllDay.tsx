import { useTodoCreatorContext, useTodoCreatorDispatcherContext } from "../../models/todoCreatorContext";

export const CheckBox = () => {
    let settings = useTodoCreatorContext();

    return (
        <div className={
             'border-2 border-appborder size-3.5 rounded-sm flex justify-center items-center transition-all '
            + (settings.allDay? 'bg-apporange': '')
        }>
            <div className="rounded-full size-1.5 bg-white">
            </div>
        </div>
    );
}

export const AllDay = () => {
    let settings = useTodoCreatorContext();
    let settingsDispatch = useTodoCreatorDispatcherContext();

    return (
        <div 
            className='flex gap-2 justify-start items-center text-sm cursor-pointer'
            onClick={() => { settingsDispatch({ type: 'allday', data: !settings.allDay }); }}
        >
            <CheckBox />
            AllDay
        </div>
    )
}
