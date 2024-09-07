function greet(name, callback) {
    callback(name);
  }

  function sayHello(name) {
    console.log(`Hello, ${name}`);
  }
  

  greet('Alice', sayHello);  // Output: "Hello, Alice"




  function doubleNumbers(numbers) {
    return numbers.map(num => num * 2);
  }
  const numbers = [1, 2, 3, 4];
  console.log(doubleNumbers(numbers));  // Output: [2, 4, 6, 8]




  function applyToEach(array, callback) {
    return array.map(callback);
  }

  const numbers1 = [1, 2, 3, 4];
  const doubled = applyToEach(numbers1, num => num * 2);
  console.log(doubled);  // Output: [2, 4, 6, 8]
  
  
  