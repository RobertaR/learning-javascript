function pushRandom(n){
	var numeri = [];
	for(var i=0;i<n;i++){
		numeri.push(Math.floor(Math.random()*10));
	}
	console.log(numeri);
}

var array = [1,2,3,4,5,6,7,8,9];

var compare = function(value1,value2){
	return value1-value2;
	}

array.filter(function(item){ 
	return item % 2 !== 0;})
	.sort(compare)



