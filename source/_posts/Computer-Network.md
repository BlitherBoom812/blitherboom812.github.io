---
title: Computer Network
date: 2023-09-18 19:18:41
tags: note
katex: true
---

## 参考书籍

A.S Tanebaum (著)，严伟，潘爱民(译) 计算机网络(第五版), 2004，清华大学出版社 

A.S Tanebaum，Nick Feamster, David Wetherall (著)，潘爱民(译)， 计算机网络(第六版), 2022, 清华大学出版社（彩色版，非常精美）


## 杂项

token ring 

计算机网络最核心的技术：分组(packet)。

grid computing

## 计算机网络的历史与进展

网络计算的基本模式
* C/S or B/W
* P2P

服务
* 延迟、带宽、丢失率、可靠性
* 单播/多播， 实时/非实时

链路：光纤、电缆和卫星
* 电子、光子等作为传输介质
* 节点：机械/电/光

协议
* TCP/IP, ATM, MPLS, SONET, Ethernet, PPP, X.25, FrameRelay, AppleTalk, IPX, SNA

功能
* 路由，差错控制、拥塞控制、服务质量(QoS)

应用：FTP、HTTP 


空间距离
* 局域网 (LAN): 以太网、令牌环、FDDI
* 城域网 (MAN): DQDB, SMDS ,以太网
* 广域网 (WAN): X.25, ATM, frame relay, DWDM

信息类型
* 数据网络 vs. 通信网络

应用类型
* 专用网络：飞机订票网，银行网，信用卡网
* 通用网络：Internet

使用权
* 私有：企业网
* 公用：电话网、Internet
协议的所有权
* 私有: SNA (Systems Network Architecture)
* 开放: IP
技术
* 地面 vs. 卫星
* 有线 vs. 无线
协议
* IP, AppleTalk, SNA

计算机网络的形成
* 多终端系统
* 把计算机互联起来
1970年代的计算机网络
* X.25 分组交换网：各国的电信部门建设运行
* 各种专用的网络体系结构：SNA，DECnet
* Internet 的前身ARPANET进行实验运行
1980年代的计算机网络
* 标准化计算机网络体系结构：OSI
* 局域网络 LAN 技术空前发展
* 建成NSFNET，Internet 初具规模

迈特卡尔夫定律(联网定律)

网络价值随用户数平方成正比。未联网设备增加 $N$ 倍，效率增加 $N$ 倍。联网设备增加 $N$ 倍，效率增加 $N^2$ 倍

Internet 标准化组织

* Internet Engineering Task Force（IETF）：IETF负责Internet协议的研发和改进。IETF被分为很多个工作组（working groups），他们提交的文档称为RFC（Request For Comments）。
* IRTF（Internet Research Task Force）：IRTF由一些专注于某个领域长期发展的研究小组组成。
* Internet Architecture Board（IAB）：IAB负责定义Internet的整体框架，为IETF提供大方向上的指导。
* The Internet Engineering Steering Group（IESG）：IESG在技术方面管理IETF的活动，负责Internet标准的制定过程。

所有的标准以RFC的形式发布出来，可以从www.ietf.org免费获得，但不是所有的RFC都是Internet标准。标准形成的一般步骤是：
* Internet Drafts
* RFCs
* Proposed Standard
* Draft Standard（需要两个可以工作的实现）
* Internet Standard（由IAB发布）

David Clark, MIT, 1992: 
*      "We reject: kings, presidents, and voting. 
*       We believe in: rough consensus and running code.”

**Paul Baran 分组交换网络**

与 Donald Watts Davies 在这个思想的发明上有争议。

Baran 的设计细节：

报文发送
* 每个交换节点根据自己的路由表判断如何转发报文
* 每个报文的转发都是独立于其他报文的
* 交换节点不保存端节点的状态
  * 可扩展性好
  * 不是最有效的网络
  * 发送不是完美的
    * 端节点必须能容忍发送错误并从中恢复 
分布式系统
* 所有交换节点是平等的
* 避免了单一节点失效问题
* 部件可以失效，但系统不可以
* 系统的健壮性来自于
  * 足够的物理（硬件）冗余
  * 适应性路由

模拟实验表明：“extremely survivable networks can be built using a moderately low redundancy of connectivity level”—Paul Baran, 1964


比较两种可靠系统的实现思路：

电话系统 
* 笨终端，聪明的网络 
* 确保每个网络部件都是可靠的 
  * 系统可靠性＝部件可靠性 
  * 通过局部冗余实现部件的高可靠性 
  * 期望每个部件都能正常工作，部件失败的可能性很低 
* 需要人工配置的，高度控制的网络 

Baran的系统 
* 建立在简单的、不可靠部件上的可靠系统 
* 自适应的系统 
* 聪明的终端，可以修正传输错误 

Baran 设计思想的一种实现：Internet

* 连接异构的子网
* 提供两种基本功能
  * 全球唯一的地址
  * 报文通过动态路由从源节点发送到目的节点

simple, flexible, scalable, and robust

分组交换的特点：

**简单性**

* 每个报文携带各自的地址信息
* 一个路由表可以为所有的流量服务
* 可以适应爆炸性的增长
  * 越简单越不容易出错 
  * 越简单越容易增长 
  * 对基本网络功能的要求少，可以在其上建立多种类型的网络 

**灵活性**

Everything over IP

IP over Everything

**可扩展性**

可扩展的系统必须能对付
* 端系统的增加
* 流量的增加
* 网络规模的增长
  * 大的路由表
  * 路由频繁的变化

边缘论：End-to-End Argument

路由器只负责传输，复杂的功能（纠错，重传）都由终端自行解决

**健壮性**
* 动态路由具有自适应的特性
  * 动态路由和报文转发相辅相成
  * 周期性路由更新
  * 默认: 现有的部件会失效，会有新的部件加入，认为变化是正常的
* 牺牲一定的带宽的利用率，提高健壮性(报文头开销，更新开销) 
