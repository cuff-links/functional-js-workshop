function checkUsersValid(goodUsers){
	return function allUsersValid(submittedUsers){
		submittedIds = submittedUsers.map(u => u.id);
		return submittedIds.every(id => goodUsers.some(gu => id === gu.id));
	}
}

module.exports = checkUsersValid;