const koa = require('Koa');
const app = new koa();
const router = require('./router/router.js');
const static = require('koa-static');
const render = require('koa-swig');
const co = require('co');
const path = require('path');

// app.use(async ctx =>{
//     ctx.body = 'Hello World';
// });

app.context.render = co.wrap(render({
    //设置简单的配置
    root: path.join(__dirname, 'views'),//视口路径
    autoescape: true,
    cache: 'memory', // disable, set to false
    ext: 'html',
    writeBody: false
}));

app.use(static(path.join(__dirname,'public')));


app.use(router.routes()).use(router.allowedMethods());

app.listen(3222, () => {
    console.log("项目启动成功，监听在3222端口")
});