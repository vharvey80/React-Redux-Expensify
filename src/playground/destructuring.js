//
// Object Destructuring
//

// const person = {
//     name: 'Vincent',
//     age: 22,
//     location: {
//         city: 'Ottawa',
//         temp: 10
//     }
// };

// const { name: firstname = 'Anonymous', age, location } = person;
// const { city, temp: temperature } = location;

// console.log(`${firstname} is ${age}.`);

// if (city && temperature) {
//     console.log(`The temperature is ${temperature} in ${city}.`);
// }

// // Challenge

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = "Self-Published" } = book.publisher;

// console.log(publisherName);

//
// Array Destructuring
//

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
const [, city, state = 'New York'] = address;
console.log(`You are in ${city}, ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}.`);