const randomString = require('randomstring');

class Util {
    /**
     * @param length
     * @return String
     */
    static generateRandomString(length = 32) {
        return randomString.generate({
            length,
            charset: 'alphabetic'
        });
    }

    /**
     * @param length
     * @return Number
     */
    static generateRandomNumeric(length = 32) {
        return randomString.generate({
            length,
            charset: 'numeric'
        });
    }
}

module.exports = Util;
