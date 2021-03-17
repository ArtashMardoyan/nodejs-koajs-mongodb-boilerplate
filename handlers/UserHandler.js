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
        const { id } = ctx.params;

        const user = await User.findById(id);

        return ctx.ok({ user });
    }

    static async actionCreate(ctx) {
        const { firstName, lastName, email, password } = ctx.request.body;

        const user = await User.create({ firstName, lastName, email, password });

        return ctx.created({ user });
    }

    static actionUpdate(ctx) {
        return ctx.ok({ actionUpdate: 'actionUpdate' });
    }

    static actionDelete(ctx) {
        return ctx.ok({ actionDelete: 'actionDelete' });
    }
}

module.exports = UserHandler;
