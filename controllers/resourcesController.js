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
    const resource = await createResource(req.body);
    if (req.get("HX-Request")) {
      return res.render("partials/resourceItem", {
        resource,
      });
    }
    return res.redirect("/resources");
  } catch (error) {
    if (req.get("HX-Request")) {
      return res.status(400).send(error.message);
    }

    const resources = await listResources();

    return res.status(400).render("resources", {
      resources,
      error: error.message,
    });
  }
}
