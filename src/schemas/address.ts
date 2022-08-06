import * as z from "zod";

export const addressSchema = z.object({
  cep: z.string().min(8, { message: "Mínimo 8 caracteres" }),
  street: z
    .string({ required_error: "Rua é obrigatório" })
    .min(1, { message: "Campo obrigatório" }),
  number: z.string(),
  complement: z.string(),
  neighbor: z.string().min(1, { message: "Campo obrigatório" }),
  city: z.string({ required_error: "Cidade é obrigatório" }),
  uf: z.string(),
});

export type Address = z.infer<typeof addressSchema>;
