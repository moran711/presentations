switch (cond) {
    case "one":
      doSomething(); // JSHint will warn about missing 'break' here.
    case "two":
      doSomethingElse();
}

var foo = bar;

let abc;

const {a} = {
  a: 'ddj'
}

const ab = () => {
  console.log('dkdjj');
  console.log('kdk');
}

let x = (function () {
  "use strict";
  return {
      y: 1
  };
})();

const String = "My String";

const demo = {
  hasOwnProperty: 1
};


let x = {
  actual: 10,
  get y() {
      "use strict";
      return this.actual / 2;
  },
  set y() {
      "use strict";
      this.actual = val;
  }
};

var xv = 1,
    yv = 10;

xv++;
yv--;

let x = {
  default: 10
};


class Cat {

}

const a = "10",
    b = 5 - -a;

ab();
