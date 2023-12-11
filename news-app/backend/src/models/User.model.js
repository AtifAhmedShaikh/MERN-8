import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        profileImage: {
            type: String,
            required: true,
            default: "my-profile-Image-url"
        },
        backgroundImage: {
            type: String,
            required: true,
            default: "my-background-Image-url"
        },
        role: {
            type: String,
            enum: ["USER", "ADMIN", "NEWS_CHANNEL"],
            default: "USER"
        },
        about: {
            type: String,
            default: "Hey, i am using newsApp"
        },
        headline: {
            type: String,
            default: "Frontend Developer | React Developers"
        },
        followers: [{ type: mongoose.SchemaTypes.ObjectId, ref: "user" }],
        following: [{ type: mongoose.SchemaTypes.ObjectId, ref: "user" }]
    },
    { timestamps: true }
);

//custom functions of this model document
userSchema.methods.checkPassword = () => {
    console.log("your function whenever you call it ");
};

const UserModel = mongoose.model("user", userSchema);

export default UserModel;
