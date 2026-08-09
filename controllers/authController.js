import * as authService from "../services/authService.js";

//Handles user signup req
export async function signup(req, res) {
    try {
        const user = await authService.signup(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({
            error: error.message,
        });
    }
}

//Handles user login req
export async function login(req, res) {
    try{ 
        const user = await authService.login(req.body);

        res.status(200).json(user);
    } catch (error) {
        res.status(401).json({
            error: error.message,
        });
    }
}