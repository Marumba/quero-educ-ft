export const numberToCurrency = number => number.toLocaleString('pt-BR');

export const clearArray = (array, dirt) => array.filter(item => item !== dirt);

export const sortArray = (array, orderBy) => array.sort((a, b) => (a[orderBy] > b[orderBy]));

export const createList = (array, objKeys) => {
	const newArray = [];
	for (let i = 0; i < array.length; i++) {
		const obj = {};
		objKeys.forEach(item => {
			obj[item] = array[i];
		});
		newArray.push(obj);
	}
	return newArray;
};

export const createSet = (array, setKey, sort) => {
	const newSet = [...new Set(array.map(item => {
		if (setKey.length === 2) {
			return item[setKey[0]][setKey[1]];
		}
		return item[setKey];
	}))];

	if (sort) return newSet.sort();
	return newSet;
};
