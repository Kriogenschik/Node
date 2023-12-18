const  { myName } = require('./multiple-exports');

const myFriendsName = "Jack";

module.exports.myName = myName;
module.exports.myFriendsName = myFriendsName;
