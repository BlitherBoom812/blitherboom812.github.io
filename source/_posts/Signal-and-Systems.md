---
title: Signal and Systems
date: 2023-02-22 09:46:36
tags:
---

March 15
# Signal and Systems
## Basic
### Classification
Deterministic & random

Periodic/non-periodic

Continuous/Discrete(time)

Analog/Digital(Amplitude & time)

### Operations

Shifting

Reflection

Scaling

Diffrential

Integral

Addition

Multiplication

Convolution

$$
f_1(t) * f_2(t) = \int_{-\infty}^{\infty}f_1(\tau)f_2(t-\tau)\mathrm d\tau
$$

### Singularity Signals

#### Unit ramp function
$$
R(t) = 0, t\lt 0; t, t>0
$$
#### Unit step function
$$
u(t) = 0, t<0;1/2, t=0;1, t>0
$$
#### Rectangular pulse
$$
u(t) - u(t-t_0)
$$
#### Sign function
$$
sgn(t) = 1, t>0;-1, t<0
$$
define $sgn(0)=0$, then $sgn(t)=2u(t)-1$
#### Unit impulse function
Dirac definition
$$
\int_{-\infty}^{\infty}\delta(t)\mathrm dt=1\\
\delta(t)=0(t\ne 0)
$$
$$
\delta(t)=\lim_{\tau \rightarrow0}\left[U(t+\frac\tau2)-U(t-\frac \tau 2)\right]
$$

$$
\int_{-\infty}^{\infty}\delta(t)f(t)=f(0)\\
\int_{-\infty}^{\infty}\delta(t - t_0)f(t)=f(t_0)\\
\delta(t)=\delta(-t)\\
\frac{d}{dt}u(t)=\delta(t)
$$

#### Impulse doublet function

$\delta^\prime(t)$
Double impulses at t=0 which are mirror-imaged with their amplitude of infinite. 

$$
\int^{\infty}_{-\infty}\delta^\prime(t)\mathrm dt=0\\
\int^{\infty}_{-\infty}f(t)\delta^\prime(t)\mathrm dt=-f^{\prime}(0)\\
\text{shifted:}\int^{\infty}_{-\infty}f(t)\delta^\prime(t-t_0)\mathrm dt=-f^{\prime}(t_0)\\
$$
![](../images/ss/lec2_.jpg)
### Signal Decomposition

$$
f(t) = f_D+f_A(t)\\
f(t)=f_e(t)+f_o(t)\\
f(t)=f_r(t)+jf_i(t)\\
f_r(t)=\frac{1}{2}\left[f(t)+f^*(t)\right]\\
f_i(t)=\frac{1}{2}\left[f(t)-f^*(t)\right]
$$

#### Pulse Component

$$
f(t)=\int_{-\infty}^{\infty}f(t_1)\delta(t-t_1)\mathrm dt_1
$$

We also have orthogonal function decomposition(Chap.3, Chap.6).

### System modeling and Classification

System model can be represented by math equation(including input-output description and state variables or state equation) graphic symbol and block diagrams.

We use the input-output description mostly. If controling something internal is needed, state euqtion is useful.

Block diagram: 

![](../images/ss/lec2_2.jpg)
![](../images/ss/lec2_3.jpg)

### System classification

#### Linear or Non-linear

$$
e_1(t)\rightarrow r_1(t),
e_2(t)\rightarrow r_2(t)\Rightarrow\\
a_1e_1(t)+a_2e_2(t)\rightarrow a_1r_1(t)+a_2r_2(t)
$$

#### Time-variant or Time-invariant

#### Memory or Memoryless

with memory: dynamic system, differential equation

without memory: instant system, algebraic equation

#### Continuous or Discrete

Continuous  Differential equation

Discrete  Difference equation

#### Lumped- or Distributed-Parameter

Lumped: constant coefficient differential equation

Distributed: partial equation

#### Causal or Non-Causal

when $t<0, e(t)=0 \Rightarrow t<0, r(t)=0$ Generic definition?

the future state cannot have effect on now state. The state of causal system can only be determined by now and past states.

#### Reversible or irreversible

different input to different output, otherwise irreversible.

### LTI System

#### Linearity

Linearity leads to superposition and homogeneity.

#### Time-Invariant

a time shift in the input results in a same time shift in the output.

$$
e(t)\rightarrow r(t)\Rightarrow e(t-t_0)\rightarrow r(t-t_0)\\

\lim_{\Delta t\rightarrow 0}\frac{e(t)-e(t-\Delta t)}{\Delta t}\rightarrow \lim_{\Delta t\rightarrow 0}\frac{r(t)-r(t-\Delta t)}{\Delta t}
\\
\frac{\mathrm de(t)}{dt}\rightarrow \frac{\mathrm dr(t)}{dt}
$$

If every coefficient is time independent, the system is time invariant.