function errorHandler(err, req, res, next) {


  let status = 500
  let message = err.message || 'Ineternal server error'
  let errors = null


  if(err.name === 'ValidationError') {
    status = 422
    errors = {}
    message = 'Validation Failed'
    for(const field in err.errors) {
      errors[field] = err.errors[field].message
    }
  }

  res.status(status).json({ message, errors })
  next(err)
}
module.exports = errorHandler
