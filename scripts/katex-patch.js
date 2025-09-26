//目标：渲染多行的公式
debug = require("./config").debug;
function process_katex_formula(input) {
    processed_input = input
    processed_input = processed_input.replace("\\{", "\\lbrace").replace("\\}", "\\rbrace").replace("<", "< ")
    return processed_input
}
module.exports = function (data) {
    console.log("Katex patch loaded. Made by BlitherBoom812.");
    
    data.content = data.content.replace(/\$([^\n$]+)\$/g, (match, p1) => {
        return `$${process_katex_formula(p1).replace(/_/g, "\\_")}$`
    });
    data.content = data.content.replace(/\$\$([\s\S]*?)\$\$/g, (match, p1) => {
        return `<div>${process_katex_formula(match)}</div>`
    });
    // data.content = data.content.replace(/\$\$((.|\n)*?)\$\$/g, (match, p1, offset, string) => {
    //     return `<div>$$ ${p1} $$</div>`
    // });
    data.content = data.content.replace("\\{", "\\lbrace");
    data.content = data.content.replace("\\}", "\\rbrace");
    return data;
};