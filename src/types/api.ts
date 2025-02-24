/**
 * Standardized API response handler for Next.js 13+ (App Router)
 * @param statusCode - HTTP status code
 * @param data - Data to return in the response
 * @param message - Optional message string
 * @returns Response - Standardized JSON response
 */
export const apiResponse = <T>(
	statusCode: number,
	data: T | null,
	message: string | null = null
  ): Response => {
	return new Response(
	  JSON.stringify({
		success: statusCode >= 200 && statusCode < 300,
		data,
		message,
	  }),
	  {
		status: statusCode,
		headers: { 'Content-Type': 'application/json' },
	  }
	);
  };
  