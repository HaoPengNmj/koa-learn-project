const log4js = require('log4js');

log4js.configure({
    appenders: { cheese: { type: 'file', filename: './logs/cheese.log' } },
    categories: { default: { appenders: ['cheese'], level: 'error' } }
});

var logger = log4js.getLogger('cheese');

const errorHandler = {
    errorcode() {
        return async (ctx, next) => {
            try {
                console.log(1);
                await next();
                console.log(4);
            } catch (error) {
                logger.error(error);
                ctx.status = error.status || 500;
                ctx.body = await ctx.render("error");
            }
        }
    },
    notfound() {
        return async (ctx, next) => {
            console.log(2);
            await next();
            console.log(3);
            if (404 != ctx.status) {
                return;
            }
            //ctx.status = 200;
            ctx.status = 404;
            ctx.body = '<script type="text/javascript" src="//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js" charset="utf-8" homePageUrl="/" homePageName="回到我的主页"></script>';
        }
    }
}

module.exports = errorHandler;