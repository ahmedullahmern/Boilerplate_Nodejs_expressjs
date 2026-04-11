import delData from "../services/del.js"


const delControllers = async (req, res) => {
    try {
        const { id } = req.params
        await delData(id)
        res.status(201).send({ status: 201, msg: "user Deleted" })
    } catch (error) {
        console.log("errror==>", error)
        res.status(500).send({ status: 500, msg: error.message })
    }
}
export default delControllers