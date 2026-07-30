import mongoose from "mongoose";

const resourceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

const Resource =
  mongoose.models.Resource || mongoose.model("Resource", resourceSchema);

export async function getAllResources() {
  return Resource.find().lean();
}

export async function addResource(resource) {
  const newResource = await Resource.create(resource);
  return newResource.toObject();
}
