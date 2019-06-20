
const createWork = sequelizeCredentials.import("../../../Schema/EmployeeDetails")

module.exports= function(emp) {  
    // console.log("Emp.......",emp);
    
    return (async () => {
        try 
        {        
                let data= await createWork.create(
                   {
                       ...emp,
                        createdAt : new Date(),
                        updatedAt:new Date() 
                    }
                )
                // console.log("Data",data);
                
                return data
               
        }
     catch (e) 
     {
                console.log("Error--------->", e);
                throw e;
     }
     
    })()
}
    
