# Node Js 爬虫测试

# internet io
var http = require("http");
# file read/write
var fs = require("fs");
#
# var cheerio = require("cheerio");

const utl = "www.baidu.com";

var strHtml = "";
var results = [];
http.get(url,function(res){
    res.on("data",function(chunk){
        strHtml += chunk;
    });
    res.on("end",function(){
        console.log(strHtml);
    });
}); 