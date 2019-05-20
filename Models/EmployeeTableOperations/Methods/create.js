
const createWork = sequelizeCredentials.import("../../../Schema/EmployeeDetails")

module.exports= function(emp) {  
    return (async () => {
        try 
        {        
                let data= await createWork.create(
                   {...emp,
                        createdAt : new Date(),
                        updatedAt:new Date() 
                    }
                )
                return data
               
        }
     catch (e) 
     {
                console.log("Error--------->", e);
                throw e;
     }
     
    })()
}
    
