import mongoose from "mongoose";
import { defaultArticleImage } from "../constants.js";

const articleSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        urlToImage: {
            type: String,
            default: defaultArticleImage
        },
        author: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "user"
        },
        likes: [{ type: mongoose.SchemaTypes.ObjectId, ref: "user" }]
    },
    { timestamps: true }
);

const ArticleModel = mongoose.model("article", articleSchema);

export default ArticleModel;
