import ProdItems from '../model/index.js'

const getDataDB = async () => {
    const ahmed = await ProdItems.find()
    return ahmed
}

const postDataDB = async (data) => {
    const ahmed = await new ProdItems(data).save()
    return ahmed
}
const delDataDB = async (id) => {
    const ahmed = await ProdItems.findByIdAndDelete(id)
    return ahmed
}
const updateDataDB = async (id, data) => {
    const ahmed = await ProdItems.findByIdAndUpdate(id, data, { new: true })
    return ahmed
}

export {
    postDataDB,
    getDataDB,
    delDataDB,
    updateDataDB,
}