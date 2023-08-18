var session = require('express-session')
let RedisStore = require("connect-redis")(session)
const { createClient } = require("redis")

module.exports = async (app) => {
    let redisClient = createClient({ 
        url: process.env.REDIS_URL, 
        legacyMode: true 
    })
    redisClient.connect().then(() => {
        console.log("Redis connected");
    }).catch(console.error)


    app.use(session({
        store: new RedisStore({ client: redisClient }),
        secret: 'my-secret',
        resave: true,
        rolling: true,
        saveUninitialized: true,
        name: 'access_token',
        cookie: {
            maxAge: 1000 * 60 * 60 * 6, // 6 hours
            secure: false,
            sameSite: false
        }
    })
    )
}

