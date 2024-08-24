import { FormProvider, useForm } from "react-hook-form";
import Input from "../input/Input";
import { userSchema } from "../schemas/user";
import { zodResolver } from "@hookform/resolvers/zod";
import Style from '../../styles/Input.module.css'

// type Props = {}

const Home = () => {
const methods = useForm({
  resolver: zodResolver(userSchema)
})
  return (
    <div className={Style.l_form}>
      <FormProvider {...methods}>
        <form className={Style.form}>
          <h1 className={Style.form_title}>Iniciar Sesión</h1>
          <Input type="email" name="email">
            Email
          </Input>
          <Input type="password" name="password">
            Password
          </Input>
          <button className={Style.form_button}>Enviar</button>
        </form>
      </FormProvider>
      <div className={Style.pelo}>
        <FormProvider {...methods} >
          <form className={Style.pelo_form}>
            <Input type="text" name='pelo'>Pelo</Input>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default Home;
