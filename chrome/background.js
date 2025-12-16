chrome.runtime.onInstalled.addListener(() => {
	chrome.contextMenus.create({
		id: 'linkpop',
		title: 'Link Pop',
		type: 'normal',
		contexts: ['link']
	});
});

chrome.contextMenus.onClicked.addListener((info) => {
	const url = new URL(info.linkUrl);

	chrome.windows.create({
		height: 860,
		width: 520,
		state: "normal",
		type: "popup",
		url: url.href
	});
});
