# q: Why backpropogation matters?
# a: https://www.youtube.com/watch?v=Ilg3gGewQ5U

# You can think of weights inside a neural network as knobs that can be turned to adjust the output of the network. How much we turn these knobs is determined by the gradient of the loss function with respect to the weights. The gradient tells us which way the loss function is changing the most, and in what direction we should adjust the weights to reduce the loss. The backpropagation algorithm is the process of calculating the gradient of the loss function with respect to the weights. That sounded mouthful, but it's actually quite simple. Let's take a look at how it works.

# Suppose you have a neural network with two inputs, one hidden layer with two neurons, and one output. The network looks like this: https://i.imgur.com/3JqkIWG.png

# We have a loss function that measures how far off our predictions are from the true values. The loss function is the sum of the squared differences between the predictions and the true values. The loss function is shown below: https://i.imgur.com/3JqkIWG.png

# Now we need to examine, how much our loss function is sensitive to these knobs or weights. This will help in determining how much we should adjust the weights to reduce the loss. We can do this by taking the partial derivative of the loss function with respect to each weight. The partial derivative of the loss function with respect to a weight is the rate of change of the loss function with respect to that weight. The partial derivative of the loss function with respect to a weight is shown below: https://i.imgur.com/3JqkIWG.png

# So we have a two-step process:
# 1. Measure the sensitivity: Calculate the partial derivative of the loss function with respect to each weight.
# 2. Use this sensitivity to tune the machine:   Plug these derivatives into Gradient Descent to adjust the weights.


# What is forward pass?
# Neural networks are made up of layers of neurons that transforms the input as the input makes a trip through the neuron. The input is transformed by a linear combination of the input and the weights, and then passed through an activation function. The output of the activation function is then passed to the next layer of neurons. This process is repeated until the output layer is reached. This process is called the forward pass.