var friends = require('../data/friends.js').friends;
var bestFriend = require('../data/friends.js').bestFriend;

var apiRoutes = {
  getFriends: function(app){
    return app.get('/api/friends', function(req,res){
      res.json(friends);
    });
  },
  postFriends: function(app){
    return app.post("/api/friends", function(req,res){
      var addedFriend = req.body;
      var friendScore = [];
      for(var i=0; i<friends.length; i++){
        var eachScore = 0;
        for(var j=0; j<friends[i].scores.length; j++){
          if(Number(friends[i].scores[j]) !== Number(addedFriend.scores[j])){
            eachScore += Math.abs(Number(friends[i].scores[j]) - Number(addedFriend.scores[j]));
          }
        }
        friendScore.push(eachScore);
      }
      bestFriend[0] = chooseFriend(friendScore, friends);
      friends.push(req.body);
      res.json(true);
      console.log('new friend added');
    });
  },
  getBestFriend: function(app){
    return app.get('/api/bestfriend', function(req, res){
      res.json(bestFriend);
    });
  }
};

function chooseFriend(arr, friendsArr){
  var chosen;
  var lowest = 0;
  for(var i=0; i<arr.length; i++){
    if(arr[i] < arr[lowest]){
      lowest = i;
    }
  }
  chosen = friendsArr[lowest];
  return chosen;
}

module.exports = apiRoutes;
