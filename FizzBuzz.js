function FizzBuzz(number) {
    if (!Number.isInteger(number) || number >= 100 || number < 1) {
        console.log("Invalid number, try again");
        return;
    }
    for (let i = 1; i <= number; i++){

        const divBy3 = i%3;
        const divBy5 = i%5;

        if (divBy3 === 0 && divBy5 === 0) { // to check if number us divBy3 and divBy5 
            console.log("FizzBuzz");
        } else if (divBy3 === 0) {
            console.log("Fizz");
        } else if (divBy5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
  }

  //tests outputs
  FizzBuzz(20);  
  //FizzBuzz(111); // outputs with erorr
  //FizzBuzz(0);  // less than 1 prints error