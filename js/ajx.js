/*function ajx(url,target){
  document.getElementById(target).innerHTML=' Fetching data...'
if(window.XMLHttpRequest){
  req=new XMLHttpRequest()}
  else if(window.ActiveXObject){
    req=new ActiveXObject("Microsoft.XMLHTTP")}
    if(req !=undefined){
      req.onreadystatechange=function(){
      ajxDone(url,target);}
      req.open("GET",url,true)req.send("")}
    }
    function ajxDone(url,target){
      if(req.readyState==4){
        if(req.status==200){
          document.getElementById(target).innerHTML=req.responseText}
          else{
            document.getElementById(target).innerHTML=" AJAX Error:\n"+req.status+"\n"+req.statusText}
          }
        }
*/
//Calls the library function 'ajx' - defined in 'ajx.js' file.
function load(filename) {
	ahah(filename,"showpage");
}
function ahah(url, target) {
  document.getElementById(target).innerHTML = ' Fetching data...';
  if (window.XMLHttpRequest) {
    req = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    req = new ActiveXObject("Microsoft.XMLHTTP");
  }
  if (req != undefined) {
    req.onreadystatechange = function() {ahahDone(url, target);};
    req.open("GET", url, true);
    req.send("");
  }
}

function ahahDone(url, target) {
  if (req.readyState == 4) { // only if req is "loaded"
    if (req.status == 200) { // only if "OK"
      document.getElementById(target).innerHTML = req.responseText;
    } else {
      document.getElementById(target).innerHTML=" AHAH Error:\n"+ req.status + "\n" +req.statusText;
    }
  }
}
