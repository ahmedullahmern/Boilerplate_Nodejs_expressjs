import express from 'express'
import users from '../modules/users/index.js'
import products from '../modules/products/index.js'
const app = express()

const router = express.Router()

router.use("/user", users)
router.use("/product", products)

export default router