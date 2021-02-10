//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/book-store'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/book-store/index.html'));
});

// Start the app by listening on the default Heroku port  .....
console.log("Server listening")
//app.listen(process.env.PORT || 5000);
const PORT = process.env.PORT || 5000
app.listen(PORT)
console.log("Server listening"+PORT)