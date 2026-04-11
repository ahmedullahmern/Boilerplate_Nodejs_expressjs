import User from "../model/index.js"


const getDataDB = async () => {
    const ahmed = await User.find()
    return ahmed
}

const postDataDB = async (data) => {
    const ahmed = await new User(data).save()
    return ahmed
}
const delDataDB = async (id) => {
    const ahmed = await User.findByIdAndDelete(id)
    return ahmed
}
const updateDataDB = async (id, data) => {
    const ahmed = await User.findByIdAndUpdate(id, data, { new: true })
    return ahmed
}

export {
    postDataDB,
    getDataDB,
    delDataDB,
    updateDataDB,
}