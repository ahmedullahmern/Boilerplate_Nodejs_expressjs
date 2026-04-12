import Category from '../model/index.js'

const getDataDB = async () => {
    const ahmed = await Category.find()
    return ahmed
}

const postDataDB = async (data) => {
    const ahmed = await new Category(data).save()
    return ahmed
}
const delDataDB = async (id) => {
    const ahmed = await Category.findByIdAndDelete(id)
    return ahmed
}
const updateDataDB = async (id, data) => {
    const ahmed = await Category.findByIdAndUpdate(id, data, { new: true })
    return ahmed
}

export {
    postDataDB,
    getDataDB,
    delDataDB,
    updateDataDB,
}