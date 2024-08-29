import { zodResolver } from "@hookform/resolvers/zod";
import { ReactNode, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { userSchema, documentType, DataUserForm } from "../../schemas/user";
import Input from "../../input/Input";
import Select from "../../select/Select";

type Props = {
  children: ReactNode;
  handleSubmit: ( data: DataUserForm ) => void;
};

const TemplateUser = ({ children, handleSubmit }: Props) => {
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
        <form onSubmit={methods.handleSubmit(handleSubmit)}>
          <h1>{children}</h1>

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

          <Input type="number" name="otherPhone">
            Otro número de teléfono
          </Input>
        </form>
      </FormProvider>
    </div>
  );
};

export default TemplateUser;
