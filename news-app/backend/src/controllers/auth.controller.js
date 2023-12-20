import { cookieOptions } from "../config/options.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { userTokenGenerator, verifyUserToken } from "../utils/helper.js";
import {
    createNewUser,
    findUserByEmail,
    findUserByEmailAndPassword,
    findUserById
} from "../services/user.service.js";
import CustomError from "../error/CustomError.js";
import notifyEmail from "../mails/notifyEmail.js";

//register new user, Ensure not already exist in database and also automatic login
export const register = asyncHandler(async (req, res) => {
    const { email, name, username, password } = req.body;
    const isExist = await findUserByEmail(email);
    if (isExist) {
        throw new CustomError(409, "your Email is already Exists ");
    }
    const sent = await notifyEmail({
        email: "atifahmad2219@gmail.com",
        count: 5,
        subject: "This is testing email"
    });
    if (!sent) {
        throw new CustomError(409, "your Email not exist in the world ");
    }
    const user = await createNewUser({ email, name, username, password });
    const token = userTokenGenerator({ _id: user._id });
    //set user token in user's browsers cookies
    res.cookie("token", token, cookieOptions);
    res.status(201).json({ user });
});

//controller for login, Get email and password from request body and find it
export const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await findUserByEmailAndPassword(email, password);
    //If user not found, Invalid email or password
    if (!user) {
        throw new CustomError(404, "Invalid username or password");
    }
    const token = userTokenGenerator({ _id: user._id });
    res.cookie("token", token, cookieOptions);
    res.status(200).json({ user });
});

//controller of refresh route, whenever page has refresh so user has automatic login
export const refresh = asyncHandler(async (req, res) => {
    const token = req.cookies.token;
    if (!token) {
        throw new CustomError(401, "your are not authenticated ");
    }
    //verify the user token, check user has login or not
    const verifiedUser = verifyUserToken(token);
    if (!verifiedUser) {
        throw new CustomError(401, "your are not authenticated ");
    }
    //assigned new token to user
    const newToken = userTokenGenerator({ _id: verifiedUser._id });
    res.cookie("token", newToken, cookieOptions);
    const user = await findUserById(verifiedUser._id);
    res.status(200).json({ user });
});

//logout the user and  Ensure user has already login
export const logout = asyncHandler((req, res) => {
    const token = req.cookies.token;
    if (!token) {
        throw new CustomError(401, "your are not authenticated  ");
    }
    //verify the user token, check user has login or not before logout
    const verifiedUser = verifyUserToken(token);
    if (!verifiedUser) {
        throw new CustomError(401, "your  are not authenticated  ");
    }
    //clear token  from user cookies
    res.clearCookie("token");
    res.status(200).json({ message: "your successfully logout !" });
});
