
// import ServiceHandler from "../ServiceLayer/ServiceHandler";
import ApiPaths from "../constants/api";
class Api {
    static headers() {
        return {
            "Accept": "application/json",
            "Content-Type": "application/json"
        };
    }

    static getApiPath = (apiName) => {
        return ApiPaths.base + apiName
    }

    static async get(route) {
        return Api.xhr(route, null, "GET");
    }

    static put(route, data) {
        return Api.xhr(route, data, "PUT");
    }

    static async post(route, data) {
        return Api.xhr(route, data, "POST");
    }

    static delete(route, data) {
        return Api.xhr(route, data, "DELETE");
    }

    static getFormDataFromObject(object) {
        object = object.body ? object.body : object;
        let formData = new FormData();
        Object.keys(object).forEach(key => {
            if (key == 'media') {
                if (object[key] != null) {
                    formData.append(object[key].custom_node, {
                        uri: object[key].path,
                        name: object[key].name,
                        type: object[key].mime
                    });
                }
            } else {
                formData.append(key, object[key].toString());
            }
        });
        return formData;
    }

    static async uploadImg(route, params) {
        try {
            let data = Api.getFormDataFromObject(params);
            let path = Api.getApiPath(route);
            console.log("pankaj", { data });
            let options = Object.assign({
                method: 'PUT',
                body: data,
                headers: {
                    Accept: 'application/json',
                    'content-type': 'multipart/form-data'
                }
            });
            let response = await fetch(path, options)
            return response;
        }
        catch (exp) {
            console.log({ exp });
            Promise.reject("failed")
        }

    }

    static async xhr(route, data, verb, abortSignal) {
        try {
            //Get api path
            let url = Api.getApiPath(route);
            //Create request bosy
            let options = {};
            if (verb != "GET" && verb != "HEAD") {
                options = Object.assign(options, { body: JSON.stringify(data) });
            }
            options = Object.assign(options,{ method: verb, headers: Api.headers() });
            const response = await fetch(url, options);
            if (response.status == 200) {
                return {
                    status: response.status,
                    data: await response.json()
                }
            } else {
                return response;
            }
        }
        catch (error) {
            console.log(error);
        }
    }

}

export default Api;
