import validateEmailAddress from "./services/mailValidator.js";
import sendMail from "./services/nodemailer.js";

export const sendMailHelper = async (account, mailData, recipients) => {
    return new Promise(async (resolve, reject) => {

        const filteredEmail = await validateEmailAddress(recipients);

        const {accepted, rejected} = filteredEmail;

        sendMail(account, mailData, accepted).then((response) => {
            const info = {
                ...response,
                ['rejected']: [...response.rejected, ...rejected],
            }
            return resolve({ status: 200, message: "Email sent successfully", info: info });
        }).catch((error) => {
            return reject({ status: 500, message: "Error sending mail", error: error });
        })
    })
}