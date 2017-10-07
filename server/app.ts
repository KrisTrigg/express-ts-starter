import * as path from 'path';
import * as express from 'express';
import * as api from './api';
import * as modules from './node_modules-router';

const app = express();

//default page redirect
app.get('/', (req, res) => {
  res.redirect('/index.html');
});

//node_modules routing
app.use('/js/vendor', modules.router);

//REST api routing
app.use('/api', api.router);

//static file routing
app.use(express.static(path.join(__dirname, '../client')));

//start server
app.listen(3000, () => {
  console.log('Listening on port 3000!');

  //start browser
  require('child_process').exec('gulp browse');
});