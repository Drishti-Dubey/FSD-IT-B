 const http = require('http');
  const fs=require('fs');
  const home=fs.readFileSync('./wishlist.html','utf-8');
  const myserver= http.createServer((req,res)=>{
  console.log('Server 1');
  res.statusCode=200;
res.end(home)
});
myserver.listen(3000,()=>{
    console.log('Server running at http://localhost:3000');
});

