import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import { appPath } from "./config/exportEnv.js";
import articlesRouter from "./routes/articles.route.js";
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";
// import ArticleModel from "./models/Article.model.js";
import channelRouter from "./routes/channel.route.js";
import { handleError } from "./error/errorHandler.js";
import UserModel from "./models/User.model.js";
import ArticleModel from "./models/Article.model.js";
const app = express();

//configure cors for give access to over frontend App with App URL
const corConfig = {
    origin: [appPath],
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE"
};

app.use(cors(corConfig));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define routers for respective endpoints routes
app.use("/api/v1/articles", articlesRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/channels", channelRouter);

app.get("/art/test", async (req, res) => {
    const resp = await UserModel.updateMany(
        {},
        { followers: [], following: [] }
    );
    res.status(200).json({
        message:
            "remove followers and following list of users and channels successfully",
        resp
    });
});
app.get("/art/del", async (req, res) => {
    const resp = await ArticleModel.deleteMany();
    res.status(200).json({ resp });
});

//Handle Errors Globally !
app.use(handleError);

export default app;
