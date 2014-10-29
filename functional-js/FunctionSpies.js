function Spy(target, method) {
	var result = {
		count: 0
	};
	var tarFunc = target[method];
	target[method] = function () {
		result.count++;
		return tarFunc.apply(this, arguments);
	};
	return result;
}

module.exports = Spy;