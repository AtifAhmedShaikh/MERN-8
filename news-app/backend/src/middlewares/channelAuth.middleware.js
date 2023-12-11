
export const isNewChannel = async (req, res, next) => {
    try {
        const user = req.user;
        if (user.role === "NEWS_CHANNEL") {
            req.author = req.user;
            return next();
        } else {
            res.status(401).json({
                message:
                    "your are not able to write  article, only channel can be allow "
            });
        }
    } catch (error) {
        console.log("error in token of middleware !");
    }
};
