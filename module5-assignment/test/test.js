const people = [
    {
        name: 'lama',
        age: '21',
        email: 'lamazahwa99@gmail.com'
    },
    {
        name: 'sana',
        age: '18',
        email: 'sanazhw9@gmail.com'
    },
    {
        name: 'jana',
        age: '13',
        email: 'janathebutie007@gmail.com'
    }
];

function sayHi(greeting) {
    return (name) => (age) => (email) => {
        let userInfo = `${greeting} This is ${name}, I'm ${age} and you can contact me through my email ${email}. see you soon!`;
        return userInfo;
    }
}

let sayHello = sayHi('Hello'); // the mother function
// let myName = sayHello(name); // the second function
// let myAge = myName(age);
// let myEmail = myAge(email);

function structure() {
    let sentence, name, age, email;
    people.forEach(function(person){
        name = person.name;
        age = person.age;
        email = person.email;
        console.log(name);
        sentence = `This is ${name}, I'm ${age}. You can contact me through my emai: ${email}`;
    });
    return sentence;
}
    // for(person in people) {
    //     let name = people[person].name;
    //     let age = people[person].age;
    //     let email = people[person].email;
    //     return name + age + email;
    // }
// }

let greetings = sayHello()
