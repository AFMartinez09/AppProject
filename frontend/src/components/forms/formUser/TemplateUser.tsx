import { zodResolver } from '@hookform/resolvers/zod'
import { ReactNode } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { userSchema } from '../../schemas/user'
import Input from '../../input/Input'

type Props = {
  children: ReactNode;
  name: string;
  lastname: string;
  identification: string;
  phone: string;
  email: string;
  password: string;
  address?: string;
  city?: string;
  otherContact?: string;
  otherPhone?: number;
}

const TemplateUser = ({ children }: Props) => {
  const methods = useForm({
    resolver: zodResolver(userSchema)
  });
  return (
    <div>
      <FormProvider {...methods}>
        <form>
          <h1>{children}</h1>
          <span>
            <Input
              type='text'
              name='name'
            >
              Nombre
            </Input>
            <Input
              type='text'
              name='lastname'
            >
              Apellido
            </Input>
          </span>

          <span>
            <Input
              type='number'
              name='indentification'
            >
              Indentificacion
            </Input>
            <Input
              type='text'
              name='phone'
            >
              Teléfono
            </Input>
          </span>

          <span>
            <Input
              type='email'
              name='email'
            >
              Correo electrónico
            </Input>
            <Input
              type='password'
              name='password'
            >
              Contraseña
            </Input>
          </span>
          
          <span>
            <Input
              type='text'
              name='address'
            >
              Dirección
            </Input>
            <Input
              type='text'
              name='city'
            >
              Ciudad
            </Input>
          </span>

          <span>
            <Input
              type='text'
              name='otherContact'
            >
              Otro contacto
            </Input>
            <Input
              type='number'
              name='otherPhone'
            >
              Otro número de teléfono
            </Input>
          </span>
        </form>
      </FormProvider>
    </div>
  )
}

export default TemplateUser