const createWork = require("../../../Schema/StudentTable").StudentSchema
// console.log("student------>",createWork);
module.exports= function(stu) {  
    return (async () => {
        try 
        {
            let data= await createWork.create(
                {
                    ...stu,
                     create_date : new Date(),
                })
                return data
        }
        catch(e)
        {
            console.log("Error is",e);
            throw e;         
        }     
    })()
}