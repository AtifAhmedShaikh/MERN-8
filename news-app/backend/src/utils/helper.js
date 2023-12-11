import bcryptjs from "bcryptjs";
import Jwt from "jsonwebtoken";
import { tokenSecretKey } from "../config/exportEnv";
export const hashedPassword = async password => {
    const hash = await bcryptjs.hash(password, 10);
    return hash;
};

export const comparePassword = async (original, hashed) => {
    const isValid = await bcryptjs.compare(original, hashed);
    return isValid;
};

export const userTokenGenerator = userObj => {
    try {
        const userToken = Jwt.sign({ ...userObj }, tokenSecretKey, {
            expiresIn: "3d"
        });
        return userToken;
    } catch (error) {
        console.log("Error in Tokens");
    }
};

export const verifyUserToken = token => {
    try {
        const isVerifiedUser = Jwt.verify(token, tokenSecretKey);
        return isVerifiedUser;
    } catch (error) {
        console.log(error);
        return false;
    }
};
