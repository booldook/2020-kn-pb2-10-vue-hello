var products = [
	{id: 1, name: 'Furniture 01', src: '../img/lx-0-0.jpg', price: '$12.00'},
	{id: 2, name: 'Furniture 02', src: '../img/lx-1-0.jpg', price: '$122.00'},
	{id: 3, name: 'Furniture 03', src: '../img/lx-2-0.jpg', price: '$299.00'},
	{id: 4, name: 'Furniture 04', src: '../img/lx-3-0.jpg', price: '$9.00'},
	{id: 5, name: 'Furniture 05', src: '../img/lx-4-0.jpg', price: '$89.00'},
	{id: 6, name: 'Furniture 06', src: '../img/lx-5-0.jpg', price: '$99.99'},
	{id: 7, name: 'Furniture 07', src: '../img/lx-6-0.jpg', price: '$49.99'},
	{id: 8, name: 'Furniture 08', src: '../img/lx-7-0.jpg', price: '$45.00'},
	{id: 9, name: 'Furniture 09', src: '../img/lx-8-0.jpg', price: '$89.99'},
	{id: 10, name: 'Furniture 10', src: '../img/lx-9-0.jpg', price: '$15.00'},
	{id: 11, name: 'Furniture 11', src: '../img/lx-10-0.jpg', price: '$22.00'},
	{id: 12, name: 'Furniture 12', src: '../img/lx-11-0.jpg', price: '$12.99'}
]

new Vue({
	el: '#app',
	data: {
		title: '배고파 식당',
		subTitle: '메뉴를 선택하세요.',
		search: '',
		prds: []
	},
	methods: {
		onReset() {
			this.search = '';
		}
	}
});