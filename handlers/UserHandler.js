const _ = require('lodash');

const { ErrorMessage } = require('../constants');
const User = require('../models/User');

class UserHandler {
    static async actionIndex(ctx) {
        const { limit, offset, page: currentPage } = ctx.state.paginate;

        const [users, total] = await Promise.all([
            await User.find()
                .skip(offset)
                .limit(limit),
            await User.countDocuments()
        ]);

        return ctx.ok({ users, _meta: { total, currentPage, pageCount: Math.ceil(total / limit) } });
    }

    static async actionView(ctx) {
        const { _id } = ctx.params;

        const user = await User.findById(_id);

        if (_.isEmpty(user)) {
            return ctx.notFound(ErrorMessage.USER_NOT_FOUND);
        }

        return ctx.ok({ user });
    }

    static async actionCreate(ctx) {
        const { firstName, lastName, email, password } = ctx.request.body;

        const user = await User.create({ firstName, lastName, email, password });

        return ctx.created({ user });
    }

    static async actionUpdate(ctx) {
        const { firstName, lastName } = ctx.request.body;
        const { _id } = ctx.params;

        const user = await User.findById(_id);

        if (_.isEmpty(user)) {
            return ctx.notFound(ErrorMessage.USER_NOT_FOUND);
        }

        _.extend(user, { firstName, lastName });

        await user.save();

        return ctx.ok({ user });
    }

    static async actionDelete(ctx) {
        const { _id } = ctx.params;

        const user = await User.findById(_id);

        if (_.isEmpty(user)) {
            return ctx.notFound(ErrorMessage.USER_NOT_FOUND);
        }

        await User.deleteOne({ _id });

        return ctx.accepted();
    }
}

module.exports = UserHandler;
