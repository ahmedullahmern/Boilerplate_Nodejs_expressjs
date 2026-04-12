import mongoose from "mongoose";

const { Schema } = mongoose

const categorySchema = new Schema({
    name: { type: String, require: true },
    status: { type: String, default: "active", enum: ["active", "inactive"] },
})


const Category = mongoose.model("category", categorySchema)
export default Category

