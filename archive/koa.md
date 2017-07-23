## Koa 笔记

### 2017-07-21
#### koa 常用包整理

需求 | 包名 | 描述| 地址
---|---|---|---
路由 | koa-router | koa路由中间件，提供 RESTful 资源路由 | https://github.com/alexmingoia/koa-router
路由合并 | koa-compose | koa中间件合并中间件 | https://github.com/koajs/compose
body分析 | koa-bodyparser| koa的报文body分析中间件，支持json、form、text类型的Body | https://github.com/koajs/bodyparser
静态文件 | koa-static|静态文件支撑中间件, wrapper for koa-send. | https://github.com/koajs/static
转换 | koa-convert | koa1中间件 -> koa2中间件 | https://github.com/gyson/koa-convert
日志 | koa-logger | 开发日志中间件 | https://github.com/koajs/koa-logger
session | koa-generic-session | koa session store with memory, redis or others.|https://github.com/koajs/generic-session
跨域安全 | koa-csrf | 处理跨域请求伪造 | https://github.com/koajs/csrf
页面 | koa-views | 渲染模板中间件 | https://github.com/queckezz/koa-views
持久化 | koa-redis |  koa redis 中间件 | https://github.com/koajs/koa-redis


### 2017-07-20
#### 记录请求所用的时间
```
async function responseTime (ctx, next) {
  console.log('Started tracking response time')
  const started = Date.now()
  await next()
  // once all middleware below completes, this continues
  const ellapsed = (Date.now() - started) + 'ms'
  console.log('Response time is:', ellapsed)
  ctx.set('X-ResponseTime', ellapsed)
}
app.use(responseTime)
app.use(async (ctx, next) => {
  ctx.status = 200
  console.log('Setting status')
  await next()
})
app.use(async (ctx) => {
  await delay(1000)
  console.log('Setting body')
  ctx.body = 'Hello from Koa'
}) 
```

### 2017-07-19
1.  中间件写法与用法
```
const time = require('./time');
app.use(async time());


function time(options) {
    return function (ctx, next) {
        console.time(ctx.req.url);
        ctx.res.once('finish', function () {
            console.timeEnd(ctx.req.url);
        });
        await next();
    }
}
module.exports = time;
```

2. 中间件的执行顺序
##### song-mw.js
```
function word1() {
  return async function (ctx, next) {
    console.log('东方红');
    await next();
    console.log('太阳升')
  }
}

function word2() {
  return async function (ctx, next) {
    console.log('-1979年');
    await next();
    console.log('-那是一个春天')
  }
}

function word3() {
  return async function (ctx, next) {
    console.log('--我爱北京天安门');
    await next();
    console.log('--天安门上太阳升')
  }
}

module.exports = {
  word1,
  word2,
  word3,
};
```
##### app.js
```
const Koa = require('koa');
const app = new Koa();
const {word1, word2, word3} = require('./song-mw');
app.use(word1());
app.use(word2());
app.use(word3());
app.listen(3000);

东方红
-1979年,
--我爱北京,天安门
--天安门上太阳升
-那是一个春天
太阳升
```

### 2017-07-18
1. 在 cookies 里设置中文 value，要使用*encodeURI*
```
ctx.cookies.set('cid', encodeURI('hello world啊'), {
  domain: 'localhost',
  path: '/index',
  maxAge: 10 * 60 * 1000,
  expires: new Date('2017-02-14'),
  httpOnly: false,
  overwrite: false
});
```
2. npm 和 yarn 常用命令对比

作用 | NPM 命令| Yarn 命令
---|---|---
安装 |npm install | yarn
安装某个包 | npm install –save xxx | yarn add xxx
安装最新版包 | npm install --save xxx@latest | yarn add xxx
删除某个包 | npm uninstall –save xxx|yarn remove xxx
开发模式安装 | npm install –save-dev xxx|yarn add –dev xxx
全局安装 | npm install –g xxx | yarn global add xxx
更新 | npm update –save | yarn upgrade
清除缓存 | npm cache clean | yarn cache clean
初始化 | npm init | yarn init

### 网络 status 码表
1. 200 ok
2. 204 no content
3. 304 not modified
4. 400 bad request
5. 403 forbidden
6. 404 not found
7. 500 internal server error
8. 502 bad getway
9. 503 service unavailable
10. 504 gateway time-out