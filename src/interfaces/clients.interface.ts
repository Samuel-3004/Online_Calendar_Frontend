import { z } from "zod";
import {
  clientRequestSchema,
  listClientsSchema,
  clientUpdateSchema,
  clientContactsSchema,
  clientResponseSchema,
  registerClientSchema

} from "../schemas/clients.schemas";

export type TClient = z.infer<typeof clientResponseSchema>;

export type TClientRequest = z.infer<typeof clientRequestSchema>;

export type TListClient = z.infer<typeof listClientsSchema>;

export type TClientUpdate = z.infer<typeof clientUpdateSchema>;

export type TClientContactsResponse = z.infer<typeof clientContactsSchema>; //token

export type TRegisterClient = z.infer<typeof registerClientSchema>;
