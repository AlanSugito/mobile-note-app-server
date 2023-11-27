import { APIError } from "../utils/index.js";

const handleError = (err, req, res, next) => {
  if (err) {
    if (err instanceof APIError) {
      return res.status(err.status).json({ message: err.message });
    }

    return res.status(500).json({ message: "Internal Server error" });
  }

  next();
};

export default handleError;
