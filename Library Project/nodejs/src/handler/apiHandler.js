const messageHandler = require('./messageHandler')

function apiHandler(err, req, res, next){
    if(err instanceof messageHandler){
        res.status(err.code).json(err.message)
        return
    }
    console.error(err);
    res.status(500).json(err ? err:"Somthing went wrong")
}

function routeHandler(req, res, next){
    next("Route Not Found")
}

// module.exports = apiHandler
module.exports = {
    apiHandler,
    routeHandler
}