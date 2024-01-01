import express from "express";
import { isAdmins, isAuthenticated, isNewsChannel } from "../middlewares/Authentication.middleware.js";
import {
    acceptChannelRequest,
    allChannels,
    channelById,
    channelProfileById,
    followToChannel
} from "../controllers/channel.controller.js";

const router = express.Router();

//Get all channels list
router.route("/all").get(isAuthenticated, allChannels);

//Get one specific channel by its Id
router.route("/one/:id").get(isAuthenticated, channelById);

//Get complete channel profile where its related articles and its Info
router.route("/profiles/:id").get(isAuthenticated, channelProfileById);

//follow and unfollow the channel by channel Id
router.route("/follow/:id").patch(isAuthenticated, followToChannel);

router.patch("/request/accept/:id",isNewsChannel,isAdmins,acceptChannelRequest)

export default router;
