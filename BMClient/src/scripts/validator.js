export const validateAccount = ({id, name, settings}) => {
    if(id && name){
        const {smtp, accountID, password, name, single} = settings;
        if(smtp && accountID && password && name && single) {
            return true;
        }
    }
    return false;
}

export const validateMailData = ({subject, body}) => {
    if(subject && body){
        return true;
    }
    return false;
}

export const validateRecipients = (recipients) => {
    if(recipients.length > 0){
        return true;
    }
    return false;
}


export const validateBeforeSend = (account, email, recipients) => {
    if(validateAccount(account)){
        if(validateMailData(email)){
            if(validateRecipients(recipients)){
                return true
            }
        }
    }

    return false;
}