//1 INSTALL NODE JS VS CODE AND PRINT HELLO WORLD
console.log ("Hello World!")
console.log ("Hello Type Script World!")

//2 PERSONAL MESSAGE
let message: string = 'Hey would you like to learn some typescript?';
console.log(message);
let User: string = 'Sibghat'
console.log("Hello!", User, "Would you like to learn some typescript?")

//3 NAME CASE
console.log(User.toUpperCase())
console.log(User.toLowerCase())
console.log(User)

//4 FAMOUS QUOTE
console.log('Albert Einstein once said, "A person who never made a mistake never tried anything new."')

//5 Famous quote again
let famous_person: string = 'Albert Einstein'
let quote: string = '“A person who never made a mistake never tried anything new.”'
console.log(famous_person.toUpperCase(), 'once said,', quote)

//6 Stripping white spaces
let person: string = ' John '
console.log(person.toUpperCase())
console.log(person.trimStart())
console.log(person.trimEnd())
console.log(person.trim())

//7 and //8 The number eight.
console.log(5+3)
console.log(12-4)
console.log(4*2)
console.log(16/2)

//9 Printing my favourite number
let favourite: number= 555;
let favourite_text: string= "My favourite number is"
console.log(favourite_text, favourite)

//10 This is a comment by Sibghat ullah, commented on 17th of Feb 2024. Over and Out!

//11 Creating list of friends
let friends: string[] = ['leonardo', 'brad Pitt', 'daniel day lewis', 'scorsese', 'al pacino', 'norm macdonald'];
console.log (friends[0].toUpperCase());
console.log (friends[1].toUpperCase());
console.log (friends[2].toUpperCase());
console.log (friends[3].toUpperCase());
console.log (friends[4].toUpperCase());
console.log (friends[5].toUpperCase());

//12 Greeting Friends
console.log('Hello,',friends[0].toUpperCase(),'Guten Morgen!');
console.log('Hello,',friends[1].toUpperCase(),'Guten Tag!');
console.log('Hello,',friends[2].toUpperCase(),'Guten Abend!');
console.log('Hello,',friends[3].toUpperCase(),'Guten Nacht!');
console.log('Hello,',friends[4].toUpperCase(),'Guten Morgen!');
console.log('Hello,',friends[5].toUpperCase(),'Guten Tag!');

//13 Your own array; favourite mode of transportation
let transportation: string[]= ['motorcycle','bus','car','bicyle']
console.log('I mostly travel by a', transportation[1])
console.log('I rarely travel by a', transportation[3])
console.log(transportation[2].toUpperCase(),'is the most comfortable of them all.')
console.log('I would like to own a Honda',transportation[0])

//14 Guest List
let guest: string[] = ['leo', 'brad', 'daniel', 'scorsese', 'pacino', 'norm'];
console.log(guest)
console.log('Hello',guest[0].toUpperCase(),',I would like you to attend a party at my house. Regards!');
console.log('Hello',guest[1].toUpperCase(),',I would like you to attend a party at my house. Regards!');
console.log('Hello',guest[2].toUpperCase(),',I would like you to attend a party at my house. Regards!');
console.log('Hello',guest[3].toUpperCase(),',I would like you to attend a party at my house. Regards!');
console.log('Hello',guest[4].toUpperCase(),',I would like you to attend a party at my house. Regards!');
console.log('Hello',guest[5].toUpperCase(),',I would like you to attend a party at my house. Regards!');

//15 Changing Guest List
let alertt: string= 'Alert!'
console.log(alertt)
console.log(guest)
console.log(guest[1].toUpperCase(),'&', guest[2].toUpperCase(),'can not make it to the party')
 //the splice command has been used to pop an element out and save it in a new var guestPopped and printed. A new element has replaced the previous one.
let guestsPopped: string = guest.splice(1, 1,"feodor")[0];
console.log(guest)
console.log(guestsPopped)
 //A new splice command would require to consider the new list that already has an element popped, thus location has been changed
guestsPopped = guest.splice(2, 1, "imran")[0]
console.log(guest)
console.log(guestsPopped)
 //Printing a new set of invitations
console.log('Hello',guest[0].toUpperCase(),',I would like you to attend a party at my house. Regards!');
console.log('Hello',guest[1].toUpperCase(),',I would like you to attend a party at my house. Regards!');
console.log('Hello',guest[2].toUpperCase(),',I would like you to attend a party at my house. Regards!');
console.log('Hello',guest[3].toUpperCase(),',I would like you to attend a party at my house. Regards!');
console.log('Hello',guest[4].toUpperCase(),',I would like you to attend a party at my house. Regards!');
console.log('Hello',guest[5].toUpperCase(),',I would like you to attend a party at my house. Regards!');

console.log(guest)

//16 Found three more guests
let newalert: string= 'Hurrah, we got space for three new guests';
console.log(newalert);
guest.unshift("bill burr");
guest.push("makaveli");
guest.splice(4, 0, 'Wick');
console.log(guest)

//17 Pop Guests, we got space for only two guests
let news: string= 'Alas We got space only for two guests!';
console.log(news);
let popped = guest.shift()
 
console.log("Sorry, we are out of space.")
 //popped the remaining guests using the pop method.
console.log('Sorry,', guest.pop(),'we are out of space.')
console.log('Sorry,', guest.pop(),'we are out of space.')
console.log('Sorry,', guest.pop(),'we are out of space.')
console.log('Sorry,', guest.pop(),'we are out of space.')
console.log('Sorry,', guest.pop(),'we are out of space.')

console.log(guest)

 //Inviting the remaining two guests.

console.log('Hello',guest[0].toUpperCase(),',I would like you to attend a party at my house. Regards!');
console.log('Hello',guest[1].toUpperCase(),',I would like you to attend a party at my house. Regards!');

 //popping the remaing two guest to result in an empty array

console.log('Sorry,', guest.pop(),'we are out of space.')
console.log('Sorry,', guest.pop(),'we are out of space.')
console.log(guest)

//18 Places to visit. Messing with the order of a list.
let Places: string[]= ['Germany','Alps','Moscow','Morocco','Egypt','USA','KSA','Japan']
console.log(Places)
console.log(Places.reverse())
console.log(Places)
console.log(Places.sort())
console.log(Places)

//19 length of an array

console.log(Places.length, 'is the number of places i want to visit this year. ')
console.log(guest.length, 'number of guests were invited.') ///It is zero sonce we popped all the guests out.

//20 Arrays
const mountain: string[]= ['Sinai','Alps','Himalyas','Nanga parbat']
const country: string[]= ['Egypt','Pakistan','Afghanistan','Morocco']
const river: string[]= ['Nile','Indus','Kabul River','Tigris ']
const city: string[]= ['Cairo','Islamabad','Badakhshan','Casablanca']
console.log(mountain)
console.log(country)
console.log(river)
console.log(city)

//21 Typescript Object
const geo={
    'mountain': 'Sinai',
    'country' : 'Egypt',
    'city': 'Alexandria',
    'river':'Nile',
    'language': 'Arabic'
}
console.log(geo.country, 'is the oldest civilization in the world.',geo.language,'is the official language.',geo.city,'is a beautiful city located in the north.')

//22 Intentional Array index error
console.log(mountain[5]) // The number of elements is 4 (0-3)

//23 Conditional Tests == is equal to operator
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')

let car1 = 'Honda';
console.log("Is car == 'Honda'? I predict True.")
console.log(car1 == 'Honda')

let car2 = 'Supra';
console.log("Is car == 'Supra'? I predict True.")
console.log(car2 == 'Supra')

let cycle = 'Royal';
console.log("Is car == 'Royal'? I predict True.")
console.log(cycle == 'Royal')

let cycle1 = 'Mountaineer';
console.log("Is car == 'Mountaineer'? I predict True.")
console.log(cycle1 == 'Mountaineer')

let city1 = 'Islamabad';
console.log("Is city == 'Cairo'? I predict False.")
console.log(city1 == 'Cairo')

let river1 = 'Indus';
console.log("Is river == 'Nile'? I predict False.")
console.log(river1 == 'Nile')

let country1 = 'Pakistan';
console.log("Is country == 'Egypt'? I predict False.")
console.log(country1 == '')

let language = 'English';
console.log("Is language == 'Arabic'? I predict False.")
console.log(city1 == 'Arabic')

let mountain1 = 'Sinai';
console.log("Is mountain == 'Hindu Kush'? I predict False.")
console.log(mountain1 == 'Hindu Kush')

//24 Conditional Tests
let food= '\ncake'
console.log(food=='cake') //equals to
console.log(food=='CAKE')
console.log(food=='Cake')
console.log(food!= 'Fudge') //not equals to
 // console.log(food===50) compares value and data type both
console.log(food!=='brownie') //strictly not equal to

let x=10
let y=5
console.log (x==y);
console.log (x!=y);
console.log (x>y);
console.log (x<y);
console.log (x>=y);
console.log (x<=y);

console.log('\n')

const validNum = x>8 && 8>y //and operator, checks for both the values to be true
console.log(validNum)
console.log(x>20 && y==5) 
const vakidNum2 = x>8 || 8>y //Or operator, checks for either of the value to be true
console.log(vakidNum2)
console.log(x>20 || 2>y)

const iseven=10%2==0? true:false //ternary operator expression if true: expression if false
console.log(iseven)

let newarray: string[]= ['A','B','C','D']
console.log(newarray.includes('E', 0))
console.log(newarray.includes('A', 1))
console.log(newarray.includes('A', 0))
console.log(newarray.indexOf('E', 0)) //indexof returns -1 if the value is not present in an array, otherwise returns the element.

//25 Conditional statements, If, else, else if, switch.

let alienColor='Green'
if (alienColor=='Green') {
    console.log("You just earned 5 points!!!")
}

if(alienColor=='Red'){
    console.log()
}

//26 More Conditional Statments

 //Version 1: If block
let alienColor2: string = "green";

if (alienColor2 === "green") {
    console.log("Player just earned 5 points for shooting the alien.");
} else {
    console.log("Player just earned 10 points.");
}
 // Version 2: Else block
let alienColor3: string = "red";

if (alienColor3 === "green") {
    console.log("Player just earned 5 points for shooting the alien.");
} else {
    console.log("Player just earned 10 points.");
}

//27 Alien colors #3

let alienColor4: string = "green";

if (alienColor4 === "green") {
    console.log("Player just earned 5 points for shooting the green alien.");
} else if (alienColor4 === "yellow") {
    console.log("Player just earned 10 points for shooting the yellow alien.");
} else {
    console.log("Player just earned 15 points for shooting the red alien.");
}

let alienColor5: string = "yellow";

if (alienColor5 === "green") {
    console.log("Player just earned 5 points for shooting the green alien.");
} else if (alienColor5 === "yellow") {
    console.log("Player just earned 10 points for shooting the yellow alien.");
} else {
    console.log("Player just earned 15 points for shooting the red alien.");
}
let alienColor6: string = "red";

if (alienColor6 === "green") {
    console.log("Player just earned 5 points for shooting the green alien.");
} else if (alienColor6 === "yellow") {
    console.log("Player just earned 10 points for shooting the yellow alien.");
} else {
    console.log("Player just earned 15 points for shooting the red alien.");
}


//28 Stages of Life: Write an if-else chain that determines a person’s stage of life
let age: number = 25;

if (age < 2) {
    console.log("The person is a baby.");
} else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
} else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
} else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
} else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
} else {
    console.log("The person is an elder.");
}

//29 Favourite Fruit
let Fruit: string[]= ['Apple','Banana','Pineapple']
if (Fruit.includes('Apple')) {
    console.log ('I Love apples')
}
if (Fruit.includes('Mango')) {
    console.log ('I love mangoes')
}
if (Fruit.includes('Orange')){
    console.log('I love orange.')
}
if (Fruit.includes('Strawberry')){
    console.log('I love strawberries.')
}
if (Fruit.includes('Pear')){
    console.log('I love pears.')
}

//30 Hello admin Array
let username:string[]=['Admin','Dan','Ali','Mo']

for (let user of username) {
    if (user === 'Admin') {
        console.log('Hello, Admin, would you like to see your reports?');
    } else {
        console.log('Hello, User!');
    }
}
//31 No Users: Add an if test to make sure the list of users is not empty.
let user: string[]= []
if (user.length === 0) {
    console.log('We need to find some users!')
}
else {
    console.log(`There are ${user.length} users on this platform.`)
}
//32 Checking Usernames
//33
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let number of numbers) {
    let ordinalEnding: string;
    if (number === 1) {
        ordinalEnding = "st";
    } else if (number === 2) {
        ordinalEnding = "nd";
    } else if (number === 3) {
        ordinalEnding = "rd";
    } else {
        ordinalEnding = "th";
    }
    console.log(`${number}${ordinalEnding}`);
}

//34
let pizzas: string[]= ['Pepperoni','Tikka','Cheese']
for (let pizza of pizzas) {
    console.log(`I really love ${pizza} flavoured pizza`);
}
console.log('i really like pizzas,they are tasty crunchy and kinda juicy sometimes. California Pizza, Broadway and PizzaSpice kinda have the best pizzas. I love Pizzas!!')

//35
let animals: string[] = ["Dog", "Cat", "Rabbit"];

for (let animal of animals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

console.log("Any of these animals would make a great pet!");

//36
function make_shirt(size:number, print: string) {
    console.log(`The size of your shirt is ${size} cm and the text to be printed on is "${print}".`);
}
make_shirt(15,'Metallica')
make_shirt(16,'Red Hot Chilli Peppers')

//37

function Large_Shirts(size:string='Large', message:string='I love TS') {
    console.log(`Your shirt size is ${size} and your message to be printed on is ${message}.`);
}
Large_Shirts()
Large_Shirts('medium')
Large_Shirts('small','GunsNroses')