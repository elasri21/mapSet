// Set And Map Assignments:
// Assignment 1: Set
let mySetOfNumbers = new Set([10]);
mySetOfNumbers.add(20).add(mySetOfNumbers.size);
console.log(Array.from(mySetOfNumbers).pop());

// Assignment 2: Set
let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
console.log(Array.from(new Set(myFriends)).sort());

// Assignment 3: Map
let myInfo = {
    username: "Osama",
    role: "Admin",
    country: "Egypt",
  };
let mapInfo = new Map();
Object.keys(myInfo).forEach(key => {
    mapInfo.set(key, myInfo[key]);
});
console.log(mapInfo);
console.log(mapInfo.size);
console.log(mapInfo.has("role"));

// Assignment 4: Set
let theNumber = 100020003000;
console.log(+Array.from(new Set(theNumber.toString().split("").filter(n => +n != 0))).join(""));

// Assignment 5:
console.log("#".repeat(15));
let theName = "Elzero";
let arr1 = theName.split("");
let arr2 = [];
for(let i = 0;i <theName.length; i++) {
    arr2.push(theName[i]);
}
let arr3 = Array.from(new Set(theName));
let arr4 = new Map();
for(let i = 0; i< theName.length; i++) {
    arr4.set(i, theName[i]);
}
arr4 = Array.from(arr4.values());
let arr5 = [...theName];

// Assignment 6:
console.log("=".repeat(15));
let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
//let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
//let chars = ["Z", "Y", "A", "D", "E", 10, 1];
let j = 0;
for(let i = 0; i < chars.length; i++) {
    if(typeof chars[i] == 'number') {
        chars[i] = '';
        j++;
    }
}
chars = chars.filter(ch => ch != '');
let em = [];// to hold j elements from the begining of the chars
for(let i = 0; i < j; i++) {
    em.push(chars[i]);
}
chars = em.concat(chars)
console.log(chars);

// Assignment 7:
console.log("#".repeat(15));
let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];
let numThree = [...numsOne, ...numsTwo];
console.log(numThree);
console.log(numsOne.concat(numsTwo));
numsTwo.forEach(n => numsOne.push(n));
console.log(numsOne);

// Assignment 8:
console.log("#".repeat(15));

let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];
console.log(n1.concat(n2).length * (new Set(n2)).values().next().value);

