import BaseError from "./base-error";

export default class APIError extends BaseError {
  constructor(
    public type: string,
    public message: string,
    public status: number,
    public data: unknown = null
  ) {
    super(type, message, data);
  }

  public static types = {
    ValidationError: "ValidationError",
    ResourceNotFound: "ResourceNotFound",
    BadRequest: "BadRequest",
    Conflict: "Conflict",
    ServerError: "ServerError",
    Unauthorized: "Unauthorized",
  };

  public static ServerError = new APIError(
    APIError.types.ServerError,
    "Server Error",
    500
  );

  static ValidationError(data: any): APIError {
    return new APIError(
      APIError.types.ValidationError,
      "Invalid request body",
      400,
      data
    );
  }

  static ResourceNotFound(
    type: string,
    identifier?: number | string
  ): APIError {
    let message = `Resource of type "${type}" `;
    if (identifier) {
      message += `with identifier "${identifier}" `;
    }
    message += "not found";
    return new APIError(APIError.types.ResourceNotFound, message, 404, null);
  }

  static BadRequest(
    message: string = "Bad Request",
    data: unknown = null
  ): APIError {
    return new APIError(this.types.BadRequest, message, 400, data);
  }

  // other error types, not used

  static Unauthorized(message?: string): APIError {
    return new APIError(
      this.types.Unauthorized,
      message || "Unauthorized",
      401
    );
  }

  static Conflict(message?: string, data?: unknown): APIError {
    return new APIError(this.types.Conflict, message || "Conflict", 409, data);
  }
}
