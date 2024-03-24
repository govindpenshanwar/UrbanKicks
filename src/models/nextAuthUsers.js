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
    }
});

const nextAuthUsers = mongoose.models.nextAuthUsers || mongoose.model('nextAuthUsers', userSchema);
export default nextAuthUsers; 