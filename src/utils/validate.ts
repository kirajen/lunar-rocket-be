import { Schema } from "joi";

// import APIError from '../errors/api-error';

export default function validate<T>(data: T, schema: Schema<T>): void {
  const validationResult = schema.validate(data);
  if (validationResult.error) {
    //  throw APIError.ValidationError(validationResult.error.details.map((x) => x.message));
  }
}