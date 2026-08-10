import {
  getAllResources,
  addResource as saveResource,
  findResourceById,
  removeResourceById,
} from "../repositories/resourcesRepository.js";

export async function listResources() {
  return getAllResources();
}

export async function createResource(resourceData, user) {
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
    ownerId: user.id,
  });
}

function isOwnerOrAdmin(resource, user) {
  const isOwner = resource.ownerId?.toString() === user.id;
  const isAdmin = user.role === "admin";

  return isOwner || isAdmin;
}

export async function deleteResource(id, user) {
  const resource = await findResourceById(id);
  if (!resource) {
    const error = new Error("Resource not found.");
    error.status = 404;
    throw error;
  }

  if (!isOwnerOrAdmin(resource, user)) {
    const error = new Error(
      "You do not have permission to delete this resource.",
    );
    error.status = 403;
    throw error;
  }
  return removeResourceById(id);
}
