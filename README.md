# MongoDB $inc Operator with String Value Bug

This repository demonstrates a common error encountered when using the `$inc` operator in MongoDB update queries. The error occurs when attempting to increment a field that holds a string value.

## Description
The `$inc` operator is designed to increment numerical values. If used with a string value, MongoDB will throw an error or produce unexpected results.  This bug showcases this scenario and provides a solution for handling it properly.

## How to reproduce the bug
1. Setup a MongoDB instance.
2. Create a collection named `myCollection`.
3. Insert a document with a field containing a string value:
   ```bash
   db.myCollection.insertOne({ _id: 1, field: "1" })
   ```
4. Execute the incorrect update query from `bug.js`.
5. Observe the error message or unexpected output.

## Solution
The `bugSolution.js` file demonstrates the corrected approach. Before using `$inc`, ensure the field is of numerical type. If it's a string, convert it to a number first using a proper update operation.