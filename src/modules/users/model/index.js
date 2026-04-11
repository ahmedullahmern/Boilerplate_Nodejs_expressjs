import mongoose from "mongoose";

const { Schema } = mongoose

const userSchema = new Schema({
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
})


const User = mongoose.model("user", userSchema)
export default User

