function fibonacci(n){
	var risultato = "";
	for(var i=1;i<=n;i++)
		if(n===0)
			risultato = 0;
		else if(n===1)
			risultato = 1;
		else {
			var a = n-1
			var b = n-2
			risultato = a+b;
		}
			console.log(risultato);
	
}
