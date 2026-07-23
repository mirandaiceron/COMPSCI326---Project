import {
  getAllResources,
  addResource as saveResource,
} from "../repositories/resourcesRepository.js";

export async function listResources() {
  return getAllResources();
}

export async function createResource(resourceData) {
  const name = resourceData.name?.trim();
  const category = resourceData.category?.trim();
  const location = resourceData.location?.trim();
  const description = resourceData.description?.trim();

  if (!name || !category || !location || !description) {
    throw new Error("All fields are required.");
  }
  return saveResource({
    name,
    category,
    location,
    description,
  });
}
