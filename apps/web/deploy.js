const { exec } = require('node:child_process');


const stdout = exec('aws s3 sync ../../dist/apps/web s3://foodrecipies --region eu-central-1');

stdout.on('data', data => {
  console.log('data', data);
});
stdout.on('error', error => {
  console.log('error', error);
})
stdout.on('end', end => {
  console.log('end', end);
})
