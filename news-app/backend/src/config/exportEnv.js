/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import dotenv from "dotenv";
dotenv.config();
const DATABASE_URI = process.env.CONNECTION_STRING;
const PORT = process.env.PORT;
const API_KEY = process.env.API_KEY;
const TOKEN_SECRET_KEY = process.env.TOKEN_SECRET_KEY;
const FRONTEND_ORIGIN = process.env.APP_PATH;
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASSWORD = process.env.SMTP_PASSWORD;
const SMTP_FROM_EMAIL = process.env.SMTP_FROM_EMAIL;
const SMTP_FROM_NAME = process.env.SMTP_FROM_NAME;
export {
    DATABASE_URI,
    PORT,
    API_KEY,
    TOKEN_SECRET_KEY,
    FRONTEND_ORIGIN,
    SMTP_FROM_EMAIL,
    SMTP_FROM_NAME,
    SMTP_USER,
    SMTP_PASSWORD
};
