function pushNatural(n){
	var a = [];
	for(var i=1;i<=n;i++){
		a.push(i);
	}
	console.log(a);
}

var array = [1,2,3,5,6,7,4,8];

array.
	filter(function(item){
		return item % 2 === 0;
	})
	.map(function(item){
		return item * 2;
	})
	filter(function(item){
		return item % 4 === 0;
	})
	.reduce(function(a,b){
		return a + b;
	});
