import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import articlesRouter from "./routes/articles.route.js";
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";
import channelRouter from "./routes/channel.route.js";
import collectionRouter from "./routes/collection.route.js";
import { handleError } from "./error/errorHandler.js";
import { corsOptions } from "./config/options.js";
const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define routers for respective endpoints routes
app.use("/api/v1/articles", articlesRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/channels", channelRouter);
app.use("/api/v1/collections", collectionRouter);

process.on("unhandledRejection", (reason, promise) => {
    console.log("Unhandled Rejection at:", promise, "reason:", reason);
    // Add your custom error handling logic here, or log the error
    // You might want to terminate the process in a production environment
});

//Handle Errors Globally !
app.use(handleError);

export default app;
