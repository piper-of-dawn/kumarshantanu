The error you're seeing is caused by returning a Vec<&str> from the parse_data function that references data owned by the function itself.

When you call trim() and split() on the file variable to create the lines vector, the resulting slice of string references points to data that is owned by the file variable. When you return lines from the parse_data function, you're trying to return a vector of references to that data. However, the file variable goes out of scope when the function ends, and the data it owns is deallocated. This means that the references in the lines vector would be pointing to invalid memory.

To fix this error, you need to change the parse_data function to return a Vec<String> instead of a Vec<&str>. This will allow the function to own the data in the vector, rather than just holding references to it.

Here's an updated version of the parse_data function:

```
fn parse_data(path: &str) -> Vec<String> {
    let file = std::fs::read_to_string(&path)
        .unwrap()
        .replace("\r\n", "\n");
    let lines: Vec<String> = file.trim().split("\n").map(|s| s.to_string()).collect();
    println!("{:#?}", lines);
    lines
}
```

In this version of the function, the lines vector is created by mapping each line in the split slice to a new String value. This creates a new vector that owns its own data, rather than holding references to the original file variable.

Note that you can also use the to_owned() method instead of to_string() to create owned String values from slices:
