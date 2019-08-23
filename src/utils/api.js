
// import ServiceHandler from "../ServiceLayer/ServiceHandler";
import { strings } from './i18n';

class Api {
    static headers() {
        return {
            "Accept": "application/json",
            "Content-Type": "application/json"
        };
    }

    static getApiPath = (apiName) => {
        return `http://www.test.com`
    }

    static async get(route) {
        return Api.xhr(route, null, "GET", callbacks);
    }

    static put(route, params) {
        return Api.xhr(route, params, "PUT", callbacks);
    }

    static async post(route, params, abortSignal) {
        return Api.xhr(route, params, "POST", abortSignal);
    }

    static delete(route, params) {
        return Api.xhr(route, params, "DELETE", callbacks);
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
            // console.log("Error in upload image", exp);
            Promise.reject("failed")
        }

    }

    static async xhr(route, params, verb, abortSignal) {
        try {
            //Get api path
            let url = Api.getApiPath(route);
            //Create request bosy
            let body = Object.assign(params);
            let mobileToken = await LocalStorage.getItem("MobileToken");
            let options = Object.assign(
                { method: "POST", headers: Api.headers() }, { body: JSON.stringify(body) }
            );
            if (abortSignal) {
                options = Object.assign(options, { signal: abortSignal })
            }
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
