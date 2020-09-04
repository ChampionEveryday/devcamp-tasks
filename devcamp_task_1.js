

function Dog(name, breed, weight){
	this.name = name;
	this.breed = breed;
	this.weight = weight;

	this.bark = function(){
		if(weight <= 25){
			alert(this.name + " says Yip!");
		}
		else {
			alert(this.name + " says Woof!");
		}
	};
}


var bingo = new Dog("Bingo", "Alsatian", 70);

function Movie(title, genre, rating, showtimes) {
	this.title = title;
	this.genre = genre;
	this.rating = rating;
	this.showtimes = showtimes;
	this.getNextShowing = function(){
		var now = new Date().getTime();
		for(var i; i < this.showtimes.length; i++) {
			var showtime = getTimeFromString(this.showtimes[i]);
			if((showtime - now) > 0) {
				return "Next showing of " + this.title + " is " + this.showtimes[i];
			}
		}
	};
}

var banzaiMovie = new Movie("Buckaroo Banzai", "Cult Classic", 5, ["1:00pm", "5:00pm", "7:00pm", "11:00pm"]);

var plan9Movie = new Movie("Plan 9 from Outer Space", "Cult Classic", 5, ["3:00pm", "7:00pm", "11:00pm"]);

//function declaration for numCalc
function numCalc(intArray) {    //numCalc accepts a single parameter called intArray
	var sumPositive = 0;	//declare and initialize sumPositive to 0
    var sumNegative = 0;	//declare and initialize sumNegative to 0
    for(let i=0; i<intArray.length; i++){
        intArray[i] % 2 ? sumNegative += intArray[i] : sumPositive += intArray[i];	//Where array element is an odd number (intArray[i] % 2 evaluates to 1), add it to sumNegative, else add it to sumPositive
    }
    return [sumPositive, sumNegative];	//return array containing sumPositive and sumNegative
}

function primeCheck(num) {	//primeCheck accepts a positive integer num as its parameter
	var numTest = num--;	//declare and initialize numTest for determining if num has any factors
	while (numTest > 0) {
		!(num % numTest)  ? 
			console.log (num + ' is a prime number!');
			break :
				numTest--;
	};
	if (numTest === 1) {
		console.log (num + 'is not a prime number!');
	}
	}
};

