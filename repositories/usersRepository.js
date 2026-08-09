import User from "../models/userModel.js";

export async function findByEmail(email) {
    return User.findOne({email});
}

export async function findById(id) {
    return User.findById(id);
}

export async function create(user) {
    const newUser = await User.create(user);
    return newUser.toObject();
}