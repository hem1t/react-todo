import { useTodoType, useUpdateTodoType } from "../data_components/types";

interface Prop {
    text: string
}

export const Head = ({text} : Prop) => {
    let todoType = useTodoType();
    let updateTodoType = useUpdateTodoType();

    return (
        <div 
        className={
        'flex justify-center items-center py-4 '
        +'border-2 border-appborder rounded-[15px] '
        +'lg:border-4 md:border-[3px]'
         }
        >
            <div className='flex justify-center items-center'>
                <div 
                className={
                    'bg-apporange px-3 rounded-l-lg text-xl h-fit py-[2px] '
                    +'text-white font-semibold cursor-pointer select-none '
                    +'md:text-[32px] md:py-[13px] md:px-4 '
                    +'lg:text-[32px] lg:py-[13px] lg:px-4'
                }
                onClick={ updateTodoType }>
                    {todoType}
                </div>
                <div className={
                    'border-2 border-apporange px-2 rounded-lg h-fit select-none '
                    +'ml-[-7px] bg-white text-xl text-apporange font-semibold '
                    +'md:text-[32px] md:py-[9px] md:border-[4px] '
                    +'md:rounded-xl md:ml-[-9px] '
                    +'lg:text-[32px] lg:py-[9px] lg:border-[4px] '
                    +'lg:rounded-xl lg:ml-[-9px]'
                }>
                    {text}
                </div>
            </div>
        </div>
    );
}
