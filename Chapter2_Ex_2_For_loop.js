/* Fizz buzz program, prints 'Fizz' for every multiple of 3(and not 5)
   , 'Buzz' for every multiple of 5( and not 3), and FizzBuzz for
   multiples of 5 and 3 , between 1 and 100*/

for ( var number = 1; number <= 100; number++) {
  if ((number % 3 === 0) && (number % 5 != 0)) {
    console.log('Fizz')}
  else if ((number % 5 === 0) && (number % 3 != 0)) {
    console.log('Buzz')}
  else if ((number % 3 === 0) && (number % 5 === 0)) {
    console.log('FizzBuzz')}else {
    continue}
}
