chrome.contextMenus.create({
    title : "Open Facebook",
    contexts: ["all"],
    onclick : mobileView
  });
function mobileView() {
  // Loop over all windows and their tabs

  chrome.windows.getAll({ populate: true }, function(windowList) {
    var windowFlag=true;
    for (var i = 0; i < windowList.length; i++) {
      if (String(windowList[i].type)=='popup') {
          console.log(windowList[i].id)
          // windowList[i].focus();
          windowFlag=false;
          chrome.windows.update(windowList[i].id,{focused:true});
      }
    }
    if (windowFlag==true) {
      chrome.windows.create({
          url : "https://m.facebook.com/",
          type:"popup",
          width:400,
          height:800,
          left:880,
        });
    }
  });
}
