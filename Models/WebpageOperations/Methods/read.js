//Read for one and for many
const readWork = sequelizeCredentials.import("../../../Schema/UserDetails")
module.exports = (web)=>
 {
 return (async() => {
       
        try 
        {   
            let data= await readWork.findOne(
                    {
                         where:{
                                    Username:web.uname,
                                    Password:web.pass
                            }
                    }
            )
            return data
         }
          
         catch(e) 
        {
            console.log("Error-->", e);
            throw e;
        }
})()
 }
 

