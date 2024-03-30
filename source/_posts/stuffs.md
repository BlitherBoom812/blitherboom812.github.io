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

层层剥开，否则在iframe内部的元素会定位失败。在F12界面右键选择“复制js路径”可以获取 `querySeletor`语句。

**3.滚动至最低部**

```js
    var ele = document.documentElement;
    if(ele.scrollHeight > ele.clientHeight) {
		//设置滚动条到最底部
		ele.scrollTop = ele.scrollHeight;
    }
```

必要时可以增加 `setTimeout`等待网页加载完毕。

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

需要将.node文件放在public文件夹下，引用时可以用相对路径也可以用 `__static`+文件名。

需要安装node-loader@1.0.3。太高的版本会导致问题。

```javascript
const addon = require("node-loader!../public/addon.node")
```

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

答：为了实现这个功能，你可以使用 `setInterval`函数来设置一个定期执行的任务。然而，因为你想在满足特定条件时改变间隔时间，你可能需要使用 `setTimeout`来代替，因为 `setInterval`的间隔时间一旦设定就无法改变。以下是如何实现这一逻辑的示例代码：

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

这段代码首先定义了一个 `checkContentAndAdjustInterval`函数，它接受三个参数：要搜索的字符串 `searchString`、初始的检查间隔时间 `initialDelay`（以毫秒为单位）、以及在找到字符串后新的检查间隔时间 `newDelay`。

在 `checkContentAndAdjustInterval`函数内部，定义了另一个名为 `checkAndSchedule`的函数。`checkAndSchedule`函数首先检查当前页面的内容是否包含指定的字符串。如果包含，它将使用 `console.log`输出一个消息，并使用新的延迟时间 `newDelay`来安排下一次执行。如果不包含指定的字符串，它将继续使用初始的延迟时间 `initialDelay`来安排下一次执行。

最后，`checkContentAndAdjustInterval`函数通过调用 `setTimeout`并传入 `checkAndSchedule`函数和初始延迟时间 `initialDelay`来启动整个检查流程。

这种方法的好处是你可以灵活地控制检查的间隔时间，而且它在满足特定条件后能够自动调整这个间隔，非常适合需要根据条件动态调整检查频率的场景。

## NFS 常用指令

主要参考：[如何在 Ubuntu 20.04 上安装和配置 NFS 服务器？ - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/480960387)

### 服务端绑定 NFS

直接绑定：

```text
sudo mount --bind /opt/backups /srv/nfs4/backups
sudo mount --bind /var/www /srv/nfs4/www
```

要在重新启动后使绑定挂载永久化，请打开/etc/fstab文件：

```text
sudo nano /etc/fstab
```

并添加以下行：

```text
/etc/fstab
/opt/backups /srv/nfs4/backups  none   bind   0   0
/var/www     /srv/nfs4/www      none   bind   0   0
```

`/var/www `为本地需要绑定的文件夹，`/srv/nfs4/www `为 NFS 管理的文件夹，必须以 `/srv/nfs4`开头。

绑定后，服务端可以修改 `/var/www `内的文件，会被自动同步到 NFS 绑定的目录下。

### 客户端绑定 NFS

为挂载点创建两个新目录：

```text
sudo mkdir -p /backups
sudo mkdir -p /srv/www
```

您可以在任何您想要的位置创建目录。

使用以下命令挂载导出的文件系统mount ：

```text
sudo mount -t nfs -o vers=4 192.168.33.10:/backups /backups
sudo mount -t nfs -o vers=4 192.168.33.10:/www /srv/www
```

要在重新启动时永久挂载，请打开/etc/fstab文件并添加以下行：

```text
sudo nano /etc/fstab

/etc/fstab
192.168.33.10:/backups /backups   nfs   defaults,timeo=900,retrans=5,_netdev 0 0
192.168.33.10:/www /srv/www       nfs   defaults,timeo=900,retrans=5,_netdev 0 0
```

有关挂载 NFS 文件系统时可用选项的信息，请输入man nfs您的终端。

### IP 检测

编辑配置文件

```
sudo nano /etc/exports
```

配置文件例子：

```
/srv/nfs4         192.168.33.0/24(rw,sync,no_subtree_check,crossmnt,fsid=0)
/srv/nfs4/backups 192.168.33.0/24(ro,sync,no_subtree_check) 192.168.33.3(rw,sync,no_subtree_check)
/srv/nfs4/www     192.168.33.20(rw,sync,no_subtree_check)
```

其中，192.168.33.0/24 等为需要过滤的 ip 规则。

应用 ip 设置

```
sudo exportfs -ar
```

查看 ip 检测

```
sudo exportfs -v
```

### 重启 NFS

```
sudo /etc/init.d/nfs-kernel-server restart
```

## WSL 相关

### WSL 寄了！

可能是因为配置 nfs 的原因吧，wsl 关掉之后就打不开了。

* wsl 无响应。
* 当 ubuntu 处于停止状态时，wsl --list, wsl --status 有响应；但我一旦尝试运行 `wsl` 以启动 ubuntu，就无响应了。
* wsl --help 一直没问题。

怀疑是配置 /etc/fstab 的时候出的问题，导致 wsl 无响应。

后来的解决方案：

1. 把 ext4.vhdx 备份了一份。
2. 卸载 ubuntu distro，重新安装了一遍 ubuntu 22.04。
3. wsl --mount --vhd 将 ext4.vhdx 挂到新安装的 ubuntu wsl 上。

幸好 ext4.vhdx 还在。

另外，挂完 ext4.vhdx 后，我将存有 ext4.vhdx 的移动硬盘拔出，然后重新打开 wsl，发现出现了同样的问题。这样就验证了我的假说：

* 我设置了开机默认挂载 nfs 硬盘，连接远程的服务器。
* nfs 服务器因为一些原因没连上。
* wsl 文件系统因为挂载的硬盘找不到了，发生错误。
* wsl 在启动界面无响应。

重启了电脑，发现之前 wsl --mount 挂载的 ext4.vhdx 已经被清空了，证明 wsl --mount 命令的效果在重启之后清空了。

### yarn add hasura-cli 安装失败

报错：

```
Command: node dist/index.js
Arguments: 
Directory: /home/guoyun812/eesast/hasura/node_modules/hasura-cli
Output:
hasura-cli@2.36.1
Downloading Hasura CLI binary v2.36.1 from https://github.com/hasura/graphql-engine/releases/download/v2.36.1/cli-hasura-linux-amd64


hasura-cli@2.36.1
Error! Failed to install Hasura CLI binary.
Try npm uninstall hasura-cli or yarn remove hasura-cli and then reinstall it.
If the issue occurs repeatedly, check if your network can access https://github.com as the the Hasura CLI binary file is hosted on Github.
You can report the issue on https://github.com/jjangga0214/hasura-cli/issues with error message.
```

解决方案：手动下载 hasura-cli 的二进制文件，并粘贴到 `node_modules/hasura/`。

## SSH 相关

### ssh 服务器

使用 `ssh-keygen` 时最好设置一个口令，否则别人也能用这个密钥。

### 常用命令

ssh 反向代理（服务器端口映射到本地端口），挂在后台

```
ssh -CqTfnN -R <remote_port>:localhost:<local_port>  -v  username@hostname -p <ssh_port>
```

ssh 前向代理（本地端口映射到服务器端口）

```
ssh -CqTfnN -L <local_port>:localhost:<remote_port>  -v  username@hostname -p <ssh_port>
```

将请求转发到 github

```
ssh -CqTfnN -L <local_port>:github.com:22 -v  username@hostname -p <ssh_port>
```

### ssh agent

启动 ssh agent，并查看 pid

```
eval $(ssh-agent -s)
```

查看当前 agent 有哪些密钥

```
ssh-add -l # 查看公钥的 sha256
ssh-add -L # 查看完整公钥
```

添加密钥

```
ssh-add <private_key_path>
```

## Node.js

### listen EACCES: permission denied 0.0.0.0:3000

1、先判断是否是端口占用的问题导致的 `netstat -ano| findstr 3000`

关闭相关进程（cmd）

```
taskkill /PID <process_id> /F
```

发现并没有程序在使用这个端口

2、改用管理员再运行一遍

发现仍然不行

3、使用管理员权限运行以下命令

`net stop winnat`

`net start winnat`

## Pytorch

### 记录神经元的激活值

```python
from torch import nn
import torch

class TestForHook(nn.Module):
    def __init__(self):
        super().__init__()

        self.linear_1 = nn.Linear(in_features=2, out_features=2)
        self.linear_2 = nn.Linear(in_features=2, out_features=1)
        self.relu = nn.ReLU()
        self.relu6 = nn.ReLU6()

    def forward(self, x):
        linear_1 = self.linear_1(x)
        linear_2 = self.linear_2(linear_1)
        relu = self.relu(linear_2)
        relu6 = self.relu6(relu)
        layers_in = (x, linear_1, linear_2)
        layers_out = (linear_1, linear_2, relu)
        return relu6

features_in_hook = []
features_out_hook = []

def hook(module, fea_in, fea_out):
    print(f"hook! module: {module}, in: {fea_in}, out: {fea_out}")
    features_in_hook.append(fea_in)
    features_out_hook.append(fea_out)
    return None

net = TestForHook()

"""
# 第一种写法，按照类型勾，但如果有重复类型的layer比较复杂
net_chilren = net.children()
for child in net_chilren:
    if not isinstance(child, nn.ReLU6):
        child.register_forward_hook(hook=hook)
"""

"""
推荐下面我改的这种写法，因为我自己的网络中，在Sequential中有很多层，
这种方式可以直接先print(net)一下，找出自己所需要那个layer的名称，按名称勾出来
"""

print(net)

layer_name = 'linear_1'
for (name, module) in net.named_modules():
    if name == layer_name:
        module.register_forward_hook(hook=hook)

print(features_in_hook)  # 勾的是指定层的输入
print(features_out_hook)  # 勾的是指定层的输出

rand_x = torch.rand(1, 2)
print(f"input x: {rand_x}")
result = net(rand_x)
print(f"result: {result}")
print(f"features in: {features_in_hook}")
print(f"features out: {features_out_hook}")
```
