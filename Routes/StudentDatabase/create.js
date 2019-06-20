const creates= require(appPath + '/Models/StudentDbOperations')

module.exports = async (req, res) => {
    let response = Object.assign({}, BasicResponse);
    let createA = new creates();

    let result = await createA.create(req.body)
    .catch((err) => {
      response.message = err;
      res.status(403).json(response);
    })
    response.success=true
    response.data=result
    res.status(200).json(response)
}
