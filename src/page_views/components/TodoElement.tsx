import Color from "../../data/colors"

interface Prop {
    name: string,
    color: Color
}

export const TodoElement = ({ name, color }: Prop) => {
  return (
    <div 
    className={
        "px-2 rounded-[15px] mx-1 mt-[1px] "
        +"text-[14px] " 
    }
    style={{
        backgroundColor: color
    }}
     >
        {name}
     </div>
  )
}
