const reads= require(appPath + '/Models/StudentDbOperations')

module.exports = async (req, res) => {
    let response = Object.assign({}, BasicResponse);
    let readA = new reads()
    console.log("query parameter is", req.query);
    
    let result = await readA.read(req.query)
    .catch((err) => {
      response.message = err;
      res.status(403).json(response);
    })
    response.success=true
    response.data=result
    res.status(200).json(response)
}
