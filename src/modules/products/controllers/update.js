import updateData from "../services/update.js"
const updateControllers = async (req, res) => {
    try {
        const data = req.body
        const { id } = req.params
        console.log("data==>", req.body)
        const ahmed = await updateData(id, data)
        console.log("ahmed==>", ahmed)
        res.status(201).send({ status: 201, product: ahmed, msg: "user UPdated" })

    } catch (error) {
        console.log("errror==>", error)
        res.status(500).send({ status: 500, msg: error.message })
    }
}

export default updateControllers