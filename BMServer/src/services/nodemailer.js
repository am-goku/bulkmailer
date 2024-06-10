import { createTransport } from "nodemailer";

const sendMail = async (settings, mailData, recipients) => {
    try {
        console.log(settings);
        const transporter = createTransport({
            host: settings?.smtp,
            port: 587,
            secure: false,
            auth: {
                user: settings?.accountID,
                pass: settings?.password,
            },
            tls: {
                rejectUnauthorized: false,
            }
        });

        const template = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
                            <html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en" style="font-family:arial, 'helvetica neue', helvetica, sans-serif">
                            <head>
                            <meta charset="UTF-8">
                            <meta content="width=device-width, initial-scale=1" name="viewport">
                            <meta name="x-apple-disable-message-reformatting">
                            <meta http-equiv="X-UA-Compatible" content="IE=edge">
                            <meta content="telephone=no" name="format-detection">
                            </head>
                            <body>
                            ${mailData.body}
                            <hr>
                            ${settings.signature || ''}
                            </body>
                            </html>
                            `

        let mailOptions = {
            from: `${settings.name} ${settings?.from}`,
            replyTo: mailData?.replyTo,
            sender: settings?.name,
            subject: mailData?.subject,
            html: template,
        }

        if (settings?.single) {
            mailOptions['to'] = recipients;
        } else {
            mailOptions['bcc'] = recipients;
        }

        const info = await transporter.sendMail(mailOptions)

        return Promise.resolve(info);

    } catch (error) {
        console.log(error);
        return Promise.reject(error);
    }
}

export default sendMail;