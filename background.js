chrome.browserAction.onClicked.addListener(function(tab) {
  var url = tab.url
  chrome.tabs.create({url: "https://gtmetrix.com/"}, function(tab){
    alert(url)
  });
})
