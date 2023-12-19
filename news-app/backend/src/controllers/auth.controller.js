/* eslint-disable no-unused-vars */
import { asyncHandler } from "../utils/asyncHandler.js";
import { assignTokenToUser, verifyToken } from "../utils/tokens.js";
import { cookieConfig } from "../config/cookieConfig.js";
import {
    createNewChannel,
    createNewUser,
    findUserByEmail,
    findUserByEmailAndPassword,
    findUserById
} from "../services/user.service.js";
//TODO: this list also store in databse 
const requestList=[
    {
        name:"Atif ",
        username:"ahmedshaikh",
        email:"ahmedshaikh@gmail.com",
        status:"ACCEPTED"
    },
    {
        name:"Atif ",
        username:"ahmedshaikh",
        email:"ahmedshaikh@gmail.com",
        status:"ACCEPTED"
    },
    {
        name:"Atif ",
        username:"ahmedshaikh",
        email:"ahmedshaikh@gmail.com",
        status:"ACCEPTED"
    }
]
//register new user in database and also automatic login
export const register = asyncHandler(async (req, res, next) => {
    const { userData } = req.body;
    const isExist = await findUserByEmail(userData.email);
    if (isExist) {
        return res.status(400).json({ message: "Email has already exists " });
    }
    //If user creating his user account
    if(userData.role==="USER"){
        const user = await createNewUser({ ...userData });
        const token = assignTokenToUser({ _id: user._id, email: user.email });
        res.cookie("token", token, cookieConfig);
        res.status(200).json({ user });
    }else if(userData.role==="NEWS_CHANNEL"){
    const createdChannel=    await createNewChannel();
    res.cookie("token", token, cookieConfig);
    res.status(200).json({ user });
    }
});

//controller for login, Get email and password from request body and find it
export const login = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;
    const user = await findUserByEmailAndPassword(email, password);
    //If user not found, Invalid email or password
    if (!user) {
        return res.status(404).json({ message: "Invalid email or password " });
    }
    const token = assignTokenToUser({ _id: user._id });
    res.cookie("token", token, cookieConfig);
    res.status(200).json({ user });
});


//controller of refresh route, whenever page has refresh so user is automatic login
export const refresh = asyncHandler(async (req, res) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: "your not authenticated" });
    }
    const verifyUser = verifyToken(token);
    if (!verifyUser) {
        return res.status(401).json({ message: "your not authenticated" });
    }
    //assigned new token to user

    const newToken = assignTokenToUser({ _id: verifyUser._id });
    res.cookie("token", newToken, cookieConfig);
    const user = await findUserById(verifyUser._id);
    res.status(200).json({ user });
});

export const logout=asyncHandler((req,res)=>{
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: "your not authenticated" });
    }
    const verifyUser = verifyToken(token);
    if (!verifyUser) {
        return res.status(401).json({ message: "your not authenticated" });
    }
    res.clearCookie("token");//clear cookies
    res.status(200).json({message:"your successfully logout !"});
});

