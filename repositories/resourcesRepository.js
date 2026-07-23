import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataFilePath = path.join(__dirname, "../data/resources.json");

export async function getAllResources() {
  const fileContents = await fs.readFile(dataFilePath, "utf-8");
  return JSON.parse(fileContents);
}

export async function addResource(resource) {
  const resources = await getAllResources();
  const nextId =
    resources.length === 0
      ? 1
      : Math.max(...resources.map((item) => item.id)) + 1;

  const newResource = {
    id: nextId,
    ...resource,
  };
  resources.push(newResource);
  await fs.writeFile(dataFilePath, JSON.stringify(resources, null, 2), "utf-8");
  return newResource;
}
