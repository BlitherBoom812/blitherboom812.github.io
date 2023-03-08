---
title: Introduction-to-Probability
date: 2023-02-20 21:05:41
tags: note
katex: true
---

# Probability

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