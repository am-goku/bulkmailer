import dotenv from 'dotenv';
dotenv.config();


const abstractValidator = async () => {
    return new Promise((resolve, reject) => {
        const options = { method: 'GET' };
        const api = `${process.env.ABSTRACT_API}?api_key=${process.env.ABSTRACT_API_KEY}&email=${email}`;
        fetch(api, options)
            .then(res => res.json())
            .then((response) => {
                if (response.deliverability === 'DELIVERABLE') {
                    resolve(true);
                } else {
                    resolve(false);
                }
            })
            .catch(() => resolve(true));
    })
}



async function validateEmailAddress(email) {
    const rejected = [];
    const accepted = [];
    for(let i=0; i<email.length; i++) {
        const valid = await abstractValidator(email[i]);
        if (valid) {
            accepted.push(email[i]);
        } else {
            rejected.push(email[i]);
        }
    };

    return {
        accepted,
        rejected
    }
}

export default validateEmailAddress;