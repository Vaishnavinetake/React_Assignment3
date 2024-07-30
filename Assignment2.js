// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    
    return true;
  }
  
  
function cubeNumbers(numbers) {
    return numbers.map(number => number ** 3);
  }

function sum(numbers){
    return numbers.reduce((accumulator,currentvalue) => accumulator+currentvalue,0);
  }

function findPrimes(numbers) {
    return numbers.filter(isPrime);
  }
 
function avgFind(numbers){
    const oddNumbers = numbers.filter(number => number % 2 !== 0);
    const squaredOdds = oddNumbers.map(number => number ** 2);
    const sumOfSquares = squaredOdds.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const average = squaredOdds.length > 0 ? sumOfSquares / squaredOdds.length : 0;
    
    return average;
  
}
 
  // Example :
  const numbers = [12,15,3,25,30,34];
  const cubes = cubeNumbers(numbers);
  console.log("Cubes of Numbers :");
  console.log(cubes); 
  
 // Sum
 const Sum=sum(numbers);
 console.log("Addition of Numbers :");
 console.log(Sum);

 //Prime
 const primes = findPrimes(numbers);
 console.log("Prime Numbers :");
 console.log(primes); 

 //Average
 const avgM=avgFind(numbers);
 console.log(avgM);

 //Task 5
 function findLongestString(strings) {
    return strings
      .map(str => ({ str, length: str.length }))  // Map strings to objects with their length
      .reduce((longest, current) => 
        current.length > longest.length ? current : longest, 
        { length: 0 }  // Initial value with length 0
      ).str;  // Extract the longest string
  }
  
  // Example usage
  const strings = ["apple", "banana", "strawberry", "kiwi"];
  console.log(findLongestString(strings)); // Output: "strawberry"

  
  //Task 6
  function capitalizeFirstLetter(sentence) {
    return sentence
      .split(' ')  // Split sentence into words
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))  // Capitalize the first letter
      .join(' ');  // Join the words back into a sentence
  }
  
  // Example usage
  const sentence = "hello world this is a test";
  console.log(capitalizeFirstLetter(sentence)); // Output: "Hello World This Is A Test"

  //Task 7
  function findPassingStudents(students) {
    return students.filter(student => student.score >= 60);
  }
  
  // Example usage
  const students = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 55 },
    { name: "Charlie", score: 70 }
  ];
  console.log(findPassingStudents(students)); 
  // Output: [ { name: 'Alice', score: 85 }, { name: 'Charlie', score: 70 } ]

  //Task 8
  function createInstanceCounter() {
    let count = 0;
    return function() {
      count += 1;
      return count;
    };
  }
  
  // Example usage
  const counter1 = createInstanceCounter();
  const counter2 = createInstanceCounter();
  
  console.log(counter1()); // Output: 1
  console.log(counter1()); // Output: 2
  console.log(counter2()); // Output: 1
  console.log(counter2()); // Output: 2

  //Task 9
  function calculate(a, b, operation) {
    return new Promise((resolve, reject) => {
      if (typeof a !== 'number' || typeof b !== 'number') {
        return reject("Invalid input: both inputs must be numbers.");
      }
  
      switch (operation) {
        case 'addition':
          resolve(a + b);
          break;
        case 'subtraction':
          resolve(a - b);
          break;
        case 'multiplication':
          resolve(a * b);
          break;
        case 'division':
          if (b === 0) {
            reject("Division by zero is not allowed.");
          } else {
            resolve(a / b);
          }
          break;
        default:
          reject("Invalid operation: must be addition, subtraction, multiplication, or division.");
      }
    });
  }
  
  // Example usage
  calculate(10, 5, 'addition')
    .then(result => console.log(result)) // Output: 15
    .catch(error => console.error(error));
  
  calculate(10, 0, 'division')
    .then(result => console.log(result))
    .catch(error => console.error(error)); // Output: Division by zero is not allowed.

    
    //Task 10
    function calculateTotalScore(scores) {
        let total = 0;
        scores.forEach(item => {
          total += item.score;
        });
        return total;
      }
      
      // Example usage
      const scores = [
        { score: 10 },
        { score: 20 },
        { score: 30 }
      ];
      console.log(calculateTotalScore(scores)); // Output: 60
      