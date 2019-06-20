//Read for one and for many
const readWork = sequelizeCredentials.import("../../../Schema/Punchcard_Data")
module.exports =function(pun) 
{  
    
    return (async (query) => 
    {
        var id= `${query.id}`
        var date=`${query.date}`;
        console.log("id:",id)
        console.log("date:",date)
        try
        {
            //var total=`${req.query}`;
                    let data= await readWork.findOne(
                            {
                                    where:
                                    {
                                        UserID: id,
                                        Data:date
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
   })
}()



// = function(pun)
//  {
//  return (async () => {
//     try 
//     {   
//         //     let data= await readWork.findAll(pun)
//         //     return data
//         let data= await readWork.findOne(
//                 {
//                         where:
//                         {
//                             UserID: pun.UserID
//                         }
//                 }
//             )  
//             return data
//     }
//      catch(e) 
//    {
//             console.log("Error-->", e);
//             throw e;
//  }
// })()
// }


//http://localhost:5001/v1/emp/punchcarddetails/   works
