//目标：渲染多行的公式
debug = require("./config").debug;
module.exports = function (data) {
    console.log("Katex patch loaded. Made by BlitherBoom812.");
    if (debug) {
        console.log("before replace: " + data.content.match(/\$\$(.|\n)*?\$\$/g));
    }
    data.content = data.content.replace(/\$(([^\n]| )+?)\$/g, (match, p1, offset, string) => {
        if (debug){
            console.log("matched content: ", p1)
        }
        return `<div style="display: inline;">\$${p1}\$</div>`
    });
    data.content = data.content.replace(/\$\$((.|\n|\s)*?)\$\$/g, '<div style="display: inline;">$$$$$1$$$$<\/div>');
    if (debug) {
        console.log("after replace: " + data.content.match(/<div>\$\$(.|\n)*?\$\$<\/div>/g));
    }
    data.content = data.content.replace("\\{", "\\lbrace");
    data.content = data.content.replace("\\}", "\\rbrace");
    return data;
};