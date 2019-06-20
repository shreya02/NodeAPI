
const createWork = sequelizeCredentials.import("../../../Schema/UserDetails")

module.exports= function(web) {  
    console.log("Web....",web);
    return (async () => {
        try 
        {        
                let data= await createWork.create(
                   {
                       ...web
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
    
