import { z } from 'zod';

export const loginSchema = z.object({
  email: z
  .string()
  .min(1, { message: "Este campo es requerido" })
  .email("Debe ser un correo electrónico")
  .regex(
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    {message: "Formato del correo es inválido"}
  )
  .max(100,{message: "Debe contener máximo 100 caracteres." }),
  password: z
  .string()
  .min(1, { message: "Este campo es requerido." })
  .max(50,{message: "Debe contener máximo 50 caracteres." })
  .regex(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
    { message: "La contraseña debe de  contener al menos 8 caracteres, 1 letra minúscula, 1 letra mayúscula, un número y puede contener caracteres especiales." }
  )
});

export type DataLoginForm = z.infer<typeof loginSchema>;