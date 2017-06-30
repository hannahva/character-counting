var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

function getNamesFromIds(ids, userBase){
  var namesArray = [];
  ids.forEach(function(id){ namesArray.push(userBase[id].name)});
  return namesArray;
};



function listUsersAndFollowers(userBase){
  var list = {}
  for(user in userBase){
    var followedBy = [];
    for(user2 in userBase) {
      if (userBase[user2].follows.indexOf(user) !== -1) followedBy.push(user2)
    };

    list[userBase[user].name] = {
      following: getNamesFromIds(userBase[user].follows, userBase),
      followers: getNamesFromIds(followedBy, userBase)
    }
  }
console.log(list);
};

listUsersAndFollowers(data);



// List everyone and for each of them, list the names of who they follow and who follows them
// Identify who follows the most people
// Identify who has the most followers
// Identify who has the most followers over 30
// Identify who follows the most people over 30
// List those who follow someone that doesn't follow them back
// List everyone and their reach (sum of # of followers and # of followers of followers)



