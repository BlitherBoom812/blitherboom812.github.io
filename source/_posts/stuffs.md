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

```js
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