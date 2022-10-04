//目标：渲染多行的公式
debug = require("./config").debug;
module.exports = function (data) {
    console.log("Katex patch loaded. Made by BlitherBoom812.");
    if (debug) {
        console.log("before replace: " + data.content.match(/\$\$(.|\n)*?\$\$/g));
    }
    data.content = data.content.replace(/\$\$((.|\n)*?)\$\$/g, "<div>$$$$$1$$$$<\/div>");
    if (debug) {
        console.log("after replace: " + data.content.match(/<div>\$\$(.|\n)*?\$\$<\/div>/g));
    }
    return data;
};