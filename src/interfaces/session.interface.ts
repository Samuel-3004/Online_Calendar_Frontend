import { z } from "zod";
import { loginSchema, responseLoginSchema } from "../schemas/session.schema";

export type TSession = z.infer<typeof loginSchema>;

export type TResponseSession = z.infer<typeof responseLoginSchema>;
