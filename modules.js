exports.consolelog = str => {
	const upperCaseArray = str.toUpperCase().split('');
	for (let i = 1; i < upperCaseArray.length; i += 2) {
		if (upperCaseArray[i] === ' ') {
			i++;
		}
		upperCaseArray[i] = upperCaseArray[i].toLowerCase();
	}
	return upperCaseArray.join('');
};
