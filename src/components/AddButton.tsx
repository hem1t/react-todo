import { Link } from "react-router-dom";

const AddButton = () => {

  return (
    <Link  to="/add_todo">
      <div className="flex justify-center items-center bg-apporange">
          <button 
          className={
              "flex justify-center items-center size-7 m-1 "
              +'border-[3px] border-white rounded-full '
              +'select-none '
              +'text-3xl font-semibold text-white pb-[1px] '
              +'md:text-4xl md:border-[5px] md:size-9 md:pb-[2px]'
          }
          >
              +
          </button>
      </div>    
    </Link> 
  );
}

export default AddButton