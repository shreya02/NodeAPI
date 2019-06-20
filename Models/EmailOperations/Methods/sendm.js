const aws = require('aws-sdk')

aws.config.update({
    "accessKeyId": "AKIAJNSIJIJWIO64AFXA",
    "secretAccessKey": "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",
    "region": "us-east-1"
});

module.exports=()=>
{
    return(async() =>
    {
        try{
                var sns = new aws.SNS({apiVersion: '2010-03-31'});

                var param = {
                Message: 'Hello User',
                MessageStructure: 'string',
                PhoneNumber: '+917665213226'
                };
            
                sns.publish(param,function(err, data) {
                if (err)
                     console.log(err);
                else     
                      console.log(data);         
                });

        }
        catch(e) 
            {
                console.log("Error--->", e);
                throw e;
            }
    })()
}
