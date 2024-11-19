import { z } from "zod";

export const NAME_REGEX = new RegExp(
  "^\\p{Letter}[\\p{Letter}0-9 \u2018\u2019`'-.,]*[\\p{Letter}.]+$",
  "u"
);

export const FormSampleSchema = () => {
  return z.object({
    "name": z.string().min(2).trim().regex(NAME_REGEX),
    "email":z.string().email(),
    "phone":z.string()
      .regex(/^\d{10}$/, { message: "Phone number must be exactly 10 digits" }),
    'status': z.string(),
  });
};
