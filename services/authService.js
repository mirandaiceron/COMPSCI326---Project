import bcrypt from "bcrypt";
import { toUserDto } from "../dtos/userDto.js";
import * as usersRepository from "../repositories/usersRepository.js";

//Create a new user acccount
export async function signup({email, password}) {
    const trimmedEmail = email.trim().toLowerCase();

    const existingUser = await usersRepository.findByEmail(trimmedEmail);

    if(existingUser) {
        throw new Error("Email already exists.");
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const user = await usersRepository.create({
        email: trimmedEmail,
        passwordHash,
    });

    return toUserDto(user);
}

//Authenticate existing user
export async function login({email, password}) {
    const user = await usersRepository.findByEmail(
        email.trim().toLowerCase(),
    );
    if(!user) {
        throw new Error("Invalid email or password.");
    }

    const passwordMatches = await bcrypt.compare(
        password,
        user.passwordHash,
    );

    if (!passwordMatches) {
        throw new Error("Invalid email or password.");
    }

    return toUserDto(user);
}