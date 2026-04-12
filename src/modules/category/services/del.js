import { delDataDB } from "../db/index.js"

const delData = async (data) => {
    const ahmed = await delDataDB(data)
}
export default delData