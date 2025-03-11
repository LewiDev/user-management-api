import Fastify from "fastify";
import connectDB from "./data/database";
import userRoutes from "./routes/userRoutes";

const fastify = Fastify({ logger: true });

fastify.register(userRoutes);

const startServer = async () => {
    try {
        await connectDB();
        await fastify.listen({ port: 5000 }); // listen on port 5000
        console.log("Server running on http://localhost:5000");
    } catch (err) {
        console.error("Server failed to start:", err);
    }
};

startServer();
