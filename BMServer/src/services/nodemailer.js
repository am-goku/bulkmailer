import { createTransport } from "nodemailer";

const sendMail = async (settings, mailData, recipients) => {
    try {
        const transporter = createTransport({
            host: settings?.smtp,
            port: 587,
            secure: false,
            auth: {
                user: settings?.accountID,
                pass: settings?.password,
            },
            name: settings?.name,
            tls: {
                rejectUnauthorized: false,
            }
        })

        const info = await transporter.sendMail({
            from: settings?.from || settings?.accountID,
            to: recipients,
            replyTo: mailData?.replyTo,
            subject: mailData?.subject,
            text: mailData?.body,
        })

        return Promise.resolve(info);

    } catch (error) {
        console.log(error);
        return Promise.reject(error);
    }
}

export default sendMail;