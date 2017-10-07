import * as express from 'express';
export var router = express.Router();
router.get('/:userId', (req, res) => {
    res.json({ id: req.params.userId, name: 'Bob ' + req.params.userId + 1 });
});

