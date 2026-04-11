import { getDataDB } from "../db/index.js"

const getData = async () => {
    const ahmed = await getDataDB()
    return ahmed
}
export default getData