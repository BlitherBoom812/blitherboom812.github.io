---
title: 扩散模型（二）DDIM 学习
katex: true
date: 2025-08-10 20:10:31
tags:
---

还记得我们在 DDPM 学习的最后讨论了“采样时为什么需要加入高斯噪声”，当时我们提到这是由 DDPM 扩散过程的定义决定的，如果不加则相当于令噪声项的方差等于 0，在这种情况下所有的公式都要重写。那么，要是令噪声的方差为 0 到底能不能行呢？凑巧的是，DDIM 就是这么做的。它重新定义了 DDPM 的扩散过程（不是一步一步加噪声，而是直接给原图像加不同级别的噪声），从而使得噪声项的方差变成了一个可调的参数！实验发现让这个可调的方差等于 0 的时候效果反而是最好的，速度也比 DDPM 更快。并且，当方差等于 0 的时候，图像扩散过程实际上可以表示为一个常微分方程，其中扩散模型预测的是噪声图像向原始图像移动的“速度”矢量，图像就是在这个速度的牵引下从一个噪声变成了有意义的图像。

本文主要参考自苏剑林老师的博客：[生成扩散模型漫谈（四）：DDIM = 高观点DDPM](https://spaces.ac.cn/archives/9181)。

## 背景设置

DDPM 里面对于扩散过程的约束，是给定 $x_{t-1}$ 输出 $x_t$，即 $x_t$ 与 $x_{t-1}$ 的关系 $p(x_t|x_{t-1})$：

$$
x_t = \alpha_tx_{t-1} + \beta_t\varepsilon, \varepsilon \sim \mathcal N(0, I)\\
\alpha_t^2 + \beta_t^2 = 1
$$

然而，在 DDPM 的训练过程中，我们并没有用到这个公式一步步生成加噪图像。我们直接给原图 $x_0$ 混合一个高斯噪声一步到位得到 $x_t$，这样速度更快。这是等价的，上述方程不断迭代就得到了 $x_t$ 与 $x_0$ 的关系 $p(x_t|x_0)$：

$$
x_t = \bar\alpha_tx_{0} + \bar\beta_t\varepsilon, \varepsilon \sim \mathcal N(0, I)\\
\bar\alpha_t^2 + \bar\beta_t^2 = 1\\
\bar\alpha_t = \alpha_t\alpha_{t-1}\dots\alpha_0
$$

推理过程，我们想从 $x_t$ 还原出上一步 $x_{t-1}$，但是 $p(x_{t-1}|x_{t})$ 求不出来，用 $p(x_{t-1}|x_t,x_0)$ 估计它：

$$
p(x_{t-1}|x_{t}) \approx p(x_{t-1}|x_t,x_0)
$$

训练过程，模型学习的是直接从 $x_t$ 预测 $x_0$（或者其噪声），跟扩散过程的定义 $p(x_t|x_{t-1})$ 没有任何关系！然而推理过程却需要一步步反推扩散过程得到结果，凭什么训练和推理过程不一致呢？

对于这个问题，DDIM 可能会给我们一些启发。它做了一件疯狂的事情：推理可以扔掉扩散过程，让训练和推理过程更一致，不仅速度快，而且效果更好。

现在，最基本的关系不再是 $x_t$ 与 $x_{t-1}$ 的关系，而是 $x_{t}$ 与 $x_{0}$ 的关系。为此，我们要把 $\bar\alpha_t$ 和 $\bar\beta_t$ 作为最基本的参数，而 $\alpha_t$ 和 $\beta_t$ 不再重要：

$$
x_t = \bar\alpha_tx_{0} + \bar\beta_t\varepsilon, \varepsilon \sim \mathcal N(0, I)\\
\bar\alpha_t^2 + \bar\beta_t^2 = 1\\
\alpha_t = \frac{\bar\alpha_t}{\bar\alpha_{t-1}}, \beta_t = \sqrt{1 - \alpha_t^2}
$$

$x_1, x_2, \dots, x_t$ 不再是一条马尔科夫链，而是相互独立的加噪过程，随着 $t$ 的增大，噪声的强度越来越大。

## 推理过程

DDIM 并不改变训练过程，它只是加速了推理过程。推理过程中，我们仍然需要从 $x_t$ 还原出“上一步” $x_{t-1}$，即计算 $p(x_{t-1}|x_t)$，根据贝叶斯公式：

$$
p(x_{t-1}|x_t) = \frac{p(x_t|x_{t-1})p(x_{t-1})}{p(x_t)}
$$

和 DDPM 一样，上面这个 $p(x_{t-1}|x_{t})$ 求不出来，改成用 $p(x_{t-1}|x_t,x_0)$ 估计它：

$$
p(x_{t-1}|x_{t}) \approx p(x_{t-1}|x_t,x_0) = \frac{p(x_t|x_{t-1})p(x_{t-1}|x_0)}{p(x_t|x_0)}
$$

但是，DDPM 里面我们是知道 $p(x_t|x_{t-1})$ 就是扩散过程，表达式是已知的，现在我们把它扔掉，左边这个概率就算不出来了吧？

实则不然，把 $p(x_t|x_{t-1})$ 扔掉之后，我们反而更加自由了，直接设

$$
p(x_{t-1}|x_t,x_0) = \mathcal N(x_{t-1};\kappa_tx_t + \lambda_tx_0, \sigma^2_tI)
$$

是否感觉非常奇怪？DDPM 里面，这三个待定系数 $\kappa, \lambda, \sigma$ 是可以用贝叶斯公式全部求出来的。然而因为扔掉了 $p(x_t|x_{t-1})$ 的表达式，实际上会多出来一个可变参数。让我们看看：

$$
\begin{align*}
x_{t-1} &= \kappa_tx_t + \lambda_tx_0 + \sigma_t\varepsilon_0 \\
&= \kappa_t(\bar\alpha_tx_{0} + \bar\beta_t\varepsilon_1) + \lambda_tx_0 + \sigma_t\varepsilon \\
&= (\kappa_t\bar\alpha_t + \lambda_t)x_{0} + \kappa_t\bar\beta_t\varepsilon_1 + \sigma_t\varepsilon_0\\
&= (\kappa_t\bar\alpha_t + \lambda_t)x_{0} + \sqrt{\kappa_t^2\bar\beta_t^2 + \sigma_t^2}\varepsilon_2\\
\end{align*}
$$

第二行用到了背景设置中的“基本等式” $x_{t} = \bar\alpha_tx_{0} + \bar\beta_t\varepsilon$。根据基本等式我们还知道 $x_{t-1} = \bar\alpha_{t-1}x_{0} + \bar\beta_{t-1}\varepsilon$，因此和上面的结果比较一下系数可得到：

$$
\kappa_t\bar\alpha_t + \lambda_t = \bar\alpha_{t-1}\\
\sqrt{\kappa_t^2\bar\beta_t^2 + \sigma_t^2} = \bar\beta_{t-1}
$$

三个待定系数，两个方程，所以说会有一个可变参数。我们设方差项 $\sigma_t^2$ 为可变参数，把 $\kappa$ 和 $\lambda$ 解出来：

$$
\kappa_t = \frac{\sqrt{\bar\beta_{t-1}^2 - \sigma^2_t}}{\bar\beta_t}\\
\lambda_t = \bar\alpha_{t-1} - \frac{\bar\alpha_t\sqrt{\bar\beta_{t-1}^2 - \sigma^2_t}}{\bar\beta_t}
$$

> DDPM 里面这三个参数都可以求，怎么求出来的？其实就是多了一个方程可以把 $\sigma_t$ 求出来。这个方程就是我们刚刚扔掉的扩散过程的方程，代表 $p(x_t|x_{t-1})$：
> $$
> \begin{align*}
> x_{t-1} &= \kappa_tx_t + \lambda_tx_0 + \sigma_t\varepsilon_1 \\
> x_t &= \alpha_tx_{t-1} + \beta_t\varepsilon_0\\
> &= \alpha_t(\kappa_tx_t + \lambda_tx_0 + \sigma_t\varepsilon_1) + \beta_t\varepsilon_0\\
> &= \alpha_t\kappa_tx_t + \alpha_t\lambda_tx_0 + \alpha_t\sigma_t\varepsilon_1 + \beta_t\varepsilon_0\\
> &= \alpha_t\kappa_tx_t + \alpha_t\lambda_tx_0 + \sqrt{\alpha_t^2\sigma_t^2 + \beta_t^2}\varepsilon_2\\
>  (1 - \kappa_t\alpha_t)x_{t} &= \alpha_t\lambda_tx_0 + \sqrt{\alpha_t^2\sigma_t^2 + \beta_t^2}\varepsilon_2\\
> \end{align*}
> $$
> 由于 $x_{t} = \bar\alpha_tx_{0} + \bar\beta_t\varepsilon$，比较系数可得
> $$
> (1 - \kappa_t\alpha_t)\bar\alpha_{t} = \alpha_t\lambda_t\\
> \sqrt{\alpha_t^2\sigma_t^2 + \beta_t^2} = \bar\beta_{t}\\
> $$
> 第一个方程重复了，实际上就是多了一个方程
> $$
> (1 - \kappa_t\alpha_t)\sqrt{\alpha_t^2\sigma_t^2 + \beta_t^2} = \bar\beta_{t}
> $$
> 因此求得
> $$
> 
> $$