var data = require('../employer_prof.json');

exports.view = function(req, res){
	console.log("profile data :: ");
	console.log(data['employer_profiles'][req.params.user])
    console.log("session user is " + req.session.user);
    var user = req.params.user; 
  
	res.render('employer_profile' ,{'user':user,  'data':data['employer_profiles'][req.params.user]} );
	
}

function projectClick(e) {
    // prevent the page from reloading 
    log("clicked on email");
    e.preventDefault();
    // In an event handler, $(this) refers to 
    // the object that triggered the event 
}