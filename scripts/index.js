const katexPatch = require("./katex-patch");
// const latex_style = require("./latex_style");

hexo.extend.filter.register("before_post_render", katexPatch);
// hexo.extend.filter.register('before_post_render', latex_style);

// load css
hexo.extend.injector.register(
  "head_end",
  () => {
    return `<link rel="stylesheet" type="text/css" href="/css/latex.css">`;
  },
  "post"
);
hexo.extend.injector.register(
  "head_end",
  () => {
    return `<link rel="stylesheet" type="text/css" href="/css/fonts.css">`;
  },
  "post"
);
