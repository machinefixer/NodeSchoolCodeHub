function checkUserValid(goodUsers) {
	return function(submittedUsers) {
		return submittedUsers.every(function(subuser) {
			return goodUsers.some(function(user) {
				return subuser.id === user.id;
			});
		});
	};
}

module.exports = checkUserValid;