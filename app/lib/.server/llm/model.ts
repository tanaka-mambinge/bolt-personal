import { createAnthropic } from '@ai-sdk/anthropic';
import { createAzure } from '@ai-sdk/azure';

export function getAnthropicModel(apiKey: string) {
  const anthropic = createAnthropic({
    apiKey,
  });

  return anthropic('claude-3-5-sonnet-20240620');
}

export function getAzureModel(apiKey: string) {
  const azure = createAzure({
    resourceName: 'azureopenai-clarityteam',
    apiKey,
  });

  return azure('gpt-4o');
}
