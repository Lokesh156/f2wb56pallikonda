var express = require('express');
const forest_controlers= require('../controllers/forest');
var router = express.Router();
/* GET forests */
router.get('/', forest_controlers.forest_view_all_Page );
module.exports = router;