var PRESENTATIO_SIZE = 12;
var currImageNumber=0;
var timerId;
function createNavImg(index) {
  var img = document.createElement('img');
  img.setAttribute('src', './images/'+(index+1)+'.jpg');
  img.setAttribute('width','100%');
  img.className = 'naw-img';
  img.onclick = function() {
    clearInterval(timerId);
    setCurrImg(index);
  };
  return img;
}
function buildNavigationHTML() {
  var menu = document.getElementById('navigationDiv');

  for (let i = 0; i < PRESENTATIO_SIZE; i++) {
    menu.appendChild(createNavImg(i));
  }
  
}
function setCurrImg(index){
  var img = document.getElementById('currImg');
  currImageNumber = index;
  img.setAttribute('src', './images/'+(currImageNumber+1)+'.jpg');
  img.setAttribute('align', 'center');

}
function hideMenu(){
  var menu = document.getElementById('navigationDiv');
  var img = document.getElementById('showingWindow');
  var nav = document.getElementById('navigButton');
  menu.style.visibility = 'hidden';  
  menu.style.width = '0%';
  img.style.width = '90%'
  nav.style["margin-left"] = "32%";
}
function showMenu(){
   var menu = document.getElementById('navigationDiv');
   var img = document.getElementById('showingWindow');
   var nav = document.getElementById('navigButton');
  menu.style.visibility = 'visible';
  menu.style.width = '16%';
  img.style.width = '76%';
  nav.style["margin-left"] = "42%";
}
function prevImg(){
  if(currImageNumber<=0)
    return;
  currImageNumber--;
  setCurrImg(currImageNumber);
}
function nextImg(){
  if(currImageNumber>=PRESENTATIO_SIZE-1)
    return;
  currImageNumber++;
  setCurrImg(currImageNumber);
}
function autoPlay(){
  hideMenu();
  clearInterval(timerId);
  timerId = setInterval(nextImg, 2000);
}
function randPlay(){
  hideMenu();
  clearInterval(timerId);
  timerId = setInterval(function(){
  currImageNumber = Math.floor(Math.random() * (PRESENTATIO_SIZE));
  setCurrImg(currImageNumber);

  }, 2000);
}
document.getElementById("prevButton").onclick = function(){
  clearInterval(timerId);
  prevImg();
}
document.getElementById("nextButton").onclick = function(){
  clearInterval(timerId);
  nextImg();
}
document.getElementById("playButton").onclick = autoPlay;
document.getElementById("randPlayButton").onclick = randPlay;
$(document).keyup(function(e) {
     if (e.keyCode == 27) { 
        showMenu();
       clearInterval(timerId);
    }
});
buildNavigationHTML();
setCurrImg(currImageNumber);
