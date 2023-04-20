---
title: Signals and Systems
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
3. Half-wave Odd (odd harmonic) function, $f(t)=-f\left(t\pm \frac{T_1}2{}\right)$, contains only odd harmonics(both sine and cosine)
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

其中$\omega_0$ = $2\omega_1$

### Fourier Transform

The case where $T_1\rightarrow \infty$. Signal becomes aperiodic.

Also, $\omega_1\rightarrow 0$ results in the continuous frequency axis. For square wave the magnitude $\frac{E\tau}{T_1}\rightarrow 0$.

$$
f(t) =\sum_{n=-\infty}^{\infty}F(n\omega_1)e^{jn\omega_1 t}\\
F(n\omega_1) = \frac 1T_1\int_{-\frac {T_1}2}^{\frac {T_1}2}f(t)e^{-jn\omega_1t}\mathrm dt
$$

We use spectrum density to replace spectrum, making the magnitude dropping to zero remain its meaning.

$$
\frac{F(n\omega_1)}{\omega_1} = \frac{1}{2\pi}\int_{-\frac {T_1}2}^{\frac {T_1}2}f(t)e^{-jn\omega_1t}\mathrm dt\\
F(\omega) = \lim_{\omega_1\rightarrow 0}\frac{2\pi F(n\omega_1)}{\omega_1}=\lim_{T_1\rightarrow \infty}\int_{-\frac {T_1}2}^{\frac {T_1}2}f(t)e^{-jn\omega_1t}\mathrm d t=\int_{-\infty}^\infty f(t)e^{-j\omega t}\mathrm d t\\
f(t) = \sum_{n=-\infty}^{\infty}F(n\omega_1)\cdot \frac{1}{\omega_1}e^{jn\omega_1 t} \Delta(n\omega_1) = \frac{1}{2\pi}\int_{-\infty}^\infty F(\omega)e^{j\omega t}\mathrm d\omega
$$

$$
F(\omega) = |F(\omega)|e^{j\varphi(\omega)}
$$

The fourier transfrom is continuous waveform, where every frequency has no energy but energy density, used to analyse aperiodic function.

Sufficient condition, but not necessary.

$$
\int_{-\infty}^\infty |f(t)|\mathrm dt<\infty
$$

### FT for typical aperiodic signals

**Rectangular pulses**

$$
F(\omega) = \int_{-\tau/2}^{\tau/2} Ee^{-j\omega t}\mathrm dt = E\tau \text{Sa}\left(\frac{\omega \tau}{2}\right)
$$

**Raised Cosine Signal**

$$
f(t) = \frac{E}{2}(1+\cos\frac{\pi t}{\tau})(u(t+\tau) - u(t - \tau))\\
F(\omega) = \int_{-\tau}^{\tau}(1+\cos\frac{\pi t}{\tau})\mathrm dt = \frac{E\tau}{1 - \left(\frac{\omega \tau}{\pi}\right)^2}\text{Sa}({\omega \tau})
$$

More compacted than square signal($|F(\omega)|\propto \frac 1{\omega^3}$). An explanation is that the raised cosine has no discontinuities.

Generally:

1. $f(t)$ has discontinuities, $|F(\omega)|\propto \frac 1{\omega}$
2. $\frac{d}{dt}f(t)$ has discontinuities, $|F(\omega)|\propto \frac 1{\omega^2}$
3. $\frac{d^2}{dt^2}f(t)$ has discontinuities, $|F(\omega)|\propto \frac 1{\omega^3}$

The **width** $\tau$ of the raised cosine signal is defined at $\frac E2$ rather than at the bottom, making it easy to compare with 
     the rectangular pulse of same width. The first zeros of the 
   frequency spectrum are identical.


raised consine is energy-concentrative and has been widely used in digital communications.

**Single-sided exponential singal** 

$$
f(t) = e^{-at}u(t)\\
F(\omega) = \frac{1}{a+j\omega}
$$

**Two-sided, anti-symmetric exponential signal**

$$
f(t) = -e^{at}u(-t) + e^{-at}u(t)\\
F(\omega) = \frac{-2j\omega}{a^2+\omega^2}
$$

**Sign function**

$$
\text{sgn}(t) = u(t) - u(-t)\\
F(\omega) = \lim_{a\rightarrow 0}\frac{-2j\omega}{a^2+\omega^2}= \frac{2}{j\omega}
$$

**Gaussian singal**

$$
f(t) = Ee^{-\left(\frac{t}{\tau}\right)^2}\\
F(\omega) = \sqrt \pi E\tau e^{-\left(\frac{\omega\tau}{2}\right)^2}
$$

**Sinc Function**

$$
f(t) = \frac{E}{\pi}\frac{\sin(\omega_c t)}{t}\\
F(\omega) = E(u(\omega - \omega_c ) + u(\omega + \omega_c ))\\
$$


### FT on impulse and step functions

$$
\mathcal F[\delta(t)] = 1\\
\mathcal F[1] = 2\pi \delta(\omega)
$$

The spectrum of impulse function covers the entire frequency range. The interferences caused by a variety of electric sparks always cover the full frequency range.

$$
\mathcal F[\delta^\prime (t)]= j\omega\\
\mathcal F[\delta^{(n)}(t)] = (j\omega)^n
$$

$$
\mathcal F[u(t)] = \pi \delta(\omega) + \frac{1}{j\omega}
$$

Due to the DC component in u(t), an impulse exists.

### Properties of FT

**Symmetry** $\mathcal F[F(t)]= 2\pi f(-\omega)$ , if $f(t)$ is a even function, $\mathcal F[F(t)]= 2\pi f(\omega)$

**Linearity** $\mathcal{F}[\Sigma_{i=1}^{n}a_if_i(t)] = \Sigma_{i=1}^{n}a_iF_i(\omega)$

**Odd-Even, Imaginary-Real** $f(t) = f_e(t)+f_o(t)$, then

$$
\begin{align*}
  F(\omega) &= \int_{-\infty}^\infty f(t)\cos \omega t \mathrm dt -j\int_{-\infty}^\infty f(t)\sin \omega t \mathrm dt\\
  &=R(\omega)+jX(\omega)\\
  &=\int_{-\infty}^\infty f_e(t)\cos \omega t \mathrm dt -j\int_{-\infty}^\infty f_o(t)\sin \omega t \mathrm dt\\
\end{align*}.
$$

$R(\omega)$ is an even function of $\omega$, $X(\omega)$ is an odd function of $\omega$.

$|F(\omega) = \sqrt{R^2(\omega)+F^2(\omega)}|$ is even function.

$\varphi(\omega) = \tg^{-1}\frac{R(\omega)}{X(\omega)}$

if $f(t)$ is real and even, then $f(t)=f_e(t), F(\omega)=R(\omega)$, the phase shift is $0$ or $\pi$.

if $f(t)$ is real and odd, $f(t) = f_o(t)$, then $F(\omega)=jX(\omega)$, $F(\omega)$ has only imaginary part and is odd, the phase shift is $\pm \frac{\pi}{2}$

**Scaling** $\mathcal{F}[f(at)]=\frac 1{|a|}F\left(\frac{\omega}a\right)$ Expansion in TD results in Compression in FD.

**Time Shifting** $\mathcal{F}[f(t\pm t_0)] = F(\omega)e^{\pm j\omega t_0}$

**Frequency Shifting** $\mathcal F[f(t)e^{\pm j\omega_0t}] = F(\omega\mp\omega_0)$

**Differentiation property**$\mathcal F\left[\frac{\mathrm d}{\mathrm dt}f(t)\right] = j\omega F(\omega)$

$\mathcal F\left[\frac{\mathrm d^n}{\mathrm dt^n}f(t)\right] = (j\omega)^n F(\omega)$

$\mathcal F\left[\frac{\mathrm d^n}{\mathrm d\omega^n}F(\omega)\right] = (-jt)^nf(t)$


**Integration Property** $\mathcal{F}\left[\int_{-\infty}^t f(\tau)\mathrm{d} \tau\right] = \frac{F(\omega)}{j\omega} + \pi F(0)\delta(\omega)$

### Convolution theorem

$$
\mathcal F[f_1(t)* f_2(t)] = F_1(\omega)F_2(\omega)\\
\mathcal F[f_1(t)\cdot f_2(t)] = \frac 1{2\pi} F_1(\omega) * F_2(\omega)
$$

### FT for Periodic Signals

$$
\mathcal F[\cos (\omega_0 t)] = \pi [\delta(\omega + \omega_0) + \delta(\omega - \omega_0)]\\
\mathcal{F} [\sin (\omega_0 t)] = j\pi [\delta(\omega+\omega_0) + \delta(\omega - \omega_0)]
$$

FT for periodic of $T_1$ & $\omega_1=2\pi/T_1$

$$
\mathcal F[f(t)] = 2\pi\sum_{n=-\infty}^{+\infty} F_n\delta(\omega - n\omega_1)\\
F_n = \frac 1{T_1}\int_{-T_1/2}^{T_1/2}f(t)e^{-jn\omega_1 t}\mathrm dt = \frac{1}{T_1}F_0(\omega)\vert_{\omega =n\omega_1}
$$

Where $F_0(\omega)$ is the FT considering waveform of $f(t)$ only in $|t|\le T_1/2$.

example: 

$$
f(t) = \sum_{n=0}^{\infty}\delta(t-nT_1), F_n=\frac{1}{T_1}\\
F(\omega) = \frac{2\pi}{T_1}\sum_{n=0}^{\infty}\delta(\omega - n\omega_1)=\omega_1\sum_{n=0}^{\infty}\delta(\omega - n\omega_1)
$$

$$
F_0(ω) \text{ determines the profile of } F(ω)\\
T_1\text{ determines the density of the impulses
}\\
T_1↑, ω_1↓\text{, intensity of harmonics}↓\\
T_1↓,ω_1↑\text{, intensity of harmonics}↑\\
$$

![](../images/ss/lec7_1.jpg)

In the same way: 

![](../images/ss/lec7_2.jpg)

### FT for periodically sampled signals

$$
F(\omega) = \mathcal F[f(t)]\\
P(\omega) = \mathcal F[p(t)]\\
f_s(t) = f(t)p(t)\\
F_s(\omega) =\frac{1}{2\pi} F(\omega) * P(\omega)
$$

Then, 

$$
P(\omega) = 2\pi \sum_{n = -\infty}^{+\infty} P_n\delta(\omega - \omega_s)\\
F(\omega) * P(\omega) = 2\pi \sum_{n = -\infty}^{+\infty} P_nF(\omega - n\omega_s)\\
F_s(\omega) = \sum_{n = -\infty}^{+\infty} P_nF(\omega - n\omega_s)
$$

![](../images/ss/lec7_3.jpg)

For the frequency-domain sampling: 

$$
F_1(\omega) = F(\omega)P(\omega)\\
P(\omega) = \sum_{n=-\infty}^{+\infty} \delta(\omega - n\omega_1)\\
f_1(t) = f(t) *  \frac{1}{\omega_1}\sum_{n=-\infty}^{+\infty} \delta(t - nT_1) = \frac{1}{\omega_1}\sum_{n=-\infty}^{\infty} f(t-nT_1)
$$

**The Sampling Theorem**

$$
\omega_s \ge 2\omega_m
$$

A band-limited signal whose spectrum is strictly within $[0, f_m]$ could be uniquely determined by the samples on itself, if and only if the sampling interval $T_s \le 1/(2f_m)$.

$T_s = \frac{1}{2f_m}$ is called the **Nyquist interval**.

$2f_m$ is called the **Nyquist frequency**.

对于单频信号，奈奎斯特频率的采样可能会出现问题。例如正弦信号，每次采样都采在零点上，那就没法复现信号。单频信号没法描述带宽。

A FD verison:

![](../images/ss/lec7_4.jpg)



## L Transform

### Unilateral L-transform

$$
F(s) = \int^{\infty}_{0}f(t)e^{-st}\mathrm dt, s=\sigma+j\omega\\
f(t)=\frac{1}{2\pi j}\int_{\sigma-j\infty}^{\sigma+j\infty}F(s)e^{st}\mathrm ds
$$

$F(s) = \mathcal{L}[f(t)]$ is called image function, $f(t) = \mathcal{L}^{-1}[F(s)]$ is called primitive function.

assuming that $f(t)$ is causal and always 0 if $t<0$.

$$
\mathcal L \left[\frac{\mathrm df(t)}{\mathrm dt}\right] = -f(0) + sF(s)
$$

The initial state is automatically included in differential equation.

We define the **unilateral** L-Transform as: 

$$
F(s) = \int_{0_-}^{\infty}f(t)e^{-st}\mathrm dt\\
\mathcal L \left[\frac{\mathrm df(t)}{\mathrm dt}\right] = -f(0_-) + sF(s)
$$

Conditions for L-Transform: 

1. Limited discontinuities
2. Exponential order

The strong attenuation factor can make the function convergent.

Region of Convergence (ROC)

Axis of convergence

Coordinate of convergence $\sigma_0$

### Comman LT Pairs

$$
\begin{align*}
f(t)&\Rightarrow F(s)\\  
\delta(t) &\Rightarrow 1\\
u(t) &\Rightarrow \frac 1s\\
e^{-at} &\Rightarrow \frac{1}{s+a}\\
t^n & \Rightarrow \frac{n!}{s^{n+1}}\\
\sin (\omega t)&\Rightarrow \frac{\omega}{s^2 + \omega^2}\\
\cos (\omega t)&\Rightarrow \frac{s}{s^2+\omega^2}\\
\end{align*}
$$

### Properties of LT

**Linarity**

$$
\mathcal L [k_1f_1(t) + k_2f_2(t)] = k_1F_1(s) + k_2F_2(s)\\
$$

**Differentiation**

$$
\mathcal L \left[\frac{\mathrm d f(t)}{\mathrm d t}\right] = sF(s) - f(0_-)
$$

**Intergration**

$$
\mathcal L\left[\int_{-\infty}^t f(\tau)\mathcal d\tau\right]=\frac{F(s)}{s} + \frac{f^{(-1)}(0)}{s}
$$

**Time Shifting**

$$
\mathcal L\left[f(t-t_0)u(t-t_0)\right] = e^{-st_0}F(s)
$$

Use $u(t-t_0)$ to avoid nagative part of $f(t)$ emerges.

**Frequency Shifting**

$$
\mathcal L[f(t)e^{-at}] = F(s+a)
$$

**Scaling**

$$
\mathcal L[f(at)] = \frac 1a F\left(\frac{s}{a}\right)
$$

**s-Domain Differentiation**

$$
\frac{\mathrm d}{\mathrm ds}\mathcal L[f(t)] = \mathcal L[-tf(t)]
$$

**s-Domain Differentiation**

$$
\int_s^\infty F(s) = \mathcal{L}\left[\frac{f(t)}{t}\right]
$$

**Initial value**

$$
f(0_+) = \lim_{s\rightarrow\infty}sF(s)
$$

**Final value**

$$
\lim_{t\rightarrow\infty} f(t) = \lim_{s\rightarrow0} sF(s)
$$

Generalized limit: $\lim_{t\rightarrow\infty} \sin(\omega t)=0$

**Convolution**

$$
\mathcal L[f_1(t)*f_2(t)] = F_1(s)F_2(s)
$$

### Applications

**Differential Equations**

$$
  F(s) = \frac{A(s)}{B(s)} = \frac{a_ns^n + a_{n-1}s^{n-1} + \cdots + a_1s + a_0}{b_ms^m + b_{m-1}s^{m-1} + \cdots + b_1s + b_0} % The division of two polynomials
$$

(assume that $n<m$)

The roots of numerator is called zeros, while the roots of denominator is called poles.

Unknown function F(s) can be represented by the ratio of two polynomials if all initial states are 0.

1. real poles

$$
F(s) = \frac{A(s)}{(s-p_1)(s-p_2)(s-p_3)}
$$

2. complex conjugate poles

$$
F(s) = \frac{A(s)}{D(s)[(s+\alpha)^2 + \beta^2]} = \frac{F_1(s)}{[(s+\alpha)^2 + \beta^2]} = \frac{F_1(s)}{(s+\alpha - j\beta)(s+\alpha + j\beta)} + \dots
$$

$$
k_1 = (s+\alpha - j\beta)F(s)|_{s = -\alpha + j\beta} = \frac {F_1(-\alpha + j\beta)}{2j\beta}\\
k_2 = (s+\alpha + j\beta)F(s)|_{s = -\alpha - j\beta} = \frac {F_1(-\alpha - j\beta)}{-2j\beta}
$$

3. Multiple poles

$$
F(s) = \frac {A(s)}{B(s)} = \frac{A(s)}{(s-p_1)^k D(s)}\\
= \frac{K_{11}}{(s-p_1)^k}+\frac{K_{12}}{(s-p_1)^{k-1}}+\dotsb+\frac{K_{1k}}{s-p_1} + \frac{E(s)}{D(s)}(s-p_1)^k
$$

![](../images/ss/lec9_1.jpg)

![](../images/ss/lec9_2.jpg)


Circuit model:

![](../images/ss/lec9_3.jpg)

![](../images/ss/lec9_4.jpg)

![](../images/ss/lec9_5.jpg)

Use initial value and final value to verify it.

### System Function

$$
\begin{cases}
  R(s) = H(s) \cdot E(s)\\
  r(t) = h(t) * e(t)
\end{cases}
\Rightarrow H(s) = L[h(t)]
$$

**Driving point function & transfer function**

![](../images/ss/lec9_6.jpg)

L-transform can be used in the following analysis:

* TD characteristics (response decomposition)
* FD characteristics (steady-state with sine signal input,applications such as filtering) 
* Stability (active network, feedback, oscillator, control system)


### TD characteristics by 0-point distribution

Three cases: 

* Real poles
* Complex conjugate poles
* Real pole of high-order

1. Zero pole of H(s)



![](../images/ss/lec10_1.jpg)

![](../images/ss/lec10_2.jpg)

Zero only affects the phase and amplitude, while the shape and type of waveform is determined by the poles.

2. pole distribution $\Leftrightarrow$ corresponding natural/forced responses

$$
H(s) = \frac{\prod_{i = 1}^m(s-z_{hj})}{\prod_{i = 1}^n(s-p_{hi})}\\
E(s) = \frac{\prod_{i = 1}^u(s-z_{el})}{\prod_{i = 1}^v(s-p_{ek})}\\
\text{if } m + u < n + v\\
R(s) = E(s)H(s) = \sum_{k=1}^n\frac{K_{hk}}{s - p_{hk}} + \sum_{k=1}^v\frac{K_{ek}}{s-p_{ek}}
$$

The natural response of $r(t)$ is only related to $p_{hk}$, while the forced response is only related to $p_{ek}$.

$K_{hk}$, $K_{ek}$ are related to both $H(s)$ and $E(s)$.

However natural and forced responses could not be completely separated, if there exists $k, k^\prime$ satisfying $p_{hk}=p_{ek^\prime}$.

$p_{hi}$ are called natural frequency of the system.

However, some common factors may be eliminated: 

$$
\frac{(s+1)}{(s+1)(s+2)} = \frac{1}{(s+2)}
$$

$$
H(s) = \frac{\Delta_{jk}}{\Delta}
$$

All the poles of $H(s)$ are the natural frequencies of the system, but $h(t)$ may not include all the natural frequencies(but the root of $\Delta$ contains all natural frequencies).

In most cases:

$$
\text{Re}(p_{hi}) < 0, \text{Re}(p_{ei}) = 0
$$

Thus the natural response is transient, while the forced response is steady-state.

However, some natural response can be steady-state(conjugate poles of $Re(p_{hi})$), while some forced response can be transient.

![](../images/ss/lec10_3.jpg)

![](../images/ss/lec10_4.jpg)

![](../images/ss/lec10_5.jpg)

$$
E_m|H(j\omega)|\sin (\omega_0t + \varphi_0)
$$

$$
H(j\omega) =K\cdot \frac{\prod(j\omega - z_j)}{\prod (j\omega - p_i)}
$$

![](../images/ss/lec10_7.jpg)

![](../images/ss/lec10_6.jpg)

![](../images/ss/lec10_8.jpg)

for band-pass filter, 

BW is where Peak(dB) - 3dB

for low-pass filter,

BW = $f_{\text{cut-off}}$

According to the sampling theorem, the signal bandwith is often determined by the first zero of the spectrum.

**All Pass Systems**

$$
R_e(p_i) = -R_e(z_i)\\
I_m(p_i) = I_m(z_i)
$$

The Amplitude is const., while the phase can change.

**Minimum-phase system/function**

Definition: A stable system with poles on left-half s-plane is called minimum-phase system/function, if all the zeros are also on left-half s-plane or at the jω-axis. Otherwise is a non-minimum-phase system/function. 
![](../images/ss/lec11_1.jpg)


Property: A non-minimum-phase function can be represented as the product of  a minimum-phase function and an all-pass function.

### Stability of Linear System

A system is considered to be stable if bounded input always leads to bounded output.

Bounded-input, Bounded-output(BIBO)

The necessary & sufficient conditions for BIBO:

$$
\int_{-\infty}^\infty|h(t)|\mathrm dt \le M
$$

Poles are: 

* on the left half-plane: $\lim_{t\rightarrow \infty}[h(t)] = 0$, stable system
* on the right half-plane, or at $j\omega$-axis with order of more than one: $\lim_{t\rightarrow \infty}[h(t)] = \infty$, unstable system
* at $j\omega$-axis with order of one: $h(t)$ is non-zero or oscillated with equal amplitude, critical stable system

### Two-sided (Bilateral) LT

$$
F_B(s) = \int_{-\infty}^\infty f(t)e^{-st}\mathrm{d} t
$$

 * t starts from −∞, i.e., non-causal signal as the input
       or regarding the initial condition as the input.
*  Easily to be associated with F-transform and Z-   
       transforms

We determine the ROC by:

$$
\lim_{t\rightarrow \infty} f(t)e^{-\sigma t} = 0\\
\lim_{t\rightarrow -\infty} f(t)e^{-\sigma t} = 0
$$

NOTE: 

* If no overlap between the two constraints, then $F_B(s)$ does not exist.
* $F_B(s)$ and $f(t)$ are not uniquely corresponding to each other.($\int_{-\infty}^\infty u(t)e^{-st}\mathrm{d} t = \frac{1}{s}$, $\int_{-\infty}^\infty -u(-t)e^{-st}\mathrm{d} t=\frac{1}{s}$)
* Two-sided L-Transform shares almost all the properties with its single-sided counterpart except for the initial-value theorem.
* Two-sided L-Transform has very limited applications as most continuous-time systems are causal.

**Relationship between LT and FT **

* $\sigma_0 > 0$, $F(\omega)$ does not exist
* $\sigma_0 = 0$, impulse appears in $F(\omega)$
* $\sigma_0 < 0$, $F(\omega)$ exists, $F(\omega) = F(s)|_{s=j\omega}$

![](../images/ss/lec11_2.jpg)
(The LT above is unilateral LT.)


![](../images/ss/lec11_3.jpg)

### Extra Attention

$1 + e^{-s}$ also has zero(many!). Note that if it is on the denominator.

## FT in Telecom. Systems

System discussed in this chapter are strictly stable: 

$$
\mathcal{F}[f(t)] = F(s)|_{s=j\omega}
$$

Because even for critical stable system, FT is not  the same as LT(containing $\delta$), there will be ambiguity between $H(j\omega)$ and $H(s)|_{s=j\omega}$.

For every freq. component, it is reshaped in its phase and amplitude by the system function when passing through the system, related with its frequency. Thus the system can distort the original signal.

**Distortion**

2 types of distortion:

* Non-linear distortion (new frequency components)
* Linear distortion (without new frequency components), just the amplitude and/or phase distortion.

 **Distortionless transmission**

$$
e(t)\rightarrow ke(t - t_0)
$$

$$
R(j\omega) = \int_{-\infty}^\infty ke(t -t_0)e^{-j\omega t}\mathrm dt=ke^{-j\omega t_0}\int_{-\infty}^\infty e(x)e^{-j\omega x}\mathrm dx=ke^{-j\omega t_0} E(j\omega)
$$

So, $H(j\omega) = ke^{-j\omega t_0}$, $h(t)=K\delta(t - t_0)$.

The Amplitude is frequency independent, $BW\rightarrow \infty$.

Phase response is linear at negative slope.

The impulse response of a distortionless linear system is  
     also an impulse.

The physical scenario: group delay.

$$
\tau = -\frac{\mathrm d\varphi (\omega)}{\mathrm d\omega}
$$

Condition for phase distortionless property: the group delay remains a constant.

### Filter

**Ideal Low pass (LP) Filter**

$$
H(j\omega) = \begin{cases}
  1 \cdot e^{-j\omega t_0}, &|\omega|< \omega_c,\\
  0, &|\omega|> \omega_c.
\end{cases}
$$

![](../images/ss/lec12_1.jpg)

**The Impulse response of Ideal LP**

![](../images/ss/lec12_2.jpg)

* Severe distortion. $BW_{\delta(t)}\rightarrow \infty$, but $BW_{\text{Lowpass}}=\omega_c$, the higier frequency is eliminated.
* Non-causal. When $t\lt 0$, $h(t)\ne 0$.

**Unit-step response of Ideal LP**

![](../images/ss/lec12_3.jpg)

![](../images/ss/lec12_4.jpg)

![](../images/ss/lec12_5.jpg)

The response is similar to the input if $\frac{1}{2}=\frac{\pi}{\omega_c}\llless \tau$. 

**Gibbs phenomenon**: 9% overshoot at discontinuity. Use other window functions can eliminate this, e.g. raised-cosine window.

### Modulation and demodulation

Means of modulation:

**Spectrum shifting** 

$f(t) = g(t)\cos(\omega_0t)$, $F(\omega) =\frac{1}{2\pi} G(\omega) * \pi[\delta(\omega - \omega_0) + \delta (\omega + \omega_0)] = \frac{1}{2}[G(\omega + \omega_0) + G(\omega - \omega_0)]$.

![](../images/ss/lec12_6.jpg)

Demodulation: 

**coherent demodulation**

$g_0(t)=[g(t)\cos(\omega_0 t)]\cos(\omega_0t) = \frac{1}{2}g(t) + \frac{1}{2}g(t)\cos2\omega_0t$

![](../images/ss/lec12_7.jpg)

**Envelope Detection**

![](../images/ss/lec12_8.jpg)

### Applications of BPF

**Window Function**
(Page 304)
$$
h_a(t) = \frac{\sqrt a \sin\left(\frac{\pi t}{a}\right)\cos \left(\frac{3\pi t}{a}\right)}{\sqrt{ \pi} \pi t}\\
H_a(\omega) = \begin{cases}
  \frac{1}{2}\sqrt{\frac{a}{\pi}}, \text{if } \frac{2\pi}{a}\le |\omega| \le \frac{4\pi}{a},\\
  0, \text{otherwise}.
\end{cases}
$$

![](../images/ss/lec13_1.jpg)

### Recover Continuous Time signal from its Samples

**Analysis on signal after band-pass filter**

Page 301

**Sampling with impulse func.**

FD analysis:

Sampled signal(By impulse function):

$$
F_s(\omega) = \frac{1}{T_s}\sum_{n=-\infty}^\infty F(\omega - n\omega_s)
$$

Ideal LP Filter:

$$
H(j\omega) = \begin{cases}
  T_s, &|\omega|< \omega_c,\\
  0, &|\omega|> \omega_c.
\end{cases}
$$

Recovered signal: 

$$
F(\omega) = F_s(\omega) \cdot H(\omega)
$$

TD analysis:

Sampled signal:

$$
f_s(t) = \sum_{n=-\infty}^\infty f(nT_s)\delta(t - nT_s)
$$

Ideal LP Filter:

$$
h(t) = T_s\frac{\omega_c}\pi \text{Sa}(\omega_c t)
$$

Recovered signal:

$$
f(t) = f_s(t) * h(t) = T_s\frac{\omega_c}\pi  \sum_{n=-\infty}^\infty f(nT_s) \text{Sa}(\omega_c (t-nT_s))
$$

![](../images/ss/lec14_1.jpg)

![](../images/ss/lec14_2.jpg)

**Sampling with a zero-order hold**

![](../images/ss/lec14_3.jpg)

$$
h_0(t) = u(t) - u(t - T_s)\\
f_{s0}(t) = f_s(t)* h_0(t)
$$

$$
\begin{align*} 
&\mathcal F\{f_{s0}(t)\} \\&=\mathcal F\{f_s(t)\} \cdot \mathcal F\{h_0(t)\} \\ &=F_s(\omega) \cdot H_0(\omega)\\
&=\sum_{-\infty}^{\infty}F(\omega - n\omega_s) \cdot  \text{Sa}(\frac{\omega_c T_s}{2})e^{-j\frac{\omega T_s}{2}}\\
\end{align*}
$$

LP Filter for compensation

$$
H_{0r}(\omega) = \begin{cases}
  \frac{1}{\text{Sa}(\frac{\omega T_s}{2})}e^{j\omega T_s/2}, &|\omega| \le \omega_s/2,\\
  0, &|\omega|> \omega_s/2.
\end{cases}
$$

Linear phase response is OK! No needed for delay compensation. 

**1st-order hold Sampling**

![](../images/ss/lec14_4.jpg)

### Mulitplexing FDM and TDM

Transmit mulitple singals over a single channel concurrently.

Frequency Division Multiplexing (FDM) － OFDM (Orthogonal FDM)

Time Division Multiplexing (TDM)－sharing slot, statistical multiplexing

Code Division Multiplexing (CDM)－ Code division, logical multiplexing

Wavelength Division Multiplexing (WDM)－ Optical carrier

![](../images/ss/lec14_5.jpg)

![](../images/ss/lec14_6.jpg)

![](../images/ss/lec14_7.jpg)

## Orthogonal decomposition of signals

### Vector Space

![](../images/ss/lec15_1.jpg)

![](../images/ss/lec15_2.jpg)

![](../images/ss/lec15_3.jpg)

![](../images/ss/lec15_4.jpg)

![](../images/ss/lec15_5.jpg)

### Objective for singal decomposition

$$
r(t) = H[e(t)] = H\left[\sum_{i=0}^ne_i(t)\right] = \sum_{i=0}^nH[e_i(t)]
$$

### Basics

**Orthogonal Vector**

![](../images/ss/lec15_6.jpg)

**Orthogonal Function**

Represend $f_1(t)$ in terms of $f_2(t)$(both real), for $t_1<t<t_2$

$$
f_1(t)\approx c_{12}f_2(t)
$$

Residual error $\overline{\varepsilon^2} = \overline{f_e^2(t)} = \frac{1}{t_2 - t_1}\int_{t_1}^{t_2}[f_1(t) - c_{12}f_2(t)]^2\mathrm dt$

Let $\frac{\mathrm d \overline{\varepsilon^2}}{\mathrm d c_{12}} = 0$, then $\overline{\varepsilon^2}$ is minimized.

The coefficient can be determined as

$$
c_{12} = \frac{\int_{t_1}^{t_2}f_1(t)f_2(t)\mathrm dt}{\int_{t_1}^{t_2}f_2^2(t)\mathrm dt} = \frac{\langle f_1, f_2\rangle}{\langle f_2, f_2\rangle}
$$

If $c_{12} = 0$, then $f_1(t), f_2(t)$ are called **Orthogonal Functions**.

And 

$$
\int_{t_1}^{t_2}f_1(t)f_2(t)\mathrm dt = 0
$$

**Orthogonal Function Set**

Any real function $f(t)$ can be represented as the sum of $n$-D orthogonal real functions.

$$
f(t) = \sum_{r=1}^n c_rg_r(t)
$$

According to the minimal mean square error, the coefficient can be determined as

$$
c_r = \frac{\int_{t_1}^{t_2}f(t)g_r(t)\mathrm dt}{\int_{t_1}^{t_2}g_r^2(t)\mathrm dt} = \frac{\langle f, g_r\rangle}{\langle g_r, g_r\rangle}
$$

If $g_1(t), g_2(t), ..., g_n(t)$ are orthogonal to each other, i.e.

$$
\int_{t_1}^{t_2}g_r(t)g_s(t)\mathrm dt =\begin{cases}
  K_i, &r = s,\\
  0, &r \ne s
\end{cases}
$$

Then $f(t)$ can be represented as the sum of $n$-D orthogonal real functions.

Then $g_1(t), g_2(t), ..., g_n(t)$ are called **Orthogonal Function Set**.

If $\int_{t_1}^{t_2}g_i^2(t)\mathrm dt = 1$, the orthogonal function set is called **Orthonormal Function Set**.

**Orthogonality of Complex Function**

$$
c_{12} = \frac{\int_{t_1}^{t_2}f_1(t)f_2^*(t)\mathrm dt}{\int_{t_1}^{t_2}f_2(t)f_2^*(t)\mathrm dt} = \frac{\langle f_1, f_2^*\rangle}{\langle f_2, f_2^*\rangle}
$$

**Orthogonal Function Set** satisfies

$$
\int_{t_1}^{t_2}g_r(t)g_s^*(t)\mathrm dt =\begin{cases}
  K_i, &r = s,\\
  0, &r \ne s
\end{cases}
$$

The definition of Orthogonal is

$$
\int_{t_1}^{t_2}f_1(t)f_2^*(t)\mathrm dt = \int_{t_1}^{t_2}f_2(t)f_1^*(t)\mathrm dt = 0
$$

NOTE:

* If two signals are orthogonal within a given interval, they are not necessarily orthogonal within other intervals.

* If two signals are not orthogonal, they must be correlated.

### Complete Orthogonal Function and Parseval's Theorem

**Complete Orthogonal Funtion Set**

$$
\overline{\varepsilon^2} = \frac{1}{t_2-t_1}\left[\int_{t_1}^{t_2}f^2(t)\mathrm dt  - \sum_{r = 1}^nc_r^2K_r\right]
$$

If $\lim_{t_2 \to \infty}\overline{\varepsilon^2} = 0$, then $\{g_r(t)\}$ is said to be a **Complete Orthogonal Function Set**.

Alternative definition of complete orthogonal set

Other than the elements in $\{g_r(t)\}$, there is no finite-energy signal $x(t)$, which satisfies

$$
\int_{t_1}^{t_2}x(t)g_r(t)\mathrm dt = 0, \forall r\\
\text{or } \int_{t_1}^{t_2}x(t)g_r^*(t)\mathrm dt = 0, \forall r
$$


Trigonometric Set

$$
\left\{\cos n\omega_1 t\right\}_{n\rightarrow\infty}\\
\left\{\sin n\omega_1 t\right\}_{n\rightarrow\infty}
$$

Complex exponential set

$$
\left\{e^{jn\omega_1 t}\right\}_{n\rightarrow\infty}
$$

**Parseval's Theorem**

$$
\int_{t_1}^{t_2}f(t)^2\mathrm dt = \sum_{r=1}^\infty c_r^2K_r = \sum_{r=1}^\infty\int_{t_1}^{t_2}[c_rg_r(t)]^2\mathrm dt
$$

Physical interpretation:

The energy (power) of a signal always equals to the sum of the energy (power) of all its components in a complete orthogonal function set. 

Mathematical interpretation:

The norm of vector signals keeps invariant under orthogonal transform.

### Correlation

Physical interpretation:

Gauge of the similarity of two signals 

**Energy and Power Signals**

Instaneous Power $p(t) = i^2(t) R$

The energy consumed by $R$ in a period

$$
E = \int_{-T_0/2}^{T_0/2}p(t)\mathrm dt = R\int_{-T_0/2}^{T_0/2}i^2(t) \mathrm dt
$$

Average Power:

$$
P = \frac{1}{T_0}\int_{-T_0/2}^{T_0/2}p(t)\mathrm dt = \frac{1}{T_0}R\int_{-T_0/2}^{T_0/2}i^2(t) \mathrm dt
$$

The energy signals and power signals:

$$
E = \lim_{T_0 \to \infty}\int_{-T_0/2}^{T_0/2}f^2(t)\mathrm dt\\
P = \lim_{T_0 \to \infty}\frac{1}{T_0}\int_{-T_0/2}^{T_0/2}f^2(t)\mathrm dt
$$

**Correlation Coefficient**

$$
\rho_{12} = \frac{\int_{t_1}^{t_2}f_1(t)f_2^*(t)\mathrm dt}{\sqrt{\int_{t_1}^{t_2}f_1^2(t)\mathrm dt}\sqrt{\int_{t_1}^{t_2}f_2^2(t)\mathrm dt}} = \frac{\langle f_1, f_2\rangle}{\sqrt{\langle f_1, f_1\rangle}\sqrt{\langle f_2, f_2\rangle}} = \frac{\langle f_1, f_2\rangle}{\|f_1\|_2\|f_2\|_2} 
$$

If $f_1(t)$ is a linear function of $f_2(t)$, then $\rho_{12} = \pm1$, $\overline{\varepsilon^2} = 0$.

If $f_1(t)$ is orthogonal to $f_2(t)$, then $\rho_{12} = 0$, $\overline{\varepsilon^2}$ is maximized.

* Describe the correlation of two signals from the perspective of energy difference.
* Quantitatively measure the correlation of two signals in terms of inner product. 

**Correlation Function**

The similarity between one signal with a delayed version of another signal.

(1) $f_1(t)$ and $f_2(t)$ are both real and energy signals

$$
R_{12}(\tau) = \int_{-\infty}^{\infty}f_1(t)f_2(t-\tau)\mathrm dt = \int_{-\infty}^{\infty}f_1(t + \tau)f_2(t)\mathrm dt\\
R_{21}(\tau) = \int_{-\infty}^{\infty}f_2(t)f_1(t-\tau)\mathrm dt = \int_{-\infty}^{\infty}f_2(t + \tau)f_1(t)\mathrm dt\\
R_{12}(\tau) = R_{21}(-\tau)
$$

(2) $f_1(t)$ and $f_2(t)$ are both complex and energy signals

If $f_1(t) = f_2(t) = f(t)$

Autocorrelation:

$$
R(\tau) = \int_{-\infty}^{\infty}f(t)f(t-\tau)\mathrm dt = \int_{-\infty}^{\infty}f(t + \tau)f(t)\mathrm dt\\
$$

(2) $f_1(t)$ and $f_2(t)$ are both complex and energy signals

$$
R_{12}(\tau) = \int_{-\infty}^{\infty}f_1(t)f_2^*(t-\tau)\mathrm dt = \int_{-\infty}^{\infty}f_1(t + \tau)f_2^*(t)\mathrm dt\\
R_{21}(\tau) = \int_{-\infty}^{\infty}f_2(t)f_1^*(t-\tau)\mathrm dt = \int_{-\infty}^{\infty}f_2(t + \tau)f_1^*(t)\mathrm dt\\
R_{12}(\tau) = R_{21}^*(-\tau)
$$

Autocorrelation:

$$
R(\tau) = \int_{-\infty}^{\infty}f(t)f^*(t-\tau)\mathrm dt = \int_{-\infty}^{\infty}f(t + \tau)f^*(t)\mathrm dt\\
R(\tau) = R^*(-\tau)
$$


(3) $f_1(t)$ and $f_2(t)$ are both real and power signals

$$
R_{12}(\tau) = \lim_{T\rightarrow\infty}\left[\frac1T\int_{-T/2}^{T/2}f_1(t)f_2(t-\tau)\mathrm dt \right]\\
R_{21}(\tau) = \lim_{T\rightarrow\infty}\left[\frac1T\int_{-T/2}^{T/2}f_2(t)f_1(t-\tau)\mathrm dt \right]\\
$$

Autocorrelation

$$
R(\tau) = \lim_{T\rightarrow\infty}\left[\frac1T\int_{-T/2}^{T/2}f(t)f(t-\tau)\mathrm dt \right]\\
$$

(4) $f_1(t)$ and $f_2(t)$ are both complex and power signals

$$
R_{12}(\tau) = \lim_{T\rightarrow\infty}\left[\frac1T\int_{-T/2}^{T/2}f_1(t)f_2^*(t-\tau)\mathrm dt \right]\\
R_{21}(\tau) = \lim_{T\rightarrow\infty}\left[\frac1T\int_{-T/2}^{T/2}f_2(t)f_1^*(t-\tau)\mathrm dt \right]\\
$$

Autocorrelation

$$
R(\tau) = \lim_{T\rightarrow\infty}\left[\frac1T\int_{-T/2}^{T/2}f(t)f^*(t-\tau)\mathrm dt \right]\\
$$

**Correlation Theorem**

$$
\mathcal F(x(t)) = X(\omega)\\
\mathcal F(y(t)) = Y(\omega)\\
\mathcal F(R_{xy}(\tau)) = X(\omega)Y^*(\omega)\\
$$

If $x(t) = y(t)$, The FT of the autocorrelation function is $\mathcal F{R_{xx}(\tau)} = |X(\omega)|^2$

If $y(t)$ is a real and even function: $Y^*(\omega) = Y(\omega)$

 Then the correlation theorem is equivalent to the convolution theorem

$$
\mathcal F(\int_{-\infty}^\infty x(t)y(t-\tau)\mathrm dt) = X(\omega)Y(\omega)\\
$$

Generally, 

$$
R_{12}(t) = f_1(t) * f_2(-t)
$$