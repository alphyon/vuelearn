const app = new Vue({
	el: '#app',
	data: {
		title: "Ejercicios",
		itemAdd: "",
		tasks: [],
	},
	methods: {
		addTask: function () {
			this.tasks.push({
				task: this.itemAdd,
				status: false
			});
			this.addLs();
			this.itemAdd = '';
		},
		editTask: function (index) {
			this.tasks[index].status = true;
			this.addLs();
		},
		deleteTask: function (index) {
			this.tasks.splice(index);
			this.addLs();
			
		},
		addLs:function () {
			localStorage.setItem('gym-vue',JSON.stringify(this.tasks));
		}
	},
	created: function () {
		let datosDB = JSON.parse(localStorage.getItem('gym-vue'));
		if (datosDB === null) {
			this.tasks = [];
		} else {
			this.tasks = datosDB;
		}
	}
});

