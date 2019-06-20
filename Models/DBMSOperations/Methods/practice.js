const employeeWork = sequelizeCredentials.import("../../../Schema/Employee")
const salaryWork = sequelizeCredentials.import("../../../Schema/Salary")
const departmentWork = sequelizeCredentials.import("../../../Schema/Department")

module.exports=function(db)
{
    return(async()=>
    {   
        try
        {   
          
             employeeWork.hasMany(departmentWork,{foreignKey: 'DEPTNO', sourceKey: 'DEPTNO'});
             let maxsalary = await employeeWork.findAll({
                     attributes:[[sequelizeCredentials.fn('max',sequelizeCredentials.col('SAL')),"maxsal"]],
                     group: ["DEPTNO"],
                    raw:true
                })
                console.log("maxxx",maxsalary);
                // let i =0;
                // let data = await employeeWork.findAll({
                //   where:{
                //          SAL : maxsalary.maxsal
                //          },
                //     raw:true
                   
                // })
                 //console.log(data)
                return maxsalary;
        }
        catch(err)
        {
            console.log("Error is", err)
            throw err;
        }
    })()
}



// SELECT * FROM DBMS.Employee GROUP BY Employee.DEPTNO HAVING Employee.SAL=(SELECT max(SAL) AS MAXSAL FROM DBMS.Employee))