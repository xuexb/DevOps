const Router = require('koa-router');
const Logger = require('./logger');
const logger = new Logger({
    env: 'node1',
});
const router = new Router();

router.get('/', async (ctx) => {
    ctx.body = 'ok';
});

router.get('/error/500', async (ctx) => {
    logger.error({
        status: 500,
        message: '后端某服务错误',
    });
    ctx.body = 500;
});

router.get('/error/404', async (ctx) => {
    logger.error({
        status: 404,
        message: '未找到服务',
    });
    ctx.body = 404;
});

router.get('/order/:id', async (ctx) => {
    logger.error({
        status: 500,
        message: `订单处理失败，订单id: ${ctx.params.id}`,
    });
    logger.info(`查询订单信息，订单id: ${ctx.params.id}`);
    ctx.body = ctx.params.id;
});

module.exports = router;
