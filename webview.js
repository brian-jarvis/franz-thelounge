module.exports = Franz => {
	const getMessages = function getMessages() {
		let indirectElements = document.querySelectorAll('.badge:not(.highlight)');
		let direct = document.querySelectorAll('.badge.highlight').length;
		let indirect = 0;
		for (let i = 0; i < indirectElements.length; i += 1) {
			if (indirectElements[i].innerHTML.length > 0) indirect++;
		}
		console.log(direct, indirect);
		Franz.setBadge(direct, indirect);
	};
	Franz.loop(getMessages);
};
