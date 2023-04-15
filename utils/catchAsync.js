const catchAsync = fn => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

module.exports = { catchAsync };

// const asyncWrapper = controller => {
//   return (req, res, next) => {
//     controller(req, res).catch(next);
//   };
// };
