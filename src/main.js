function buttonClick(event) {
	let userAgentDiv = document.getElementById('user-agent-info-id');
	userAgentDiv.innerHTML = `<hr><code>${window.navigator.userAgent}</code>`;
}

function contentLoaded(event) {
	let infoButton = document.getElementById('info-button-id');

	infoButton.addEventListener('click', buttonClick);
}

document.addEventListener('DOMContentLoaded', contentLoaded);
