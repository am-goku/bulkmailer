import sendMail from "./services/nodemailer.js";

export const sendMailHelper = async (account, mailData, recipients) => {
    sendMail(account, mailData, recipients).then((response) => {
        return Promise.resolve({ status: 200, message: "Email sent successfully", info: response });
    }).catch((error) => {
        Promise.reject({ status: 500, message: "Error sending mail", error: error });
    })
}