import { postDataDB } from "../db/index.js"


const postData = async (id) => {
    const ahmed = await postDataDB(id)
    return ahmed
}
export default postData