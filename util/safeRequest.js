const fetch = require('node-fetch');
const config = require('../connfig/index');
const { extend } = require('lodash');
let requestConfig = {
    method: 'GET',
}

class SafeRequest {
    constructor(url, opt) {
        console.log(config.baseUrl + url);
        
        this.url = config.baseUrl + url;
        this.option = extend(requestConfig, opt);
    }

    fetch() {
        return fetch(this.url, this.option)
            .then(response => response.json())
            .then(res => {
                //console.log(res);
                return res;
            });
    }
}

module.exports = SafeRequest;