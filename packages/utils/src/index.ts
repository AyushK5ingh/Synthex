import { z } from "zod";

/**
 * Common environment variable schema.
 * Add project-wide variables here.
 */
export const envSchema = z.object({
  DATABASE_URL: z.string().url().optional(),
  MONGO_URI: z.string().url().optional(),
  GITHUB_TOKEN: z.string().min(1).optional(),
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
});

/**
 * Validates process.env against the provided schema and returns the parsed data.
 */
export function validateEnv<T extends z.ZodRawShape>(schema: z.ZodObject<T>) {
  const parsed = schema.safeParse(process.env);

  if (!parsed.success) {
    console.error(
      "❌ Invalid environment variables:",
      JSON.stringify(parsed.error.format(), null, 2)
    );
    throw new Error("Invalid environment variables");
  }

  return parsed.data;
}
