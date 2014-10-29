function countWords(inputWords) {
	return inputWords.reduce(function(prevObject, curItem) {
		prevObject[curItem] = ++prevObject[curItem] || 1;
		return prevObject;
	}, {});
}

module.exports = countWords;