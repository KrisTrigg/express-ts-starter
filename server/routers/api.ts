import * as express from 'express';
import * as user from './user';

export var router = express.Router();

//User entity routing middleware
router.use('/user', user.router);

//Not Found
//only gets here if the request is not handled by above middleware
router.use((req, res) => {
  res.status(404).send("Not Found");
});
