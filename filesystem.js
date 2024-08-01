const fs = require('fs');

const content = 'Hello, world!';

// Asynchronous write
fs.writeFile('example.txt', content, err => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File has been written');
});

// Synchronous write
try {
  fs.writeFileSync('example.txt', content);
  console.log('File has been written');
} catch (err) {
  console.error(err);
}






// Asynchronous delete
fs.unlink('example.txt', err => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File has been deleted');
});

// Synchronous delete
try {
  fs.unlinkSync('example.txt');
  console.log('File has been deleted');
} catch (err) {
  console.error(err);
}







// Asynchronous append
fs.appendFile('example.txt', content, err => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Content has been appended');
});

// Synchronous append
try {
  fs.appendFileSync('example.txt', content);
  console.log('Content has been appended');
} catch (err) {
  console.error(err);
}
