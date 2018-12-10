const app = new Vue({
	el: '#app',
	data: {
		message: "Propiedad Computada"
	},
	computed: {
		reverse() {
			return this.message.split('').reverse().join('');
		}
	}
});

