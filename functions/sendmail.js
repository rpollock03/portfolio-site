const nodemailer = require('nodemailer');


// event and callback the equivalent of request and response
exports.handler = function(event, context, callback) {

    let data = JSON.parse(event.body)

    let transporter = nodemailer.createTransport({
        host: "smtp-mail.outlook.com",
        secureConnection: false,
        port: 587,
        tls: {
       ciphers:'SSLv3',
       rejectUnauthorized: false
    },
        auth:{
         user: "robertportfoliosite@outlook.com",
         pass: "Skyshark87"
    }
    });

    transporter.sendMail({
        from: "robertportfoliosite@outlook.com",
        to: "robertpollockbfs@gmail.com",
        subject: `Sending with React, Nodemailer and Netlify`,
        html: `
            <h3>Email from ${data.name} ${data.email}<h3>
            <p>${data.message}<p>
            `
    }, function(error, info) {
        if (error) {
            callback(error, info);
        } else {
            callback(null, {
            statusCode: 200,
            body: JSON.stringify({
                   'result': 'success'
                })
        });
        }
    });
}