const koa = require('Koa');
const app = new koa();

app.use(async ctx =>{
    ctx.body = 'Hello World';
});

app.listen(3222, () => {
    console.log("项目启动成功，监听在3222端口")
});