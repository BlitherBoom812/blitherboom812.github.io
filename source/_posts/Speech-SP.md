---
title: Speech-SP
katex: true
date: 2024-02-28 19:24:02
tags:
---
## 语音信号的线性预测编码技术
线性预测编码技术（维纳滤波）。可以参考隔壁统计信号处理的笔记hh。

维纳滤波的正交原理：

$$
E \langle x(n-k), e(n) \rangle = 0
$$

正交原理可以用来估计任何时候的任何值，不管是现在（滤波），过去（平滑）还是未来（预测），也不管估计的对象是 $x,y$，上述公式的含义是：估计误差始终与已知信号垂直，与估计的是哪个时间的信号无关。

利用前面的 $P$ 个信号预测下一个信号：

$$
\hat{s}(n)=-\sum_{i=1}^{P^{\prime}}\hat{\alpha}_i\cdot s(n-i)
$$

误差定义为 

$$
\begin{aligned}
\varepsilon(n)& =s(n)-\overset{\wedge}{\operatorname*{s}}(n)=s(n)+\sum_{i=1}\widehat{\alpha}_i\cdot s(n-i)  \\
&=\sum_{i=0}^{P^{\prime}}\widehat{\alpha}_i\cdot s(n-i)
\end{aligned}
$$

从 z 域看，这是一个全极点模型产生了目标信号：

$$
S(z) = -\sum\limits_{i=1}^{P}\alpha_iz^{-i} + E(z)
$$

接下来的所有步骤，目的都是推导 $\alpha$ 的取值。

### 自相关法

本文中假设信号具有遍历性，即时间平均等于统计平均，时间上的自相关等于统计意义上的自相关。

利用 LMMSE 准则可以推出

$$
\begin{bmatrix}R(0)&R(1)&R(2)&\cdots&R(P-1)\\R(1)&R(0)&R(1)&\cdots&R(P-2)\\R(2)&R(1)&R(0)&\cdots&R(P-3)\\\vdots&\vdots&&&\vdots\\R(P-1)&R(P-2)&\cdots&\cdots&R(0)\end{bmatrix}\cdot\begin{bmatrix}\hat\alpha_1\\\hat\alpha_2\\\vdots\\\vdots\\\hat\alpha_P\end{bmatrix}=-\begin{bmatrix}R(1)\\R(2)\\\vdots\\\vdots\\R(P)\end{bmatrix}
$$

一个例子：Durbin 递推算法

### 协方差法

不能保证声码器稳定

### Durbin 递推算法

#### 滤波器的内积

定义$s_w(n)$关于$F(z)$和$G(z)$的内积如下：

$$
\langle F(z),G(z)\rangle=\sum_{-\infty}^{+\infty}u(n)\cdot v(n)
$$

特别地若这里的$F(z),\quad G(z)$都用我们的逆滤波器$A(z)=\sum_{i=0}^P\alpha_iZ^{-i}$替换，那么语音信号$s_w(n)$经过$A(z)$后的输出$e(n)$就是预测误差。

$\alpha_i\cdot s_W(n-i)$ 因此$A(z)$范数$\|A(z)\|$的平方就是预测误差。即

$$
\|A(z)\|^2=\langle A(z),A(z)\rangle=\sum_{-\infty}^{+\infty}e(n)\cdot e(n)=\sum_{-\infty}^{+\infty}e^2(n)
$$

内积有正定性，线性，三角不等式

特殊性质：

$$
<F(z), G(z)> = \sum\limits_{i=0}^{M}\sum\limits_{j=0}^{M}f_ig_jR(|i - j|)\\
<z^{-i}, z^{-j}> = R(|i - j|)
$$


$$
\langle F(z),G(z)\rangle=\left\langle z^kF(z),z^kG(z)\right\rangle\\\langle F(z),G(z)\rangle=\langle F(1/z),G(1/z)\rangle 
$$


#### 逆滤波器


定义FIR滤波器$\hat{A}(z)$:

$$
\hat{A}(z)=\sum_{i=0}^P\hat{\alpha}_iz^{-i}\quad,\quad\alpha_0=1
$$

若$\hat{\alpha}_{i}$是满足LPC正则方程的解，则称$\hat{A}(z)$称为逆滤波器。$\hat{E}(z)=\hat{A}(z)\cdot S(z)$是预测误差$\varepsilon(n)$的z 变换。显然有：
 (1) 若s(n)是由全极点模型$1/A(z)$产生的，这时$A(z)=\sum_{i=0}^P\alpha_iz^{-i}$, 即：

$s(n)=-\sum_{i=1}^P\alpha_is(n-i)+Ge(n)$

$$
S(z) \cdot A(z) = G \cdot E(z)
$$

#### 前向和后向预测

前向线性预测器(P阶)


$$
\hat{s}(n)=-\sum_{i=1}^P\alpha_i^{(P)}\cdot s(n-i)
$$

前向预测误差(P阶)

$$
\varepsilon_\alpha^{(P)}(n)=s(n)-\hat{s}(n)=\sum_{i=0}^P\alpha_i^{(P)}\cdot s(n-i)\:,\alpha_0^{(P)}=1
$$

前向逆滤波器(P阶)

$$
A^{(P)}(z)=\sum_{i=0}^P\alpha_i^{(P)}z^{-i}
$$

显然有

$$
E^{(P)}_\alpha(z) = S(z) \cdot A^{(P)}(z)
$$

后向线性预测器(P阶)

$$
\hat{s}(n-P-1)=-\sum_{i=1}^P\beta_i^{(P)}\cdot s(n-i)
$$

n时刻对$s(n-P-1)$的后向预测误差(P阶)

$$
\begin{aligned}&\varepsilon_{\beta}^{(P)}(n)=s(n-P-1)-\hat{s}(n-P-1)\\&=\sum_{i=1}^{P+1}\beta_i^{(P)}\cdot s(n-i)\quad,\quad\beta_{P+1}^{(P)}=1\end{aligned}
$$

后向逆滤波器 (P阶)
$$
B^{(P)}(z)=\sum_{i=1}^{P+1}\beta_i^{(P)}z^{-i}
$$

显然有

$$
E_\beta^{(P)}(z) = S(z) \cdot B^{(P)}(z)
$$

#### 正交性原理

判定最佳预测器的充要条件是

$$
\langle A^{(m)}(z), z^{-l} \rangle = 0\\
\langle B^{(m)}(z), z^{-l} \rangle = 0\\
l = 1, 2, \dots, m
$$

一个不严谨的理解：

$$
u(n) = s(n) * Z^{-1}[A(z)] = \varepsilon(n)\\
v(n) = s(n) * Z^{-1}[z^{-l}] = s(n - l)\\
\begin{align*}
    &\langle A^{(m)}(z), z^{-l} \rangle\\
    =&\sum\limits_{n=-\infty}^{\infty}u(n)v(n)\\
    =&\sum\limits_{n=-\infty}^{\infty}\varepsilon(n)s(n - l)\\
\end{align*}
$$

由于时间平均等于统计平均，

$$
\frac1{2N} \sum\limits_{n=-N}^{N - 1}\varepsilon(n)s(n-l) = E \langle \varepsilon(n), s(n-l) \rangle
$$

根据开头提到的维纳滤波正交原理可知上式等于0。

#### 递推公式

根据定义，当$m=0$时，显然有

$$
A^{(0)}(z)=1\\B^{(0)}(z)=z^{-1}
$$

$m>0$时有如下递推公式（施密特正交化）

$$
A^{(m)}(z)=A^{(m-1)}(z)+K^{(m)}B^{(m-1)}(z)
$$

$$
B^{(m)}(z)=z^{-1}\Big[B^{(m-1)}(z)+K^{(m)}A^{(m-1)}(z)\Big]
$$

$$
K^{(m)} = -\frac{\langle A^{(m-1)}(z), B^{(m-1)}(z)\rangle}{||B^{(m-1)}(z)||^2}
$$

根据正交性原理，需要证明由递推公式得到的$A^{(m)}(z)$和$B^{(m)}(z)$满足正交性条件公式。


 在公式(76) 中，根据多项式对应项系数相等的原则，可以得到

$$
\begin{aligned}&\alpha_{i}^{(m)}=\alpha_{i}^{(m-1)}+K^{(m)}\cdot\beta_{i}^{(m-1)}\quad,\quad i=1,\cdots,m-1\\&\alpha_{i}^{(m)}=K^{(m)}\quad,\quad i=m\end{aligned}
$$

由公式(73)可知

$$
\beta_j^{(m)}=\alpha_{m+1-j}^{(m)},\:j=1,\cdots,m+1
$$

> 从这里可以推出
> $$
> B^{(m)}(z) = z^{-(m+1)}A^{(m)}(1/z)
> $$

因此可以得到预测器系数的递推公式

$$
\begin{cases}\alpha_\mathrm{m}^{(\mathrm{m})}=\mathrm{K}^{(\mathrm{m})}\\\alpha_\mathrm{i}^{(\mathrm{m})}=\alpha_\mathrm{i}^{(\mathrm{m}-1)}+\mathrm{K}^{(\mathrm{m})}\cdot\alpha_\mathrm{m-i}^{(\mathrm{m}-1)}\quad,\:\mathrm{i}=1,\cdots,\mathrm{m}-1\end{cases}
$$

这是线性预测系数的Durbin递推算法公式。$m$阶部分相关系数$K^{(m)}$可以用以下方法计算：

$$
K^{(m)} = -\frac{\sum\limits_{j=1}^{m}\alpha_{m-j}^{(m-1)}R(j)}{||B^{(m-1)}(z)||^2}
$$

$||B^{(m)}(z)||^2$ 可以用这个递推式计算：

$$
\begin{Vmatrix}B^{(m)}(z)\end{Vmatrix}^2=(1-[K^{(m)}]^2)\begin{Vmatrix}B^{(m-1)}(z)\end{Vmatrix}^2
$$

初值

$$
||B^{(0)}(z)|| = R(0)\\
\alpha^{(0)}_0 = 1
$$



### Durbin 算法系统的稳定性

充分性：

$$
\frac{1}{A^{(m)}(z)} 稳定 \Rarr |k^{(m)}| < 1
$$

必要性：

$$
|k^{(m)}| < 1 \Rarr \frac{1}{A^{(m)}(z)} 稳定
$$

Highlight: 

Durbin 逆序递推公式

$$
A^{(m-1)}(z)=\frac{A^{(m)}(z)-k^{(m)}zB^{(m)}(z)}{1-(k^{(m)})^2}
$$

证明过程中引入的一个辅助函数

$$
F^{(m)}(z)=\frac{A^{(m)}(z)}{zB^{(m)}(z)}=\frac{z^mA^{(m)}(z)}{A^{(m)}(1/z)}
$$

满足 $F^{(m)}(z) < 1 \lrArr |z| < 1$

#### 稳定性的应用

充分性：说明使用 Durbin 算法可以保证 $1/A(z)$ 稳定

必要性：

判定高阶多项式 $A(z)$ 构成的系统 $1/A(z)$ 是否稳定。

只要计算出 $k_m$，判断 $|k_m|$ 是否小于1即可。

### LPC 模型参数讨论

#### 阶数

误差能量是单调减的，一般 $P = 8 \sim 14$

#### 激励增益 G

采用缓变窗（哈明窗），$N >> P$

$$
\varepsilon_\alpha^{(p)}(n)\approx Ge_w(n)=Ge(n)w(n)
$$

$$
G^2\approx\frac{\sum_{n=-\infty}^\infty\left(\varepsilon_\alpha^{(p)}(n)\right)^2}{\sum_{n=-\infty}^\infty e^2(n)w^2(n)}
$$

#### 短时分析对于LPC参数估计的影响

1. 𝑒(𝑛)为白噪声时，$E[\hat \alpha_i] = \alpha_i$，无偏估计
2. 𝑒(𝑛)为浊音时，采用基音同步算法可以达到无偏估计。否则如果是任意截取一段语音作分析估计是有偏的。

#### LPC分析的频域解释
用LPC分析可以用来跟踪声道模型谱（或称语音的平滑谱）。若用LPC算法解出的全极点模型来逼近实际声道，则它的单位冲激响应ℎ(𝑛)为：

$$
\begin{cases}
    h(n) = 0, n \lt 0\\
    h(n) = - \sum\limits_{i=1}^{p}\alpha_i^{(p)}h(n - 1) + \delta(n), n \ge 0
\end{cases}
$$

若 $R_h(l) = R_h(-l) = \sum\limits_{n=0}^{\infty}h(n - l)h(n), l \ge 0$

$$
\sum\limits_{i=1}^{p}\alpha_i^{(P)}R_h(|k - i|) = -R_h(k), l \ge 0\\
R_h(l)/R_h(0) = R(l) / R(0)
$$

当激励为均方值为1，均值为0的白噪声序列时，输出的自关函数𝑅𝑤(𝑙)也有此关系。
P阶LPC预测模型也称为P阶自关匹配模型。

#### 各种LPC参数计算其它们之间的关系

1. $R(l) \Rightarrow \alpha$
2. $K \Rightarrow \alpha$

$$
\begin{cases}\alpha_m^m=K^{(m)}\\\alpha_i^{(m)}=\alpha_i^{(m-1)}+K^{(m)}\alpha_{m-i}^{(m-1)}\end{cases}
$$

3. LPC 系数 => 倒谱（因为是最小相位序列）
4. PARCOR 系数($K^{(m)}$)
    1. 由 Durbin 解得
    2. 由格形算法解得
    3. 由 Schur 算法解得
5. 由 $A(z)$ 根确定振峰
    1. 每一对根与一个共振峰对应
6. 声道面积比系数和对数面积比系数

$$
\frac{A_m}{A_{m-1}}=\frac{1-K^{(m)}}{1+K^{(m)}}\:,\:m=1,2,\cdots P\\
g_m = \ln\Bigg[\frac{A_m}{A_{m-1}}\Bigg]
$$
7. 线谱对（LSP）或者线谱频率参数(LSF)

$$
P(z) = A^{(p)}(z) + z^{-(p+1)}A^{(p)}(z^{-1})\\
Q(z) = A^{(p)}(z) - z^{-(p+1)}A^{(p)}(z^{-1})
$$

性质：
1. $P(z)$ 和 $Q(z)$ 的根均在单位圆上
2. $P(z)$ 和 $Q(z)$ 的根在单位元上交错

8. $\alpha$ 参数和 $LSP$ 参数互推

某个特定的𝐿𝑆𝑃 [𝑓1, 𝑓2, ⋯ 𝑓𝑝]中只移动其中任意一个频率𝑓𝑖的位置，那么对应的平滑谱只
有𝑓𝑖附近与原平滑谱有异，而在其它频域则变化很小