
//function declaration for primeCheck
function primeCheck(num) {	//primeCheck accepts a positive integer num as its parameter
    var numTest = num--;	//declare and initialize numTest for determining if num has any factors
    var isPrime = true;     //declare and initialize isPrime to true until a factor for num is found
	while (numTest > 0 && isPrime === true) {
		!(num % numTest) ? isPrime === false : numTest--;
	}
    return isPrime;     //return true if num is a prime number or false if it isn't
}