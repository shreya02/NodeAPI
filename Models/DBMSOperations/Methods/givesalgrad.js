const employeeWork = sequelizeCredentials.import("../../../Schema/Employee")
const salaryWork = sequelizeCredentials.import("../../../Schema/Salary")

module.exports=function(db)
{
    return(async()=>
    {
        try
        {
            let obj1={};
            let obj2={};
            let obj3={};
            let arrays=[];
            let dataUser= await employeeWork.findAll({
                attributes:[
                    "EMPNO","ENAME","SAL"
                 ],
                 raw:true
            })
            let dataSal=await salaryWork.findAll({
                attributes:[
                    "GRAD","LOSAL","HISAL"
                ],
                raw:true
            })            
            obj1=dataUser;
            obj2=dataSal;
           // console.log("------>",obj1);
            //console.log("------>",obj2);
            // for(var i in obj1)
            // {
            //     console.log("number",obj1[i]);
                
            // }
            // for(var i in obj2)
            // {
            //     console.log("number",obj2[i]);
                
            // }
            for(var i in obj1)
            {
                console.log("only salary",obj1[i].SAL);
                obj3=obj1[i]
                for(var j in obj2)
                {
                    if((obj1[i].SAL>obj2[j].LOSAL)&&(obj1[i].SAL<obj2[j].HISAL))
                    {
                            //console.log("value between",obj2[j].LOSAL,obj2[j].HISAL); 
                            obj3["GRADING"]=obj2[j].GRAD;
                            console.log("GRADING IS : ",obj2[j].GRAD);
                    }
                }
                arrays.push(obj3)
            }
                console.log("objecttt---",arrays);
                return arrays    
        }
        catch(err)
        {
            console.log("Error is", err);
            throw err;    
        }
    })()
}