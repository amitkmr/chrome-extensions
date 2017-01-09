chrome.contextMenus.create({
    title : "Remember It",
    contexts: ["selection"],
    onclick : rememberIt
  });

function rememberIt(data) {
    var date = new Date();
    var timeStamp = date.getTime();
    var dataObject = {};
    dataObject[timeStamp] = data.selectionText;
  chrome.storage.local.set(dataObject,function(){
      // alert('Success !..');
  });
}

chrome.browserAction.onClicked.addListener(function() {
  var windowWidth = screen.width-400;
  var windowHeight =screen.height-200;
  chrome.windows.create({
    url : "index.html",
    type:"popup",
    width:windowWidth,
    height:windowHeight,
    left:(screen.width/2)-(windowWidth/2),
  });
});
