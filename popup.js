var clicked = false;

document.getElementById("iamsslider").addEventListener('click', function(){
	clicked = document.getElementById("iamsslider").checked;
});


chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	if(clicked) {
  chrome.tabs.sendMessage(tabs[0].id, {type: "hello"}, function(response) {
    alert(response.farewell);
  });
	};
});
