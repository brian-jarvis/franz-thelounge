module.exports = Franz => {
	const getMessages = function getMessages() {
		//let badgeElements = document.querySelectorAll('.badge');
		let badgeElements = document.querySelectorAll('.badge.highlight');
		let totalMessages = 0;
		for (let i = 0; i < badgeElements.length; i += 1) {
			if (badgeElements[i].innerHTML.length > 0) {
				totalMessages = totalMessages + badgeElements[i].innerHTML
			}
		}

		console.log(1, parseInt(totalMessages));
		//Franz.setBadge(direct, indirect);
		Franz.setBadge(parseInt(totalMessages));
	};
	Franz.loop(getMessages);
};
