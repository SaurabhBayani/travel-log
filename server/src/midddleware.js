// If path not found then return status as 404
const notFound = (req, res, next) => {
    const error = new Error(`Not found - ${req.originalUrl}`);
    res.status(404);
    next(error);
};

// If someone reaches here without 404 then return 500 else it will be 404
// Here we need all 4 params else order will change
// eslint-disable-next-line no-unused-vars
const errorHandler = (error, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        message: error.message,
        stack: process.env.NODE_ENV === 'production' ? '' : error.stack, // This will print whole stack trace. Should not be used in production
    });
};

module.exports = {
    notFound,
    errorHandler,
};
