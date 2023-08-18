const messageHandler = require('../handler/messageHandler')

const validation =  (schema) => {
    return async (req, res, next) => {
        try {
            const body = req.body;
            await schema.validateAsync(body);
        } catch (err) {
            console.log(err.message);
            next(messageHandler.badRequest(err.message))
            return
        }
        next();
    }
}

module.exports = validation;