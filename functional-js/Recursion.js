function getDependencies(tree, result) {
	result = result || [];
	var dependencies = tree.dependencies || [];
	Object.keys(dependencies).forEach(function(elem) {
		var s = elem + '@' + tree.dependencies[elem].version;
		if (result.indexOf(s) === -1) result.push(s);
		getDependencies(tree.dependencies[elem], result);
	});
	return result.sort();
}

module.exports = getDependencies;