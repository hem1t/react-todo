const AddButton = ({ onClick = () => {} }) => {
  return (
    <div
      className="flex justify-center items-center bg-apporange"
      onClick={onClick}
    >
      <button
        className={
          "flex justify-center items-center size-7 m-1 " +
          "border-[3px] border-white rounded-full " +
          "select-none " +
          "text-3xl font-semibold text-white pb-[1px] " +
          "md:text-4xl md:border-[5px] md:size-9 md:pb-[2px]"
        }
      >
        +
      </button>
    </div>
  );
};

export default AddButton;
