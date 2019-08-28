import Api from "../utils/api";
import ApiPaths from "../constants/api";
export const LOAD_JOBS_DATA = "LOAD_JOBS_DATA";
export const LOAD_SELECTED_JOB_DATA = "LOAD_SELECTED_JOB_DATA";
export const CHANGE_LOADING_STATUS='CHANGE_LOADING_STATUS';


export const getSelectedJobData = (jobId) => {
    return async (dispatch) => {
        try {
            const { data } = await Api.get(ApiPaths.selectedReport+jobId);
            if (data) {
                //Add jobs data to store
                dispatch({
                    type: LOAD_SELECTED_JOB_DATA,
                    payload: data
                })
            }
        }
        catch (exp) {

        }
        finally {
            dispatch(changeLoadingStatus(false))
        }
    }
}

export const getJobsData = () => {
    return async (dispatch) => {
        try {
            const { data } = await Api.get(ApiPaths.jobs);
            if (data) {
                //Add jobs data to store
                dispatch({
                    type: LOAD_JOBS_DATA,
                    payload: data
                })
                dispatch(changeLoadingStatus(true))
                dispatch(getSelectedJobData(data[0].id))
            }
        }
        catch (exp) {
        }
        finally {

        }
    }
}

export const changeLoadingStatus=(status)=>{
    return {
        type:CHANGE_LOADING_STATUS,
        payload:status
    }
}
