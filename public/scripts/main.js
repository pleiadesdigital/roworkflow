
class Person {
  constructor (name) {
    this.name = name;
  }
  hello() {
    if (typeof this.name === 'string') {
      return 'Hello, I am ' + this.name + '!';
    } else {
      return 'Hello!';
    }
  }
}

let person = new Person('Rony');

document.write(person.hello());

/* var counter = 10;
for (var i = 0; i < counter; i++) {
  console.log(i);
}
 */
