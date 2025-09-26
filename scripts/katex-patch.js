//目标：渲染多行的公式
debug = require("./config").debug;
function process_katex_formula(input) {
    processed_input = input
    processed_input = processed_input
        .replace("\\{", "\\lbrace")
        .replace("\\}", "\\rbrace") //没这个会报错
        .replace("<", "< ") // 防止转义成 html 标签
    return processed_input
}
module.exports = function (data) {
    console.log("Katex patch loaded. Made by BlitherBoom812.");
    console.log(data.content)
    data.content = data.content.replace(/\$([^\n$]+)\$/g, (match, p1) => {
        console.log("matched: ", match)
        return_value = process_katex_formula(p1)
            .replace(/_/g, "\\_") // 防止被解析成 markdown 的下划线
            .replace("\\\\", "\\\\\\\\") // 防止被解析成 markdown 的转义符
        // console.log("revised: ", return_value)
        return `$${return_value}$`
    });
    data.content = data.content.replace(/\$\$([\s\S]*?)\$\$/g, (match, p1) => {
        return `<div>${process_katex_formula(match)}</div>`
    });
    return data;
};