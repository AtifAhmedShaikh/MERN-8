export const isChannelApprovedByAdmin = (req, res, next) => {
    const channel = req.author;
    console.log(channel.approvalStatus);
    if (channel.approvalStatus === "ACCEPTED") {
        next();
    } else if (channel.approvalStatus === "REJECTED") {
        res.status(400).json({ message: "your not authorized !" });
    } else if (channel.approvalStatus === "PENDING") {
        res.status(400).json({ message: "your not authorized !" });
    } else {
        res.status(400).json({ message: "your not authorized !" });
    }
};
