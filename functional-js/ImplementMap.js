module.exports = function arrayMap(arr, fn) {
	return arr.reduce(function(pre, cur, index, arr) {
		return pre.concat(fn(cur));
	}, []);
};