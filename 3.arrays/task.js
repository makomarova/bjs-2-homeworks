function compareArrays(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	} else {
		return arr1.every((item, index) => {
			if (item === arr2[index]) {
				return true;
			} else {
				return false;
			}
		});
	}
}

function getUsersNamesInAgeRange(users, gender) {
	if (Array.isArray(users)) {
		let result = users.filter(item => item.gender === gender).map(item => item.age).reduce((acc, item, index, arr) => {
			acc += item;
			if (index === arr.length - 1) {
				return acc / arr.length;
			} else {
				return acc;
			}
		}, 0);
		return result;
	} else {
		return 0;
	}
}