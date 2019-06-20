const employeeWork = sequelizeCredentials.import("../../../Schema/Employee")
const departmentWork = sequelizeCredentials.import("../../../Schema/Department")

module.exports= function(db)
{
    return(async()=>{
            try{
                 //not needed----> employeeWork.hasMany(employeeWork,{sourceKey: 'EMPNO'});
                 employeeWork.hasMany(departmentWork,{foreignKey: 'DEPTNO', sourceKey: 'DEPTNO'});
                 let data= await employeeWork.findAll(
                {
                    attributes:["EMPNO","ENAME"],
                    include:[
                        {
                            model:departmentWork,
                            attributes:["DNAME","LOC"]
                        }
                    ],

                    raw: true
                })
                   // let data= await employeeWork.findAll()
                        return data
            }
            catch(err)
            {
               
                console.log("Error is", err);
                throw err;
                
            }
    }
    )()
}
