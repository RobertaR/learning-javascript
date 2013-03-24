var data = [
  {id:'01', name:'duffy'},
  {id:'02', name:'michey'},
  {id:'03', name:'donald'},
  {id:'04', name:'goofy'},
  {id:'05', name:'minnie'},
  {id:'06', name:'scrooge'}
];

var key = 'name';
var values = ['goofy', 'scrooge'];

function select(data,key,values){
	var output = [];
	for(ind in values){
		for(indice in data){
			if(values[ind]=== data[indice].name)
				output.push('{ '+ data[indice].id + ', ' + data[indice].name + ' }');
		}
	}
console.log(output);
}

//soluzione vista in aula e approvata
function select2(data,key,values){
		return data.filter(function(item_data){
			return values.some(function(item_values){
				return item_data[key] === item_values;
			})
		})
	}