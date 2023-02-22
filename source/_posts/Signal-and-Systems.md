---
title: Signal and Systems
date: 2023-02-22 09:46:36
tags:
---

March 15
# Signal and Systems
## Classification
Deterministic & random

Periodic/non-periodic

Continuous/Discrete(time)

Analog/Digital(Amplitude & time)

## Operations

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

## Singularity Signals

### Unit ramp function
$$
R(t) = 0, t\lt 0; t, t>0
$$
### Unit step function
$$
u(t) = 0, t<0;1/2, t=0;1, t>0
$$
### Rectangular pulse
$$
u(t) - u(t-t_0)
$$
### Sign function
$$
sgn(t) = 1, t>0;-1, t<0
$$
define $sgn(0)=0$, then $sgn(t)=2u(t)-1$
### Unit impulse function

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


