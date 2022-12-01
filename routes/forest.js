var express = require('express');
// A little function to check if we have an authorized user and continue on 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 
var router = express.Router();
var forest_controlers= require('../controllers/forest');
/* GET forests */
router.get('/', forest_controlers.forest_view_all_Page );
/* GET detail forest page */
router.get('/detail', forest_controlers.forest_view_one_Page);
/* GET create forest page */
router.get('/create', forest_controlers.forest_create_Page);
/* GET create update page */
router.get('/update',secured, forest_controlers.forest_update_Page);
/* GET delete forest page */
router.get('/delete', forest_controlers.forest_delete_Page);
module.exports = router;