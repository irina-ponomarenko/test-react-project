import mongoose from "../db.js";

const InfoSchema = new mongoose.Schema({
    name: String,
    lastName: String,
    createdAt: {
        type: Date,
        default: Date
    },
});

const UserInfo = mongoose.model('userInfo', InfoSchema, 'userInfo');

export default UserInfo;