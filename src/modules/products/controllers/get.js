import getData from "../services/get.js"


const getControllers = async (req, res) => {
    try {
        const ahmed = await getData(req.query)
        console.log("ahmed===>", ahmed)
        res.status(200).send({ status: 200, user: ahmed, msg: "product Fetched" })
    } catch (error) {
        console.log("error", error)
        res.status(500).send({ status: 500, msg: error.message })
    }
}
export default getControllers