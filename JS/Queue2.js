function Queue() {
	dataStore = Array.prototype.slice.call(arguments, 0)
	return {
		enqueue: function (element) {
			dataStore.push(element);
		},
		dequeue: function () {
			let element = dataStore[0]
			dataStore.shift();
			return element
		},
		emptyQueue: function () {
			return dataStore = [];
		},
		isEmpty: function (){
			return dataStore.length ? false : true
		},
		print: function (){
			return dataStore
		},
	}

}
