import { ReactNode } from "react";
import { useFormContext } from "react-hook-form";

type Props = {
  defaultMessage: string;
  options: readonly string[];
  children: ReactNode;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select = ({ defaultMessage, options, children, name, onChange }: Props) => {
  const { register, formState, getFieldState } = useFormContext();
  const { error } = getFieldState(name, formState);
  return (
    <div>
      <label>{ children }</label>
      <select
      {...register(name)}
      onChange={onChange}
      >
        <option>{defaultMessage}</option>
        {options.map(opt => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
      {error?.message && <div className="">{ error?.message }</div>}
    </div>
  )
}

export default Select;