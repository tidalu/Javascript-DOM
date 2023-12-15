#!/bin/bash

# Function to create files in a directory
create_files() {
    cd "$1" || exit 1

    echo "// Your JavaScript code goes here" > main.js

    echo "/* Your CSS styles go here */" > style.css

    echo '<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <script src="main.js"></script>
</body>
</html>' > index.html

    cd - || exit 1
}

for dir in */; do
    if [ -d "$dir" ]; then
        create_files "$dir"
    fi
done
