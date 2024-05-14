---
title: Introduction to Artificial Intelligence
katex: true
date: 2024-02-26 15:20:37
tags:
---
## Learning

### Linear Classification

#### Logistic Regression

Useful for classification problems.

Cross-Entropy Loss

$$
\ell(h(\boldsymbol{x}_{i}),y_{i})=\begin{cases}-\log[\sigma(\boldsymbol{w}^{T}\boldsymbol{x}_{i})]&\quad y_{i}=1\\-\log[1-\sigma(\boldsymbol{w}^{T}\boldsymbol{x}_{i})]&\quad y_{i}=0\end{cases}
$$

With regularization:

$$
\hat{\epsilon}(w)=-\sum_{i=1}^n\{y_i\log\sigma(h_w(x))+(1-y_i)\log[1-\sigma(h_w(x))]+\lambda\sum_{j=1}^dw_j^2
$$

How to deal with multiclass problems?

#### Softmax Regression

Normalizes multiple outputs in a probability vector.

$$
p(y=i|x)=\frac{\exp(w_i^Tx)}{\sum_{r=1}^C\exp(w_r^Tx)}
$$

Cross-Entropy Loss

$$
\ell(h(x_i),y_i)=\begin{cases}-\log\left[\frac{\exp(\boldsymbol{w}_1^T\boldsymbol{x})}{\sum_{r=1}^C\exp(\boldsymbol{w}_r^T\boldsymbol{x})}\right]&y_i=1\\-\log\left[\frac{\exp(\boldsymbol{w}_2^T\boldsymbol{x})}{\sum_{r=1}^C\exp(\boldsymbol{w}_r^T\boldsymbol{x})}\right]&y_i=2\\\vdots\\-\log\left[\frac{\exp(\boldsymbol{w}_c^T\boldsymbol{x})}{\sum_{r=1}^C\exp(\boldsymbol{w}_r^T\boldsymbol{x})}\right]&y_i=C\end{cases}
$$

This loss is convex. But there are many solutions that result in same outputs, so the regularizaton is indispensible to prevent divergence.

![1713166706648](../images/AI/1713166706648.png)

### Support Vector Machine (SVM)

#### Soft-SVM (Hinge Loss)

$$
\min_{w,b,\xi}\frac{1}{2}\|w\|_{2}^{2}+\frac{C}{n}\sum_{i=1}^{n}\xi_{i}\\\mathrm{s.t.~}y_i(\boldsymbol{w}\cdot\boldsymbol{x}_i+b)\geq1-\xi_i\\\xi_i\geq0,1\leq i\leq n
$$

Define Hinge Loss

$$
\ell(f(x),y)=\max\{0,1-yf(x)\}
$$

For the linear hypothesis:

$$
\ell(f(x),y)=\max\{0,1-y(w\cdot x+b)\}
$$

Theorem: Soft-SVM is equivalent to a Regularized Rise Minimization:

$$
\min_{w,b}\frac12\|w\|_2^2+\frac Cn\sum_{i=1}^n\max\{0,1-y_i(w\cdot x_i+b)\}
$$

这意味着SVM的“最大化”边界距离项本质上是一个正则化项。

### Kernel Soft-SVM

Basis function $\Phi(x)$ can often replaced by kernal function $k(x_1, x_2)$.

Polynomial Kernel: efficient computation: $O(d)$

![1713169419702](../images/AI/1713169419702.png)

Construct new kernel function from exist kernel functions:

$$
k^{\prime}(x_{1},x_{2})=k_{1}\otimes k_{2}(x_{1},x_{2})=k_{1}
(x_{1},x_{2})k_{2}(x_{1},x_{2})
$$

For any function $g: \mathcal X \rightarrow \R$

$$
k^\prime(x_1,x_2)=g(x_1)k_1(x_1,x_2)g(x_2)
$$

Apply Representer theorem:

$$
\min_\alpha\frac12\alpha^TK\alpha+\frac Cn\sum_{i=1}^n\max\left\{0,1-y_i\sum_{j=1}^n\alpha_jk(x_i,x_j)\right\}
$$

- $\alpha_j$ is the weight of each reference point $\color{red}{x_j}$ to the prediction of $\color{red}{x_i}$.
- lt is actually a Primal Form with kernel functions.

### Decision Tree

Criterion:

* More balance
* More pure

Misclassification error (not used very frequently):

$$
\mathrm{Err}(\mathcal{D})=1-\max_{1\leq k\leq K}\left(\frac{|\mathcal{C}_k|}{|\mathcal{D}|}\right)
$$

Use Entropy to measure purity:

$$
H(\mathcal{D})=-\sum_{k=1}^K\frac{|\mathcal{C}_k|}{|\mathcal{D}|}\mathrm{log}\frac{|\mathcal{C}_k|}{|\mathcal{D}|}
$$

Gini Index:

$$
\mathrm{Gini}(\mathcal{D})=1-\sum_{k=1}^K\left(\frac{|\mathcal{C}_k|}{|\mathcal{D}|}\right)^2
$$

#### ID3 Algorithm

![1713171808270](../images/AI/1713171808270.png)

### Multiplayer Perceptrons (MLP)

#### MLP for XOR

![1713771652191](../images/AI/1713771652191.png)

#### Activation

![1713772489046](../images/AI/1713772489046.png)

#### Loss Functions

Entropy

$$
H(q)=-\sum_{j=1}^kq_j\log q_j
$$

Relative-entropy

$$
\mathrm{KL}(q||p)=-\sum_{j=1}^kq_j\log p_j-H(q)
$$

Cross-entropy

$$
H(q,p)=-\sum_{j=1}^kq_j\log p_j
$$

Relationship:

$$
\boxed{H(q,p)=\mathrm{KL}(q||p)+H(q)}
$$

Softmax in the output layer

$$
\widehat{\boldsymbol{y}}=\boldsymbol{a}^{(n_l)}=f_\theta\big(\boldsymbol{x}^{(i)}\big)=\begin{bmatrix}p\big(\boldsymbol{y}^{(i)}=1\big|\boldsymbol{x}^{(i)};\boldsymbol{\theta}\big)\\p\big(\boldsymbol{y}^{(i)}=2\big|\boldsymbol{x}^{(i)};\boldsymbol{\theta}\big)\\\vdots\\p\big(\boldsymbol{y}^{(i)}=k\big|\boldsymbol{x}^{(i)};\boldsymbol{\theta}\big)\end{bmatrix}=\frac{1}{\sum_{j=1}^{k}\exp(z_{j}^{(n_{l})})}\begin{bmatrix}\exp(z_{1}^{(n_{l})})\\\exp(z_{2}^{(n_{l})})\\\vdots\\\exp(z_{k}^{(n_{l})})\end{bmatrix}
$$

Cross-entropy loss:

$$
J(y,\widehat{y})=-\sum_{j=1}^ky_j\log\widehat{y}_j
$$

Cost function:

$$
\min J(\theta)=-\frac1m\sum_{i=1}^m\left[\sum_{j=1}^k\mathbf{1}\{y^{(i)}=j\}\mathrm{log}\frac{\exp(\mathbf{z}_j^{(n_\iota)})}{\sum_{j^{\prime}=1}^k\exp(\mathbf{z}_{j^{\prime}}^{(n_\iota)})}\right]
$$

#### Gradient-Based Training

$$
\arg\min_\theta O(\mathcal{D};\theta)=\sum_{i=1}^mL\left(y_i,f(x_i);\theta\right)+\Omega(\theta)
$$

Forward Propagation: to compute activations & objective $J(\theta)$

Backward Propagation: Update paramters in all layers

##### Learning Rate decay

Exponential decay strategy:

$$
\eta = \eta_0e^{kt}
$$

1/t decay strategy:

$$
\eta = \eta_0/(1+kt)
$$

##### Weight Decay

L2 regularization:

$$
\Omega(\theta)=\frac\lambda2\sum_{l=1}^{n_l-1}\sum_{i=1}^{s_l}\sum_{j=1}^{s_{l+1}}(\theta_{ji}^{(l)})^2\\\frac\partial{\partial\theta^{(l)}}\Omega(\theta)=\lambda\theta^{(l)}
$$

L1:

$$
\Omega(\theta)=\lambda\sum_{l=1}^{n_{l}-1}\sum_{i=1}^{s_{l}}\sum_{j=1}^{s_{l+1}}|\theta_{ji}^{(l)}|\\\frac{\partial}{\partial\theta^{(l)}}\Omega(\theta)_{ji}=\lambda(1_{\theta_{ji}^{(l)}>0}-1_{\theta_{ji}^{(l)}<0})
$$

一般不调。

##### Weight Initialization

Xavier initialization

(Linear activations)

$$
\mathrm{Var}(w)=1/n_{\mathrm{in}}
$$

避免梯度爆炸或者消失；

He initialization

(ReLU activations)

$$
\mathrm{Var}(w)=2/n_{\mathrm{in}}
$$

因为 ReLU 删除了一半的信息。

![1713775669844](../images/AI/1713775669844.png)

### Convolutional Neural Network (CNN)

![1713776156049](../images/AI/1713776156049.png)

![1713776168789](../images/AI/1713776168789.png)

![1714379943169](../images/AI/1714379943169.png)

#### Convoluion Kernel

![1714380111476](../images/AI/1714380111476.png)

Stride

![1714380132725](../images/AI/1714380132725.png)

Padding

![1714380159356](../images/AI/1714380159356.png)

![1714380233071](../images/AI/1714380233071.png)

#### Pooling

![1714380343254](../images/AI/1714380343254.png)

Batch Normalization

![1714379335929](../images/AI/1714379335929.png)

在 N 张图像的对应通道做归一化。

可以增强训练的稳定性，使得学习率可以设大一点而仍然保证收敛。


* 数据集成
* 参数集成
* 模型集成

#### ResNet

![1714380578105](../images/AI/1714380578105.png)

![1714380763838](../images/AI/1714380763838.png)

最后一层 Global Average Pooling：7\*7\*2048 -> 1\* 1 \* 2048

### Recurrent Neural Network (RNN)

#### Idea for Sequence Modeling

Local Dependency

![1714982108981](../images/AI/1714982108981.png)

Parameter Sharing

![1714982133935](../images/AI/1714982133935.png)

### RNN

![1714982188331](../images/AI/1714982188331.png)

Go deeper

![1714982215920](../images/AI/1714982215920.png)

#### Standard Architectures

![1714982075164](../images/AI/1714982075164.png)

- RNNs can represent unbounded temporal dependencies
- RNNs encode histories of words into a fixed size hidden vector 
- Parameter size does not grow with the length of dependencies
- RNNs are hard to learn long range dependencies present in data

#### LSTM

Multihead, shared bottom.

![1714982405665](../images/AI/1714982405665.png)

Gradient flow highway: remember history very well.

NIPS 2015 Highway Network.

#### Training Strategies

Shift in Training & Inference

![1714983390325](../images/AI/1714983390325.png)

Use Scheduled Sampling to solve this

![1714983452419](../images/AI/1714983452419.png)

Problem: Gradient Explosion during continuously multiplication.

Solution: Gradient Clipping

![1714983641507](../images/AI/1714983641507.png)

Variational Dropout

![1714983788461](../images/AI/1714983788461.png)

Layer Normalization

![1714983988587](../images/AI/1714983988587.png)

BN: Easy to compare between channels

LN: Easy to compare between samples

在图像任务上，我们一般认为 channel 之间的地位应该是相同的，因此常常采用 BN。

### Transformer

use attention to replace state space.

![1714984460020](../images/AI/1714984460020.png)

#### Attention

![1714984778231](../images/AI/1714984778231.png)

$$
\text{Attention}(Q,K,V)=\text{Softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right)V
$$

Multi-Head Attention

![1714985419724](../images/AI/1714985419724.png)

Sparse?

$W^o$ to maintain shape and jointly attend to information from different representation subspaces.

#### FFN

Position-wise FFN (Similar to multi convolution kernels in CNN, shared parameters in every word.)

![1714985971187](../images/AI/1714985971187.png)

#### Positional Encoding

![1714986050538](../images/AI/1714986050538.png)

## Reasoning

Reasoning (Probabilistic) = Modeling + Inference

Modeling:
* Bayesian Networks
* Markov random fields

Inference:
* Elimination methods (变量消除法)
* Latent variable models (因变量模型)
* Variational methods (变分方法)
* Sampling methods (采样方法) - 难学！

### Bayesian Network

$$
p(x_1,...,x_K)=p(x_K|x_1,...,x_{K-1})\cdots p(x_2|x_1)p(x_1)
$$

