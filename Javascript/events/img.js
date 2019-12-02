var one=document.getElementById("one");
var two=document.getElementById("two");
var three=document.getElementById("three");

one.addEventListener("click",picLink);
two.addEventListener("click",picLink);
three.addEventListener("click",picLink);
function picLink(){
    var allImages = document.querySelectorAll("img");
    for(var i=0;i<allImages.length;i++)
    allImages[i].className="hide";

var picID= this.attributes["data-img"].value;
var pic=document.getElementById(picID);
if(pic.className=="hide")pic.className="";
else
pic.className="hide";
}