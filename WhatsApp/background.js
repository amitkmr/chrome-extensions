chrome.browserAction.onClicked.addListener(function() {
      queryInfo ={}
      queryInfo['windowType'] = "popup";
      queryInfo['url'] = "https://*.whatsapp.com/*";
      chrome.tabs.query(queryInfo, function (result){
        if(result.length)
        {
          chrome.windows.update(result[0].windowId,{focused:true});
        }else{
          chrome.windows.create({
              url : "https://web.whatsapp.com/",
              type:"popup",
              width:400,
              height:screen.height,
              left:screen.width-400,
            });
        }
      });
});
