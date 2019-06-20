const deleteWork = require("../../../Schema/StudentTable").StudentSchema

module.exports= function(stu) {  
     console.log("STU.......",stu);
    
    return (async () => {
        try 
        {
            let data= await deleteWork.deleteOne(
                {
                    name:"Shreya"
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