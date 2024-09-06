import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { DataLoginForm, loginSchema } from '../schemas/login';
import Input from "../input/Input";
import Style from '../../styles/input.module.css';
import Button from "../button/Button";

const Login = () => {
    const methods = useForm<DataLoginForm>({
      resolver: zodResolver(loginSchema)
    });
  return (
    <div className={Style.l_form}>
      <FormProvider {...methods}>
        <form>
          <div className={Style.form}>
            <h1 className={Style.form_title}>Iniciar sesión</h1>
            <div className={Style.form_div}>
              <Input type="email" name="email">Correo electrónico</Input>
            </div>
            <div className={Style.form_div}>
              <Input type="email" name="email">Contraseña</Input>
            </div>
            <p>¿Olvidadaste la contraseña?</p>
            <span> 
              <Button type="submit" className="adding">Iniciar sesión</Button>
            </span>
            <span>
              <Button type="button" className="secondary">Crear cuenta</Button>
            </span>
            <span>
              <Button type="button" className="primary">Google</Button>              
            </span>
          </div>
        </form>
      </FormProvider>
    </div>
  )
}

export default Login