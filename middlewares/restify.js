const respond = require('koa-respond');
const compose = require('koa-compose');

const { HttpStatus } = require('../constants');
const errorHandler = require('./errorHandler');
const negotation = require('./negotation');

module.exports = () =>
    compose([
        respond({
            statusMethods: {
                ok: HttpStatus.OK,
                created: HttpStatus.CREATED,
                accepted: HttpStatus.ACCEPTED,
                noContent: HttpStatus.NO_CONTENT,
                notModified: HttpStatus.NOT_MODIFIED,
                notAcceptable: HttpStatus.NOT_ACCEPTABLE,
                paymentRequired: HttpStatus.PAYMENT_REQUIRED,
                upgradeRequired: HttpStatus.UPGRADE_REQUIRED,
                movedTemporarily: HttpStatus.MOVED_TEMPORARILY,
                movedPermanently: HttpStatus.MOVED_PERMANENTLY,
                expectationFailed: HttpStatus.EXPECTATION_FAILED,
                unprocessableEntity: HttpStatus.UNPROCESSABLE_ENTITY,
                preconditionRequired: HttpStatus.PRECONDITION_REQUIRED,
                unsupportedMediaType: HttpStatus.UNSUPPORTED_MEDIA_TYPE
            }
        }),
        errorHandler(),
        negotation()
    ]);
