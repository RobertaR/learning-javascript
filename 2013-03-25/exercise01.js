/*exercise01

Write a constructor function Point2D
that create a 2D point given its x and y coordinates.*/

function Point2D(x,y){
	this.x = x;
	this.y = y;
}

/*exercise02a

Write a contructor function Edge
that create an edge given its two vertices (i.e. two points).

exercise02b

Write a method length for Edge
that compute the length of the edge.*/

function Edge(v1, v2){
	this.v1 = v1;
	this.v2 = v2;
}
	/* 02b*/

Edge.prototype.length = function(){
	var c1 = this.v2.x - this.v1.x;
	var c2 = this.v2.y - this.v1.y;

	return (Math.sqrt(Math.pow(c1,2) + Math.pow(c2,2)));
}

/*Write a constructor function Trinagle
that create a triangle given its three edges.

exercise03b

Write a method perimeter for Triangle
that compute the perimeter of the triangle.

exercise03b

Write a method area for Triangle
that compute the area of the triangle
(Do you remeber the Erone's formula?).*/

function Triangle(cateto1,cateto2,ipotenusa){
	this.cateto1 = cateto1;
	this.cateto2 = cateto2;
	this.ipotenusa = ipotenusa;
}
	/*03b*/
Triangle.prototype.perimetro = function(){
	var c1 = this.cateto1.length();
	var c2 = this.cateto2.length();
	var i = this.ipotenusa.length();

	return (c1 + c2 + i);
}
	/*03c*/
Triangle.prototype.areaErone = function(){
	var c1 = this.cateto1.length();
	var c2 = this.cateto2.length();
	var i = this.ipotenusa.length();

	var p = (c1 + c2 + i)/2;

	return Math.sqrt(p*(p-c1)*(p-c2)*(p-i));
}