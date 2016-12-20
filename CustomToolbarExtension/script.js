var url = chrome.extension.getURL("toolbar.html");
var height = "30px";
var iframe="  <iframe src="+url+" id='toolbarIframeId'height="+height+"></iframe>";
$('html').append(iframe);
$('body').css({
  "transform":"translateY("+height+")"
});
