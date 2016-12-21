
var contextsDict = ["selection", "image", "link", "page"];
for (var i = 0; i< contextsDict.length;i++) {
  chrome.contextMenus.create({
    title : "Share this "+contextsDict[i]+" On Twitter",
    contexts: [contextsDict[i]],
    onclick : postContent,
    id : contextsDict[i]
  });

}

function postContent(data,tab) {
  switch (data.menuItemId) {
    case "selection":
      chrome.windows.create({
        url : "https://twitter.com/intent/tweet?text="+data.selectionText,
        type:"popup",
        width:600,
        height:400
      });
      break;
    case "image":
      chrome.windows.create({
        url : "https://twitter.com/intent/tweet?url="+data.srcUrl,
        type:"popup",
        width:600,
        height:400
      });
      break;
    case "link":
      chrome.windows.create({
        url : "https://twitter.com/intent/tweet?url="+data.linkUrl,
        type:"popup",
        width:600,
        height:400
      });
      break;
    case "page":
      chrome.windows.create({
        url : "https://twitter.com/intent/tweet?url="+data.pageUrl,
        type:"popup",
        width:600,
        height:400
      });
      break;
    default:
    console.log("Selected conetent not in list.");
  }
}
