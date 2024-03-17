import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
    }
});

const nextAuthUsers = mongoose.models.nextAuthUsers || mongoose.model('nextAuthUsers', userSchema);
export default nextAuthUsers; 