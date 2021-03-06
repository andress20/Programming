function Queue() {
	this.dataStore = Array.prototype.slice.call(arguments, 0)
	this.enqueue = enqueue
	this.dequeue = dequeue
	this.emptyQueue = emptyQueue
	this.isEmpty = isEmpty
	this.print = print

	function enqueue(element) {
		this.dataStore.push(element);
	}
	function dequeue() {
		let element = this.dataStore[0]
		this.dataStore.shift();
		return element
	}
	function emptyQueue() {
		return this.dataStore = [];
	}
	function isEmpty(){
		return this.dataStore.length ? false : true
	}
	function print(){
		console.log(this.dataStore)
	}
}
