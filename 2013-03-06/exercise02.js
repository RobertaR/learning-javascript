var tabella = "";
for(var i=1; i<=10; i++){
	for(var j=1; j<=10; j++){
		if(j<10) 
			tabella += (i*j + ","+"\t");
		else 	
			tabella += (i*j + "\n"); 	
	}
}
console.log(tabella);