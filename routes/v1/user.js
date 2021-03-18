const Router = require('koa-router');

const UserHandler = require('../../handlers/UserHandler');

const router = new Router({ prefix: '/users' });

router.get('/', UserHandler.actionIndex);
router.get('/:_id', UserHandler.actionView);

router.post('/', UserHandler.actionCreate);

router.put('/:_id', UserHandler.actionUpdate);

router.delete('/:_id', UserHandler.actionDelete);

module.exports = router;
