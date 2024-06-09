import sendMail from "./services/nodemailer.js";

export const sendMailHelper = async (account, mailData, recipients) => {
    return new Promise((resolve, reject) => {
        sendMail(account, mailData, recipients).then((response) => {
            return resolve({ status: 200, message: "Email sent successfully", info: response });
        }).catch((error) => {
            return reject({ status: 500, message: "Error sending mail", error: error });
        })
    })
}