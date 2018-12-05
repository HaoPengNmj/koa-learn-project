
const SafeRequest = require("../util/SafeRequest");

class BookData{
    getlist(){
        return new SafeRequest("/Test/Index").fetch();
    }
}

module.exports = BookData;

// const dburl = {
//     list: 'http://yz.it3qc.cn:9000/Test/Index',
//     book: 'http://yz.it3qc.cn:9000/Test/GetBook/'
// }