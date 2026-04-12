import express from 'express'
import users from '../modules/users/index.js'
import products from '../modules/products/index.js'
import category from '../modules/category/index.js'
const app = express()

const router = express.Router()

router.use("/user", users)
router.use("/product", products)
router.use("/category", category)

export default router