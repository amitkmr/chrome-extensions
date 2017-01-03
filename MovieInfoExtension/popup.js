function getMovieName(tabUrl){
  var split_url = tabUrl.split("/")
  var site_name = split_url[2]
  var movie_name = ""
  switch (site_name) {
    case 'in.bookmyshow.com':
      movie_name = split_url[5].split("-").join(" ");
      break;
    case 'www.ticketplease.com':
      movie_name = split_url[5].split("-").join(" ");
      break;
    case 'www.carnivalcinemas.com':
      movie_name = split_url[4].split("%20").join(" ");
      break;
    case 'www.pvrcinemas.com':
      movie_name = split_url[5].split("-").join(" ");
      break;
    case 'watchmoviesfree.tv':
      movie_name = split_url[4].split("-")[1].split("_").join(" ")
      break;
    default:
      movie_name = "Error Selecting name"
  }
  return movie_name
}

function getRating(){
  var xhr = new XMLHttpRequest();
  chrome.tabs.getSelected(null,function(tab) {
    var tablink = tab.url;  // url of the opened tab
    movie_name = getMovieName(tablink);
    xhr.open('GET', "http://www.omdbapi.com/?t="+movie_name+"&y=&plot=short&r=json", true);
    xhr.send();
    xhr.addEventListener("readystatechange", processRequest, false);
    function processRequest(e) {
      if (xhr.readyState == 4 && xhr.status == 200) {
          var response = JSON.parse(xhr.responseText);
          // document.write("IMDB Rating:  "+response.imdbRating);
          document.getElementById('name').innerHTML = movie_name.toUpperCase()
          document.getElementById('rating').style.display = 'block';
          document.getElementById('rating').innerHTML = response.imdbRating
          document.getElementById('imdb').setAttribute("href","http://www.imdb.com/title/"+response.imdbID)
          document.getElementById('imdb').style.display = 'block';
      }
    }
  });

}

document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('check');
  checkPageButton.addEventListener('click', function() {
    getRating();
  }, false);
}, false);
