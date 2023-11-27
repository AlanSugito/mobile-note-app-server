const validate = (data, schema) => {
  const result = schema.validate(data);

  if (result.error) {
    throw result.error;
  }

  return result.value;
};

export default validate;
