import { zodResolver } from "@hookform/resolvers/zod";
import { ReactNode, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { userSchema, documentType, DataUserForm } from "../../schemas/user";
import Input from "../../input/Input";
import Select from "../../select/Select";
import Style from '../../../styles/templateFormUser.module.css'
import Button from "../../button/Button";

type Props = {
  children: ReactNode;
  handleSubmit: ( data: DataUserForm ) => void;
  childrenBtn: string;
};

const TemplateUser = ({ children, handleSubmit, childrenBtn }: Props) => {
  const [selectType, setSelectType] = useState<string>('');
  const methods = useForm<DataUserForm>({
    resolver: zodResolver(userSchema),
  });


  const handleSelectType = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectType(event.target.value);
  };

  return (
    <div>
      <FormProvider {...methods}>
        <form 
        onSubmit={methods.handleSubmit(handleSubmit)}
        className={Style.container}
        >
          <h1 className={Style.title}>{children}</h1>

          <div className={Style.formUser}>
            <Input type="text" name="name">
              Nombre
            </Input>
            <Input type="text" name="lastname">
              Apellido
            </Input>
            <Select
              name="type"
              defaultMessage="--Seleccione tipo de identificacion--"
              options={documentType}
              onChange={handleSelectType}
            >
              documento de identificación
            </Select>
              {selectType === "Cédula de ciudadanía" && (
                <Input type="text" name="identification">
                  Cédula de ciudadanía
                </Input>
              )}
              {selectType === "NIT" && (
                <Input type="text" name="identification">
                  NIT
                </Input>
              )}
              {selectType === "Cédula de extranjería" && (
                <Input type="text" name="identification">
                  Cédula de extranjería
                </Input>
              )}
            <Input type="text" name="phone">
              Teléfono
            </Input>
            <Input type="email" name="email">
              Correo electrónico
            </Input>
            <Input type="password" name="password">
              Contraseña
            </Input>
            <Input type="text" name="address">
              Dirección
            </Input>
            <Input type="text" name="city">
              Ciudad
            </Input>
            <Input type="text" name="otherContact">
              Otro contacto
            </Input>
            <Input type="text" name="otherPhone">
              Otro número de teléfono
            </Input>
          </div>
          <div className={Style.continerButtons}>
              <Button
               className="cancel"
               type = "button"
              >Cancelar</Button>
              <Button
               className="adding"
               type = "submit"
              >{childrenBtn}</Button>
              <Button
               className="limpiar"
               type = "button"
              >Limpiar</Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};