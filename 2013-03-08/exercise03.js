var parola = 'parola';

function tornaMaiuscola(parola){
	var maiusc = parola.toUpperCase();
	console.log(maiusc);
}

function primaMaiuscola(w){
	var a = w.chartAt(0);
	var b = w.slice(1);
	return a.toUpperCase().concat(b);
}


