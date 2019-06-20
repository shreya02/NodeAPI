const mergeds= require(appPath + '/Models/DBMSOperations')

module.exports = async (req, res) => {
    let response = Object.assign({}, BasicResponse);
    let mergeA = new mergeds()
    let result = await mergeA.merge(req.body)
   
    .catch((err) => {
      response.message = err;
      res.status(403).json(response);
    })
    response.success=true
    response.data=result
    res.status(200).json(response)
}
