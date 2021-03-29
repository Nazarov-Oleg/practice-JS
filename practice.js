let number = 0;
let taskResult;
if (number % 3 == 0 && number % 5 !== 0) {
  taskResult = 'Fizz'
} else if (number % 5 == 0 && number % 3 !== 0) {
taskResult = 'Buzz'
}  else if (number % 3 == 0 && number % 5 == 0) {
taskResult = 'FizzBuzz'
}  else (taskResult = number)  
