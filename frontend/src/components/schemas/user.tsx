import { z } from "zod";

export const documentType = [
  "Cédula de ciudadanía",
  "Cédula de extranjería",
  "NIT",
] as const;

const identificationValidator = z.union([
  z.object({
    type: z.literal("Cédula de ciudadanía"),
    identification: z
      .string()
      .regex(/^\d+$/, "Cédula de ciudadanía sólo puede contener números."),
  }),
  z.object({
    type: z.literal("Cédula de extranjería"),
    identification: z
      .string()
      .regex(
        /^[A-Za-z0-9]+$/,
        "Hubo un error en el tipado, inténtelo de nuevo."
      ),
  }),
  z.object({
    type: z.literal("NIT"),
    identification: z
      .string()
      .regex(
        /^\d{3}\.\d{3}\.\d{3}-\d$/,
        "NIT debe de seguir el formato de 123.456.789-0."
      ),
  }),
]);

export const userSchema = z
  .object({
    name: z
      .string()
      .min(1, { message: "Este campo es requerido." })
      .min(3, { message: "Debe de contener mínimo 3 caracteres." })
      .max(20, { message: "Debe contener máximo 20 caracteres." }),
    lastname: z
      .string()
      .min(1, { message: "Este campo es requerido." })
      .min(3, { message: "Debe de contener mínimo 3 dígitos." })
      .max(10, { message: "Debe contener máximo 10 dígitos." }),
      type: z.enum(documentType),
      identification: z.string(),
      phone: z
      .string()
      .regex(/^\d+$/, { message: "Solo puede contener números" })
      .min(1, { message: "Este campo es requerido." })
      .min(7, { message: "Debe de contener al menos 7 digitos." })
      .max(10, { message: "Máximo puede contener 10 dígitos." }),
    email: z
      .string()
      .min(1, { message: "Este campo es requerido" })
      .email("Debe ser un correo electrónico")
      .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, {
        message: "Formato del correo es inválido",
      })
      .max(20, { message: "Debe contener máximo 20 caracteres." }),
    password: z
      .string()
      .min(1, { message: "Este campo es requerido." })
      .max(50, { message: "Debe contener máximo 50 caracteres." })
      .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, {
        message:
          "No contiene al menos 8 caracteres, minúsculas (1),mayúsculas (1) y un número.",
      }),
    address: z.string().optional(),
    city: z.string().optional(),
    otherContact: z.string().optional(),
    otherPhone: z
     .string()
     .regex(/^\d+$/, { message: "Solamente puede contener números" })
  })
  .refine(
    (id) => {
      const { type, identification } = id;
      const result = identificationValidator.safeParse({
        type,
        identification,
      });
      return result.success;
    },
    {
      message: "El formato de identificación no es válido.",
      path: ["identification"],
    }
  );

export type DataUserForm = z.infer<typeof userSchema>;