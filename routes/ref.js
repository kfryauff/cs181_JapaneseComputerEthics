var projects = require('../projects.json');

/*
 * GET Ref page.
 */


exports.view = function(req, res){
  	res.render('ref', projects);
};