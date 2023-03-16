---
title: "Python Decorators in Plain English"
subtitle: "A beginner friendly guide to Python decorators."
date: "2022-02-01"
---


Python decorators are steriods for functions. They add pluggable functionality to existing functions. They are a way to modify functions using other functions without modifying the original function itself. Enough of talk let us dive into solving real world problems using decorators.

Suppose you have a very simple function that generates a random number between 0 and 1.

```
from random import random

def returnRandomNumber() -> float:
    return random()
  
returnRandomNumber()

# Output: 0.6798951143772883
```

The function just returns one random number. But what if you want to return a list of random numbers? Let us create and plug a decorator to do that.

```
def returnListOfRandomNumbers(func):
    def wrapper():
        return [func() for i in range(10)]
    return wrapper
```

It is important to understand the structure of a decorator. A decorator is a function that takes another function as an argument and returns a function. The function that is passed as an argument is called the wrapped function. The function that is returned by the decorator is called the wrapper function.
Phew! That was mounthful. Let us see how it works.

The function generateNumbers is a decorator function that takes another function as an argument. In this case the function is returnRandomNumber. 
Inside the decorator function we define another function which we call as a wrapper function. The wrapper function just calls the function that is passed as an argument 10 times, thereby returning a list of 10 random numbers in this specific case. In fact, it will call any function that is passed as an argument 10 times.

Now we decorate the returnRandomNumber function with the generateNumbers decorator.

```
from random import random

@generateNumbers
def returnRandomNumber() -> float:
    return random()
  
returnRandomNumber()

#Output: [0.020995700935664274, 0.47713720992685915, ... 0.05740839026587918, 0.07816772740464417, 0.5911752982096037]
```

The decorator generateNumbers is plug and play. It will take any arbitrary function and call it 10 times and return a list of 10 return values.

```
i=0
@generateNumbers
def callMe10Times():
  global i
  i += 1
  return "I was called {} times".format(i)
  i = i+1
  
callMe10Times()

#Output: ['I was called 1 times', 'I was called 2 times', 'I was called 3 times', ... , 'I was called 9 times', 'I was called 10 times']
```
## Decorators for functions with arguments
So now you can see how we added a pluggable superpower to our existing function returnRandomNumber without modifying it. Right now, we hard-coded the number of random numbers to be returned. But we can make it more flexible by passing the number of random numbers to be returned as an argument to our original returnRandomNumber function. Let us see how.

```
def returnRandomNumber(num: int) -> list:
    return [random() for _ in range(num)]
```


Now we need to modify our decorator as well to accept any number of arguments that are passed to the original function.

```
def generateNumbers(func):
    def wrapper(*args, **kwargs):
        return [func(*args, **kwargs) for _ in range(10)]
    return wrapper
```

*args stands for arbitrary arguments and **kwargs stands for arbitrary keyword arguments. So now the wrapped function can accept any number of arguments and keyword arguments. 

```
@generateNumbers
def returnRandomNumber(num: int) -> list:
    return [random() for _ in range(num)]
returnRandomNumber(5)
# Output: [[0.08559955152501708, 0.9718416554139274, 0.39390535172320473, 0.5007878709751988, 0.2904996166883561],  ... [0.8426542925736601, 0.7900352366990585, 0.6100565166569131, 0.9998723814329434, 0.17405258601947238]]
```

## Decorators with arguments for functions with arguments

We generated 10 list of 5 random numbers. But what if we want to generate 1000 lists of 1000 random numbers? We can do that by passing the number of lists as an argument to the decorator.

```
def ListOfRandomNumbers (numOfIterations: int):
    def generateNumbers(func):
        def wrapper(*args, **kwargs):
            return [func(*args, **kwargs) for _ in range(numOfIterations)]
        return wrapper
    return  generateNumbers

@ListOfRandomNumbers(numOfIterations = 1000)
def returnRandomNumber(num: int) -> list:
    return [random() for _ in range(num)]

returnRandomNumber(1000)
```

Pause and reflect on what is happening! The decorator has a hierarchy of three functions:

1. ListOfRandomNumbers which takes an argument numOfIterations and returns a sub function generateNumbers.
2. generateNumbers which takes a wrapped function as an argument and returns a sub function 'wrapper'.
3. 'wrapper' calls the wrapped function numOfIterations times and returns a list of return values.

I know this is seeming like a maze. Just remember this: Wrapped function is the original fucntion that needs super-powers. Wrapper function gives the wrapped function super-powers. Decorator function is the one that plugs the super-powers to the wrapped or the original function.

> Decorator  → Wrapper  →  Wrapped Function

## Stacking Decorators

Now suppose we need to calculate the mean of the each list of random numbers we generated. We can now create another decorator that calculates the mean of the list of random numbers.

```
def getMeanOfEachList (func):
    def wrapper(*args, **kwargs):
        mean = lambda x: sum(x)/len(x)
        bigList = func(*args, **kwargs)
        return [mean(lst) for lst in bigList]
    return wrapper
```

Now we can chain these two decorators to get the mean of each list of 1000 random numbers.

```
@getMeanOfEachList  
@ListOfRandomNumbers(numOfIterations = 1000)
def returnRandomNumber(num: int) -> list:
    return [random() for _ in range(num)]

returnRandomNumber(1000)
```
Let us now plot kernel density of the mean of each list of random numbers.

```
from seaborn import kdeplot
kdeplot(returnRandomNumber(1000))
```
!['Density plot for means'](/images/decorators.webp)


Congratulations! You just demonstrated the central limit theorem using Python decorators. 