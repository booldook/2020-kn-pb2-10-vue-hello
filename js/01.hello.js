new Vue({
	el: "#app",
	data: {
		title: 'Hello Vue',
		username: '',
		x: '',
		y: '',
		z: '',
	},
	methods: {
		onFocus() {
			this.x.focus();
		},
		onSum() {
			this.z = Number(this.x) + Number(this.y);
		},
		onReset() {
			this.x = this.y = this.z = '';
		}
	}
});