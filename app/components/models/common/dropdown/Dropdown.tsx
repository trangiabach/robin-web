import { FC, PropsWithChildren, ReactNode } from "react";
import { DropDownOption } from "./types";

interface DropdownProps extends PropsWithChildren {
  label?: ReactNode;
  altLabel?: ReactNode;
  placeholder: string;
  options: DropDownOption[];
}

export const Dropdown: FC<DropdownProps> = ({
  label,
  altLabel,
  options,
  placeholder,
  children,
}) => {
  return (
    <label className="form-control w-full max-w-xs robin-variable">
      {label && (
        <div className="label">
          <span className="label-text">{label}</span>
          {altLabel && <span className="label-alt">{altLabel}</span>}
        </div>
      )}
      <select className="select bg-black rounded-lg border-primary focus:border-primary focus:outline-none transition-colors hover:bg-secondary">
        <option disabled selected>
          {placeholder}
        </option>
        {options.map((option, index) => (
          <option key={`${option.value}-${index}`}>{option.value}</option>
        ))}
      </select>
      {children}
    </label>
  );
};
