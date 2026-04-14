import ProdItems from '../model/index.js'

const getDataDB = async () => {
    const ahmed = await ProdItems.find()
    return ahmed
}
const getDataDBPopulate = async () => {
    const ahmed = await ProdItems.find().populate("category")
    return ahmed
}
const getAggregate = async (query) => {
    const ahmed = await ProdItems.aggregate(query)
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
    getDataDBPopulate,
    postDataDB,
    getDataDB,
    delDataDB,
    updateDataDB,
    getAggregate
}