const { HttpStatus } = require('../constants');

module.exports = () => async (ctx, next) => {
    try {
        await next();
    } catch (ex) {
        if (ex.name === 'ValidationError') {
            ctx.status = HttpStatus.UNPROCESSABLE_ENTITY;

            return (ctx.body = {
                statusName: HttpStatus.getStatusText(ctx.status),
                statusCode: ctx.status,
                message: ex.message,
                errors: ex.errors
            });
        }

        console.log(ex);

        ctx.status = HttpStatus.INTERNAL_SERVER_ERROR;
        ctx.body = { statusName: HttpStatus.getStatusText(ctx.status), statusCode: ctx.status };
    }
};
