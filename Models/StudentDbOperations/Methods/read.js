const readWork = require("../../../Schema/StudentTable").StudentSchema

module.exports= function(stu) {  
     console.log("STU.......",stu.name);
    
    return (async () => {
        try 
        {

            let data= await readWork.findOne(
                {
                      name:stu.name                
                }
             )
           return data
            // console.log("datta------>",data)
                
        }
        catch(e)
        {
            console.log("Error is",e);
            throw e;         
        }     
    })()
}



// let data= await readWork.find()