// Script reflected on all pages
//ネタバレしかないから注意だぞ？
ALNUM = "abcdefghijklmnopqrstuvwxyz0123456789";

function gonext() {
    var word = document.getElementById("keyword").value;
    document.location.href= word + '.html';
}

function gokeynext() {
    var word = document.getElementById("keyword").value;
    word = wordtrim(word);
    document.location.href= word + '.html';
}

function enter(keycode) {
    if (keycode == 13){
      gonext();
    }
}

function resetkey() {
    document.getElementById("keyword").value = "";
}

function setkey(word) {
    var old = document.getElementById("keyword").value;
    if (old.length == 4) return;
    document.getElementById("keyword").value = old + word;
}

function trim(word) {
    var result = "";
    for (var i = 0; i < word.length; i++) {
	var c = word.charAt(i);
	if (ALNUM.indexOf(c, 0) == -1) continue;
	result += c;
    }
    return result;
}
function setinCookie (attr, valu) {
  var cData = attr + "=" + encodeURIComponent(valu) +";";
  document.cookie = cData + "max-age=2592000;path=/";
}

function resetinCookie (attr) {
  var cData = attr + "=;";
  document.cookie = cData + "max-age=-1";
}

function getinCookie(attr){
  var i = document.cookie.indexOf(attr);
  if(i<0){
    return "";
  }
  var pick = document.cookie.substr(i);
  var fr = pick.indexOf("=");
  var to = pick.indexOf(";");
  if(to <= 0){
    to = pick.length
  }
  return decodeURIComponent(pick.substring(fr+1,to));
}

function keyword(attr){
  return "<b>"+attr+getinCookie(attr)+"</b>"
}

function collect(card,num){
  var x = parseInt(getinCookie(card));
  if(isNaN(x)){
    x = 0;
  }
  setinCookie(card,String(x|num));
}

function getcard(card){
  var x = parseInt(getinCookie(card));
  if(isNaN(x)){
    x = 0;
  }
  return x;
}

function getSizeRatio(){

  var screen_size = window.parent.screen.width * window.parent.screen.height;
  var window_size = window.innerWidth * window.innerHeight;

  return window_size/screen_size;
}
function getcat(){
  const now = new Date();
  const month = now.getMonth()+1;
  const day = now.getDate();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  if(month==2 && day==22 && hours==22 && minutes ==22){
    return "yes";
  }
  return "no";
}

function picCheck(){
  if(getSizeRatio()<0.1 || getcat()=="yes"){
    document.location.href= 'ulthar.html';
  }
}

function resetallCookie(){
  var result = window.confirm('進行状況をリセットしますか?');
  if(result==true){
    resetinCookie("picture");
    resetinCookie("catfood");
    resetinCookie("someone");
    resetinCookie("addlink");
    window.location.reload(true);
  }
}
