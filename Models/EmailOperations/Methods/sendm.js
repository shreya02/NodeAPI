const aws = require('aws-sdk')


module.exports=()=>
{
    return(async() =>
    {
        try{
                var sns = new aws.SNS({apiVersion: '2010-03-31'});

                var param = {
                Message: 'Hello User',
                MessageStructure: 'string',
                PhoneNumber: '+913226'
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
