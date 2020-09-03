chrome.browserAction.onClicked.addListener(function () {
  queryInfo = {}
  queryInfo['windowType'] = "popup";
  queryInfo['url'] = "https://*.gitlab.com/*";
  chrome.tabs.query(queryInfo, function (result) {
    if (result.length) {
      chrome.windows.update(result[0].windowId, { focused: true });
    } else {
      chrome.windows.create({
        url: "https://gitlab.com/symb-koko/koko-backend/-/issues",
        type: "popup",
        width: screen.width / 2,
        height: screen.height,
        left: 0,
      });
    }
  });
});
