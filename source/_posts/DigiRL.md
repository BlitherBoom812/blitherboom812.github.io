---
title: DigiRL
katex: true
date: 2024-07-17 23:53:27
tags: 
  - paper
  - Mobile
  - RL
  - LLM
---
## DigiRL: Training In-The-Wild Device-Control Agents with Autonomous Reinforcement Learning

LLM(VLM) +RL 的完美之作！在 Pretraining 的基础上进行 Offline RL，然后在执行任务时通过 Online RL 更新参数，特色是能够从多轮交互中学习、更新参数，而不是通过专家知识微调一个单步交互模型。实验也做得非常详细。不过 RL 的部分我还看不太懂，需要继续学习。

![1721230554686](../images/Mobile-LLM/1721230554686.png)

Action Space 定义为点击、滑动、输入、home 键、返回等操作，参数包含屏幕上的归一化 (x, y) 坐标。另外引入的一个设定是界面的随机性，界面可能有随时更新、加载中、小广告、身份识别等干扰出现。

![1721231007829](../images/Mobile-LLM/1721231007829.png)

## RL 算法部分

首先本文将手机操作问题建模为一个 MDP 过程。

然后采用了 AWR 算法，计算策略梯度。似乎用到了蒙特卡洛？

Instruction-Level Value Function 有什么作用？这里似乎是说 task set 的难度方差太大，需要用难度适中的数据去训练 actor model，所以提出了则个 Value Function 来过滤一部分数据。

![1721232302611](../images/DigiRL/1721232302611.png)

首先，定义 Advantage 为一个状态的 Q 值（按照当前策略，未来所有步的期望值）减去 Value function：

$$
A^\pi(s_h,a_h,c)=Q^\pi(s_h,a_h,c)-V^\pi(s_h,c).
$$

AWR 算法的 Actor 优化目标是一个加权的 MLE：

$$
\arg\max_\pi\mathbb{E}_\nu\left[\log\pi(a|s,c)\cdot\exp\left(A(s,a,c)/\beta\right)\right]
$$

在论文中没有用这个公式，而是用 hard filtering 替代：

$$
\mathcal{L}(\pi)=-\mathbb{E}_{\mathrm{filter}(\nu)}[\log\pi(a|s,c)].
$$

Step Advantage 的估计采用的是 GAE (Generalized Advantage Estimation) 的简化版：

$$
A^{\mathrm{step}}(s_h,a_h,c):=\lambda^{H-h}r(s_H,a_H,c)+(1-\lambda^{H-h}r(s_H,a_H,c))(V^{\mathrm{step}}(s_{h+1},c)+r(s_h,a_h,c)-V^{\mathrm{step}}(s_h,c))
$$

之所以可以这么做，是因为任务的奖励只有在最后一步有，成功了是1，失败了是0，第一项是高方差的 MC，第二项是高偏差的估计器。随着 h 增加，第一项的权重越来越大，第二项权重则越来越小。这两项综合起来有利于均衡方差与偏差。

此外，我们还要定义 Instruct Advantage，用来评估一条 traj 的学习价值：

![1721316686785](../images/DigiRL/1721316686785.png)

个人理解，traj 的学习价值取决于 traj 奖励值和指令平均奖励的差。

traj 的奖励值就是当前这条路径拿到的奖励总和。

“指令平均奖励”就是当前指令下获得奖励的期望值，取决于任务的难易程度，因为它是对该任务所有 traj 的平均，任务越难，奖励更难拿到，指令平均奖励越低。

那么，traj 的奖励值越高，traj 的学习价值就越高，直觉上即成功的任务（奖励为1）有学习价值，但是失败的任务（奖励为0）不值得学习；

指令平均奖励越高，traj 的学习价值越低，这是因为指令平均奖励高，意味着这个任务很简单，不值得学习。

关于估计器的训练，采用的是交叉熵损失而不是传统的 MSE 损失，这是因为交叉熵损失通常在 transformer 架构上更好用：

![1721316668685](../images/DigiRL/1721316668685.png)

而且巧妙的点在于这个任务的奖励只有 1 或 0，因此估计器其实可以看作一个二分类，交叉熵就只有两项。

最终的 pipeline：

* 训练 Step-level 和 Instruct-level 的估计器 V；
* 用估计器 V 计算学习价值 A，通过学习价值过滤掉一部分无效 traj 和 step；
  * 具体而言，Instruct-level 选取 top-p 条 traj；
  * Step-level 选取阈值大于 1/H 的 step.
* 在过滤后的 traj 上采用 MLE 准则训练模型。

## 模型架构

在 AutoUI-Base 的基础上进行训练，固定 image encoder 不动。

### Instruction and Step Level Value Functions

输入：采用 image encoder 与 RoBERTa 分别对界面截图和指令进行 embedding，拼接起来。

用 2 层的 MLP 来预测 Value function。

### Actor

在离线学习阶段，通过运行原始的 AutoUI-Base 来采集 traj。在 offline 阶段，跳过了 instruction-level filtering，用所有的 instruction 来训练，用以充分地利用数据。

Decoder 具体要输出什么？是文本吗？那数值是怎么处理的？大模型能很好地理解数值吗？（9.11 > 9.8？？）

## 评测部分

评测采用的是 Gemini-1.5-pro，据论文报告结果和人类的评估接近。评测标准是通过一个端到端的观察，判断是否完成了任务。

## 消融实验和分析
