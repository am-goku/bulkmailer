import { sendMailHelper } from "./helper.js";


export const sendBulkMail = async (req, res) => {
    const { account, mailData, recipients } = req.body;

    const newRecipients = recipients.map(r => {
        return r.email
    })

    sendMailHelper(account?.settings, mailData, newRecipients)
        .then((response) => {
            res.status(200).send(response)
        })
        .catch((error) => {
            res.status(500).send(error)
        })
}


export const sendSingleMail = async (req, res) => {
    const { account, mailData, recipient } = req.body;

    sendMailHelper(account?.settings, mailData, recipient?.email).then((response) => {
        res.status(200).send(response)
    }).catch((error) => {
        res.status(500).send(error)
    })
}