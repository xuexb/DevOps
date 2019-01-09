const Koa = require('koa');
const app = new Koa();

app
    .use(async (ctx) => {
        ctx.set('X-Node-Label', process.env.ENV_LABEL);
        ctx.body = `ok - ${Date.now()} - ${process.env.ENV_LABEL}`;
    })
    .listen(3000);
