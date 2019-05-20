//Deletion
 const deleteWork = sequelizeCredentials.import("../../../Schema/EmployeeDetails.js")

module.exports= function(emp) {  
    return (async () => {
        try 
        {        

                let data= await deleteWork.destroy(
                    {
                            where:
                            {
                                employee_id: emp.employee_id
                            }
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