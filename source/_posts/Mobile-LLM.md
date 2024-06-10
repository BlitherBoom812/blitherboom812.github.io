---
title: Mobile-LLM 论文阅读
katex: false
date: 2024-06-09 20:42:26
tags: research
---
## 综述

Personal LLM Agents: Insights and Survey about the Capability, Efficiency and Security

## 数据集

谷歌：Android in the Wild: A Large-Scale Dataset for Android Device Control

输入为 image 和 text instruction。包含 30 K 的数据，Google Apps 的占比最大。

![1717937154526](../images/Mobile-LLM/1717937154526.png)

World of Bits (WoB): Use only keyboard & mouse，输入为彩色图像，DOM 文档，请求。支持通过众包构造新的数据。

OpenAI Universe: Game, Web tasks，输入数据只有图像，操作键盘和鼠标。

AndroidEnv: A Reinforcement Learning Platform for Android: 在 android emulator 上运行的虚拟环境。

## 模型

### RL-based method

中间步骤奖励非常重要。稀疏奖励下从0训练容易停滞不前，需要先行为克隆提升一定的性能，再执行 RL 算法。

泛化性差，不像 LLM 具有大量先验知识。

App-Buddy:  PPO based method, Interact with DOM.

![1717937734857](../images/Mobile-LLM/1717937734857.png)

REINFORCEMENT LEARNING ON WEB INTERFACES USING WORKFLOW-GUIDED EXPLORATION： 稀疏奖励下从0训练容易停滞不前，需要先行为克隆提升一定的性能，再执行 RL 算法。但是 BC 方法容易过拟合，因此通过从示例中导出 workflow policy，再从 workflow policy 中采样新的 policy 的方法来获取新的 trace。

![1717940196994](../images/Mobile-LLM/1717940196994.png)

### LLM Agents

#### Prompt Engineering

 Responsible Task Automation: Empowering Large Language Models as Responsible Task Automators

DroidBot-GPT: GPT-powered UI Automation for Android

![1717939486804](../images/Mobile-LLM/1717939486804.png)

AppAgent: Multimodal Agents as Smartphone Users：利用 GPT4-V 进行探索+部署，支持 learn from demonstration。

#### Multimodal

Auto GUI: You Only Look at Screens: Multimodal Chain-of-Action Agents

![1717937675502](../images/Mobile-LLM/1717937675502.png)

### Code-based Methods

## Topics

长序列的任务执行

多模态 GUI Agent

隐私保护

用户偏好/个性化的 Agent

Proactive Agent

Show me how to do/高效的策略更新方法

RL training in sparse reward

LLM as Reward Model

Action & Workflow embedding
