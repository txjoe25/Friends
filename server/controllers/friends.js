var mongoose = require('mongoose');
var Friend = mongoose.model("Friend");

console.log('friends controller');
// WE NEED TO ADD A FEW lines of code here!
// How does a controller talk to mongoose and get a model?
// Build out the methods in the friendsControllers below
function FriendsController(){
  this.index = function(req,res){
    Friend.find({}, function(err,friends){
    	res.json(friends)
    })
  };
  this.create = function(req,res){
  	console.log('in server controller', req.body)
    var friend = new Friend({
    	name:req.body.name,
    	birthday:req.body.birthday,
    });
    friend.save(function(err,result){
    	if(err) res.json(err);
    	else res.json(result)
    })
  };
  this.update = function(req,res){
  	console.log(req.params);
    Friend.update({_id: req.params.id},
    	{$set: {name:req.body.name, birthday:req.body.birthday}},
    	function(err, friend){
    		if (err) res.json(err);
    		else res.json(friend)
    	})
  };
  this.delete = function(req,res){
    Friend.remove({
    	_id:req.params.id},
    	function(err){
    		if (err) res.json(err);
    		else res.json({});
    })
  };
  this.show = function(req,res){
    Friend.findOne({_id:req.params.id},
    	function(err,result){
	    	if(err) res.json(err);
	    	else res.json(result)

    })
  };
}
module.exports = new FriendsController(); // what does this export?