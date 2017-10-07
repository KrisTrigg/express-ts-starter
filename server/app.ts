import * as path from 'path';
import * as express from 'express';
import * as api from './api';
const app = express();

app.get('/', (req, res) => {
  res.redirect('/index.html');
});

app.use('/api', api.router);
app.use('/js/vendor', express.static(path.join(__dirname, '../node_modules')));
app.use(express.static(path.join(__dirname, '../client')));

app.listen(3000, () => {
  console.log('Listening on port 3000!')
});

require('child_process').exec('gulp browse');