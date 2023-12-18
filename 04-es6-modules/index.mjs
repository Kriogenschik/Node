import { season, temperature } from "./named-exports.mjs";
import { isRaining, humidity } from "./inline-exports.mjs";
import getDataFromServer from "./default-export.mjs";
import DEFAULT_SERVER, {USERNAME as MY_USERNAME, PASSWORD} from "./mixed-exports.mjs";

console.log(season);
console.log(temperature);

console.log(isRaining);
console.log(humidity);

getDataFromServer("https://jsonplaceholder.typicode.com/posts/1")
  .then((post) => console.log(post))
  .catch((err) => console.log(err));

console.log(DEFAULT_SERVER);
console.log(PASSWORD);
