var express = require('express');
var router = express.Router();
var userController = require('../controllers/users.controller')

router.get('/', function(req, res, next) {
  res.send('Am Online');
});


router.post('/create', userController.create)
router.get('/viewall', userController.viewall)
router.get('/view', userController.view)
router.put('/update', userController.update)
router.delete('/delete', userController.destroy)

module.exports = router;
