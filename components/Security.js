const _ = require('lodash');
const stream = require('stream');

class Security {
    /**
     * @param obj
     * @return Boolean
     */
    static isReadableStream(obj) {
        return obj instanceof stream.Stream && _.isFunction(obj._read) && _.isObject(obj._readableState);
    }
}

module.exports = Security;
