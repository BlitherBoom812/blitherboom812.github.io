---
title: Signal and Systems
date: 2023-02-22 09:46:36
tags: note
katex: true
---

March 15
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
\lim_{\Delta t\rightarrow 0}\frac{e(t)-e(t-\Delta t)}{\Delta t}\rightarrow \lim_{\Delta t\rightarrow 0}\frac{r(t)-r(t-\Delta t)}{\Delta t}\\
\frac{\mathrm de(t)}{dt}\rightarrow \frac{\mathrm dr(t)}{dt}
$$

If every coefficient is time independent, the system is time invariant.

## Time-Domain(TD) Analysis

$$
C_0\frac{d^nr(t)}{dt^n}+C_1\frac{d^{n-1}r(t)}{dt^{n-1}} + ... + C_nr(t)\\
=E_0\frac{d^me(t)}{dt^m}+E_1\frac{d^{m-1}e(t)}{dt^{m-1}}+...+E_me(t)
$$

**Three Steps**

* Homogeneous
* Particular
* Calculation on coefficients

### Determining Coefficients

If functions are continuous, we can get their boundary conditions by determining the derivatives.

Then the coefficients can be solved by multipling the inverse of Vandermonde matrix with the boundary condition matrix.

#### Zero-input and -state Responses

**Zero-input response** The response caused by the initial state (i.e., energy originally stored in the system), and it is denoted by $r_{zi}(t)$

**Zero-state response** $r(0_-)\equiv 0$, the response caused only by the external excitation and it is denoted by $r_{zs}(t)$

![](../images/ss/lec3_1.jpg)

![](../images/ss/lec3_2.jpg)

The combination of zero-input response and the zero-state response is not necessarily linear, since the existence of constant. If one of them vanishes, the other is linear.

### Impulse and Step Responses

**Impulse Response** the zero-state response $h(t)$ to $\delta (t)$, which can be equalized to the initial condition.

Note: normally $n>m$.

**Unit Step Response** The zero-state response $g(t)$ to $u(t)$

There might be a forced term in $g(t)$.

$$
g(t) = \int_0^th(\tau)d\tau
$$

### Convolution

Zero-state required

$$
e(t) = \int_{-\infty}^{\infty}e(\tau)\delta(t-\tau)\mathrm d\tau\\
\Rightarrow r(t)=\int_{-\infty}^{\infty}e(\tau)h(t-\tau)\mathrm d\tau\\
\Rightarrow r(t)=e(t)*h(t)
$$

the definition of convoluiton:

$$
f_1(t)*f_2(t)=\int_{-\infty}^{\infty}f_1(\tau)f_2(t-\tau)\mathrm d\tau
$$

**Integral interval** $e(t)=0, \forall t<0$, $h(t)=0,\forall t<0$, so $r(t)=\int_0^t{e(\tau)h(t-\tau)\mathrm d\tau}$

The condition for applying convolution:

* For linear system ONLY
* For time variant systems, $h(t, \tau)$ means response at time $t$ generated by the impulse at time $\tau$, then $r(t)=\int_0^th(t,\tau)e(\tau)\mathrm d \tau$; for time-invariant system is a special case, $h(t,\tau)=h(t-\tau)$.

**The Properties of Convolution** The commutative property, the distributive property, the associative property

Differential:

$$
(f_1(t)*f_2(t))^\prime=f_1^\prime(t)*f_2(t)
$$

Integral

$$
\int f_1(t)*f_2(t)=f_1(t) * \int f_2(t)
$$

$$
(f_1(t) * f_2(t))^{(i)}=f_1^{(j)}(t) * f_2^{(i-j)}(t)
$$

**Convolution with $\delta (t)$ or $u(t)$**

(1) $f(t) * \delta(t) = f(t)$

(2) $f(t) * \delta(t - t_0) = f(t-t_0)$

(3) $f(t) * u(t) = \int_{\infty}^{t}f(\tau)\mathrm d\tau$

(4) $f(t) * \delta^\prime(t) = f^\prime(t)$

## Fourier Transform

### Fourier Series

requirements:

* has finite number of discontinuities
* has finite number of maxima and minima
* $\int_{t_0}^{t_0+T_1} |f(t)|\mathrm dt < \infty$

$$
\begin{align*}
f(t)&=a_0+\sum_{n=1}^\infty \left[a_n\cos(n\omega_1)t + b_n\sin(n\omega_1t)\right]\\
&=c_0 + \sum_{n=1}^\infty c_n\cos \left(n\omega_1t+\varphi_n \right)\\
&=\sum_{n=-\infty}^{\infty}F_ne^{jn\omega_1 t}
\end{align*}
$$

$$
\begin{align*}
    a_0&=\frac{1}{T_1}\int_{t_0}^{t_0+T_1}f(t)\mathrm dt=c_0\\
    a_n&=\frac{2}{T_1}\int_{t_0}^{t_0+T_1}f(t)\cos(n\omega_1t)\mathrm dt\\
    b_n&=\frac{2}{T_1}\int_{t_0}^{t_0+T_1}f(t)\sin(n\omega_1t)\mathrm dt\\
    c_n&=\sqrt{a_n^2+b_n^2}\\
    \varphi_n&=-\tg^{-1}\frac{b_n}{a_n}\\
    F_n&=\frac 1{T_1}\int_{t_0}^{t_0+T_1}f(t)e^{-jn\omega_1t}\mathrm dt\\
    &=\frac 12e^{j\varphi_n}\\
    &=\frac 12(a_n-jb_n)
\end{align*}
$$

**note** When $b_n=0$, $\varphi_n = a_n > 0\ ?\ 0:\pi$

In the last part, the negative frequency is introduced for the convenience of the signal analysis. Therefore the amplitude is reduced to half.


**FS for special functions**

1. Even function $c_n=a_n, \varphi_n = 0, F_n=F_{-n}=\frac 12 a_n$
2. Odd function $a_0=0, a_n=0, \varphi_n=-\frac{\pi}{2}, F_n=F_{-n}=-\frac{1}{2}jb_n$
3. Half-wave Odd (odd harmonic) function, $f(t)=-f\left[t\pm \frac{T_1}2{}\right]$
4. Finite term series

### FS for typical periodic signals

**Periodic square wave**

$$
f(t)=\frac{E\tau}{T_1}+\sum_{n=1}^{\infty}\frac{2E\tau}{T_1}\text{Sa}(\frac{n\omega_1\tau}{2})
$$

1. Spectrum is discrete with frequency spacing $\omega_1 = \frac{2\pi}{T_1}$. When $T_1 \rightarrow \infty$, the spectrum will be continuous.
2. Amplitude: $\text{Sa}\left(\frac{n\pi\tau}{T_1}\right)$ or $\text{Sa} \left(\frac{n\omega_1\tau}{2}\right)$, cross zero when $\omega_1 = \frac{2m\pi}{\tau}$
3. Non-zero FS coefficients of a aperiodic signal are infinite with most energy concentrated at low frequency components (within $\left(-\frac{2\pi}{\tau},\frac{2\pi}{\tau}\right)$). Thus we define the bandwith $B_{\omega} = \frac{2\pi}{\tau}$

**Periodic symmetric square wave**

Since the spectrum crosses zero when $\omega_1 = \frac{2m\pi}{\tau}$, the even harmonic vanishes. Also the sine component vanishes.

$$
c_n = \frac{2E\tau}{T_1}\left|\text{Sa}\left(\frac{n\omega_1\tau}{2}\right)\right|\\
f(t) = \frac{2E}{\pi}\left[\cos(\omega_1t) - \frac{1}3\cos(3\omega_1t) + \frac{1}{5}\cos(5\omega_1t)-...\right]
$$

**Periodic Serrated Pulse**

$$
f(t) = \sum_{n = 1}^\infty \frac{E}{n\pi}(-1)^{n+1}\sin (n\omega_1t)
$$

**Periodic Triangular Pulse**

$$
f(t)=\frac E2 + \frac{4E}{\pi^2}\sum_{n=1}^\infty\frac{1}{n^2}\sin^2\left(\frac{n\pi}{2}\right)\cos(n\omega_1t)\\=\frac E2 + \frac{4E}{\pi^2}\sum_{n=1}^\infty\frac{1}{(2n-1)^2}\cos((2n-1)\omega_1t)
$$

**consine of non-negative values**

$$
f(t) = \frac E\pi - \frac{2E}{\pi}\sum_{n=1}^\infty\frac{1}{n^2-1}\cos(\frac {n\pi}2)\cos(n\omega_1t)
$$

**cosine of absoulute values**

$$
f(t) = \frac{2E}{\pi} + \frac{4E}{\pi}\sum_{n=1}^\infty (-1)^{n+1}\frac{1}{4n^2-1}\cos(2n\omega_0t)
$$

其中$\omega_0$ = 2$\omega_1$