import mongoose from "mongoose";

export async function DbConnect() {
    try {
        const mongoUri = process.env.MONGO_URI
        await mongoose.connect(mongoUri).then(() => {
            console.log("DataBase Connected");
        })

    } catch (error) {
        console.error("Error Connecting DB", error);
    }
}