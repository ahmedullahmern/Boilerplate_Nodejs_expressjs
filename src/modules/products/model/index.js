import mongoose from "mongoose";

const { Schema } = mongoose

const productSchema = new Schema({
    title: { type: String, require: true },
    desc: { type: String, require: true, },
    price: { type: String, require: true },
})


const ProdItems = mongoose.model("product", productSchema)
export default ProdItems

