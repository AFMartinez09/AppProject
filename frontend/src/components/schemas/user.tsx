import { z } from 'zod';

export const userSchema = z.object({
  name: z
  .string()
  .min(1, { message: "Este campo es requerido" })
  .min(3, { message: "Debe de contener mínimo 3 caracteres"}),
  lastname: z
  .string()
  .min(1, { message: "Este campo es requerido" })
  .min(3, { message: "Debe de contener mínimo 3 caracteres"}),

  email: z
  .string()
  .min(1, { message: "Este campo es requerido" })
  .email("Debe ser un correo electrónico"),

  password: z
  .string()
  .min(1, { message: "Este campo es requerido" }),

})