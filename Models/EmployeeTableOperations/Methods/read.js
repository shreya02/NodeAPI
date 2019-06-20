//Read for one and for many
 const readWork = sequelizeCredentials.import("../../../Schema/EmployeeDetails")
 module.exports = function(emp)
  {
  return (async () => {
     try 
     {   
             let data= await readWork.findAll()
            //console.log("All Employees", JSON.stringify(data));
             return data

             
     }
      catch(e) 
    {
             console.log("Error-->", e);
             throw e;
  }
 })()
 }

