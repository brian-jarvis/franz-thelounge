module.exports = Franz => {
  const getMessages = function getMessages() {
    let directElements = document.querySelectorAll('.badge.highlight');
    let indirectElements = document.querySelectorAll('.badge:not(.highlight)');
    let direct = 0;
	let indirect = 0;

    for (let i = 0; i < directElements.length; i += 1) {
		n = parseInt(directElements[i].innerHTML);
		direct += isNaN(n) ? 0 : n;
    }
	for (let i = 0; i < indirectElements.length; i += 1) {
		n = parseInt(indirectElements[i].innerHTML);
		indirect += isNaN(n) ? 0 : n;
    }
	
    // Set Franz badge
    Franz.setBadge(direct, indirect);
  };

  // Check for new messages every second and update Franz badge
  Franz.loop(getMessages);
};