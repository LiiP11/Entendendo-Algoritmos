// Table

const multiplicationTable = arr => {
	let newArr = [];

	for (const i of arr) {
		let row = [];

		for (const j of arr) row.push(i * j);

		newArr.push(row);
	}

	return newArr;
};

const array = [2, 3, 7, 8, 10];

console.log(multiplicationTable(array));

// [
//	[ 4,  6, 14, 16, 20],
// 	[ 6,  9, 21, 24, 30],
// 	[14, 21, 49, 56, 70],
// 	[16, 24, 56, 64, 80],
// 	[20, 30, 70, 80, 100]
// ]