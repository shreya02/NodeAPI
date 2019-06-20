const aws = require('aws-sdk')

aws.config.update({
    "accessKeyId": "AKIAJNSIJIJWIO64AFXA",
    "secretAccessKey": "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",
    "region": "us-east-1"
});

module.exports = ()=> {
    return (async() => {
        try {
        var param={
                Destination:{
                    ToAddresses:['shreyasaxena066@gmail.com']
                 },
                 Source:"vyalaga@techforce.ai",
                Message:{
                    Body:{
                            Html:{
                                    Charset:'UTF-8',
                                    Data:"<p>This is testing mail </p>"
                                 },
                            Text:{
                                    Charset:'UTF-8',
                                    Data:"Hello to the actual message."
                                }       
                         },
                     Subject:{
                            Charset:'UTF-8',
                            Data: "wELCOME TO MAIL"
                        }
                        },
               
                // ReplyToAddresses:[
                //     "yp.venkateswarlu@gmail.com"
                // ]
            }
            var sendPromise = new aws.SES({apiVersion:'2010-12-01'}).sendEmail(param).promise();
            sendPromise.then(
            function(data) {
                console.log(data.MessageId);
            }).catch(
                function(err) {
                console.error(err, err.stack);
            });
        }
         catch (e) {
            console.log("Error--------->", e);
            throw e;
        }
    })()
}








// var receiver = ['abc@gmail.com']
// var from = ['cv@gmail.com']

// ses.sendEmail({
//         Source: from,
//         Destination: {
//             ToAddresses: receiver
//         },
//         Message: {
//             Subject: {
//                 Data: "Welcome to mail!"
//             },
//             Body: {
//                 Text: {
//                     Data: 'This mail is auto generated.'
//                 }
//             }
//         }
//     },
//     function (err, data) {
//         if (err)
//             throw err
//         console.log("Email is sent")
//         console.log(data)
//     });