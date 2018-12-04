const app = new Vue({
	el: '#app',
	data: {
		title: 'Hola mundo VUE',
		fruits: [
			{ name: 'pera', quantity: 10 },
			{ name: 'manzana', quantity: 2 },
			{ name: 'uva', quantity: 100 },
			{ name: 'Banana', quantity: 0 },
		],
		testData: '',
		total:0
	},
	methods: {
		addElement() {
			if(this.testData !== ''){
				this.fruits.push({
					name: this.testData, quantity: 0
				}) ;
			}else{
				alert('no se puede procesar el dato si esta vacio')
			}
			
			this.testData = '';
		}
	},
	computed:{
		  sumElements(){
		  	this.total = 0;
		  	for(fruit of this.fruits){
		  		this.total = this.total + fruit.quantity
			  }
			  return this.total;
		  }
	}
});