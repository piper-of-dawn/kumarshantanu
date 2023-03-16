# How Hashtables work?


## Hash Functions

Suppose we have a array of weekdays. 
```weekdays  = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]```

An array maps unique indexes to these string values. We can access the value of a weekday by using the index of the weekday. For example, to access the value of "Monday", we can use the index 0. 

```weekdays[0]``` will return "Monday"

So we have a mapping of unique integer values to string values. What if we want to do the opposite? We want to map a string value to a unique integer value. 

```python
{"Monday": 0, "Tuesday": 1, "Wednesday": 2, "Thursday": 3, "Friday": 4, "Saturday": 5, "Sunday": 6}
```
We need to first convert these string value to some unique numeric code. The function that does this is called a hash function and the numeric code is called a hash code. 

One naive way to get a hash code as a numeric value is to sum the ASCII values of the characters in the string. 

```python
def hash_function(string):
    hash_code = 0
    for char in string:
        hash_code += ord(char)
    return hash_code
```
We end up with a hash code that is a numeric value. 

```python
for day in weekdays:
    print(day, hash_function(day))

```

```
Monday 616
Tuesday 735
Wednesday 932
Thursday 852
Friday 607
Saturday 845
Sunday 628
```

The problem with this approach is that two different strings can have the same hash code. For example, "abc" and "cba" have the same hash code. Furthermore, the sum of ASCII values of different string lengths can be the same leading to collisions.

```python