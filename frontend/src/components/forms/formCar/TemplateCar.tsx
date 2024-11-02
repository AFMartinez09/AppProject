import { ReactNode, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import Input from '../../input/Input';
import Style from '../../../styles/templateFormUser.module.css';
import { zodResolver } from '@hookform/resolvers/zod';
import { carSchema, DataCarForm } from "../../schemas/car";
import Button from '../../button/Button';

type Props = {
  children: ReactNode;
  handleSubmit: (data: DataCarForm ) => void;
  childrenBtn: string;
}

const TemplateCar = ({ children, handleSubmit, childrenBtn}: Props) => {
  // const [selectType, setSelectType] = useState<string>('');
  const methods = useForm<DataCarForm>({
    resolver: zodResolver(carSchema)
  });

  return (
    <div>
      <FormProvider {...methods}>
        <form>
          <h1 className={Style.container}>{children}</h1>
          <div>
            <Input type='text' name='name'>
              Propietario
            </Input>
            <Input type='text' name='lastname'>
              Apellido
            </Input>
          </div>

          <div>
            <Input type='text' name='identification'>
              Identificación
            </Input>
            <Input type='text' name='city'>
              Ciudad
            </Input>
          </div>

          <div>
            <Input type='text' name='Phone'>
              Celular
            </Input>
            <Input type='text' name='address'>
              Direccion
            </Input>
          </div>

          <div>
            <Input type='text' name='insurance'>
              Aseguradora
            </Input>
            <Input type='email' name='email'>
              Email
            </Input>
          </div>

          <div>
            <Input type='text' name='other_contact'>
              Otro contacto
            </Input>
            <Input type='text' name='other_phone'>
              Otro teléfono
            </Input>
          </div>
      {/* Car info */}
          <div>
            <Input type='text' name='brands'>
              Marca
            </Input>
            <Input type='text' name='models'>
              Modelo
            </Input>
          </div>

          <div>
            <Input type='text' name='license_plate'>
              Placa
            </Input>
            <Input type='text' name='vin'>
              Vin
            </Input>
          </div>

          <div>
            <Input type='number' name='kilometers'>
              Kilometros
            </Input>
            <Input type='text' name='engines'>
              Motor
            </Input>

          </div>
            <Input type='number' name='year'>
              Año
            </Input>
            <Input type='text' name='color'>
              Color
            </Input>
            <div>
              <Button
                className="cancel"
                type='button'
                >{childrenBtn}
                </Button>
            </div>
        </form>
      </FormProvider>
    </div>
  )
}

export default TemplateCar