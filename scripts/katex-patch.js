//目标：渲染多行的公式
debug = require("./config").debug;
function process_katex_formula(input) {
    processed_input = input
    processed_input = processed_input
        .replaceAll(/</g, '&lt;')
        .replaceAll(/>/g, '&gt;');
    return processed_input
}
module.exports = function (data) {
    console.log("Katex patch loaded. Made by BlitherBoom812.");
    console.log(data.content)
    data.content = data.content.replace(/(?<!\$)\$([^\n$]+)\$(?!\$)/g, (match, p1) => {
        console.log("matched single line formula: ", match)
        return_value = `{% raw %} $${process_katex_formula(p1)}$ {% endraw %}`
        console.log("revised single line formula: ", return_value)
        return return_value
    });
    data.content = data.content.replace(/\$\$([^$]+?)\$\$/g, (match, p1) => {
        console.log("matched multiline formula: ", match)
        return_value = `{% raw %}\n$$${process_katex_formula(p1)}$$\n{% endraw %}`
        max_str_length = 800
        if (return_value.length > max_str_length) {
            console.log("revised (preview): ", 
                `${return_value.slice(0, max_str_length / 2)} ... ${return_value.slice(-max_str_length / 2)}`
            );
        } else {
            console.log("revised multiline formula: ", return_value);
        }
        return return_value        
    });
    return data;
};