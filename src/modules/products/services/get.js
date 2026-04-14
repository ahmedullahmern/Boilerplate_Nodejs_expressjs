import { getAggregate } from "../db/index.js"

const getData = async (query) => {
    const { pageNumber, pageSize } = query
    const skip = (pageNumber - 1) * pageSize
    //   1       -1 = * 0 = 0  
    const ahmed = await getAggregate([
        {
            $facet: {
                data: [
                    { $skip: Number(skip) },
                    { $limit: Number(pageSize) }
                ],
                total: [
                    { $count: "count" }
                ]
            }
        }

    ])
    return ahmed
}
export default getData