import { sendMailHelper } from "./helper.js";


export const sendBulkMail = async (req, res) => {
    try {
        const { account, mailData, recipients } = req.body;

        const newRecipients = recipients.map(r => {
            return r.email
        })

        const response = await sendMailHelper(account?.settings, mailData, newRecipients);

        res.status(200).send(response)
    } catch (error) {
        res.status(500).send(error)
    }
}


export const sendSingleMail = async (req, res) => {
    try {
        const { account, mailData, recipient } = req.body;

        const response = await sendMailHelper(account?.settings, mailData, recipient?.email);

        res.status(200).send(response)
    } catch (error) {
        res.status(500).send(error)
    }
}