'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
  function Person(name) {
    _classCallCheck(this, Person);

    this.name = name;
  }

  _createClass(Person, [{
    key: 'hello',
    value: function hello() {
      if (typeof this.name === 'string') {
        return 'Hello, I am ' + this.name + '!';
      } else {
        return 'Hello!';
      }
    }
  }]);

  return Person;
}();

var person = new Person('Rony');

document.write(person.hello());

/* var counter = 10;
for (var i = 0; i < counter; i++) {
  console.log(i);
}
 */
//# sourceMappingURL=app.js.map
