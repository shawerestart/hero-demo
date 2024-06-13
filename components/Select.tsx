import { Select, Option } from "@material-tailwind/react";
import classNames from "classnames";
import { useState } from "react";
type MySelectOption = {
  label: string;
  value: any;
};

interface MySelectProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  defaultValue?: string;
  options: MySelectOption[];
}

const MySelect = (props: MySelectProps) => {
  const { options = [], label, defaultValue = "", className } = props;

  const [value, setValue] = useState<any>(defaultValue);
  return (
    <Select
      containerProps={{
        className: "!min-w-[150px] w-48",
      }}
      labelProps={{
        className: "text-gray-500 text-xs",
      }}
      className={classNames(
        "border-none font-bold text-black text-md",
        className
      )}
      variant="standard"
      label={label}
      value={value}
      onChange={setValue}
    >
      {options.map(({ value, label }) => {
        return (
          <Option key={value} value={value}>
            {label}
          </Option>
        );
      })}
    </Select>
  );
};

export default MySelect;
