
let arr = ['react', 'angular', 'vue'];
 //Practice before ES7
if (arr.indexOf('react') !== -1)
{
  console.log('react exists');
}
//Use ES7's includes()
if (arr.includes('react'))
{
    console.log('react exists');
}



console.log(2**10);
console.log(Math.pow(2, 10));


async function process(array) {
  for await (let i of array) {
    doSomething(i);
  }
}

const obj = {a: 1, b: 2, c: 3};
const values=Object.values(obj1);
console.log(values);//[1, 2, 3]

for(let [key,value] of Object.entries(obj1)){
	console.log(`key: ${key} value:${value}`)
}


console.log('0.0'.padStart(4,'10')) //10.0
console.log('0.0'.padStart(20))// 0.00   

console.log('0.0'.padEnd(4,'0')) //0.00    
console.log('0.0'.padEnd(10,'0'))//0.00000000

const obj2 = {
	name: 'Jine',
	get age() { return '18' }
};
console.log(Object.getOwnPropertyDescriptors(obj2))



async function process(array) {
  for await (let i of array) {
    doSomething(i);
  }
}


function doSomething() {
  doSomething1()
  .then(doSomething2)
  .then(doSomething3)
  .catch(err => {
    console.log(err);
  })
  .finally(() => {
    // finish here!
  });
}

restParam(1, 2, 3, 4, 5);
 
function restParam(p1, p2, ...p3) {
  // p1 = 1
  // p2 = 2
  // p3 = [3, 4, 5]
}

const values = [99, 100, -1, 48, 16];
console.log( Math.max(...values) ); // 100

const myObject = {
  a: 1,
  b: 2,
  c: 3
};
 
const { a, ...x } = myObject;
// a = 1
// x = { b: 2, c: 3 }

restParam({
  a: 1,
  b: 2,
  c: 3
});
 
function restParam({ a, ...x }) {
  // a = 1
  // x = { b: 2, c: 3 }
}


const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { ...obj1, z: 26 };
// obj2 is { a: 1, b: 2, c: 3, z: 26 }

const
  reDate = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/,
  match  = reDate.exec('2018-04-30'),
  year   = match.groups.year,  // 2018
  month  = match.groups.month, // 04
  day    = match.groups.day;   // 30

const
  reLookbehind = /(?<=\D)\d+/,
  match        = reLookbehind.exec('$123.89');
 
console.log( match[0] ); // 123.89

/hello.world/.test('hello\nworld');  // false
/hello.world/s.test('hello\nworld'); // true

const reGreekSymbol = /\p{Script=Greek}/u;
reGreekSymbol.test('π'); // true

var arr1 = [1, 2, [3, 4]];
arr1.flat(); 
// [1, 2, 3, 4]
 
var arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]
 
var arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]
 
 //Use Infinity as depth to expand nested arrays of any depth
arr3.flat(Infinity); 
// [1, 2, 3, 4, 5, 6]

var arr1 = [1, 2, 3, 4];
 
arr1.map(x => [x * 2]); 
// [[2], [4], [6], [8]]
 
arr1.flatMap(x => [x * 2]);
// [2, 4, 6, 8]
 
 // will only "flatten" the array returned by the function in flatMap
arr1.flatMap(x => [[x * 2]]);
// [[2], [4], [6], [8]]


const arr = [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ];
const obj = Object.fromEntries(arr);
console.log(obj); // { 0: "a", 1: "b", 2: "c" }


const sym = Symbol('The description');
assert.equal(String(sym), 'Symbol(The description)');
assert.equal(sym.description, 'The description');

const regexp = RegExp('foo*','g');
const str = 'table football, foosball';
 
while ((matches = regexp.exec(str)) !== null) {
  console.log(`Found ${matches[0]}. Next starts at ${regexp.lastIndex}.`);
  // expected output: "Found foo. Next starts at 9."
  // expected output: "Found foo. Next starts at 19."
}

function /* comment */ foo /* another comment */() {}
 
 // The comment section will not be printed before
console.log(foo.toString()); // function foo(){}
 
 // ES2019 will print the comments together
console.log(foo.toString()); // function /* comment */ foo /* another comment */ (){}
 
 // arrow function
const bar /* comment */ = /* another comment */ () => {};
 
console.log(bar.toString()); // () => {}

//before
try {} catch(e) {}
//now
try {} catch {}