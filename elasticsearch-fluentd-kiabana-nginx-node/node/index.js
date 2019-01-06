const Koa = require('koa');
const router = require('./router');
const app = new Koa();

app
    .use(router.routes())
    .use(router.allowedMethods())
    .listen(3000);
