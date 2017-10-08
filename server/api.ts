import * as express from 'express';
import * as user from './user-router';
export var router = express.Router();
router.use('/user', user.router);
router.use((req, res) => {
  res.status(404).send("Not Found");
})
