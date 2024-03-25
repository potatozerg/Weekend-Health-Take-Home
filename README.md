# Weekend-Health-Take-Home

For convenience, I have put the test cases within the same file as the functions.

To run the code:

1. Compile the TypeScript code with the `--target` flag set to `es6`:
   `tsc --target es6 index.ts`

2. Run the compiled code:
   `node index.js`

To run the js solution, simply run: `node js_solution.js`

My solution consists 3 functions:

1. `findWords`: the main function used to iterate over an input array and filter it using the `canBeFormed` function.
2. `canBeFormed`: the helper function used by `findWords` to determine if a single word can be formed by rearranging the characters of another word.
3. `wordToMap`: the helper function to create a map of character frequencies from an input string. For example, "food" to { f:1, o:2, d:1 }
