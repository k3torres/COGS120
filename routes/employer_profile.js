var dorthy = require('../employer_prof.json');

exports.view = function(req, res){
  
  res.render('employer_profile', data['employer_profiles'][req.params.user]);
}
