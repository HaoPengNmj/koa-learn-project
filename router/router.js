const Router = require('koa-router');
const router = new Router();
const BookControll = require('../controller/book');


// router.get('/', (ctx, next) => {
//     ctx.body = "home index";
// });

// router.get('/book', (ctx, next) => {
//     ctx.body = "book";
// });


let bookcontrol = new BookControll();

router.get('/', bookcontrol.actionlist());

router.get('/book', bookcontrol.actionbook());

// router.get('*', (ctx, next) => {
//     ctx.body = "404";
// });

module.exports = router;