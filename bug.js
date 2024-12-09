const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation that might throw an error
  doSomethingAsync().then(() => {
    res.send('Hello, world!');
  }).catch(error => {
    // Error handling missing in the original code
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  });
});

async function doSomethingAsync() {
  // Simulate an asynchronous operation that might fail
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate a random error (replace this with your actual asynchronous operation)
      const randomError = Math.random() < 0.5 ? new Error('Something went wrong!') : null;
      if (randomError) {
        reject(randomError);
      } else {
        resolve();
      }
    }, 1000);
  });
}