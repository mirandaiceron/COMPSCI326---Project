import { listResources, createResource } from "../services/resourcesService.js";

export async function showResources(req, res) {
  const resources = await listResources();

  res.render("resources", {
    resources,
    error: null,
  });
}

export async function addResource(req, res) {
  try {
    await createResource(req.body);
    res.redirect("/resources");
  } catch (error) {
    const resources = await listResources();

    res.status(400).render("resources", {
      resources,
      error: error.message,
    });
  }
}
