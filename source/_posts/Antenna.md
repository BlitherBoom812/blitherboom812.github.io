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