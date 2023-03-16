---
17B: 
---

# Spectral Density
Spectral density is the discrete time Fourier transform of the autocorrelation function. Spectral density only exists only if the autocovariance function is absolutely convergent. 

## What is absolute convergence?
A sequence is said to be absolutely convergent if the sum of the absolute values of the terms of the sequence is finite.

A sequence is said to be convergent or approaching a particular limiting value if the difference between the terms of the sequence and the limiting value is tending to zero for arbitrarily large values of the index. Formally, a sequence is said to be convergent if there exists an integer N such that for all n >= N, the difference between the nth term and L is less than a given arbitrary positive number ε. Intuitively,\he ε in the definition represents how close we want the terms to be to the limit L. For any positive number ε, we can always find an integer N such that all the terms of the sequence after the Nth term are within ε units of the limit L.

## Important connection between models and predictors

The goal of prediction is to develop a linear predictor for a random process such that the residual has white noise characterstics. In simple language, the difference between the truth and the prediction should not have any predictable pattern in a linear sense. Suppose we have a random process $X_t$ and we want to predict $X_{t+1}$. We can use the conditional expectation of $X_{t+1}$ given $X_t$ as the predictor. The conditional expectation is the optimal predictor. 
Formally,
$$ E[X_{t+1} | X_t] $$
where $\mu_{t+1}$ is  the conditional expectation of $X_{t+1}$ given its one step past $X_t$.

## Auto-regressive processes
Let us talk about an AR(1) process which is the simplest class of linear stochastic processes. Imagine a drunkard walking. This drunkard has been hammered with Russian vodka. Now, the goal is to predict where this drunkard will land after taking certain number of steps, say 100 steps. We have a structure here! His each step is dependent on his previous step plus some random noise. The drunkard can only stretch his legs within some bounds and given the impact of comrade standard vodka, the next movement of his feet is independent of his previous movement. Hence, we can safely assume that this random noise is white noise that is it has no structure or is random in a linear sense. Formally, we can write this as:
$$ X_{t+1} = X_t + \epsilon_{t+1} $$
$X_t$ is the location of the drunkard at time $t$ and \epsilon_{t+1}$ is the white noise with zero mean, unit variance and zero covariance between succesive positions. 



The first step to compute the conditional expection is the knowledge of the joint probability distribution of $X_{t+1}$ and $X_t$ which is usually unknown. Even if it is unknown, the joint probability distribution could be time dependent that it changes with time. 

Strong Stationarity is a property of a random process that the joint probability distribution does not change with time. This is a very strong assumption. A relaxed version of this assumption is of the weak stationarity. Now rather that talking about the entire distribution, we constrict ourselves to the first two moments of a multivariate distribution. The first two moments are the vector of means and the co-variance matrix. Therefore, weak stationarity assumption is that:
1. The mean $\mu_t = \mu$ does not change with time.
2. The variance $\sigma^2_t = \sigma^2$ does not change with time.
3. The autocovariance function $\gamma_(t, t-k) = \gamma(k)$ does not change with time and is only the function of time difference.

