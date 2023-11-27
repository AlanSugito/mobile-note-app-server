class APIError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }

  static handleError(error) {
    if (error instanceof APIError) {
      return new APIError(error.status, error.message);
    }

    return new APIError(500, "Internal Server Error");
  }
}

export default APIError;
