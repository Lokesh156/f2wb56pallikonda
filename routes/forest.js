var express = require('express');
const forest_controlers= require('../controllers/forest');
var router = express.Router();
/* GET forests */
router.get('/', forest_controlers.forest_view_all_Page );
/* GET detail forest page */
router.get('/detail', forest_controlers.forest_view_one_Page);
/* GET create forest page */
router.get('/create', forest_controlers.forest_create_Page);
/* GET create update page */
router.get('/update', forest_controlers.forest_update_Page);
/* GET delete forest page */
router.get('/delete', forest_controlers.forest_delete_Page);
module.exports = router;