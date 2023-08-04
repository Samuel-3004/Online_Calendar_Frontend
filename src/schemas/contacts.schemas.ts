import { z } from "zod";
import { clientResponseSchema } from "./clients.schemas";

const contactSchema = z.object({
  id: z.number(),
  name: z.string().max(50),
  email: z.string().email().max(45),
  telefone: z.string().max(25),
  createdAt: z.string(),
  client: clientResponseSchema
});

const contactRequestSchema = contactSchema.omit({
  createdAt: true,
  id: true,
  client: true
});
const contactClientSchema = contactSchema.omit({
  createdAt: true,
  id: true,
});
const contactNoRelationSchema = contactSchema.omit({
  client: true
})

const listContactsSchema = z.array(contactNoRelationSchema);

const contactResponseSchema = contactSchema.omit({
  createdAt: true,
  client: true,
  password: true
});

const contactUpdateSchema = contactSchema
  .omit({
    id: true,
    createdAt: true,
    client: true
  })
  .partial();

export {
  contactSchema,
  contactRequestSchema,
  contactResponseSchema,
  contactUpdateSchema,
  listContactsSchema,
  contactClientSchema,
  contactNoRelationSchema
};
