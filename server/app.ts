import * as path from 'path';
import * as express from 'express';
import * as api from './api';
const app = express();

app.get('/', (req, res) => {
  res.redirect('/index.html');
});

app.use('/api', api.router);
app.use('/js/vendor/jquery', express.static(path.join(__dirname, '../node_modules/jquery/dist')));
app.use('/js/vendor/knockout', express.static(path.join(__dirname, '../node_modules/knockout/build/output')));
app.use('/js/vendor/knockout-amd-helpers', express.static(path.join(__dirname, '../node_modules/knockout-amd-helpers/build')));
app.use('/js/vendor/bootstrap', express.static(path.join(__dirname, '../node_modules/bootstrap/dist')));
app.use('/js/vendor', express.static(path.join(__dirname, '../node_modules')));
app.use(express.static(path.join(__dirname, '../client')));

app.listen(3000, () => {
  console.log('Listening on port 3000!')
});

require('child_process').exec('gulp browse');