const sendEmails= require(appPath + '/Models/EmailOperations')

module.exports = async (req, res) => {
    let response = Object.assign({}, BasicResponse);
    let sendEmail = new sendEmails();

    let result = await sendEmail.sende()
    .catch((err) => {
      response.message = err;
      res.status(403).json(response);
    })
    response.success=true
    response.data=result
    res.status(200).json(response)
}
