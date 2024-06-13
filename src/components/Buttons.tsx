export const PositiveButton = ({
  text,
  onClick,
}: {
  text: string;
  onClick?: () => any;
}) => {
  return (
    <div
      className={
        "flex justify-center items-center flex-1 " +
        "text-white bg-apporange select-none " +
        "p-1"
      }
      onClick={onClick}
    >
      {text}
    </div>
  );
};

export const NegativeButton = ({
  text,
  onClick,
}: {
  text: string;
  onClick?: () => any;
}) => {
  return (
    <div
      className={
        "flex justify-center items-center flex-1 " +
        "text-apporange bg-white border-2 border-apporange " +
        "select-none p-1"
      }
      onClick={onClick}
    >
      {text}
    </div>
  );
};
