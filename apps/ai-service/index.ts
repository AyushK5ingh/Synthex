import ModelClient, { isUnexpected } from "@azure-rest/ai-inference";
import { AzureKeyCredential } from "@azure/core-auth";
import * as dotenv from "dotenv";

dotenv.config({ path: "../../.env" });

const token = process.env["GITHUB_TOKEN"];
const endpoint = "https://models.github.ai/inference";
const model = "gpt-4o-mini"; // Standard GitHub Model name

export async function main() {
  if (!token) {
    throw new Error("GITHUB_TOKEN is not defined in environment variables");
  }

  const client = ModelClient(
    endpoint,
    new AzureKeyCredential(token),
  );

  const response = await client.path("/chat/completions").post({
    body: {
      messages: [
        { role:"system", content: "You are a helpful assistant." },
        { role:"user", content: "What is the capital of France?" }
      ],
      temperature: 1,
      top_p: 1,
      model: model
    }
  });

  if (isUnexpected(response)) {
    throw new Error(`Request failed with status ${response.status}: ${JSON.stringify(response.body)}`);
  }

  console.log(response.body.choices[0].message.content);
}

main().catch((err) => {
  console.error("The sample encountered an error:", err.message || err);
});
