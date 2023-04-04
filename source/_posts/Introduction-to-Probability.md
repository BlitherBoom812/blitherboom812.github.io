---
title: Introduction-to-Probability
date: 2023-02-20 21:05:41
tags: note
katex: true
---

## Introduction

## Probability Space

Probability space is a triple $(\Omega, \mathcal{F}, \mathbf{P})$, comprised of the following three
elements:

1 Sample space $\Omega$: the set of all possible outcomes of an experiment

2 $\sigma$-algebra (or $\sigma$-field) $\mathcal F$: a collection of subsets of $\Omega$

3 Probability measure $\mathbf P$: a function that assigns a nonnegative
probability to every set in the $\sigma$-algebra $\mathcal F$

### Sample space
Mutually exclusive: no identical element.

Collectively exhaustive: all results should be included.

### $\sigma$-algegra

not unique

3 requirements:

$$
\varnothing \in \mathcal F\\
\forall A \in \mathcal F, A^c \in \mathcal F\\
\forall A_k \in \mathcal F, k=1, 2, ..., 
\cup_{k=1}^{\infty}A_k\in \mathcal F
$$

### Borel field

used to measure intervals

when $\Omega$ is continuous($\R$ for example), Borel field is useful.

"minimum" $\sigma$-algebra means deleting any element in the $\mathcal B (\mathbf R)$ will miss the requirements.

![](../images/prob/L2_1.jpg)

### Uncountable

decimal numbers between 0 and 1 are uncountable.

### Probability measures

$$
P:\mathcal F \rightarrow [0, 1]
$$

**Nonnegativity** $P(A)\ge0, \forall A \in \mathcal{  F}$

**Normalization**  $P(\empty)=0, P(\Omega)=1$

**Countable additivity** $A_1, A_2, ... \text { is disjoint in }\mathcal F, P(A_1\cup A_2\cup ...)=P(A_1)+P(A_2)+...$

* They are the axioms of probability. 
* Probability is a mapping from $\sigma$-algebra to a real number betwenn 0 and 1, which intuitively specifies the "likelihood" of any event. 
* There exist non-measurable sets, on which we cannot define a probability measure.

### Discrete models

$$
P(\{s_1, ..., s_n\})=P(s_1)+...+P(s_n)\\
P(A) = \frac{\text{\# of elements of }A}{\text{total \# of elements of sample points}}
$$


### Continuous Models

Probability = Area

### Some properties of Probability measure

$$
A\sub B\Rightarrow P(A)\le P(B)\\
P(A\cup B)=P(A)+P(B)-P(A\cap B)\\
P(A\cup B) \le P(A) + P(B)\\
P(A\cup B \cup C)=P(A) + P(A^C\cap B) + P(A^C\cap B^C\cap C)
$$

### Conditional Probability

$$
P(A|B)=\frac{P(A\cap B)}{P(B)}
$$

* If $P(B)=0$, $P(A|B)$ is undefined.
* For a fixed event $B$, $P(A|B)$ can be verified as a legitimate probability measure on the new universe. $P(A, B)\ge 0$, $P(\Omega|B)=1$, $P(A_1\cup A_2\cup...|B)=P(A_1|B)+P(A_2|B)+...$
* <div>$P(A|B)=\frac{\text{ \# of elements of }A\cap B}{\text{total \# of elements of }B}$</div>

### Total probability theorem

Let $A_1, ..., A_n$ be disjoint events that form a partition of the sample space and assume that $P(A_i)>0$ for all $i$. Then for any event B, we have

$$
P(B) = \sum_{i=1}^n P(A_i\cap B) = \sum_{i=1}^nP(A_i)P(B|A_i)
$$

**Remark** 
* The definition of partition is that $\cup_{i=1}^n A_i = \Omega, A_i\cap A_j = \emptyset, \forall i\ne j$
* The probability of B is a weighted average of its conditional probability under each scenario
* Each scenario is weighted according to its prior probability
* Useful when $P(B|A_i)$ is known or easy to derive

### Inference and Bayes' rule

Let $A_1, ..., A_2$ be disjoint events that from a partition of the sample space and assume that $P(A_i) \gt 0$  for all $i$. Then for any event $B$ such that $P(B)\gt 0$, we have 

$$
P(A_i|B) = \frac{P(A_i)P(B|A_i)}{P(B)} = \frac{P(A_i)P(B|A_i)}{\sum_{j=1}^nP(A_j)P(B|A_j)}
$$

**Remarks**
* Relates conditional probabilities of the form $P(A_i|B)$ with conditional probabilities of the form $P(B|A_i)$
* often used in inference: effect $B$ $\lrarr$ cause $A_i$

The meaning of $P(A_i|B)$ in the view of Bayes: the belief of $A_i$ is revised if we observed effect $B$. If the cause and the effect are closely binded($P(B|A_i) > P(B|A_i^c)$), then the belief $A_i$ is enhanced by the observation of effect $B$($P(A_i|B) > P(A)$). This can be derived from the Bayes' rule through simple calculation. If $P(A_i|B)=P(A_i)$, then $B$ provides no information on $A_i$.

### Independence

#### Independence of two disjoint events

Events A and B are called **independent** if 
$$
P(A\cap B) = P(A)\cdot P(B)
$$
or equivalently, when $P(B) > 0$, 

$$
P(A|B) = P(A)
$$

**Remarks**
* Occurrence of B provides no information about A's occurrence
* Equivalence due to $P(A\cap B) = P(B)\cdot P(A|B)$
* Symmetric with respect to $A$ and $B$.
* - applies even if $P(B) = 0$
* - implies $P(B|A) = P(B)$ and $P(A|B^c) = P(A)$
* Does not imply that A and B are disjoint, indeed opposite!
* - Two disjoint events are never independent!($P(A\cap B) = 0$, but $P(A)\cdot P(B)\ne 0$)

#### Conditional independence

$$
P(A\cap B | C) = P(A| C) \cdot P(B|C)
$$

**Definition**

Event $A_1, A_2, ..., A_n$ are called independent if: 

$$
P(A_i\cap A_j\cap ...\cap A_q) = P(A_1)P(A_j)...P(A_q)
$$

for any distinct indices $i, j, \dots q$ chosen from $\{1, \dots n\}$.

Pairwise is independence does not imply independence.

## Discrete Random Variables

Random Variable is neither random, nor variable.

### Definition

We care about the probability that $X \le x$ instead $X = x$ in the consideration of generality. 

**Random variables**

Given a probability space $(\Omega, F, P)$, a random variable is a function $X: \Omega \rightarrow \R$ with the probability that $\{\omega \in \Omega: X(\omega) \le x\} \in \mathcal F$ for each $x\in \R$. Such a function $X$ is said to be $\mathcal F$-measurable.

**Probability Mass Function(PMF)**

$$
p_X(x)=P(X=x)=P(\{\omega \in \Omega \text{ s.t. } X(\omega)=x\})
$$

Bonulli PMF: 

$$ 
p_X(k) = \begin{cases}
    p, &\text{if } k = 1\\
    1-p, &\text{if }k=0
\end{cases}
$$

Binomial PMF: $p_X(k)=\binom{n}{k}p^k(1-p)^{n-k}$

Geometric PMF: $p_X(k)=(1-p)^{k-1}p$

Poisson PMF: $p_X(k)=e^{-\lambda}\frac{\lambda^k}{k!}$. Note: $\sum_{k=0}^\infty e^{-\lambda}\frac{\lambda^k}{k!}=e^{-\lambda}e^\lambda=1$

If $y=g(x)$, $p_Y(y)=\sum_{\lbrace x|g(x)=y \rbrace} p(x)$.


### Expectation and Variance

**Expectation**

$$
E[X] = \sum_x xp_X(x)
$$

Note: we assume that the sum converges.

Properties:

$$
E[Y]=\sum_x g(x)p_X(x)\\
E[\alpha X + \beta] = \alpha E[X] + \beta
$$

**Variance**

$$
\text{var}(X) = E \left[(X-E[X])^2\right]=\sum_x (x-E[X])^2 p_X(x)
$$

Standard deviation: $\sigma_X=\sqrt{\text{var}(X)}$

Properties: 

$$
\text{var}(X) = E[X^2] -(E[X])^2\\
\text{var}(X)\ge 0\\
\text{var}(\alpha X + \beta) = \alpha^2\text{var} (X)
$$

**Bernoulli RV**

$$
p_X(k) = \begin{cases}
    p, &\text{if } k = 1\\
    1-p, &\text{if }k=0
\end{cases}\\
E[X] = p\\
E[X^2] = p\\
\text{var}(X) = p(1-p)
$$

**Discrete Uniform RV**


$$
p_X(k) = \begin{cases}
    \frac {1}{b-a+1}, &\text{if } k = a, a+1, ..., b\\
    1-p, &\text{otherwise}
\end{cases}\\
E[X] = \frac{a+b}{2}\\
\text{var}(X) = \frac{(b-a)(b-a+2)}{12}
$$

**Poisson RV**

$$
p_X(k)=e^{-\lambda}\frac{\lambda^k}{k!}\\
E[X] = \lambda\\
\text{var}(X)=\lambda
$$

### Conditional

$$
p_{X|A(x)} = P(X=x|A) = \frac{P(\{X=x\}\cap A)}{P(A)}
$$

$$
\sum_x p_{X|A}(x) = 1
$$

$$
E[X|Y=y] = \sum_x xp_{X|Y}(x|y)\\
E[g(X)|Y=y] = \sum_x g(x)p_{X|Y}(x|y)
$$

**Total expectation theorem**

$A_1, \dots, A_n$ is a partition of sample space

$$
P(B) = P(A_1)P(B|A_1) + \dotsb + P(A_n)P(B|A_n)\\
p_X(x) = P(A_1)p_{X|A_1}(x) + \dotsb + P(A_n)p_{X|A_n}(x)\\
E[X] = P(A_1)E[X|A_1] + \dotsb + P(A_n)E[X|A_n]
$$

We derive the expectation and variance use the theories above.

**Geometric PMF example**

$$
p_X(k) = (1-p)^{k-1}p, k = 1, 2, \dots\\
E[X] = \sum_{k=1}^\infty kp_X(k) = \sum_{k=1}^\infty k(1-p)^{k-1}p\\
E[X^2] = \sum_{k=1}^\infty k^2p_X(k) = \sum_{k=1}^\infty k^2(1-p)^{k-1}p\\
\text {var}(X) = E[X^2] - (E[X])^2
$$

However, the Geometric has a memoryless property.

$$
p_{X|X>1}(k) = \frac{P(\{X>1\}\cap \{X=k\})}{P(X>1)} = \frac{(1-p)^{k-1}p}{1-p} = (1-p)^{k-2}p
$$

Thus, 
$$
E[X] = P(X=1)E[X|X=1] + P(X>1)E[X|X>1]=p+(1-p)(E[1 + X])\\
\Rightarrow E[X] = 1/p\\
E[X^2] = P(X=1)E[X^2|X=1] + P(X>1)E[X^2|X>1] = p + (1-p)E[(1+X)^2]=p + (1-p)(1+2E[X]+E[X^2])\\
\Rightarrow E[X^2] = \frac{2-p}{p^2}\\
\Rightarrow\text{var} (X) = \frac{1-p}{p^2}
$$

### Multiple discrete random variables

**Joint PMFs**

$$
p_{X, Y}(x, y) = P(X = x, Y= y) = P(\{X(\omega) = x\}\cap \{Y(\omega) = y\})
$$

$$
\sum_x\sum_y p_{X, Y}(x, y) = 1
$$

**Marginal PMF**

$$
p_X(x) = \sum_y P(X=x, Y=y) = \sum_y p_{X, Y}(x, y)
$$

**Conditional PMF**

$$
p_{X|Y}(x|y) = P(X = x | Y = y) = \frac{p_{X, Y}(x, y)}{p_Y(y)}
$$

$$
\sum_x p_{X|Y}(x|y) = 1
$$

**Funcitons of multiple RVs**

$$
Z = g(X, Y)\\
p_Z(z) = \sum_{\lbrace (x, y)|g(x, y)=z \rbrace  } p_{X, Y}(x, y)
$$

**Expectations**

$$
E[g(X, Y)] = \sum_x\sum_y g(x, y)p(X, Y)(x, y)\\
E[g(X, Y, Z)] = \sum_x\sum_y\sum_z g(x, y, z)p(X, Y, Z)(x, y, z)
$$

$$
E[g(X,  Y)] \not\equiv g(E[X], E[Y])
$$

**linearity**

$$
E[\alpha X + \beta] = \alpha E[X] + \beta\\
E[X + Y + Z] = E[X] + E[Y] + E[Z]
$$

Let's calculate the Mean of Binominal RV.

$$
X_i=
\begin{cases}
    1, &\text{if success in trial } i,\\
    0, & \text{otherwise.}
\end{cases}\\
X = X_1 + X_2 + \dotsb X_n\\
E[X] = \sum_{i = 1}^n E[X_i] = np\\
\text{var}(X) = np(1-p)
$$

### Independence

**Independence**

$$
p_{X, Y}(x, y) = p_X(x) \cdot p_Y(y)
$$

if $X$ and $Y$ are independent:

$$
E[XY] = E[X]E[Y]\\
E[g(X)h(Y)] = E[g(X)]E[h(Y)]\\
\text{var}(X + Y) = \text{var}(X) + \text{var}(Y)
$$

**Conditional independence**

$$
p_{X, Y|A}(X, Y) = p_{X|A}(x) \cdot p_{Y|A}(y)
$$

## Continuous Random Variables


### Probability Density Function

* $f_X(x)\ge 0\text{ for all }x$
* $\int_{-\infty}^\infty f_X(x)\mathrm dx = 1$
* If $\delta$ is very small, then $P([x, x+\delta])\approx f_X(x) \cdot \delta$
* For any subset $B$ of the real line, $P(X\in B) = \int_B f_X(x)\mathrm d x$.

**Expectation**

$$
E[X] = \int_{-\infty}^\infty xf_X(x)\mathrm dx\\
E[g(x)] = \int_{-\infty}^\infty g(x)f_X(x)\mathrm dx
$$

Assuming that the integration is well-defined. The Cauchy distribution ($\frac{1}{1+x^2}$)doesn't have expectation since $\frac{x}{1+x^2}$ is not absolutely integrably.

**Variance**

$$
\text{var}(X) = E[(X - E[X])^2] = \int_{-\infty}^\infty(x - E[x])^2 f_X(x)\mathrm dx\\
0\le \text{var}(x) = E[X^2] - (E[X])^2
$$

**Uniform RV**

$$
f_X(x) = \begin{cases}
    \frac{1}{b-a}, &\text{if }a\le x\le b,\\
    0, &\text{otherwise.}
\end{cases}
$$

$$
E[X] = \frac{a+b}{2}\\
E[X^2] = \frac{a^2+b^2 + ab}{3}\\
\text{var}(X) = \frac{(b-a)^2}{12}
$$


Properties:

$$
E[aX+b] = aE[X] + b\\
\text{var}(aX+b) = a^2\text{var}(X)
$$

### Common Example for PDF

**Exponential Random Variable**

$$
f_X(x) = \begin{cases}
    \lambda e^{-\lambda x}, &\text{if }x \ge 0,\\
    0, &\text{otherwise.}
\end{cases}
$$

$$
P(X\ge a) = e^{-\lambda a}\\
E[X] = \frac{1}{\lambda}\\
\text{var}(X) = \frac{1}{\lambda^2}
$$

### Cumulative Distribution Functions

$$
F_X(x) = P(X\le x) = \begin{cases}
    \sum_{k\le x}p_X(k), &\text{if } X \text{ is discrete,}\\
    \int_{-\infty}^x f_X(t)\mathrm dt, &\text{if } X \text{ is continuous.}
\end{cases}
$$

**Properties**

$$
\text{if } x \le y, \text{then } F_X(x)\le F_X(y).\\
F_X(x)\text{ tends to 0 as } x \rightarrow -\infty, \text{and to 1 as} x \rightarrow \infty\\
\text{If } X \text{ is discrete, then } F_X(x) \text{ is a piecewise constant function of }x.\\
\text{If } X \text{ is continuous, then } F_X(x) \text{is a continuous funciton of }x.\\
\text{If } X \text{ is discrete and takes integer values, the PMF and the CDF can be obtained from each other by summing or differcing: }\\
F_X(k) = \sum_{i = -\infty}^k p_X(i),\\
p_X(k) = P(X\le k) - P(X \le k -1) = F_X(k) - F_X(k - 1),\\
\text{ for all integers }k.\\
\text{If } X \text{ is continuous, the PDF and the CDF can be obtained from each other by integration or differentiation: }\\
F_X(x) = \int_{-\infty}^x f_X(t)\mathrm dt, f_X(x) = \frac{\mathrm dF_X}{\mathrm dx}(x)
$$

### Examples for CDF

**Geometric CDF**

$$
F_{\text{geo}}(n) = \sum_{k = 1}^n p(1-p)^{k-1} = 1-(1-p)^n, \text{for } n = 1, 2, \dots
$$

**Exponential CDF**

$$
F_{\text{exp}}(x) = P(X\le x) = 0, \text{ for } x\le0,\\
F_{\text{exp}}(x) = \int_{0}^x \lambda e^{-\lambda t}\mathrm dt = 1 - e^{-\lambda x}, \text{for }x\ge 0.
$$

Exponential Distribution is Memoriless, like Geometric: 

$$
P(X \ge c + x| X \ge c) = e^{-\lambda x} = P(X \ge x)\\
$$

The relationship: 

![](../images/prob/L6_1.jpg)

### Normal Random Variables

$$
f_X(x) = \frac{1}{\sqrt{2\pi}\sigma}e^{-(x-\mu)^2/2\sigma^2}\\
E[X] =\mu\\
\text{var}(X) = \sigma^2
$$

Gaussian is good, since adding two Gaussian functions resulting in a new Gaussian functions. And with a huge mount of samples, the distribution is close to Gaussian(Central limit theorem).

**The Standard Normal Random Variable**

Normal(Gaussian)

$$
Y = \frac{X - \mu}{\sigma}\\
f_Y(y) = \frac{1}{\sqrt{2\pi}}e^{-y^2/2}\\
E[Y] = 0\\
\text{var}(Y) = 1\\
$$

The CDF of Normal Random Variable $\Phi(y)$ can not be derived directly, we can use the standard normal table to get the value.

$$
\Phi(-y) = 1 - \Phi(y)
$$

### Multiple Continuous Random Variables

**Joint PDFs**

The two continuous RVs X and Y, with the same experiment, are jointly continuous if they can be described by a joint PDF $f_{X, Y}$, where $f_{X, Y}$ is a nonnegative function that satisfies 

$$
P((X, Y) \in B) = \iint_{(x, y)\in B} f(X, Y)\mathrm d x\mathrm dy
$$

for every subset B of the two-dimensional plane. In particular, when B is the form $B = \{(x, y)|a\le x \le b, c\le y \le d\}$, we have

$$
P(a\le X \le b, c \le Y \le d) = \int_c^d\int_a^bf_{X, Y}(x, y)\mathrm dx\mathrm dy
$$

**Normalization** 

$$
\int_{-\infty}^\infty\int_{-\infty}^\infty f_{X, Y}(x, y)\mathrm dx\mathrm dy
$$

**Interpretation(Small rectangle)**

$$
P(a\le X \le a + \delta, c \le Y \le c + \delta) \approx f_{X, Y}(a, c)\cdot\delta^2
$$

**Marginal PDF
**
$$
P(X\in A) = P(X \in A, Y \in (-\infty, \infty)) = \int_A \int_{-\infty}^\infty f_{X, Y}(x, y)\mathrm dy\mathrm dx
$$

$$
f_X(x) = \int_{-\infty}^\infty f_{X, Y}(x, y)\mathrm dy\\
f_Y(y) = \int_{-\infty}^\infty f_{X, Y}(x, y)\mathrm dx
$$

**Joint CDF**

If X and Y are two RVs asscociated with the same experiment, then the joint CDF of X and Y is the function

$$
F_{X, Y}(x, y) = P(X\le x, Y\le y) = P(X\le x|Y\le y)P(Y\le y) = \int_{-\infty}^y\int_{-\infty}^x f_{X, Y}(u, v)\mathrm du\mathrm dv
$$

Conversely

$$
f_{X, Y}(x, y) = \frac{\partial^2F_{X, Y}}{\partial dx\partial dy}(x, y)
$$

**Expectations**

$$
E[g(X, Y)] = \int_{-\infty}^\infty\int_{-\infty}^\infty g(x, y)f_{X, Y}(x, y)\mathrm dx\mathrm dy
$$

If g is linear, of the form of $g(x, y) = ax + by + c$, then

$$
E[g(X, Y)] = aE[X] + bE[Y] + c
$$

X and Y are called independent if 

$$
f_{X, Y}(x, y) = f_X(x)f_Y(y)
$$

### Conditional and Independence

**Conditional PDFs**

Let X and Y be continuous RVs with joint PDF $f_{X, Y}$. For any $f_Y(y) \gt 0$, the conditional PDF of X given Y = y is defined by

$$
f_{X|Y}(x|y) = \frac{f_{X, Y}(x, y)}{f_Y(y)}
$$

Discrete case: 

$$
p_{X|Y}(x|y) = \frac{p_{X, Y}(x, y)}{p_Y(y)}
$$

By analogy, for fixed y would like: 

$$
P(x \le X \le x + \delta|Y = y) \approx f_{X|Y}(x|y)\cdot\delta
$$

But {Y = y} is a zero-probability event.

Let $B = \{y\le Y \le y + \epsilon\}$, for small $\epsilon > 0$. Then

$$
P(x \le X \le x + \delta|Y \in B) \approx \frac{P(x \le X \le x + \delta)}{P(y \le Y \le y + \epsilon)} \approx \frac{f_{X, Y}(x, y)\cdot\epsilon\delta}{f_Y(y)\cdot\epsilon} \approx f_{X|Y}(x|y)\cdot\delta
$$

Limiting case when $\epsilon \rightarrow 0$, to define conditional PDF where the denominator is a zero-probability event.

**Conditional Expectation**

The conditional expectation of X given that A has happened is defined by 

$$
E[X|A] = \int_{-\infty}^\infty xf_{X|A}(x)\mathrm dx
$$

For a function g, we have

$$
E[g(X)|A] = \int_{-\infty}^\infty g(x)f_{X|A}(x)\mathrm dx
$$

**Total expectation theorem**

Le $A_1, A_2, \dots A_n$ be disjoint events that form a partition of the sample space $\Omega$. And $P(A_i)\gt 0$ for all $i$. Then

$$
E[g(X)] = \sum_{i=1}^n P(A_i)E[g(X)|A_i]
$$

Conditional Expectation


The conditional expectation of X given that $Y = y$ has happened is defined by 

$$
E[X|Y=y] = \int_{-\infty}^\infty xf_{X|Y}(x|y)\mathrm dx
$$

For a function g, we have

$$
E[g(X)|Y=y] = \int_{-\infty}^\infty g(x)f_{X|Y}(x|y)\mathrm dx
$$

Total expectation theorem

$$
E[X] = E_{Y}\left[E_{X|Y}[X|Y]\right] = \int_{-\infty}^\infty E[X|Y = y]f_Y(y)\mathrm dy
$$

**Independence**

Two continuous RVs $X$ and $Y$ are independent if and only if

$$
f_{X, Y}(x, y) = f_X(x)f_Y(y)
$$

Independence is the same as the condition

$$
f_{X|Y}(x|y) = f_X(x)
$$

If $X$ and $Y$ are independent, then

$$
E[XY] = E[X]E[Y]\\
E[g(x)h(y)] = E[g(x)]E[h(y)], \forall g, h\\
\text{var}(X + Y) = \text{var}(X) + \text{var}(Y)\\
$$

### The continuous Bayes's rule


$$
f_{X|Y}(x, y) = \frac{f_X(x)f_{Y|X}(y|x)}{f_Y(y)}
$$

Based on the normalization property $\int_{-\infty}^\infty f_{X|Y}(x|y)\mathrm dx = 1$,

$$
f_{Y|X}(y|x) = \frac{f_X(x)f_{Y|X}(y|x)}{\int_{-\infty}^\infty f_X(t)f_{Y|X}(y|t)\mathrm dt}
$$

