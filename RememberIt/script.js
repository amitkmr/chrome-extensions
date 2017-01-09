document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('#clearAll').addEventListener('click', clearStorage);
    document.querySelector('#printWindow').addEventListener('click', printWindow);

    chrome.storage.local.get(function(result){
      var list = document.getElementById('rememberedItem');
      var keys = []
        for (var key in result) {
          if (result.hasOwnProperty(key)) {
            keys[keys.length]=key;
          }
        }
        // Sorting last to first
        for (var i = keys.length-1; i >=0; i--) {
          var entry = document.createElement('li');
          entry.appendChild(document.createTextNode(result[keys[i]]));
          list.appendChild(entry);
        }
    });
});

function clearStorage(){
    chrome.storage.local.clear(function(){
    window.location.reload();
  });
}

function printWindow() {
  window.print();
}
