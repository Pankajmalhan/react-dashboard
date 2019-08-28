import Api from "../utils/api";
import ApiPaths from "../constants/api";
export const LOAD_JOBS_DATA = "LOAD_JOBS_DATA"

export const getJobsData = () => {
    return async (dispatch) => {
        try {
            const { data } = await Api.get(ApiPaths.jobs);
            /**
             * Get data from api and send to reducer
             */
            if (data) {
                dispatch({
                    type: LOAD_JOBS_DATA,
                    payload: data
                })
            }
        }
        catch (exp) {

        }
        finally {

        }
    }
}