var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var forest_controller = require('../controllers/forest');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// forest ROUTES ///
// POST request for creating a forest.
router.post('/forest', forest_controller.forest_create_post);
// DELETE request to delete forest.
router.delete('/forest/:id', forest_controller.forest_delete);
// PUT request to update forest.
router.put('/forest/:id', forest_controller.forest_update_put);
// GET request for one forest.
router.get('/forest/:id', forest_controller.forest_detail);
// GET request for list of all forest items.
router.get('/forest', forest_controller.forest_list);
module.exports = router;