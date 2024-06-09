import api from "./api";

const apiCall = async (url, method, data = {}) => {
    try {
        let response = null;
        switch (method) {
            case 'GET':
                response = await api.get(url, { params: data });
                break;

            case 'POST':
                response = await api.post(url, data);
                break;

            case 'PATCH':
                response = await api.patch(url, data);
                break;

            case 'PUT':
                response = await api.put(url, data);
                break;

            default:
                throw new Error('Invalid API method');
        }

        return response.data;

    } catch (error) {
        // Logging the error for debugging
        console.error(`Error with ${method} request to ${url}:`, error);

        // Returning a rejected promise with error information
        return Promise.reject(error.response ? error.response.data : error.message);
    }
};

export default apiCall;
