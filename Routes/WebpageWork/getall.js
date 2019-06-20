const gets= require(appPath + '/Models/WebpageOperations')

module.exports = async (req, res) => {
    let response = Object.assign({}, BasicResponse);
    let getsA = new gets();
    
    let result = await getsA.getall(req.body)
    .catch((err) => {
      response.message = err;
      res.status(403).json(response);
    })
    response.success=true
    response.data=result
    res.status(200).json(response)
}
