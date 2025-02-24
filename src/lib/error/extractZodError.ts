import { ZodError, ZodIssue } from 'zod';

type ZodErrorFormatted = Record<string, string>;

/**
 * 🌟 Extracts error messages from ZodError and formats them in a simple key-value structure.
 * @param error - ZodError instance containing validation issues
 * @returns An object where each key is a field and the value is the corresponding error message.
 */
const extractZodError = (error: ZodError<any>): ZodErrorFormatted => {
  const messages: ZodErrorFormatted = {};

  error?.issues?.forEach((item: ZodIssue) => {
    const field = item.path.join('.'); // Handles nested paths
    messages[field] = item.message;
  });

  return messages;
};

export { extractZodError };
