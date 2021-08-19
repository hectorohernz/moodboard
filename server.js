const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
//const publicPath = path.resolve("/Users/highsgod/Desktop/project-workspace/moodboard/moodboard/build");
// /Users/highsgod/Desktop/project-workspace/client/build/index.html
app.use('/static', express.static(path.join(__dirname, '/build//static')));

app.use(express.static('build'));

app.get('*', function(req, res) {
  res.sendFile('index.html', {root: path.join(__dirname, '/build/')});
});

app.listen(port, () => {
   console.log(`Server is up on port ${port}!`);
});