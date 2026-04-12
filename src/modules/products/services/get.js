import { getDataDBPopulate } from "../db/index.js"

const getData = async () => {
    const ahmed = await getDataDBPopulate()
    return ahmed
}
export default getData