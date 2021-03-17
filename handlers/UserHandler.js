class UserHandler {
    static actionIndex(ctx) {
        return ctx.ok({ actionIndex: 'actionIndex' });
    }

    static actionView(ctx) {
        return ctx.ok({ actionView: 'actionView' });
    }

    static actionCreate(ctx) {
        return ctx.ok({ actionCreate: 'actionCreate' });
    }

    static actionUpdate(ctx) {
        return ctx.ok({ actionUpdate: 'actionUpdate' });
    }

    static actionDelete(ctx) {
        return ctx.ok({ actionDelete: 'actionDelete' });
    }
}

module.exports = UserHandler;
