const app = new (require('koa'))();
const mongoose = require('mongoose');

const v1Routes = require('./routes/v1');
const config = require('./config');

/**
 * ############## MIDDLEWARE ##############
 */
app.use(require('@koa/cors')());
app.use(require('./middlewares/restify')());
app.use(require('./middlewares/requestNormalizer')());
app.use(require('koa-static')('./public/', { hidden: true }));

/**
 * ############## ROUTES ##############
 */
app.use(v1Routes.routes());
app.use(v1Routes.allowedMethods());

/**
 * ############## SERVER CONFIGURATION ##############
 */
const port = process.env.PORT || config.PORT;
const server = require('http').createServer(app.callback());

server.listen(port, () => {
    mongoose
        .connect(config.MONGODB_URL, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        })
        .then(() => console.info(`Server is running on port : ${port}`))
        .catch(console.trace);
});
