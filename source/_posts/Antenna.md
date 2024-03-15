---
title: Principle of Antenna
katex: true
date: 2024-03-01 14:14:50
tags:
---

## Introduction of Antenna

Definition of Antenna

* Transmitter and receiver of EM wave
* Signal from current to wave
* from lumped to distributed

Antenna classifications
* Resonant and non-resonant/leaky/travelling wave
* Antenna number: element, multiple antennas, array
* Shape: wire, loop, slot, patch/microstrip, cavity
* Materials: metallic, dielectric
* Property: wideband, narrow band
* Yagi-Uda, Vivaldi, Cassegrain
* Function: moblie/handset, base station, AiP

## Maxwell equations

$$
\nabla \cdot \vec D = \rho \rightarrow \nabla \cdot \tilde{\vec D} = \rho \\
\nabla \cdot {\vec B} = 0 \rarr \nabla \cdot \tilde{\vec B} = 0\\
\nabla \times {\vec E} = -\frac{\partial \vec B}{\partial t} \rarr \nabla \times \tilde{\vec E} = -j\omega \tilde{\vec B}\\
\nabla \times {\vec H} = \vec J + \frac{\partial \vec D}{\partial t} \rarr \nabla \times \tilde{\vec H} = \vec J + j\omega \tilde{\vec D}\\
\vec D = \varepsilon \vec E\\
\vec B = \mu \vec H
$$

$$
\nabla^2 \vec F = \nabla(\nabla \cdot \vec F) - \nabla \times (\nabla \times \vec F)\\
\nabla \times (\nabla f) = 0\\
\nabla \cdot (\nabla \times \vec F) = 0
$$

## Auxiliary Potential Functions

Let 

$$
\vec B = \nabla \times \vec A\\
\vec E + j\omega \vec A = -\nabla \phi
$$

$$
\nabla \cdot \vec D = \varepsilon \nabla \cdot(-\nabla \phi  - j\omega \vec A) = \rho\\
\Rightarrow \nabla^2\phi + \omega^2\mu\varepsilon\phi = - \frac{\rho}{\varepsilon} - j\omega(\nabla \cdot \vec A + j\omega \mu \varepsilon \phi)
$$

$$
\nabla \times \vec H = \frac{1}{\mu}(\nabla(\nabla \cdot \vec A) - \nabla^2\vec A) = \vec J + j\omega \vec D = \vec J + j\omega\varepsilon(-\nabla\phi - j\omega \vec A)\\
\Rightarrow \nabla^2\vec A + \omega^2\mu\varepsilon\vec A = -\mu \vec J - \nabla(\nabla \cdot \vec A + j\omega\mu\varepsilon\phi)
$$

Use Lorentz Gauge

$$
\nabla \cdot \vec A + j\omega\mu\varepsilon\phi = 0
$$

Then

$$
\nabla^2\vec A + \omega^2\mu\varepsilon\vec A = -\mu \vec J\\
\nabla^2\phi + \omega^2\mu\varepsilon\phi = - \frac{\rho}{\varepsilon}
$$

Solve ODE:

$$
\begin{equation}    
\nabla^2\phi + k^2\phi = 0(r\ne 0)
\end{equation}\\
\begin{equation}
\nabla^2\phi + k^2\phi = -\frac{\rho}{\varepsilon}(r=0)
\end{equation}
$$

For (1)

$$
u(r) = \frac{\phi(r)}{r}\\
\frac{\rm{d}^2}{\rm{d}r^2}u + k^2u = 0\\
u = C_1e^{-jkr} + C_2e^{jkr}\\
\phi = C_1\frac{e^{-jkr}}{r}
$$

For (2), in arbitrary volume

$$
\iiint_V(\nabla^2\phi + k^2\phi)\mathrm dv = \iiint_V(-\frac{\rho}{\varepsilon}\mathrm dv) = -\frac{q}{\varepsilon}\\
r \rightarrow 0\\
\iiint_V(k^2\phi)\mathrm dv = 0\\
\iiint_V\nabla^2\phi \mathrm dv = \oiint_S \nabla\phi \cdot \mathrm d\vec s = C_1 \oiint_S (\frac{-jkre^{-jkr} - e^{-jkr}}{r^2})\mathrm d\vec s = C_1 (\frac{-jkre^{-jkr} - e^{-jkr}}{r^2})4\pi r^2 = -C_1 4\pi
$$

Finally,

$$
\phi(r) = \frac{q}{4\pi\varepsilon}\frac{e^{-jkr}}{r}
$$