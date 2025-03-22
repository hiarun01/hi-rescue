// errorHandler.js


const errorHandler = (err, req, res, next) => {

    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';

    res.status(statusCode).json({
        status: 'error',
        message: message,

    });
    // res.status(statusCode).json({
    //     error: {
    //         message: message
    //     }
    // });

    // * how it will look like in client side 
    // {
    //     "error": {
    //         "message": "invalid credentials"
    //     }
    // }




};

export default errorHandler
