const bookmodel = require('../model/bookdata');

exports.getlistview = async (ctx) => {
    let data = await bookmodel.getlist();
    //console.log(bookmodel);    
    ctx.body = await ctx.render('booklist',{
        data
    });
}

exports.getbookview = async (ctx) => {
    ctx.body = await ctx.render('book');
}