
// Extract the first four characters from the string below;
// "beautiful"

let x= "beautiful"
console.log(x[0],x[1],x[2],x[3]);

// Insert the following string at the tenth index of the below variable
// "eat"
// const food = "I did not have appetite today"
const f ="eat"
const food= "I did not have appetite today"
console.log(food.replace(food[10],"eat"));
// Count how many times the following string appears in the string variable:
// 1. "the"
// 2."s"
// const story= "She sells sea shells at the sea shore"
const story = "She sells sea shells at the sea shore"
const char="the";
const count=story.split(char).length
console.log(count);
const char1="s";
const count1=story.split(char).length
console.log(count1);
// Convert the following strings into the specified format:
// 1. UpperCase: "CONfidant"
// 2. LowerCase: "amazing", "beautiFUL"
// 3. Title case "A busy office"
const capital="CONFident";
const capitaler=capital.toUpperCase();
console.log(capital);
const less="amazing"
const lesser=less.toLowerCase();
console.assert(lesser);
const small="beautiful";
const smaller=small.toLowerCase();
console.log(smaller);
const title="A busy office";
const title2=title.toLocaleUpperCase();
console.log(title2);
// Using JavaScript, find the following words from the following strings:
// 1. "market"
// const string1 = "The lady went to the market with her sister";
// 2. "season"
// const string2 = "My favorite season is spring"
const string1="The lady went to the market with her sisret";
const shop=string1.search("market");
console.log(shop);
const string2="My favorite season is spring";
const person=string2.search("season");
console.log(person);


