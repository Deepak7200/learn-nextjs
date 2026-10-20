import mongoose from "mongoose";
const {Schema, model} = mongoose;

const UserSchema = new Schema({ // create blueprint of data which will save in DB
    email: {type: String, required: true},
    name: {type: String, required: true},
    username: {type: String},
    profilepic: {type: String},
    coverpic: {type: String},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}  
});

const User = model("User", UserSchema); // if "User" doesn't exist in DB then create, otherwise use it
export default mongoose.models.User || User;