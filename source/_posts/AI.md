---
title: Introduction to Artificial Intelligence
katex: false
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
