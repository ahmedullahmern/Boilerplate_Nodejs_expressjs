import { updateDataDB } from "../db/index.js"

const updateData = async (id, data) => {
    const ahmed = await updateDataDB(id, data)
    return ahmed
}
export default updateData