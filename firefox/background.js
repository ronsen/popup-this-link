browser.runtime.onInstalled.addListener(() => {
	browser.contextMenus.create({
		id: 'ptl',
		title: 'Popup This Link',
		contexts: ['link']
	});
});

browser.contextMenus.onClicked.addListener((info) => {
	const url = new URL(info.linkUrl);
	popupThis(url.href);
});

browser.action.onClicked.addListener((tab) => {
	if (tab?.url) {
		popupThis(new URL(tab.url).href);
	}
});

function popupThis(url) {
	browser.windows.create({
		height: 860,
		width: 520,
		state: "normal",
		type: "popup",
		url
	});
}

