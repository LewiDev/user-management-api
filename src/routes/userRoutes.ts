import { FastifyInstance } from "fastify";
import { registerUser, loginUser } from "../controllers/userController";

export default async function userRoutes(fastify: FastifyInstance) {
    // Register the routes
    fastify.post("/register", registerUser);
    fastify.post("/login", loginUser);
}
