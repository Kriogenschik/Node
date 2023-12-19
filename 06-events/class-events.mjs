import EventEmitter from "events";

class Post extends EventEmitter {
  constructor(author, text) {
    super();
    this.author = author;
    this.text = text;
    this.likesQty = 0;
    this.on("likePost", (userName) => {
      console.log(`${userName} like it`);
    });
    this.on('error', (error) => {
      console.log(error);
    })
  }

  like(userName) {
    if (!userName) {
      return this.emit("error", new Error("No userName in the like request"));
    }
    this.likesQty += 1;
    this.emit("likePost", userName);
  }
}

const myPost = new Post("Oleg", "My first post!");

console.log(myPost.author);
console.log(myPost.text);
console.log(myPost.likesQty);

myPost.like("Jack");
console.log(myPost.likesQty);

setTimeout(() => myPost.like("Marry"), 1000);
setTimeout(() => myPost.like(), 2000);

myPost;
