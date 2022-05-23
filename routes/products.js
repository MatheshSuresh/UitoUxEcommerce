var express = require('express');
var router = express.Router();
var productController = require('../controllers/products.controller')

router.get('/', function(req, res, next) {
  res.send('Am online');
});

router.post('/create', productController.create)
router.get('/viewall', productController.viewall)
router.get('/view', productController.view)
router.put('/update', productController.update)
router.delete('/delete', productController.destroy)

module.exports = router;
