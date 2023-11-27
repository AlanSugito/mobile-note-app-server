import Joi from "joi";

const noteSchema = Joi.object({
  title: Joi.string().max(100).default(""),
  content: Joi.string().default(""),
  paperColor: Joi.string().hex().default("EAD519").messages({
    "string.hex": "Paper color should be a hex string",
  }),
});

export { noteSchema };
