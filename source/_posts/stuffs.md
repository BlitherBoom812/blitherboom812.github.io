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

## math

一个只跟a, b中最大的那一个有关的积分：

$$
\int_{0}^{\pi}\frac{\sin \theta}{\sqrt{a^2+b^2-2ab\cos\theta}}\mathrm d\theta = \frac{1}{ab}(|a+b| - |a-b|)
$$

## js 小技巧

### 可变定时检测

问：每隔10秒检测一次当前页面是否包含某字符串，如果包含，则 console.log，下次检测的时间变为 100 秒

答：为了实现这个功能，你可以使用`setInterval`函数来设置一个定期执行的任务。然而，因为你想在满足特定条件时改变间隔时间，你可能需要使用`setTimeout`来代替，因为`setInterval`的间隔时间一旦设定就无法改变。以下是如何实现这一逻辑的示例代码：

```javascript
function checkContentAndAdjustInterval(searchString, initialDelay, newDelay) {
  // 定义一个函数，用于检查页面内容并根据条件调整定时器
  function checkAndSchedule() {
    // 检查文档中是否包含特定字符串
    if (document.body.textContent.includes(searchString)) {
      console.log(`页面包含指定字符串: ${searchString}`);
      // 如果找到字符串，设置下一次检查的延时为 newDelay
      setTimeout(checkAndSchedule, newDelay);
    } else {
      // 如果没有找到字符串，保持原来的检查频率
      setTimeout(checkAndSchedule, initialDelay);
    }
  }

  // 启动循环检查
  setTimeout(checkAndSchedule, initialDelay);
}

// 使用示例：每隔10秒检查一次页面是否包含"特定字符串"，
// 如果找到，则下次检查的时间间隔变为100秒
checkContentAndAdjustInterval("特定字符串", 10000, 100000);
```

这段代码首先定义了一个`checkContentAndAdjustInterval`函数，它接受三个参数：要搜索的字符串`searchString`、初始的检查间隔时间`initialDelay`（以毫秒为单位）、以及在找到字符串后新的检查间隔时间`newDelay`。

在`checkContentAndAdjustInterval`函数内部，定义了另一个名为`checkAndSchedule`的函数。`checkAndSchedule`函数首先检查当前页面的内容是否包含指定的字符串。如果包含，它将使用`console.log`输出一个消息，并使用新的延迟时间`newDelay`来安排下一次执行。如果不包含指定的字符串，它将继续使用初始的延迟时间`initialDelay`来安排下一次执行。

最后，`checkContentAndAdjustInterval`函数通过调用`setTimeout`并传入`checkAndSchedule`函数和初始延迟时间`initialDelay`来启动整个检查流程。

这种方法的好处是你可以灵活地控制检查的间隔时间，而且它在满足特定条件后能够自动调整这个间隔，非常适合需要根据条件动态调整检查频率的场景。