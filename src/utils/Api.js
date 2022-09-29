import axios from "axios";
// axios.defaults.withCredentials = true;

export const getAPI = async (url) => {
    let headers = {
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    };
    let path = url;

    let result = await new Promise((resolve, reject) => {
        axios
            .get(path, { headers: headers })
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                if (error.response.status === 401) {
                    alert("Unauthorised");
                    return;
                }
                return reject(error);
            });
    });
    return result;
};

export const postAPI = async (url, data) => {
    let headers = { Accept: "application/json" };
    let path = url;

    let result = await new Promise((resolve, reject) => {
        axios
            .post(path, data, { headers: headers })
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                if (error.response.status === 401) {
                    alert("Unauthorised");
                    return;
                }
                return reject(error);
            });
    });

    return result;
};
