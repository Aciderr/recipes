const { exec } = require('node:child_process');


const stdout = exec('eb deploy');

stdout.on('data', data => {
  console.log('data', data);
});
stdout.on('error', error => {
  console.log('error', error);
})
stdout.on('end', end => {
  console.log('end', end);
})
