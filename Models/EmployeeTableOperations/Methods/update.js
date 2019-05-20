//updation to be done in bracket and where ...(condition)
const updateWork = sequelizeCredentials.import("../../../Schema/EmployeeDetails")

module.exports = async (emp) => {
    return (async () => {
        try {
            let data = await updateWork.update({
                ...emp
            }, {
                where: {
                    employee_id: emp.employee_id
                }
            })
            return data

        } catch (e) {
            console.log("Error--------->", e);
            throw e;
        }
    })()
}