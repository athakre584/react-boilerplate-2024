import { z } from "zod";

export const NAME_REGEX = new RegExp(
  "^\\p{Letter}[\\p{Letter}0-9 \u2018\u2019`'-.,]*[\\p{Letter}.]+$",
  "u"
);

export const ColorsSchema = () => {
  return z.object({
    "Color Name": z.string().min(2).trim().regex(NAME_REGEX),
    Status: z.string(),
  });
};
