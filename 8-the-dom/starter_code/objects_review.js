var Friends = {
	friend_1: {
		first: "kelly",
		last: "smith"
	},
	friend_2: {
		first: "john",
		last: "jones"
	}
}

var BookStore = {
	books: {
		book1: {
			title: "Columbo",
			author: "Jon Smith"
		},
		book2: {
			title: "Columbo",
			author: "Jon Smith"
		}
	}
}



var BookStore = {
	books: [
		{title: "Columbo", author: "Jon Smith"},
		{title: "Scooby Doo", author: "Unknown"},
	],
	book_count: function(){
		return this.books.length;
	},

	authors: function(){
			return this.books.map(function(book){return book.author;});
	}
}


var Circle = { 
	radius: 2,
	color: "red",
	circumference: function() { // method is a function that is within an object, assigns with : instead of =
		return 2 * Math.PI * this.radius;
	},
	area: function() {
	return Math.PI * Math.pow(this.radius,2);
	},
	volume: function() {
	return Math.pow(this.radius, 3) * (4/3) * Math.PI;
	},
	surface: function() {
	return 4 * Math.PI * Math.pow(this.radius, 2);
	},
	color_printer: function() {
		document.write(this.color);
	},

	check_scope: console.log(this), // scope of Circle is window
	check_scope_function: function() {
		console.log(this); // scope of inside function is object circle
	}

}


