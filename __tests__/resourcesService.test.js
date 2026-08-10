import { jest } from "@jest/globals";

//Fake functions replace real repository to test service layer
jest.unstable_mockModule("../repositories/resourcesRepository.js", () => ({
  //Fake versions of repository functions
  getAllResources: jest.fn(),
  addResource: jest.fn((resource) => ({
    id: 1,
    ...resource,
  })),
  findResourceById: jest.fn(),
  removeResourceById: jest.fn(),
}));

//Import service
const { createResource } = await import("../services/resourcesService.js");
const testUser = {
  id: "507f1f77bcf86cd799439011",
  role: "member",
};

//Test that a valid resource is accepted
test("creates a valid resource", async () => {
  //Create valid resource
  const resource = await createResource(
    {
      name: "Learning Commons",
      category: "Study Spaces",
      location: "W.E.B. Du Bois Library",
      description: "Offers quiet and collaborative study spaces for students.",
    },
    testUser,
  );

  //Check that the returned object contains the fake id and all of the original fields
  expect(resource).toEqual({
    id: 1,
    name: "Learning Commons",
    category: "Study Spaces",
    location: "W.E.B. Du Bois Library",
    description: "Offers quiet and collaborative study spaces for students.",
    ownerId: testUser.id,
  });
});

//Test that an empty name is rejected
test("rejects a missing name", async () => {
  //Throws error because name is required
  await expect(
    createResource(
      {
        name: "",
        category: "Study Spaces",
        location: "W.E.B. Du Bois Library",
        description:
          "Offers quiet and collaborative study spaces for students.",
      },
      testUser,
    ),
  ).rejects.toThrow("All fields are required.");
});

//Test that an empty category is rejected
test("rejects a missing category", async () => {
  await expect(
    createResource(
      {
        name: "Learning Commons",
        category: "",
        location: "W.E.B. Du Bois Library",
        description:
          "Offers quiet and collaborative study spaces for students.",
      },
      testUser,
    ),
  ).rejects.toThrow("All fields are required.");
});

//Test that an empty location is rejected
test("rejects a missing location", async () => {
  await expect(
    createResource(
      {
        name: "Learning Commons",
        category: "Study Spaces",
        location: "",
        description:
          "Offers quiet and collaborative study spaces for students.",
      },
      testUser,
    ),
  ).rejects.toThrow("All fields are required.");
});

//Test that an empty description is rejected
test("rejects a missing description", async () => {
  await expect(
    createResource(
      {
        name: "Learning Commons",
        category: "Study Spaces",
        location: "W.E.B. Du Bois Library",
        description: "",
      },
      testUser,
    ),
  ).rejects.toThrow("All fields are required.");
});

//Test that whitespace-only vals are rejected bcs the service uses trim() (so spaces become an empty string)
test("rejects whitespace-only values", async () => {
  await expect(
    createResource(
      {
        name: "  ",
        category: "Study Spaces",
        location: "W.E.B. Du Bois Library",
        description:
          "Offers quiet and collaborative study spaces for students.",
      },
      testUser,
    ),
  ).rejects.toThrow("All fields are required.");
});
