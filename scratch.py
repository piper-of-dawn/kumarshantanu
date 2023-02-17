def timeit (func):
    import time
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"Time taken to execute {func.__name__} is {end-start} seconds")
        return result
    return wrapper



import prettyprinter as pp
print = pp.pprint
from pandas import DataFrame

# Write a nested dictionary
test =  {"root": {"key1": {"subkey11": "value11", "subkey12": "value12", "subkey13": "value13"}, "key2": {"subkey21": "subkey211", "subkey22": "value22", "subkey23": {"subkey231": "value231", "subkey232": "value232"},"subkey24": {"subkey241": "value241", "subkey242": "value242", "subkey243": [ {'name': 'Alice', 'age': 25}, {'name': 'Bob', 'age': 30}, {'name': 'Charlie', 'age': 35} ]}},"key3": {"subkey31": "value31", "subkey32": "value32", "subkey33": DataFrame({"a":[1,2,3],"b":[4,5,6]})}}}

# Write a function that pairs each child with its parent in this nested dictionary. The output should be a list of dictionaries. Each dictionary should have one key-value pair, where the key is the child and the value is the tuple. The first element of the tuple is the parent name and second element is the value of the child, if child is a leaf node or None if child is not a leaf node. 


# For example, the output should be:
# [{'key1':'root'}, {'subkey11': 'key1'}, {subkey12: 'key1'} and so on...]

@timeit
def pairChildWithParent(d, parent=None):
    result = []
    isTable = False
    for key, value in d.items(): 
        if isinstance(value, dict): # if child is a dictionary
            result.append({'child': key,'parent':parent,'value': None, 'isTable': False})
            result.extend(pairChildWithParent(value, key)) # recursively call the function
        elif isinstance(value, list) and all(isinstance(item, dict) for item in value):
            result.append({'child': key,'parent':parent,'value': DataFrame(value), 'isTable': isTable})            
        else:
            result.append({'child': key,'parent':parent,'value': value, 'isTable': isTable})
    return result
  
register = [
    {
        'child': 'root',
        'parent': None,
        'value': None,
        'isTable': False
    },
    {
        'child': 'key1',
        'parent': 'root',
        'value': None,
        'isTable': False
    },
    {
        'child': 'subkey11',
        'parent': 'key1',
        'value': 'value11',
        'isTable': False
    },
    {
        'child': 'subkey12',
        'parent': 'key1',
        'value': 'value12',
        'isTable': False
    },
    {
        'child': 'subkey13',
        'parent': 'key1',
        'value': 'value13',
        'isTable': False
    },
    {
        'child': 'key2',
        'parent': 'root',
        'value': None,
        'isTable': False
    },
    {
        'child': 'subkey21',
        'parent': 'key2',
        'value': 'subkey211',
        'isTable': False
    },
    {
        'child': 'subkey22',
        'parent': 'key2',
        'value': 'value22',
        'isTable': False
    },
    {
        'child': 'subkey23',
        'parent': 'key2',
        'value': None,
        'isTable': False
    },
    {
        'child': 'subkey231',
        'parent': 'subkey23',
        'value': 'value231',
        'isTable': False
    },
    {
        'child': 'subkey232',
        'parent': 'subkey23',
        'value': 'value232',
        'isTable': False
    },
    {
        'child': 'subkey24',
        'parent': 'key2',
        'value': None,
        'isTable': False
    },
    {
        'child': 'subkey241',
        'parent': 'subkey24',
        'value': 'value241',
        'isTable': False
    },
    {
        'child': 'subkey242',
        'parent': 'subkey24',
        'value': 'value242',
        'isTable': False
    },
    {
        'child': 'subkey243',
        'parent': 'subkey24',
        'value': 1234,
        'isTable': False
    },
    {
        'child': 'key3',
        'parent': 'root',
        'value': None,
        'isTable': False
    },
    {
        'child': 'subkey31',
        'parent': 'key3',
        'value': 'value31',
        'isTable': False
    },
    {
        'child': 'subkey32',
        'parent': 'key3',
        'value': 'value32',
        'isTable': False
    },
    {
        'child': 'subkey33',
        'parent': 'key3',
        'value':  DataFrame({"a":[1,2,3],"b":[4,5,6]}),
        'isTable': True
    }
]

# Build a nested dictionary from the register

# Step 1: Get all the leaf nodes from the register. The leaf nodes are the ones with value which is not 'branch'

getLeafNodes = lambda register: [x['child'] for x in register if x['value'] is not None]

# Step 2: Find the parent of each leaf node and build a dictionary with the parent as a key and the leaf node as a value

def buildNestedDict(register):
    getParent = lambda register, child: [x['parent'] for x in register if x['child'] == child][0]
    leafNodes = getLeafNodes(register)
    nestedDict = {}
    for leafNode in leafNodes:
        # Get the parent of the leaf node from the register
        parent = [x['parent'] for x in register if x['child'] == leafNode][0]
        # print(f"Parent of {leafNode} is {parent}")
        # Get all the siblings and their values of the leaf node that share the same parent
        siblings = [(x['child'], x['value']) for x in register if x['parent'] == parent]
        # Create a subnode dictionary with parent as key and siblings as value
        subnode = {parent : {sibling[0]:sibling[1] for sibling in siblings}}
        nestedDict.update(subnode)       
        keys = nestedDict.keys()        
    parentList = [(key,getParent(register, key)) for key in keys]
    # Check if all parents are 'root' in parentList
    allParentsVisited = lambda parentList: all([x[1] == 'root' for x in parentList])
    while not allParentsVisited(parentList):
      # get the keys which still have a non-root parent
      stillHasParents = [x[0] for x in parentList if x[1] != 'root']
      for key in stillHasParents:
        nestedDict.update({getParent(register, key): {key: nestedDict[key]}}) 
        del nestedDict[key]
      parentList = [(key,getParent(register, key)) for key in nestedDict.keys()]
    return {'root':nestedDict}


if __name__ == "__main__":
  print(buildNestedDict(register))