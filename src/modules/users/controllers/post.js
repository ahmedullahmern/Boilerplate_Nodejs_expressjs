import postData from "../services/post.js"


const postControllers = async (req, res) => {
    try {
        const ahmed = await postData(req.body)
        res.status(201).send({ status: 201, user: ahmed, msg: "user Posted" })
    } catch (error) {
        console.log("errror==>", error)
        res.status(500).send({ status: 500, msg: error.message })
    }
}
export default postControllers