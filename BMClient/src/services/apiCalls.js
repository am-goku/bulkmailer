import api from "./api";

const apiCall = async (method, url, data) => {
    try {
        let response = null;
        switch (method) {
            case 'GET':
                response = await api.get(url, data)
                break;

            case 'POST':
                response = await api.post(url, data)
                break;

            case 'PATCH':
                response = await api.patch(url, data)
                break;

            case 'PUT':
                response = await api.put(url, data)
                break;

            default:
                throw new Error('Invalid API method');
        }

        return response.data;

    } catch (error) {
        return Promise.reject(error);
    }
}

export default apiCall;