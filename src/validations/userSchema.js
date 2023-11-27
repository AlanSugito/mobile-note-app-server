import Joi from "joi";

const registerSchema = Joi.object({
  first_name: Joi.string().required().max(30).messages({
    "string.empty": "First name is required!",
    "string.max": "First name should not greater than 30 character",
  }),
  last_name: Joi.string().allow("").optional().max(30).messages({
    "string.max": "First name should not greater than 30 character",
  }),
  email: Joi.string().email().required().max(254).messages({
    "string.email": "Email is not a valid email format",
    "string.empty": "Email is required!",
    "string.max": "Email should not greater than 254 character",
  }),
  password: Joi.string().min(6).required().messages({
    "string.empty": "Password is required!",
    "string.min": "Password must be at least 6 character",
  }),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required().max(254).messages({
    "string.email": "Email is not a valid email format",
    "string.empty": "Email is required!",
    "string.max": "Email should not greater than 254 character",
  }),
  password: Joi.string().required().messages({
    "string.empty": "Password is required!",
  }),
});

export { registerSchema, loginSchema };
