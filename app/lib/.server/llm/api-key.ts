import { env } from 'node:process';

export function getAPIKey(cloudflareEnv: Env) {
  /**
   * The `cloudflareEnv` is only used when deployed or when previewing locally.
   * In development the environment variables are available through `env`.
   */
  return env.AZURE_API_KEY || env.ANTHROPIC_API_KEY || cloudflareEnv.ANTHROPIC_API_KEY;
}
