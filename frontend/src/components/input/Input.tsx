import { ReactNode, useState } from "react";
import { useFormContext } from "react-hook-form";
import Style from "../../styles/Input.module.css";

type InputTypeData = "text" | "password" | "email" | "number";

type Props = {
  children: ReactNode;
  type: InputTypeData;
  name: string;
};

const Input = ({ children, type, name }: Props) => {
  const { register, formState, getFieldState } = useFormContext();
  const { error } = getFieldState(name, formState);
  const [focus, setFocus] = useState(false);

  const handleFocus = () => setFocus(true);
  const handleBlur = () => setFocus(false);

  return (
    <div className={Style.form_div}>
      <input
        {...register(name)}
        name={name}
        type={type}
        placeholder=" "
        className={`${Style.form_input} ${focus ? Style.form_input_focus : ""}`}
        id={name}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <label
        htmlFor={name}
        className={`${Style.form_label} ${focus ? Style.form_label_focus : ""}`}
      >
        {children}
      </label>
      {error?.message && <div className={Style.mistake}>{error?.message}</div>}
    </div>
  );
};

export default Input;
