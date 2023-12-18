const {myName, myHobbies, myFavoriteNumber} = require('./multiple-exports');
const {myName: myOtherName, myFriendsName } = require("./export-and-import")
const greetingFn = require('./my-modules/single-exports');

console.log(myName);
console.log(myHobbies);
console.log(myFavoriteNumber);

myHobbies.push('eating');

greetingFn(myName);

console.log(myOtherName);
console.log(myFriendsName);