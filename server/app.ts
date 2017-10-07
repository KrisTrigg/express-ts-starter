import * as path from 'path';
import * as express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(express.static(path.join(__dirname, '../client')));

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})