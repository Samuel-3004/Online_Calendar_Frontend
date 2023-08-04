import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email().max(45),
  password: z.string().max(50),
});

const responseLoginSchema = z.object({
  token: z.string(),
});

export { loginSchema, responseLoginSchema };
