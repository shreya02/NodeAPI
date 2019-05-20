const creates= require(appPath + '/Models/EmployeeTableOperations')

module.exports = async (req, res) => {
    let response = Object.assign({}, BasicResponse);
    let create = new creates();

    let result = await create.create(req.body)
    .catch((err) => {
      response.message = err;
      res.status(403).json(response);
    })
    response.success=true
    response.data=result
    res.status(200).json(response)
}
