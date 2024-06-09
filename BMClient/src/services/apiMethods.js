import apiCall from "./apiCalls";


const sendBulkMail = async (mailData, account, recipientGroup) => {
    try {
        const url = `/send/bulk`;
        const method = 'POST';
        const body = {
            mailData,
            account,
            recipients: recipientGroup?.recipients
        }
        const response = await apiCall(url, method, body);

        return response;
    } catch (error) {
        Promise.reject(error);
    }
}

const sendSingleMail = async (mailData, account, recipient) => {
    try {
        const url = `/send/single`;
        const method = 'POST';
        const body = {
            mailData,
            account,
            recipient
        }
        const response = await apiCall(url, method, body);
        return response;
    } catch (error) {
        Promise.reject(error);
    }
}


export {
    sendBulkMail,
    sendSingleMail
}