const sendMsgs= require(appPath + '/Models/EmailOperations')

module.exports = async (req, res) => {
    let response = Object.assign({}, BasicResponse);
    let sendMg = new sendMsgs();

    let result = await sendMg.sendm()
    .catch((err) => {
      response.message = err;
      res.status(403).json(response);
    })
    response.success=true
    response.data=result
    res.status(200).json(response)
}
