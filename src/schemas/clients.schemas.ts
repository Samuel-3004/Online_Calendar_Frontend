import { z } from "zod";
import { contactSchema } from "./contacts.schemas";

const clientSchema = z.object({
  id: z.number(),
  name: z.string().max(50),
  email: z.string().email().max(50),
  password: z.string().max(50),
  telefone: z.string().max(25),
  createdAt: z.string(),
});

const clientRequestSchema = clientSchema.omit({
  createdAt: true,
  id: true,
});

const clientResponseSchema = clientSchema.omit({
  password: true,
});

const listClientsSchema = z.array(clientResponseSchema);

const clientUpdateSchema = clientSchema
  .omit({
    id: true,
    createdAt: true,
  })
  .partial();

const clientContactsSchema = clientSchema.extend({
  contacts: z.array(contactSchema).optional(),
});

const registerClientSchema = clientRequestSchema.extend({
  repeatPassword: z.string().max(50),
})

export {
  clientRequestSchema,
  clientUpdateSchema,
  clientContactsSchema,
  listClientsSchema,
  clientResponseSchema,
  registerClientSchema
};
