In order to regress a variable against itself, the variable must have a somekind of an inherent ordering structure, such as a time ordering. Suppose a variable $Y_t$ is the value of variable $Y$ at time $t$. Then Y can be regressed against itself as follows: 
$$ Y_t = \alpha + \beta Y_{t-1} + \epsilon_t $$

 Here, $\alpha$ is the intercept, $\beta$ is the coefficient of the lagged variable, and $\epsilon_t$ is the error term. The error term is assumed to be white noise, i.e. $\epsilon_t \sim N(0, \sigma^2)$. The coefficient $\beta$ is called the persistence coefficient. If $\beta$ is greater than 1, then the variable is said to be explosive. If $\beta$ is less than 1, then the variable is said to be mean reverting. If $\beta$ is equal to 1, then the variable is said to be a random walk. 

This is known as a Auto-regressive process. The above is equation regresses teh variable against its lagged value with a lagged value of 1. This is called a first order autoregressive process. The above equation can be generalized to a higher order autoregressive process or a AR(p) where p is the number of lags as follows:
$$ Y_t = \alpha + \beta_1 Y_{t-1} + \beta_2 Y_{t-2} + \beta_3 Y_{t-3} + \dots + \beta_p Y_{t-p} + \epsilon_t $$

Intuitive Explanation of a Autoregressive Process:
The number of lags can also be understood as the memory of the stochastic process. A lag of 1 means that the process remembers only the previous value. A lag of 2 means that the process remembers the previous two values. A lag of 3 means that the process remembers the previous three values, and so on. We need to examine the auto-covariance function of the process to determine the number of lags. The auto-covariance function is the covariance of the process with itself. The auto-covariance function is given by:
 $$ \gamma(h) = E[(Y_t - \mu)(Y_{t-k} - \mu)] $$
 Note that the process is assumed to be stationary. The stationarity of the process is necessary for the auto-covariance function to be well defined. 

----
All the 3 equations (A, B and C) use at least one kind of transformation assuming the market data provides un-transformed price information.

Equation A transforms prices into periodic returns:
$$ r_t = \frac{P_{t+1} - P_{t}}{P_t} $$
P is the prices, r is the return and t indexes the time

Equation B additionally lags the IBM returns by a certain number of lags (not specified in the question) along with the return transformation applied on IBM, BTC and AAPL prices.

Equation C transforms the returns of 30 stocks into a correlation matrix and then calculated the eigenvalues and the eigenvectors to get the principal components.

----



 The variable transformation can have many purposes depending on the context. Some of the most common are:
1. Re-scaling the data to a common scale, such as 0-100 or 0-1 or standardizing the data to have a mean of 0 and a standard deviation of 1. This is useful for relative interpretation of the data.
2. Transforming the data to make it have desirable statistical properties. For example, transforming the data to remove multicollinearity, or to remove heteroscedasticity. The most common transformation is to make the series stationary. Eg: Computing periodic returns from the prices of a stock.

Two examples of variable transformations are:
### 1. Computing periodic returns from the prices of a stock.
 $$ r_t = \frac{p_t}{p_{t-1}} - 1 $$
### 2. Performing Principal Component Analysis (PCA) on a set of variables.
PCA is performed by first standardizing the data to zero mean and unit variance, and then computing the eigenvalues and eigenvectors of the covariance matrix. The eigenvectors are the principal components and the eigenvalues are the variances of the principal components. The principal components are orthogonal to each other.