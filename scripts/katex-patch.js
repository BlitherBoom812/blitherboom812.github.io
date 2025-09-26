//目标：渲染多行的公式
function process_katex_formula(input) {
    processed_input = input
    processed_input = processed_input.replace("\\{", "\\lbrace").replace("\\}", "\\rbrace").replace("<", "< ")
    return processed_input
}

debug = require("./config").debug;
module.exports = function (data) {
    console.log("Katex patch loaded. Made by BlitherBoom812.");
    data.content = data.content.replace(/\$(([^\n]| )+?)\$/g, (match, p1, offset, string) => {
        return `$${process_katex_formula(p1).replace("_", "\\_")}$`
    });
    data.content = data.content.replace(/\$\$((.|\n)*?)\$\$/g, (match, p1, offset, string) => {
        console.log("matched $$: ", p1)
        replaced_content = `<div>$$ ${process_katex_formula(p1)} $$</div>`
        console.log("replaced_content: ", replaced_content)
        return replaced_content
    });
    return data;
};