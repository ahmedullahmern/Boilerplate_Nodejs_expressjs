import { Router } from "express";
import getControllers from "./controllers/get.js";
import postControllers from "./controllers/post.js";
import delControllers from "./controllers/del.js";
import updateControllers from "./controllers/update.js";
const router = Router()

router.get("/", getControllers)
router.post("/", postControllers)
router.delete("/:id", delControllers)
router.put("/:id", updateControllers)

export default router