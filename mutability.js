// const person = {
//     name: 'Rick',
//     age: 77,
//     country: 'US',
// }
const clone1 = Object.assign({}, person)
const clone2 = { ...person };
person.age += 1;
person.country = 'FR';
const samePerson = person;