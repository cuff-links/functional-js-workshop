function getShortMessages(messages) {
	return messages.map(m => m.message).filter(m => m.length < 50 )
}

module.exports = getShortMessages;