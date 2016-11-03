var Rectangle = {
	length: 4,
	width: 4,
	is_square: function() {
		if (this.length === this.width){
			return "is a square";
		} else {
			return "not a square";
		}
	},
	area: function() {
		return this.length * this.width;
	},
	perimeter: function() {
		return (this.length * 2) + (this.width * 2);
	},
	is_golden: function() {
		if (this.length/this.width === (1/2)+(Math.sqrt(5)/2)){
			return "golden ratio"
		}
		else if (this.length/this.width === -(1/2)+(Math.sqrt(5)/2)){
			return "golden ratio"
		} else {
			return "not golden"
		}
	}
};

var Triangle = {
	side_a: 3,
	side_b: 4,
	side_c: 4,
	is_equilateral: function() {
		if (this.side_a===this.side_b===this.side_c){
			return "is equilateral";
		} else {
			return "is not equilateral";
		}
	},
	is_isosceles: function() {
		if ((this.side_a===this.side_b) || (this.side_b===this.side_c) || (this.side_a===this.side_c)) {
			return "is isosceles";
		} else {
			"is not isosceles";
		}
	},
	area: function() {
		var p = (this.side_a+this.side_b+this.side_c)/2;
		return Math.sqrt(p*(p-this.side_a) *(p-this.side_b)*(p-this.side_c));
	},
	law_of_cosines: function(a,b,c) {
  		var cos = (Math.pow(a,2) + Math.pow(b,2) - Math.pow(c,2))/ (2 * a * b);
  		var angle = (Math.acos(cos)) * (180 / Math.PI);
  		return angle;
  	},
	angles: function() {
  		var angle_c = this.law_of_cosines(this.side_a, this.side_b, this.side_c);
  		var angle_b = this.law_of_cosines(this.side_c, this.side_a, this.side_b);
  		var angle_a = this.law_of_cosines(this.side_b, this.side_c, this.side_a);
  		return [angle_a, angle_b, angle_c];
  	},
};

