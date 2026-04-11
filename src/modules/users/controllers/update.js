import updateData from "../services/update.js"
const updateControllers = async (req, res) => {
    try {
        const data = req.body
        const { id } = req.params
        const ahmed = await updateData(id, data)
        res.status(201).send({ status: 201, user: ahmed, msg: "user UPdated" })

    } catch (error) {
        console.log("errror==>", error)
        res.status(500).send({ status: 500, msg: error.message })
    }
}

export default updateControllers