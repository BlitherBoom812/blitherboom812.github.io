//目标：渲染多行的公式
debug = require("./config").debug;
module.exports = function (data) {
    console.log("Katex patch loaded. Made by BlitherBoom812.");
    data.content = data.content.replace(/\$\$((.|\n)*?)\$\$/g, "<div>$$$$$1$$$$<\/div>");
    data.content = data.content.replace("\\{", "\\lbrace");
    data.content = data.content.replace("\\}", "\\rbrace");
    return data;
};