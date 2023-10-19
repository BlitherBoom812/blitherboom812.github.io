---
title: Stochastic-Process
katex: true
date: 2023-09-21 10:10:49
tags: note
---

## 随机过程随机过

信号与系统：研究确定信号随着时间、空间的变化

概率论：研究随机信号，但是不随时间、空间变化

随机过程：研究随机的信号随着时间、空间的变化

> 期末70分梭哈
> 
> 考试题目不随机，就跟不上这门课的要求。

### 概率与随机变量回顾

样本空间$\Omega$

性质：
* 非负性：$P(A) \ge 0$
* 规范性：$P(\Omega), P(\emptyset) = 0$
* 可加性：$P(\bigcup\limits_{k = 1}^{\infty}A_k) = \sum\limits_{k=1}^{\infty}P(A_k)$

贝叶斯：

$$
P(B_i|A) = \frac{P(A|B_i)P(B_i)}{\sum\limits_{j = 1}^{k}P(B_j)P(A|B_j)}
$$

随机变量：

分布函数，概率密度函数

期望，方差，协方差，相关系数

伯努利分布，高斯分布，泊松分布，瑞利分布

伯努利分布的概率密度函数：

当$k=1$时，$P(X=1) = p$
当$k=0$时，$P(X=0) = 1-p$

高斯分布的概率密度函数：
$P(x) = \frac{1}{\sqrt{2\pi\sigma^2}}\exp\left(-\frac{(x-\mu)^2}{2\sigma^2}\right)$

二维高斯分布的概率密度函数：

$P(x,y) = \frac{1}{2\pi\sigma_x\sigma_y\sqrt{1-\rho^2}}\exp\left(-\frac{1}{2(1-\rho^2)}\left[\frac{(x-\mu_x)^2}{\sigma_x^2}-2\rho\frac{(x-\mu_x)(y-\mu_y)}{\sigma_x\sigma_y}+\frac{(y-\mu_y)^2}{\sigma_y^2}\right]\right)$

其中，$\mu_x$和$\mu_y$是均值，$\sigma_x$和$\sigma_y$是标准差，$\rho$是相关系数。

泊松分布的概率密度函数：
$P(k;\lambda) = \frac{\lambda^k}{k!}\exp(-\lambda)$

瑞利分布的概率密度函数：
$P(x;\sigma) = \frac{x}{\sigma^2}\exp\left(-\frac{x^2}{2\sigma^2}\right)$

### 随机过程的基本概念

定义：

给定概率空间$(\Omega, \mathcal{F}, P)$，定义参数集$T \subset R$，$t \in T$

$$
X = \lbrace X(t, \omega), t \in T, \omega \in \Omega \rbrace
$$

简记为$X(t)$: $X = \lbrace X(t), t \in T\rbrace$

解释：

* 二元单值函数
* 对每个固定t，$X(t, \omega)$是一个随机变量
* 每个$\omega_0 \in \Omega$, $X(t, \omega_0)$是定义在T上的函数，记为$x(t, \omega_0)$

单样本为随机变量：均值、方差、协方差、有限维联合分布等

随机过程的函数特性：时间的相关性，连续性和离散性，随机过程的导数、微分、积分、卷积、级数展开、微分方程、积分方程等

二重性的联合特征：

分类：

离散时间，离散分布：Bernouli过程

离散时间，连续分布：自回归过程

连续参数离散随机过程：Poission过程

连续参数连续型随机过程：Brown运动

数学特征：

相互独立和不相关是两个概念，无必然因果联系。

根据数字特征分类：

* 独立增量过程
* 平稳过程及二阶矩过程
* 马尔可夫过程
* 更新过程

独立增量过程是一种随机过程，具有以下特性：

1. 零起点：独立增量过程在零时刻（通常表示为$t=0$）的取值为零，即$X(0) = 0$。

2. 独立增量：对于任意时刻$t_1 < t_2 < \cdots < t_n$，随机变量$X(t_2)-X(t_1), X(t_3)-X(t_2), \cdots, X(t_n)-X(t_{n-1})$是相互独立的。

若对一切$0\le s \lt t$，增量$X(t) - X(s)$的分布仅依赖于$t - s$，则称之为平稳增量，具有平稳增量的独立增量过程称为独立平稳增量过程，例如泊松和布朗。

二阶矩过程：$D(X(t))$

宽平稳过程：

宽平稳过程可以用以下简单的数学表达式表示：

1. 均值平稳性：对于宽平稳过程 $X(t)$，其均值满足 $E[X(t)] = \mu$，其中 $\mu$ 是一个常数。

2. 自相关平稳性：宽平稳过程的自相关函数在时间差 $\tau$ 下为常数，可以表示为 $R_X(\tau) = R_X(t,t+\tau) = \text{常数}$，其中 $R_X(\tau)$ 表示宽平稳过程的自相关函数。

严平稳过程（Strict-sense stationary process），也称为严格平稳过程或强平稳过程，是一种具有更强平稳性质的随机过程。它满足以下两个条件：

1. 时移不变性：严平稳过程的统计性质在时间上任意平移保持不变。具体而言，对于任意时间差 $\tau$ 和任意时间点 $t$，随机变量 $X(t)$ 和 $X(t+\tau)$ 的联合分布相同，即联合分布满足 $P(X(t) \in A, X(t+\tau) \in B) = P(X(0) \in A, X(\tau) \in B)$，其中 $A,B$ 是任意集合。

2. 自相关平稳性：严平稳过程的自相关函数只与时间差有关，与参考时刻无关。具体而言，对于任意时间差 $\tau$ 和任意时间点 $t$，自相关函数满足 $R_X(t,t+\tau) = R_X(\tau)$，其中 $R_X(\tau)$ 表示严平稳过程的自相关函数。

马尔可夫过程是一种具有马尔可夫性质的随机过程。它可以用以下公式和概念来定义：

1. 状态空间：马尔可夫过程的状态空间是一个离散集合，表示可能的状态集合。通常用符号 $S$ 表示，$S = \{s_1, s_2, \ldots\}$。

2. 马尔可夫性质：马尔可夫过程具有马尔可夫性质，也称为无后效性。即，在给定当前时刻的状态 $X(t)$ 之下，未来的状态 $X(t+\Delta t)$ 只依赖于当前的状态 $X(t)$，与过去的状态 $X(t-1), X(t-2), \ldots$ 无关。

3. 转移概率：转移概率描述了在给定当前状态 $s_i$ 的情况下，马尔可夫过程在下一个时刻转移到状态 $s_j$ 的概率。转移概率通常用符号 $P_{ij}$ 表示，即 $P_{ij} = P(X(t+\Delta t) = s_j \mid X(t) = s_i)$。

通过状态空间和转移概率，可以构建一个马尔可夫过程的状态转移矩阵（Transition Matrix），它描述了从一个状态到另一个状态的转移概率情况。

更新过程：

更新过程可以使用以下公式来描述：

1. 到达时间：假设到达时间的随机变量序列为 $T_1, T_2, T_3, \ldots$，其中 $T_i$ 表示事件 $i$ 的到达时间。

2. 描述参数：更新过程的到达率（或强度）表示单位时间内平均发生事件的次数。通常用符号 $\lambda$ 表示，即 $\lambda = \lim_{t \to \infty} \frac{N(t)}{t}$，其中 $N(t)$ 表示时间 $t$ 之前（包括 $t$）发生的事件次数。

3. 插值函数：更新过程的插值函数（或插值过程）表示给定时间 $t$ 时，最近的到达时间是多久之前。记为 $S(t)$，即 $S(t) = \sup\{T_i \leq t\}$，表示最近的到达时间小于等于 $t$ 的时间点。


可以定义复随机过程：


复随机过程是一组复数值随机变量的集合 $\{X(t), t \in T\}$，其中 $X(t)$ 是定义在概率空间 $(\Omega, \mathcal{F}, P)$ 上的复数值随机变量，表示在时间点 $t$ 上的取值。

具体而言，对于每个时间点 $t \in T$，$X(t)$ 是一个复数值随机变量，可以表示为 $X(t) = R(t) + iI(t)$，其中 $R(t)$ 和 $I(t)$ 分别表示实部和虚部。

复随机过程可以通过概率空间 $(\Omega, \mathcal{F}, P)$ 上的复数随机变量以及时间参数 $T$ 来描述，并且在不同时间点上表现出复数值随机变量的随机性质。

数学特征：

均值函数（一阶原点矩）：$\mu_X(t) = E[X(t)]$

方差函数：$\text{Var}[X(t)] = E[(X(t) - \mu_X(t))(X(t) - \overline{\mu_X(t)} )]$

自相关函数：$R_X(t_1, t_2) = E[(X(t_1) - \mu_X(t_1))(X(t_2) - \overline{\mu_X(t_2)} )]$

自协方差函数：$\text{Cov}[X(t_1), X(t_2)] = E[(X(t_1) - \mu_X(t_1))(X(t_2) - \overline{\mu_X(t_2)} )]$

均方值函数：$E[|X(t)|^2] = \int_{-\infty}^{\infty} |x|^2 f_X(x,t)dx$

### 基本研究方法

* 相关方法
* Markov 方法

**相关**

若随机过程在任意时刻的均值和方差都存在，则称之为二阶矩过程（second order process），即均方可积空间上的随机变量。

均方可积空间是内积空间。相关运算是均方可积的内积运算：

$$
\langle X, Y \rangle = E(X\overline Y)
$$


宽平稳（wide-sense stationary）:

$$
R_X(t, s) = R_X(t + D, s + D) = R(t - s)
$$

功率谱密度：

$$
S_X(\omega) = \int_{-\infty}^{\infty}R_X(\tau)\exp(-j\omega\tau)\mathrm d\tau
$$

最优线性估计

**Markov**


有限维联合分布可以由各阶的条件分布表示出来：

$$
\begin{align*}
    &F_{X(t_1), \dots, X(t_n)}(x_1, \dots, x_n) \\
    =&F_{X(t_n)|X(t_{n - 1}), \dots, X(t_1)}(x_n|x_{n - 1}, \dots, x_1)F_{X(t_{n - 1}), \dots, X(t_1)}(x_1, \dots, x_{n - 1})\\
    =&F_{X(t_n)|X(t_{n - 1}), \dots, X(t_1)}(x_n|x_{n - 1}, \dots, x_1)\dots F_{X(t_2)|X(t_1)}(x_2|x_1)F_{X(t_1)}(x_1)
\end{align*}
$$

无后效性的 markov 过程：

$$
F_{X(t_n)|X(t_{n - 1}), \dots, X(t_1)}(x_n|x_{n - 1}, \dots, x_1) = F_{X(t_n)|X(t_{n - 1})}(x_n|x_{n - 1})
$$

从而所有高阶依赖关系都可以简化为二阶依赖：

$$
F_{X(t_1), \dots, X(t_n)}(x_1, \dots, x_n)=F_{X(t_n)|X(t_{n - 1})}(x_n|x_{n - 1})\dots F_{X(t_2)|X(t_1)}(x_2|x_1)F_{X(t_1)}(x_1)
$$

## 相关理论与二阶矩过程——时域分析

### 自相关函数

由二阶矩过程的定义可知，均方可积空间的自相关函数、自协方差函数、互相关函数、互协方差函数均存在。

均值函数（一阶原点矩）：$\mu_X(t) = E[X(t)]$

方差函数：$\text{Var}[X(t)] = E[(X(t) - \mu_X(t))^2]$

自相关函数：$R_X(t_1, t_2) = E[(X(t_1))(X^*(t_2))]$

自协方差函数：$C_X(t_1, t_2) = \text{Cov}[X(t_1), X(t_2)] = E[(X(t_1) - \mu_X(t_1))(X(t_2) - \mu_X(t_2))^*]$

均方值函数：$E[X^2(t)] = \int_{-\infty}^{\infty} x^2 f_X(x,t)dx$

互相关函数和互协方差函数：

* 如果$E[X(s)Y(t)]存在$，记为$R_{XY}(s, t)$
* 如果$\text{cov}(X(s), Y(t))存在$，记为$C_{XY}(s, t)$

$$
R_{XY}(t_1, t_2) = E[(X(t_1))(Y^*(t_2))]
$$

$$
C_{XY}(t_1, t_2) = E[(X(t_1) - \mu_X(t_1))(Y(t_2) - \mu_Y(t_2))^*]
$$

$$
C_{XY}(s, t) = R_{XY}(s,t) - \mu_X(s)\mu_Y(t)
$$

不相关：

$$
C_{XY}(s, t) = 0
$$

$$
R_{XY}(s,t) = m_X(s)m_Y(t)
$$


自相关函数具有共轭对称性：

$$
R(t_1, t_2) = R^*(t_2, t_1)
$$

离散化的自相关矩阵同样是共轭对称的：

$$
R = E[XX^H]\\
R_{ij} = R^*_{ji}
$$

自相关矩阵是非负定的：

$$
\lambda R \lambda^H = \lambda XX^H\lambda^H \ge 0
$$

当 $P(\lambda X = 0) = 1$ 时等号成立。

非负定性是自相关函数的一种特征性质。如果一个二元函数满足非负定性质，则一定可以构造出一个随机过程，使得其自相关函数为给定的二元函数。

自相关矩阵非负定，分解的特征值均非负。其物理意义是信号的能量或者功率。

自相关函数对加法和乘法的封闭性：

$$
R(t, s) = \alpha R_1(t, s) + \beta R_2(t, s)
$$

仍然是某一随机过程的自相关函数。

证明：取 $Z(t) = \alpha^{1/2} X(t) + \beta^{1/2} Y(t)$。这里 $X(t), Y(t)$是独立的。

$$
R(t, s) = R_1(t, s)R_2(t, s)
$$

也是自相关函数。取 $Z(t) = X(t)Y(t)$。

### 宽平稳随机过程

**宽平稳**

对于随机过程 $X(t), t \in T$，若 $\forall t, s\in T$

$$
E(X(t)) = E(X(s))\\
R_X(t, s) = R_X(t + D, s + D)
$$

称随机过程 $X(t)$ 具有宽平稳性。

宽平稳过程的均值是常数，自相关函数与相对时间差有关。故宽平稳过程的自相关函数可以写成一元函数：$R_X(\tau), \tau = t - s$。

**严平稳**

对于随机过程 $X(t), t \in T$，若 $\forall n, \forall t_1, t_2, \dots, t_n \in T$，$\forall D \in T$，都有

$$
F_{t_1, t_2, \dots, t_n}(x_1, x_2, \dots, x_n) = F_{t_1 + D, t_2+D, \dots, t_n + D}(x_1, x_2, \dots, x_n)
$$

则称随机过程 $X(t), t\in T$具有严平稳性。

在二阶矩存在的条件下，严平稳蕴含宽平稳，而反过来，宽平稳一般无法得到严平稳。

高斯过程的严平稳与宽平稳等价。

**联合宽平稳**

$$
R_{X, Y}(t, s) = R_{XY}(t + D, s + D), \forall D \in T
$$

**宽平稳过程的性质**

设 $R_X(\tau)$ 为宽平稳过程的自相关函数， $m_X$ 为该过程的均值。

$$
\begin{align}
    R_X(\tau) = \overline{R_X(-\tau)}\\
    R_X(0)\ge |m_X|^2\\
    |R_X(\tau)| \le R_X(0)\\
    R_X(\tau) \text{是一元非负定函数。}
\end{align}
$$

### 正交增量过程

**正交增量过程**

对于二阶矩过程 $X(t), t \in \R$，若 $\forall t_1 \lt t_2 \le t_3 \lt t_4$，$t_1, t_2, t_3, t_4 \in \R$，满足

$$
E(X(t_4) - X(t_3))(\overline{X(t_2) - X(t_1)}) = 0
$$

则称 $X(t), t \in \R$ 为正交增量过程。

**独立增量过程**

对于二阶矩过程 $X(t), t \in \R$，若 $\forall t_1 \lt t_2 \le t_3 \lt t_4$，$t_1, t_2, t_3, t_4 \in \R$，$X(t_4) - X(t_3)$ 和 $X(t_2) - X(t_1)$ 统计独立，则称为独立增量过程。

均值为0的独立增量过程是正交增量过程。

**平稳增量过程**

对于随机过程 $X(t), t \in \R$，若 $X(t) - X(s)$ 的分布仅仅依赖于 $t - s$，则称为平稳增量过程。

定理：

随机过程 $X(t), t \in [0, \infty]$，满足 $X(0) = 0$，则其为正交增量过程的充要条件为

$$
R_X(s, t) = F(\min(s, t))
$$

其中，$F(\cdot)$是单调不减的函数。

### 随机过程的极限、连续、导数、积分

**均方极限**

$$
E(|ka|^2)
$$



唯一性：若 $X_n \xrightarrow{m.s} X, X_n \xrightarrow{m.s}Y$，则 $E(|X - Y|^2) = 0$.

可加性：

数字特征相同：

如何判定 ${X_n}$ 是否收敛？

Cauchy 准则

$$
X_n \xrightarrow{m.s}{X} \Leftrightarrow E(|X_m - X_n|^2) = 0, m, n \rightarrow \infty
$$

洛伊夫准则：

$$
X_n \xrightarrow{m.s} X \lrArr E\lbrace X_n X_m^*\rbrace \rightarrow \text{constant}
$$

**均方连续**

二阶矩过程，$t \rightarrow t_0, X(t) \xrightarrow{m.s.} X(t_0)$，则称 $X(t)$ 在 $t_0$ 处连续

定理

以下命题等价：

1. $R(t, s)$ 在 $(t_0, t_0)$ 上连续，$\forall t_0 \in T$
2. $X(t)$ 在 $T$ 上均方连续
3. $R(t, s)$ 在 $T \times T$ 上连续

推论

对于宽平稳过程 $X(t)$，$R(\tau)$ 为自相关函数，以下命题等价：

1. $R(\tau)$ 在 $\tau = 0$ 处连续；
2. $X(t)$ 在 $T$ 上均方连续；
3. $R(\tau)$ 在 T 上连续。

**均方导数**

若 $\frac{X(t_0 + h) - X(t_0)}{h}\xrightarrow{m.s.}Y(t_0), \forall t_0 \in T, h \rightarrow 0$，则称$\lbrace X(t) \rbrace$ 在均方意义下的导数为 $Y(t)$。

如何判断 $X(t)$ 是否均方可导？

Cauchy 准则

$$
E\left(|\frac{X(t_0 + h) - X(t_0)}{h} - \frac{X(t_0 + g) - X(t_0)}{g}|^2\right) \rightarrow 0, \forall h, g \rightarrow 0
$$

洛伊夫准则

$$
E\left(\left(\frac{X(t_0 + h) - X(t_0)}{h}\right)\left(\frac{X(t_0 + g) - X(t_0)}{g}\right)^*\right) \rightarrow 0, \forall h, g \rightarrow 0
$$

均方导数判定定理

$$
\frac{\partial^2 R(t, s)}{\partial t \partial s} 在 (t_0, t_0) 存在且连续，则 X(t) 在 t_0 处存在均方倒数
$$

均方导数的性质：

$f(t)$ 为线性函数

* $E(X^\prime(t)) = \frac{\mathrm d }{\mathrm dt} E(X(t))$
* $E(X^\prime(t)\overline{X(s)}) =\frac{\partial }{\partial t}R_x(t, s)$
* $E(X(t)\overline{X^\prime(s)}) =\frac{\partial }{\partial s}R_x(t, s)$
* $E(X^\prime(t)\overline{X^\prime(s)}) =\frac{\partial^2 }{\partial t\partial s}R_x(t, s)$


**均方积分**

若黎曼和 $\sum\limits_{k=1}^{n}X(v_k)h(v_k)(t_k - t_{k - 1})$ 在 $n \rightarrow \infty, \max\lbrace t_k - t_{k - 1}\rbrace \rightarrow 0$ 时均方收敛，其中 $h(t)$ 为确定的可积函数，则称$\lbrace X(t)\rbrace$ 为均方可积，记为 $\int_{a}^{b}X(t)h(t)\mathrm dt$。

判定定理

$$
\lbrace X(t)h(t) \rbrace 均方可积 \Leftrightarrow \int_{a}^{b}\int_{a}^{b}R_X(t, s)h(t)h^*(s)\mathrm dt\mathrm ds 存在
$$

均方积分的性质：

* $E\left( \int_{a}^{b}X(t)h(t)\mathrm dt\right) = \int_{a}^{b}E(X(t))h(t)\mathrm dt$
* $E\left( \left(\int_{a}^{b}X(t)h(t)\mathrm dt\right)\left(\int_{a}^{b}X(s)h(s)\mathrm ds\right)^*\right) = \int_{a}^{b}E(X(t))h(t)\mathrm dt$
* 三角不等式：$\sqrt{ E \left(|\int_{a}^{b}X(t)h(t)\mathrm dt|^2\right) } \le \int_{a}^{b}\sqrt{E\left(|X(t) - h(t)|^2\right)}\mathrm dt$
* 均方积分与均方导数：$X(t)$ 在 $[a, b]$ 上均方连续，$Y(t) = \int_{a}^{t}X(s)\mathrm ds$，其中等号代表均方相等，则 $\lbrace Y(t)\rbrace$ 在 $[a, b]$ 可导，并称在均方意义下 $\lbrace Y(t) \rbrace$ 的导数为 $\lbrace X(t) \rbrace$

### 随机过程的遍历性

统计平均：对样本空间取平均

$$
E\lbrace X(t_0) \rbrace = \int_{}^{}x\mathrm dF_X(x;t_0)
$$

时间平均：

$$
\langle X(t) \rangle = \frac{1}{T} \int_{-T/2}^{T/2}X(t)\mathrm dt
$$

统计平均和时间平均的关系？

时间平均更容易获得。如果我们可以通过时间平均来获得统计平均？

**遍历性**


定义-宽平稳过程均值遍历：

$$
\langle X(t) \rangle = \lim\limits_{T\rightarrow\infty} \frac{1}{2T} \int_{-T}^{T}X(t)\mathrm dt \mathop{=}\limits^{a.s.} E \lbrace X(t) \rbrace = \mu
$$

a.s. = with probability 1

左边是随机变量，右边是一个确定的数。这样的相等，意味着左边的随机变量的均值确定，方差为0.

定义：宽平稳过程自相关遍历

$$
\langle X(t + \tau)X^*(t) \rangle = \lim\limits_{T\rightarrow\infty} \frac{1}{2T} \int_{-T}^{T}X(t + \tau)X^*(t)\mathrm dt \mathop{=}\limits^{a.s.} R_X(\tau) = E \lbrace X(t + \tau)X^*(t)\rbrace
$$

a.s. = with probability 1

定理：

宽平稳过程 $X(t)$ 满足均值遍历 $\lrArr$ 

$$
D(\langle X(t) \rangle) = \lim\limits_{T \rightarrow\infty} \frac{1}{2T}\int_{-2T}^{2T}\left(1 - \frac{|\tau|}{2T}\right)(R_X(\tau) - |\mu|^2)\mathrm d\tau = 0
$$

定理：

宽平稳过程具有均值遍历性的充要条件是：

$$
\lim\limits_{T\rightarrow\infty} \frac{1}{2T}\int_{-T}^{T}C_X(\tau)\mathrm d\tau = 0 或者 \lim\limits_{T\rightarrow\infty} \frac{1}{T}\int_{0}^{T}C_X(\tau)\mathrm d\tau = 0
$$

时间比较长的时候相关性消失了，也就是说过了一段时间同一轨道的样本就独立了，等价于多个轨道的样本，时间平均和统计平均就相等了。

2个推论：

* 若实数宽平稳过程的协方差函数满足 $\int_{0}^{+\infty}C_x(\tau)\mathrm d\tau\lt +\infty$，则该过程具有均值遍历性
* 若实数宽平稳过程的协方差函数满足 $C_x(\tau) \rightarrow 0, \tau \rightarrow +\infty$，则该过程具有均值遍历性

### 随机过程的线性展开

**卡胡曼-洛伊夫展开**

在平方可积空间上

定义范数

定义内积，正交

在 $L^2[a, b]$ 中一定有一组标准正交基函数 $\phi_1(t), \phi_2(t), \phi_3(t)\dots$ 满足

$$
\begin{cases}
    \langle \phi_i, \phi_j \rangle = 0, i\ne j\\
    \langle \phi_i, \phi_i \rangle = 1
\end{cases}
$$

* $f$ 可以用有限个基函数线性加和来逼近
* $\langle f, \phi_n \rangle$ 表示 $f$ 在 $\phi_n$ 基上的坐标。

周期性宽平稳随机过程可以用傅里叶级数展开

$$
E\left(\left |X(t) -\sum\limits_{n=-\infty}^{\infty}c_ne^{j\omega_0t}  \right |^2\right) = 0
$$

一般的用 KL 展开

随机向量的双正交展开：

零均值的 $n$ 元随机向量 $\mathbf X \in R^n$ 可以如下展开：

$$
X = \sum\limits_{k=1}^{n} \xi_k \mathbf e_k
$$

基向量选择的是自相关矩阵 $\mathbf R$ 的特征向量。

如果我们用 $\mathbf K$ 个维度来逼近 $\mathbf X$，为了使得误差最小，选取最大的$\mathbf K$个特征值： $\mathbf X =\sum\limits_{k=1}^{K} \alpha_k\mathbf e_k$。这就是主成分分析（PCA）。


