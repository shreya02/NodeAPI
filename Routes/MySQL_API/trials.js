const trieds= require(appPath + '/Models/DBMSOperations')

module.exports = async (req, res) => {
    let response = Object.assign({}, BasicResponse);
    let tryA = new trieds()
    let result = await tryA.practice(req.body)
    
    .catch((err) => {
      response.message = err;
      res.status(403).json(response);
    })
    response.success=true
    response.data=result
    res.status(200).json(response)
}
