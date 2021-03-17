const { HttpStatus } = require('../constants');

module.exports = () => async (ctx, next) => {
    try {
        await next();
    } catch (ex) {
        ctx.status = HttpStatus.INTERNAL_SERVER_ERROR;
        ctx.body = { statusName: HttpStatus.getStatusText(ctx.status), statusCode: ctx.status };
    }
};
