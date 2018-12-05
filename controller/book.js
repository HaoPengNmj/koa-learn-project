const BookData = require('../model/bookdata');

class BookControll {
    constructor() { }
    actionlist() {
        return async (ctx) => {
            let bookdata = new BookData();
            let data = await bookdata.getlist();
            //console.log(bookmodel);  
            console.log(123);
              
            ctx.body = await ctx.render('booklist', {
                data
            });
        }
    }
    actionbook() {
        return async (ctx) => {
            ctx.body = await ctx.render('book');
        }
    }
}

module.exports = BookControll;

//exports.getlistview = 
//exports.getbookview = 