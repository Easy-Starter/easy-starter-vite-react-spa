/**
 * A typed, validated, and centralized environment configuration layer
 */

import { z } from "zod";

const envSchema = z.object({
  VITE_APP_NAME: z.string().trim().min(1).default("Easy Starter React"),
  VITE_APP_ENV: z
    .enum(["development", "test", "staging", "production"])
    .default("development"),
  VITE_API_BASE_URL: z.string().trim().default(""),
});

const result = envSchema.safeParse(import.meta.env);

if (!result.success) {
  const flattened = z.flattenError(result.error);
  console.error("Invalid environment variables", flattened.fieldErrors);
  throw new Error("Invalid environment configuration");
}

export const env = {
  appName: result.data.VITE_APP_NAME,
  appEnvironment: result.data.VITE_APP_ENV,
  apiBaseUrl: result.data.VITE_API_BASE_URL.replace(/\/$/, ""),
} as const;
