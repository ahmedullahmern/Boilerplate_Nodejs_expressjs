import nodemailer from "nodemailer"


const sendMail = () => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'ahmedullahmern@gmail.com',
            pass: 'yourpassword'
        }
    });
    let mailOptions = {
        from: 'ahmedullahmern@gmail.com',
        to: 'islamtahira14@gmail.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

export default sendMail