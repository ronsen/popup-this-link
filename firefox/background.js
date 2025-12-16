browser.contextMenus.create({
	id: "linkpop",
	title: "LinkPop",
	contexts: ["link"]
});

function contextMenuAction(info) {
	popupThis(new URL(info.linkUrl));
}

browser.contextMenus.onClicked.addListener(contextMenuAction);

function openAction() {
	const activeTab = browser.tabs.query({
		active: true, currentWindow: true
	});

	activeTab.then((tabs) => {
		popupThis(new URL(tabs[0].url));
	});
}

browser.browserAction.onClicked.addListener(openAction);

function popupThis(url) {
	let popupUrl = url.href;

	chrome.windows.create({
		height: 860,
		width: 520,
		state: "normal",
		type: "popup",
		url: popupUrl
	});
}