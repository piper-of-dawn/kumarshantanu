We have the objective function:
$$J(\theta)=-\frac{1}{T} \sum_{t=1}^T \sum_{m \leq j \leq m \\ j \neq 0} \log P\left(w_{t+j} \mid w_t ; \theta\right)$$

# What is the interpretation of this objective function?
- Probability of a word occuring at $w_{t+j}$ given $w_t$
- $m$ is the window size. Let's think of $m=2$ for now.
- $P\left(w_{t-2} \mid w_t ; \theta\right) \times P\left(w_{t-1} \mid w_t ; \theta\right)\times P\left(w_{t+1} \mid w_t ; \theta\right) \times P\left(w_{t+2} \mid w_t ; \theta\right)$
- Take $\log$
- You get this ugly term: $$\sum_{m \leq j \leq m \\ j \neq 0} \log P\left(w_{t+j} \mid w_t ; \theta\right)$$
- Sum over all T words and take average
- Voila! we deconstructed this ugly term:
$$J(\theta)=-\frac{1}{T} \sum_{t=1}^T \sum_{m \leq j \leq m \\ j \neq 0} \log P\left(w_{t+j} \mid w_t ; \theta\right)$$\


We have another not-so-ugly function:
$$P(o \mid c)=\frac{\exp \left(u_o^T v_c\right)}{\sum_{w \in v} \exp \left(u_w^T v_c\right)}$$




 