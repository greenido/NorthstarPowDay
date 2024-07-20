
//
//
//
function findElementsWithWord(obj, word) {
  let results = [];

  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      // recursively call the function for nested objects and arrays
      results = results.concat(findElementsWithWord(obj[key], word));
    } else if (typeof obj[key] === 'string' && obj[key].includes(word)) {
      // add the key-value pair to the results array if the value contains the word
      results.push({key, value: obj[key]});
    }
  }

  return results;
}

//const data = require('/Applications/MAMP/htdocs/NorthstarPowDay/tmpData.json');
const data = require('/Applications/MAMP/htdocs/NorthstarPowDay/highway-80-california-export.json');
// 
// use the JSON data here
console.log(data);
const calls = Object.values(data['i80-AoG'].Calls);
let count = 1;
calls.forEach(call => {
  const status = call['roadStr'].toLowerCase();
  if (status.indexOf('closed') > -1) {
    var date = new Date(call.date);
    console.log(count + ") " + date + " | " + call.roadStr);
    count++;
  }
  
});
  

/*
// example usage:
const data = {
  "name": "John Smith",
  "age": 30,
  "address": {
    "street": "123 Main St",
    "city": "Anytown",
    "state": "CA"
  },
  "hobbies": ["reading", "running", "cooking"],
  "notes": "Likes to read mystery novels."
};``

const results = findElementsWithWord(data, "read");
console.log("The results are:");
console.log(results); // output: [{key: "name", value: "John Smith"}, {key: "hobbies", value: ["reading"]}, {key: "notes", value: "Likes to read mystery novels."}]
*/
