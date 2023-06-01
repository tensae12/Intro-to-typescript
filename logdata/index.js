"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/posts/1'; //create a variable called URL and assign to the URL
// use axios to make a network request -- its going to make a HTTP get request to that URL and attempt to fetch that json data, we can chain on a .then that will be called when we get a response from the API
axios_1.default.get(url).then(function (res) {
    console.log(res.data);
});
