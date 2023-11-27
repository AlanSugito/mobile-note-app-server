import { APIError } from "../utils/index.js";

const validate = (data, schema) => {
  const result = schema.validate(data);

  if (result.error) {
    throw new APIError(400, result.error.message);
  }

  return result.value;
};

export default validate;
