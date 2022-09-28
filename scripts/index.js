const katexPatch = require("./katex-patch");

hexo.extend.filter.register('before_post_render', katexPatch);