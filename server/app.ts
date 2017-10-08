import * as path from 'path';
import * as express from 'express';
import * as api from './routers/api';
import * as modules from './routers/node_modules';

const app = express();

//default page redirect
app.get('/', (req, res) => {
  res.redirect('/index.html');
});

//node_modules routing middleware
//re-routes requests for some files in /js/vendor
app.use('/js/vendor', modules.router);

//REST api routing middleware
app.use('/api', api.router);

//static file routing middleware
//serves static files, even from /js/vendor
app.use(express.static(path.join(__dirname, '../client')));

//Not found
//only gets here if the request is not handled by above middleware
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '../client/404.html'));
});

//start server
app.listen(3000, () => {
  console.log('Listening on port 3000!');

  //start browserpage your self.
  //needs to happen after the server starts, so cant be a build or launch task
  //you might prefer to remove this line and simply open the browser manually.
  require('child_process').exec('gulp browse');
});