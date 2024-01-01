/* eslint-disable no-unused-vars */
import { findChannelArticles } from "../services/article.service.js";
import {
    acceptChannelRequestByAdmin,
    findChannelById,
    findChannels,
    followingTheChannelByUser,
    isChannelFollowedByUser,
    unfollowTheChannelByUser
} from "../services/channel.service.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const allChannels = asyncHandler(async (req, res, next) => {
    const channels = await findChannels();
    res.status(200).json({ channels });
});

export const channelById = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const channel = await findChannelById(id);
    res.status(200).json({ channel });
});

export const channelProfileById = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const channel = await findChannelById(id);
    const articles = await findChannelArticles();
    res.status(200).json({ profile: { channel, articles } });
});

//user has follow and unfollow the channel by the its IDs
export const followToChannel = asyncHandler(async (req, res, next) => {
    const { id: channelId } = req.params;
    const { _id: userId } = req.user;
    //If already follow this channel,so unfollow this channel
    const hasFollowed = await isChannelFollowedByUser(channelId, userId);
    if (hasFollowed) {
        const channel = await unfollowTheChannelByUser(channelId, userId);
        res.status(201).json({
            message: ` you unfollow the  ${channel.username} channel `
        });
    } else {
        //If user not following this channel, so follow this channel
        const channel = await followingTheChannelByUser(channelId, userId);
        res.status(201).json({
            message: `are you now following ${channel.username}`
        });
    }
});


export const acceptChannelRequest=asyncHandler(async(req,res)=>{
    const channelId=req.params.id;
    const approval=await acceptChannelRequestByAdmin(channelId);
    res.status(202).json({message:"your request has approved by App Admin "});
})
