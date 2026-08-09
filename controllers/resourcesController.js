import {
  listResources,
  createResource,
  deleteResource,
} from "../services/resourcesService.js";

export async function showResources(req, res) {
  const resources = await listResources();

  res.render("resources", {
    resources,
    error: null,
  });
}

export async function addResource(req, res) {
  try {
    const resource = await createResource(req.body, req.user);
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

export async function removeResource(req, res) {
  try {
    await deleteResource(req.params.id, req.user);
    return res.status(200).json({
      deleted: true,
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      error: error.message,
    });
  }
}
