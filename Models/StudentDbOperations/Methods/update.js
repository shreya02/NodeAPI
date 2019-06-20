const updateWork = require("../../../Schema/StudentTable").StudentSchema
// console.log("dhdffhd",updateWork);

module.exports= function(stu) {  
     console.log("STU.......",stu);
    
    return (async () => {
        try 
        {
            let data= await updateWork.updateOne(
                {
                    ...stu
                }, 
                {
                    where: {
                        name: stu.name
                    }
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