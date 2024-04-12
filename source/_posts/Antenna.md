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

## Radiation Parameters

### Field Zone

Near field: resonant, field;

Far field: propagation, wave;

Fresnel region: transition;

![1711090268476](../images/Antenna/1711090268476.png)

### Antenna Parameters

* Radiation patterns
* Radiation Intensity
* Power Density
* Directivity (方向性) and Gain (重要！)
* Polarization
* Effective Aperture(等效口面) and Aperture efficienty(口面效率)

E 面：与电场方向平行的面

H 面：与磁场方向平行的面

#### Pattern Parameters

![1711090565574](../images/Antenna/1711090565574.png)

Often use log scale.

#### Power Density

Instantaneous Poynting vector $\vec S(x, y, z, t)$

Radiation Power Density = Time average Poynting vector $\vec S_{av}(x, y, z)=\frac1T\int_0^T\vec S(x, y, z, t)\mathrm dt = \frac12\text{Re}[\tilde{\vec E} \times \tilde{\vec H^*}]$

Total Radiation Power $P_{rad} = \oiint_S[\tilde{\vec E} \times \tilde{\vec H^*}] \cdot \mathrm d\vec s$

#### Radiation Intensity

$$
U(\theta, \varphi) = r^2 S(r, \theta, \varphi)
$$

Isotropic 各向同性

$$
P_{rad} = \int_{0}^{2\pi}\int_{0}^{\pi}U\sin\theta\mathrm d\theta\mathrm d\varphi
$$

#### Directivity

$$
D = \frac{U_{\max}}{U_{av}} = \frac{P_{\max}}{P_{rad}/4\pi}
$$

![1711091202619](../images/Antenna/1711091202619.png)

![1711091212947](../images/Antenna/1711091212947.png)

![1711693683771](../images/Antenna/1711693683771.png)

![1711693701192](../images/Antenna/1711693701192.png)

#### Gain

![1711693749686](../images/Antenna/1711693749686.png)

$$
G = \frac{U_{\max}}{P_{in}/4\pi}
$$

#### Polarization

![1711693845822](../images/Antenna/1711693845822.png)

Polarization Mismatch:

![1711693861642](../images/Antenna/1711693861642.png)

CP

![1711693936592](../images/Antenna/1711693936592.png)

#### Effective Aperture and Aperture efficiency

![1711694027177](../images/Antenna/1711694027177.png)

![1711694083583](../images/Antenna/1711694083583.png)

### Circuit Parameters

#### Input impedance

Input impedance definition:

* the impedance presented by an antenna at its terminals
* the ratio of the voltage to current at its terminals
* the ratio of the electric to magnetic fields at its terminals

![1711694243897](../images/Antenna/1711694243897.png)

##### Conjugate Matching

$$
Z_A = Z_g^*
$$

##### Mismatching

![1711694350257](../images/Antenna/1711694350257.png)

##### Radiation Resistance

$$
P_{rad} = \frac12|I_g|^2R_r = \oiint_S\vec S_{av} \cdot \rm d\vec s
$$

![1711694462059](../images/Antenna/1711694462059.png)

#### Scattering Parameters

![1711694619870](../images/Antenna/1711694619870.png)

$$
\frac{\Gamma^2}{Z_1} + \frac{T^2}{Z_2} = 1
$$

![1711694639638](../images/Antenna/1711694639638.png)

![1711695738159](../images/Antenna/1711695738159.png)

二端口网络通常用于描述二天线问题。$S_{11}$表示天线1的反射，$S_{21}$表示天线1到天线2的耦合，均不利于信号的传播。我们希望让$1 - S_{11}^2 - S_{21}^2$尽可能大。

## Link Calculation

### Friis's Equation

![1712471419276](../images/Antenna/1712471419276.png)

![1712471436962](../images/Antenna/1712471436962.png)

### EIRP

![1712471499226](../images/Antenna/1712471499226.png)

赫兹偶极子的辐射电阻： $80\pi^2(\frac{\Delta z}{\lambda})^2$，方向性 $\frac{2}{3}$。

### Radar Equation

![1712473473687](../images/Antenna/1712473473687.png)

RCS(Radar cross section)

RCS (σ) of a radar target is an effective area that intercepts the transmitted radar power and then
scatters that power isotropically back to the radar receiver.

$$
\sigma=\lim_{R\to\infty}\frac{W_{o}4\pi R^2}{W_i}
$$

* $W_i$, $W_o$ and $R$ are known;
* $\sigma$ converges.

## Antenna Theorems


$$
\boxed{P_r=\mathrm{P}_t\mathrm{G}_t\mathrm{G}_r(\frac{\lambda}{4\pi R})^2}
$$

$$
P_{r}=P_{t}\mathrm{e}_{r}\mathrm{e}_{t}D_{r}\mathrm{D}_{t}(1-\left|\Gamma_{r}\right|^{2})(1-\left|\Gamma_{t}\right|^{2})(\frac{\lambda}{4\pi R})^{2}
$$

In radar:

$$
P_{r}=P_{t}\mathrm{G}_{t}\mathrm{G}_{r}\sigma\frac{1}{4\pi}(\frac{\lambda}{4\pi R_{1}R_{2}})^{2}
$$

Equivalent circuit model


![1712900712333](../images/Antenna/1712900712333.png)

$R_r$ ：接收天线反射会释放能量。

### Duality Theorem

![1712901375924](../images/Antenna/1712901375924.png)

电 -> 磁，不变号；
磁 -> 电，变号。

### Image Theorem

PEC：完美电导体

PMC：完美磁导体

定理条件：
* PEC or PMC
* Infinite boundary

PEC

$$
\begin{aligned}&\hat{n}\times\vec{E}=0\\&\hat{n}\cdot\vec{B}=0\end{aligned}
$$

PMC

$$
\begin{aligned}&\hat{n}\times\vec{H}=0\\&\hat{n}\cdot\vec{D}=0\end{aligned}
$$

![1712902160882](../images/Antenna/1712902160882.png)

Note:
- Satisfied with boundary condition;
- Mirror source instead of PEC or PMC infinite boundary;
- Array: source and mirror source;
- Current loop: upper inside, lower outside.

### Reciprocity Theorem

In radiation pattern,

![1712903308547](../images/Antenna/1712903308547.png)

Transmitting pattern of antenna “a”

$$
Z_{_{ba}}(\theta,\varphi)=\frac{V_{_b}(\theta,\varphi)}{I_{_a}}
$$

Receiving pattern of ante

$$
Z_{ab}(\theta,\varphi)=\frac{V_{a}(\theta,\varphi)}{I_{b}}
$$

Then,

$$
Z_{ab}(\theta,\phi)=Z_{ba}(\theta,\phi)
$$

Lorentz Reciprocity Theorem

$$
-\nabla\cdot(\vec{E}_{1}\times\vec{H}_{2}-\vec{E}_{2}\times\vec{H}_{1})=\vec{E}_{1}\cdot\vec{J}_{2}+\vec{H}_{2}\cdot\vec{M}_{1}-\vec{E}_{2}\cdot\vec{J}_{1}-\vec H_1 \cdot \vec M_2\\
-\oiint_{S}(\vec{E}_{1}\times\vec{H}_{2}-\vec{E}_{2}\times\vec{H}_{1})\cdot ds^{'}=\iiint_{V}\left(\vec{E}_{1}\cdot\vec{J}_{2}+\vec{H}_{2}\cdot\vec{M}_{1}-\vec{E}_{2}\cdot\vec{J}_{1}-\vec H_1 \cdot \vec M_2\right)dv^{'}
$$

Far field:

$$
\vec{H}_i=\hat{r}\times\vec{E}_i/\eta;\quad d\vec{s}=\hat{n}ds=\hat{r}ds
$$

$$
(\vec{E}_1\times\vec{H}_2-\vec{E}_2\times\vec{H}_1)\cdot\hat{r}=(\hat{r}\times\vec{E}_1)\cdot\vec{H}_2-(\hat{r}\times\vec{E}_2)\cdot\vec{H}_1=0
$$

$$
\iiint_{V}\Big(\vec{E}_{1}\cdot\vec{J}_{2}+\vec{H}_{2}\cdot\vec{M}_{1}-\vec{E}_{2}\cdot\vec{J}_{1}-\vec{H}_{1}\cdot\vec{M}_{2}\Big)d\nu^{'}=0\\\iiint_{V}\Big(\vec{E}_{1}\cdot\vec{J}_{2}-\vec{H}_{1}\cdot\vec{M}_{2}\Big)d\nu^{'}=\iiint_{V}\Big(\vec{E}_{2}\cdot\vec{J}_{1}-\vec{H}_{2}\cdot\vec{M}_{1}\Big)d\nu^{'}
$$

Reaction: Reciprocity theorem: $\langle 1 2\rangle=\langle 2,1\rangle$

$$
\left\langle1,2\right\rangle=\int_{V}(\vec{E}_{1}\cdot\vec{J}_{2}-\vec{H}_{1}\cdot\vec{M}_{2})d\nu\quad\left\langle2,1\right\rangle=\int_{V}(\vec{E}_{2}\cdot\vec{J}_{1}-\vec{H}_{2}\cdot\vec{M}_{1})d\nu 
$$

If only current-source

$$
\iiint_V\vec{E}_1\cdot\vec{J}_2d\nu=\iiint_V\vec{E}_2\cdot\vec{J}_1d\nu\\
\vec{E}_1\cdot\vec{J}_2=\vec{E_2} \cdot \vec{J_1}
$$

Non-reciprocity

Electron plasma (non-reciprocal media)

$$
\varepsilon = \begin{bmatrix}\varepsilon_{xx}&+ig&0\\-ig&\varepsilon_{yy}&0\\0&0&\varepsilon_{zz}\end{bmatrix}
$$

### Huygen's Principle

![1712905110844](../images/Antenna/1712905110844.png)

![1712905233876](../images/Antenna/1712905233876.png)

![1712905317317](../images/Antenna/1712905317317.png)