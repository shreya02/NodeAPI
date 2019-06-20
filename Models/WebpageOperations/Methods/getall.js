//read all data
const getWork = sequelizeCredentials.import("../../../Schema/UserDetails")
module.exports = (web)=>
 {
     console.log("WEb query",web)
 return (async() => {
       
        try 
        {   
        
            let data= await getWork.findAll();
            return data;
         }
         catch(e) 
        {
            console.log("Error-->", e);
            throw e;
        }
})()
 }
 

