import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { DataLoginForm, loginSchema } from "../schemas/login";
import Input from "../input/Input";
import Style from "../../styles/input.module.css";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";



type UserLoginState = {
  email: string;
  password: string;
};

const InitialValue: UserLoginState = {
  email: "",
  password: "",
};

const Login = () => {
  const methods = useForm<DataLoginForm>({
    resolver: zodResolver(loginSchema),
    mode: "onChange" 
  });
  const navigate = useNavigate();
  const [login, setLogin] = useState(InitialValue);

  const handleSubmit = (data: DataLoginForm) => {
    console.log(data)
  };

  return (
    <div className={Style.l_form}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(handleSubmit)}>
          <div className={Style.form}>
            <h1 className={Style.form_title}>Iniciar sesión</h1>
            <div className="my-9">
              <Input type="email" name="email">
                Correo electrónico
              </Input>
            </div>
            <div className="my-9">
              <Input type="password" name="password">
                Contraseña
              </Input>
            </div>
            <span className="flex justify-end text-sm text-gray-500 -mt-20">
              <Button type="button" className="secondary" to="/forgot-password">
                ¿Olvidadaste la contraseña?
              </Button>
            </span>
            <span className="flex justify-center items-center">
              <Button type="submit" className="adding">
                Iniciar sesión
              </Button>
            </span>
            <span className="flex justify-center items-center">
              <Button
                type="button"
                className="secondary"
                to="/register"
              >
                Crear cuenta
              </Button>
            </span>
            <span className="flex justify-center items-center">
              <Button type="button" className="primary">
                <FcGoogle />
              </Button>
            </span>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default Login;
