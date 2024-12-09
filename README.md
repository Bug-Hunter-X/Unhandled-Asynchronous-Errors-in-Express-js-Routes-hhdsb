# Unhandled Asynchronous Errors in Express.js Routes

This repository demonstrates a common error in Express.js applications: failing to properly handle asynchronous errors within route handlers.  Unhandled errors can lead to application crashes or unexpected behavior.

The `bug.js` file shows an Express.js route with an asynchronous operation that might throw an error, but lacks appropriate error handling.  The `bugSolution.js` file provides a corrected version with proper error handling using async/await and a catch block.

## How to Reproduce

1. Clone this repository.
2. Navigate to the repository's directory.
3. Run `npm install express` to install the necessary dependencies.
4. Run `node bug.js` to execute the buggy code.  Observe that the error is not properly handled.
5. Run `node bugSolution.js` to execute the corrected code.  The error is now gracefully handled.