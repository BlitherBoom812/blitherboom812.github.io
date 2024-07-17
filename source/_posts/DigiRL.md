---
title: DigiRL
katex: true
date: 2024-07-17 23:53:27
tags: paper, Mobile, RL+LLM
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

## 评测部分

评测采用的是 Gemini-1.5-pro，据论文报告结果和人类的评估接近。评测标准是通过一个端到端的观察，判断是否完成了任务。
