/* 
Turn an array into a binary sorted tree.

ex :

[1,2,3,4,5,6,7]

        4
   2        6   
1    3    5    7

Node structure :

	Node
		parent : value
		left : value
		right : value
		and some util functions

Each node being an object created from a constructor function.
The cool thing is that each node creates its own child nodes, and 
the tree grows iteslf downward.
*/

var c = console;

var arr = [1,4,3,6,7,22,33,43,21,11,14,222,76];

//pass in a sorted array and the index of the middle element
var Node = function(arr, head) {

	this.parent = typeof head === 'undefined' ? null : head;
	this.data = null;
	this.left = null;
	this.right = null;
	
	//pass in an array to sort, get back sorted array
	this.sortArr = function(arrToSort) {
		return arrToSort.sort(function(a,b) {
			//c.log('a:%s b:%s', a, b);
			return a-b;
		});
	};

	//pass in sorted array, get back the middle index
	this.findMiddle = function (arr) {
		return Math.floor(arr.length/2);
	}

	//pass in an array and the middle index, this.data gets filled, left and right
	//get turned into a new Node object
	this.cut = function(arr, mid) {
		this.data = arr[mid];
		var leftArr = arr.slice( 0, mid );
		var rightArr = arr.slice( mid + 1 );

		c.log('mid : ' + this.data);
		c.log('left : ' + leftArr + ' right : ' + rightArr);
		
		c.log('----------');
		this.left = new Node(leftArr, this.data);
		this.right = new Node(rightArr, this.data);
	};

	if( arr.length > 1 ) {
			var sortedArr = this.sortArr(arr);
			var middleIndex = this.findMiddle(sortedArr);
			var arrInfo = this.cut( sortedArr,  middleIndex);
	}	
};

var stack = []; //to do

function showNode(n) {
	
	//to do		
	
};

var root = new Node(arr);
