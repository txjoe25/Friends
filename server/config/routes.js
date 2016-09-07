    
    console.log('routes');
// WE NEED TO ADD a few lines of code up here!
// What is this 'friends' object we are referencing below??
var mongoose = require('mongoose');
var friends = require('../controllers/friends.js');
module.exports = function(app){
  app.get('/friends', friends.index);
  app.get('/friends/:id', friends.show);
  app.post('/friends', friends.create);
  app.put('/friends/:id', friends.update);
  app.delete('/friends/:id', friends.delete);
}
