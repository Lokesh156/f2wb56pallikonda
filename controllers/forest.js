var Forest = require('../models/forest');
// List of all forests
exports.forest_list = async function(req, res) {
      try{
        theForests = await Forest.find();
        res.send(theForests);
        }
        catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
        } 
};
// for a specific forest.
exports.forest_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Forest detail: ' + req.params.id);
};
// Handle forest create on POST.
exports.forest_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: Forest create POST');
};
// Handle forest delete form on DELETE.
exports.forest_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Forest delete DELETE ' + req.params.id);
};
// Handle forest update form on PUT.
exports.forest_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Forest update PUT' + req.params.id);
};