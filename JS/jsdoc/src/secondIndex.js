/**
 * LinkedList
 * @type {LinkedList}
 * @param {Node} head
 * @param {Node} tail
 * @returns {LinkedList}
 */
function LinkedNode ( data, next = null ) {
	this.data = data
	this.next = next
}
function LinkedList ( head = null, tail = null ) {
	if(head instanceof Array){
		this.head = arrayToLinkedList(head).head
		this.tail = arrayToLinkedList(head).tail
	}
	else {
		this.head = head
		this.tail = tail
	}
}

LinkedNode.prototype.add = function (node) {
	try {
		if(node instanceof LinkedNode){
			let isAvailable = this.next 
			if(!isAvailable){
				this.next = node
				return true
			}
			return `**Addition failed! principal node has already link` 
		} 
		return `"**${node}" must be LinkedNode type`
	}
	catch (e) {
		return `ERROR ADDING NODE: ${e}` 
	}
}
LinkedNode.prototype.remove = function (node) {
	try {
		let isAvailable = this.next 
		if(isAvailable) {
			this.next = null
			return true
		}
		else return `**Remove failed! ${node} doesn't have any link node'`

	}
	catch (e) {
		return `ERROR REMOVING NODE: ${e}`
	}
}
LinkedList.prototype.addNode = function (node) {
	try {
		if(node instanceof LinkedNode){
			if(this.head === null){
				this.head = node
			}
			else {
				this.tail.next = node
				this.tail = node
			}
			return true
		} else return `${node} must be LinkedNode type`
	}
	catch (e) {
		return `**ERROR ADDING NODE IN LINKEDLIST: ${e}`
	}
}
LinkedList.prototype.size = function () {
	let counter = 0
	let node = this.head
	while(node){
		counter++
		node = node.next
	}
	return counter
}
LinkedList.prototype.show = function () {
		let list = this.head
	for(let i = this.head; i !==this.tail; i = i.next){
		console.log(i.data)
		if(i.next === this.tail) 
			console.log(this.tail.data)
	}
}

LinkedList.prototype.toArrray = function () {
	let arr = []
	for(let i = this.head; i !== this.tail; i = i.next){
		arr.push(i.data)
		if(i.next === this.tail)
		  arr.push(this.tail.data)
	}
	return arr
}
LinkedList.prototype.concat = function (linkedL) {
	if(linkedL instanceof LinkedList){
		let newLinkedList = new LinkedList()
		this.tail.next = linkedL.head
		this.tail = linkedL.tail
		newLinkedList = this
		return newLinkedList
	}
	else return `ERROR CONCAT PROCESS, FAILED!`
}

const arrayToLinkedList = (arr) => {
	const nodes = []
	for(let i = 0; i<arr.length; i++){
		nodes.push(new LinkedNode(arr[i]))
		if(i>0)
			nodes[i-1].add(nodes[i])
	}
  return new LinkedList(nodes[0], nodes[nodes.length -1])
}


module.exports = {LinkedList, LinkedNode}
