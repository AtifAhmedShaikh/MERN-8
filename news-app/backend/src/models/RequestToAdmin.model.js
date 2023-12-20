import mongoose from "mongoose";

const requestSchema = new mongoose.Schema(
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
        status:{
            type:String,
            enum:["ACCEPTED","REJECTED","PENDING"]
        }

    },
    { timestamps: true }
);


const RequestModel = mongoose.model("request", requestSchema);

export default RequestModel;
