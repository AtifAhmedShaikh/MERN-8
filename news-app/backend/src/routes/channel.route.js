import express from "express";
import {isAuth} from "../middlewares/auth.middleware.js";
import {
    allChannels,
    channelById,
    followToChannel
} from "../controllers/channel.controller.js";

const router = express.Router();
//Get all channels list
router.get("/all", isAuth, allChannels);
//Get one specific channel by its Id
router.get("/one/:id", isAuth, channelById);
//follow and unfollow the channel by channel Id
router.patch("/follow/:id", isAuth, followToChannel);

export default router;
