const Router = require('koa-router');
const router = new Router();
const bookcontrol = require('../controller/book');


// router.get('/', (ctx, next) => {
//     ctx.body = "home index";
// });

// router.get('/book', (ctx, next) => {
//     ctx.body = "book";
// });

router.get('/', bookcontrol.getlistview);

router.get('/book', bookcontrol.getbookview);

router.get('*', (ctx, next) => {
    ctx.body = "404";
});

module.exports = router;