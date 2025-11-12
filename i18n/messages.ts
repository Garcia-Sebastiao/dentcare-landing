/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from "fs";
import path from "path";

export async function loadMessages(locale: string): Promise<Record<string, any>> {
  const messagesDir = path.join(process.cwd(), "messages", locale);
  const files = fs.readdirSync(messagesDir);

  const messages: Record<string, any> = {};

  for (const file of files) {
    if (file.endsWith(".json")) {
      const namespace = file.replace(".json", "");
      const filePath = path.join(messagesDir, file);
      const content = fs.readFileSync(filePath, "utf-8");
      messages[namespace] = JSON.parse(content);
    }
  }

  return messages;
}
