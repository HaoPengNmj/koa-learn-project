const fetch = require('node-fetch');

const dburl = {
    list: 'http://yz.it3qc.cn:9000/Test/Index',
    book: 'http://yz.it3qc.cn:9000/Test/GetBook/'
}
exports.getlist = function () {
    return fetch(dburl.list)
        .then(response => response.json())
        .then(res => {
            //console.log(res);
            return res;
        });
}