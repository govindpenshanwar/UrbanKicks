import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    // user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User'
    // },

    id: Number,
    picture: String,
    name: String,
    tag: String,
    price: String
});

const CartData = mongoose.models.CartData || mongoose.model('CartData', userSchema);

export default CartData;