import getData from "../services/get.js"


const getControllers = async (req, res) => {
    try {
        const ahmed = await getData()
        console.log("ahmed===>", ahmed)
        res.status(200).send({ status: 200, category: ahmed, msg: "category Fetched" })
    } catch (error) {
        console.log("error", error)
        res.status(500).send({ status: 500, msg: error.message })
    }
}
export default getControllers