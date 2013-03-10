var tabella = "";
for(var i=1; i<=10; i++){
	for(var j=1; j<=10; j++){
		if(j===i)
			tabella += '1'+ '\t';
		else 
			tabella += '0' + '\t'
	}
	tabella += '\n'
}
console.log(tabella);
