import User from "../models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET as string;

const registerUser = async (req: any, reply: any) => {
    try {
        const { username, email, password } = req.body; // get the username, email, and password from the req body

        if(!username || !email || !password) {
            return reply.status(400).send({ message: "All fields are required!" }); // if any of the fields are missing, return a 400 status code
        }

        const hashedPassword = await bcrypt.hash(password, 10); // hash the password
        const newUser = new User({ username, email, password: hashedPassword }); // create a new user with the hashed password

        await newUser.save(); 
        reply.status(201).send({ message: "User created successfully" }); // send a 201 status code if the user is created successfully
    } catch (error) {
        reply.status(500).send({ message: "Server Error: When creating a user..." }); // if there is an error, return a 500 status code
    }
}

const loginUser = async (req: any, reply: any) => {
    try {
        const { email, password } = req.body; // get the email and password from the req body
        const user = await User.findOne({ email }); // find the user by email

        if(!user || !(await bcrypt.compare(password, user.password))) {
            return reply.status(400).send({ message: "Invalid credentials: email or password are incorrect..." }); // if the user is not found or the password is incorrect, return a 400 status code
        }

        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" }); // create a token with the user id and the JWT_SECRET
        reply.status(200).send({ token }); // send a 200 status code with the token
      
    } catch (err) {
        reply.status(500).send({ message: "Server Error: When logging in a user..." }); // if there is an error, return a 500 status code
    }
}

export { registerUser, loginUser };