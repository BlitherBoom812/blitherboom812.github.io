---
title: Deep Reinforcement Learning
katex: true
date: 2024-04-10 13:34:06
tags:
---
## Model-Based RL

### Model-Based RL

If we know the dynamics of some process:

Objective in a Stochastic World

The dynamics are stochastic

The expectation under these actions in such a stochastic world.

$$
\begin{aligned}p_\theta(\mathbf{s}_1,\ldots,\mathbf{s}_T\mid\mathbf{a}_1,\ldots,\mathbf{a}_T)&=p(\mathbf{s}_1)\prod_{t=1}^Tp(\mathbf{s}_{t+1}\mid\mathbf{s}_t,\mathbf{a}_t)\\\mathbf{a}_1,\ldots,\mathbf{a}_T&=\arg\max_{\mathbf{a}_1,\ldots,\mathbf{a}_T}E\left[\sum_tr(\mathbf{s}_t,\mathbf{a}_t)\mid\mathbf{a}_1,\ldots,\mathbf{a}_T\right]\end{aligned}
$$

It is suboptimal.

#### Open Loop Planning

Guess and check (Random Shooting)

* Pick action sequences uniformly in the action space
* Calculate the Result

Better: Cross Entropy Method

Example: MCTS

#### Trajectory Optimization with Derivatives

LQR? Linear Quadratic Regulator

$$
x_{t+1} = Ax_t+ Bu_t\\
c(x_t, u_t) = x_t^TQx_t + u_t^TRu_t
$$


The Q and R are symmetric and ponlositive definite. If not positive, you may optimize the result into negative inf.



Value Iteration

### Model-Free RL

If the model is not known?

modelbased RL:

* base policy to collect dataset
* learning dynamics model from dataset
* plan through dynamics model and give actions
* Execute the actions and add the result into data set

Model predictive control (MPC)


* base policy to collect dataset
* learning dynamics model from dataset
* plan through dynamics model and give actions
* only execute the first planned action
* append the $(s, a, s^\prime)$ to dataset

### Model-based RL with a policy

Why Model based RL with a learned model?

* Data-efficiency
  * Dont need to act in real world
* Multi-task with a model
  * reuse the world model

But they are unstable and worse asymptotic performance.
1. If the model biased toword the positive side
    * the actions overfit to the learned model
2. if the trajectory is really long
    * Accumulated errors

To resolve 1: use uncertainty

Optimize towards expectation of rewards rather than rewards

Two types of uncertainty
* Aleatoric or statistical: The reality itself has uncertainty (e.g. Dice)
* Epistemic or model uncertainty: You are uncertain about the true function

If use output entropy, it can't tell apart the type of uncertainty. We need to measure the epistemic uncertainty.

How to measure?

We use the collected data to train the model, maximize $\log(D|\theta)$ by changing $\theta$

Can we instead to measure $\log(\theta|D)$ -- the model uncertainty!

but it is rather intractable.

Model Ensemble!

Training multiple models, see if they agree with each other. We have to make the models different(variant).

The randomness and SGD is enough to make the models different.

* Every time drag one model and give actions
* calculate the reward
* add the data into dataset and update policy

To resolve 2 (long rollouts can be error-prone), we can always use short rollouts.

combine the real and model data to improve policy

Example: DYNA-style MBRL

Also can try Baysian Neural Networks.

### Value-Equivalent Model

You dont have to stimulate the world, just simplify the value fuction ensuring to keep the value is approximately the same with the real one.

Use mean square error.

### Model-Base RL with images

