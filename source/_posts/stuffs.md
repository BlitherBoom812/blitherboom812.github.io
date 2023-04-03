---
title: 杂项
date: 2022-11-10 21:08:58
tags:
---

批处理命令设置环境变量
set path=xxxx

## js爬虫

**1.js保存字符串到本地**
```js
function saveShareContent (content, fileName) {
    let downLink = document.createElement('a')
    downLink.download = fileName
    //字符内容转换为blod地址
    let blob = new Blob([content])
    downLink.href = URL.createObjectURL(blob)
    // 链接插入到页面
    document.body.appendChild(downLink)
    downLink.click()
    // 移除下载链接
    document.body.removeChild(downLink)
}
```
**2. 包含iframe/#document的文档**
```js
    var ifram = document.querySelector("#iframe")
    var idoc = ifram.contentWindow.document;
    //console.log(idoc);
    var ifram2 = idoc.querySelector("#ext-gen1046 > iframe")
    var idoc2 = ifram2.contentWindow.document;
    //console.log(idoc2);
    var ifram3 = idoc2.querySelector("#frame_content");
    var idoc3 = ifram3.contentWindow.document;
    console.log(idoc3);
    text = idoc3.documentElement.innerHTML;
```
层层剥开，否则在iframe内部的元素会定位失败。在F12界面右键选择“复制js路径”可以获取`querySeletor`语句。

**3.滚动至最低部**
```js
    var ele = document.documentElement;
    if(ele.scrollHeight > ele.clientHeight) {
		//设置滚动条到最底部
		ele.scrollTop = ele.scrollHeight;
    }
```
必要时可以增加`setTimeout`等待网页加载完毕。

**4.逐步滚动**

```javascript
    var count = 0;
    pos = document.documentElement.scrollTop;
    console.log(pos);
    var id = setInterval(
        function (){
            if (count < 500) {
                document.documentElement.scrollTop++;
                count++;
            } else {
                clearInterval(id);
            }
        }
    , 2);
```

## electron-vue



**如何引入.node文件**

需要将.node文件放在public文件夹下，引用时可以用相对路径也可以用`__static`+文件名。

需要安装node-loader@1.0.3。太高的版本会导致问题。

~~~javascript
const addon = require("node-loader!../public/addon.node")
~~~

**在vue中使用ipcRenderer**

主进程中引入ipcMain没啥大问题。
在vue文件中引入ipcRenderer，需要先在vue.config.js中配置 
```js
nodeIntegration: true

  pluginOptions: {
    electronBuilder: {
      // 在vue中能引入electron模块
      nodeIntegration: true,
```
然后在各个vue文件中引入

```js
import { ipcRenderer } from 'electron'
```

一个只跟a, b中最大的那一个有关的积分：

$$
\int_{0}^{\pi}\frac{\sin \theta}{\sqrt{a^2+b^2-2ab\cos\theta}}\mathrm d\theta = \frac{1}{ab}(|a+b| - |a-b|)
$$

