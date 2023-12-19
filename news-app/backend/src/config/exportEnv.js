/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import dotenv from "dotenv";
dotenv.config();
const connectionString = "mongodb+srv://atifahmad2219:ecommerceapp@cluster0.malln0y.mongodb.net/store?retryWrites=true&w=majority";
const port = 8000;
const apiKey = "process.env.API_KEY";
const tokenSecretKey = "5797ADF65D7ACC947F138E3E4C9FE";
const appPath = "http://localhost:5173";
export { connectionString, port, apiKey, tokenSecretKey, appPath };
