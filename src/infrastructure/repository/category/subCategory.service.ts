import { Endpoint } from "../../../core/common/apiLink";
import { SubCategoryParams } from "../../interface/category/subCategory.interface";
import { RequestService } from "../../utilities/response";


class SubCategoryService {
    async GetBlogCategory(params: SubCategoryParams, setLoading: Function) {
        setLoading(true)
        try {
            return await RequestService
                .get(Endpoint.SubCategory.Get, {
                    ...params
                })
                .then(response => {
                    if (response) {
                        return response
                    }
                    setLoading(false)
                    return response;
                });
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false);
        }
    };
}
const subcategoryService = new SubCategoryService();

export default subcategoryService;