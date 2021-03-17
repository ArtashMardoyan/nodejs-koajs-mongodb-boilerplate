const Router = require('koa-router');

const UserHandler = require('../../handlers/UserHandler');

const router = new Router({ prefix: '/users' });

router.get('/', UserHandler.actionIndex);
router.get('/:id', UserHandler.actionView);

router.post('/', UserHandler.actionCreate);

router.put('/', UserHandler.actionUpdate);

router.delete('/', UserHandler.actionDelete);

module.exports = router;
