import classNames from "classnames";
import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactElement;
  label: string | React.ReactElement;
}
const Card: React.FC<CardProps> = (props) => {
  const { label, icon, className, ...rest } = props;
  return (
    <div
      className={classNames(
        "inline-block bg-white drop-shadow-md rounded-lg py-4 px-8",
        className
      )}
      {...rest}
    >
      <div className="flex flex-row items-center">
        <div className="mr-4 w-10 h-10">{icon}</div>
        <div className="text-xl font-medium whitespace-nowrap">{label}</div>
      </div>
    </div>
  );
};

export default Card;
