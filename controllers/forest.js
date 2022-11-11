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
// Handle forest create on POST.
exports.forest_create_post = async function(req, res) {
  console.log(req.body)
  let document = new Forest();
  // We are looking for a body, since POST does not have query parameters.
  // Even though bodies can be in many different formats, we will be picky
  // and require that it be a json object
  // {"forest_type":"goat", "cost":12, "size":"large"}
  document.forest_area = req.body.forest_area;
  document.forest_color = req.body.forest_color;
  document.forest_dense = req.body.forest_dense;
  try{
  let result = await document.save();
  res.send(result);
  }
  catch(err){
  res.status(500);
  res.send(`{"error": ${err}}`);
  }
 };
// Handle forest delete form on DELETE.
exports.forest_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Forest delete DELETE ' + req.params.id);
};
// Handle forest update form on PUT.
exports.forest_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Forest update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.forest_view_all_Page = async function(req, res) {
  try{
  theForests = await Forest.find();
  res.render('forest', { title: 'forest Search Results', result: theForests });
  }
  catch(err){
  res.status(500);
  res.send(`{"error": ${err}}`);
  }
 };