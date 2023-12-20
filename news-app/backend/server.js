import app from "./src/app.js";
import { PORT } from "./src/config/exportEnv.js";
import connectDB from "./src/database/connection.js";
//connect database mongoDB atlas as  cloud service
connectDB();

//server running on given port
app.listen(PORT, () => {
    console.log("server running on port :", PORT);
});
