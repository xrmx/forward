const Koa = require('koa');
const logger = require('koa-logger');
const Router = require('koa-router');
const next = require('next');
const uuid = require('uuid/v3');

const port = parseInt(process.env.PORT, 10) || 8080;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();


app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();
  server.keys = ['super_secret']
  server.use(logger());

  router.get('/', async ctx => {
    const { req, res } = ctx;
    const query = {
      colors: JSON.stringify(ctx.cookies.get('colors'))
    };

    await app.render(req, res, '/', query);
    ctx.respond = false;
  });

  router.get('/list', async ctx => {
    const { req, res } = ctx;
    const query = {
      colors: JSON.stringify(ctx.cookies.get('colors'))
    };

    await app.render(req, res, '/list', query);
    ctx.respond = false;
  });

  router.get('*', async ctx => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200;
    await next();
  });

  server.use(router.routes());
  server.listen(port, () => {
    console.log(`▲ Ready on http://localhost:${port}`)
  });
});
