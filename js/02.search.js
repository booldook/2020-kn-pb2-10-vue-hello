new Vue({
	el: '#app',
	data: {
		title: '배고파 식당',
		subTitle: '메뉴를 선택하세요.',
		search: ''
	},
	methods: {
		onReset() {
			this.search = '';
		}
	}
});