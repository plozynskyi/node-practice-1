const errorHandler = (err, req, res, next) => {
  console.log(err.message);
  res.status(err.statusCode || 500).json({
    message: err.message || 'Something went wrong, please try again later ',
  });
};

module.exports = { errorHandler };
