export const validateAccount = ({id, name, settings}) => {
    if(id && name){
        const {smtp, accountID, password} = settings;
        if(smtp && accountID && password) {
            return true;
        }
    }
    console.log(settings);
    return false;
}

export const validateMailData = ({subject, body}) => {
    if(subject && body){
        return true;
        }
    console.log(subject, body);
    return false;
}

export const validateRecipients = (recipientsGroup) => {
    if(recipientsGroup.recipients.length > 0){
        return true;
    }
    console.log(recipientsGroup);
    return false;
}


export const validateBeforeSend = (account, email, recipientsGroup) => {
    if(validateAccount(account)){
        if(validateMailData(email)){
            if(validateRecipients(recipientsGroup)){
                return true
            }
        }
    }

    return false;
}