const katexPatch = require("./katex-patch");
// const latex_style = require("./latex_style");

hexo.extend.filter.register("before_post_render", katexPatch);
// hexo.extend.filter.register('before_post_render', latex_style);

const css = hexo.extend.helper.get("css").bind(hexo);
console.log("hexo version: " + hexo.version);
hexo.extend.injector.register(
  "head_end",
  () => {
    console.log("run latex style");
    var result = css("/css/latex.css")
    console.log(result)
    return result;
  },
  "post"
);
