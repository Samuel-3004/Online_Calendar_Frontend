import { z } from "zod";
import {
  contactClientSchema,
  contactNoRelationSchema,
  contactRequestSchema,
  contactResponseSchema,
  contactSchema,
  contactUpdateSchema,
  listContactsSchema,
} from "../schemas/contacts.schemas";

export type TContact = z.infer<typeof contactSchema>;

export type TContactRequest = z.infer<typeof contactRequestSchema>;

export type TListContacts = z.infer<typeof listContactsSchema>;

export type TContactResponse = z.infer<typeof contactResponseSchema>;

export type TContactUpdate = z.infer<typeof contactUpdateSchema>;

export type TContactClient = z.infer<typeof contactClientSchema>;

export type TContactNoRelation = z.infer<typeof contactNoRelationSchema>;

