function accept(ev){
	var screenValue = document.getElementById("content").value;
	if (screenValue.trim().length  == 0) {
		return;
	}
	if (ev.ctrlKey)
	{
		document.getElementById("content").value = '';
	}
	var historyList = document.querySelector("#textList ul");
	var newLi = document.createElement("li");
	//newLi.innerHTML = escape(screenValue);
	newLi.innerHTML = screenValue;
	historyList.appendChild(newLi);
}
function writeMe(me) {
document.getElementById("content").value += me.innerHTML;
}
function bSpaceIt()
{
var len = document.getElementById("content").value.length ;
document.getElementById("content").value = document.getElementById("content").value.slice(0,len -1 ) ;
}
function spaceIt()
{
document.getElementById("content").value += " ";
}
function enterIt()
{
document.getElementById("content").value += "\n";
}
function cancel()
{
document.getElementById("content").value = '';
}
function shiftIt()
{
var strId , i;
if (document.getElementById("b65").innerHTML == document.getElementById("b65").innerHTML.toUpperCase() )
{
for (i=65;i<90;i++)
{
strId = "b" + i.toString();
document.getElementById(strId).innerHTML = document.getElementById(strId).innerHTML.toLowerCase();
}
}
else
{
for (i=65;i<90;i++)
{
strId = "b" + i.toString();
document.getElementById(strId).innerHTML = document.getElementById(strId).innerHTML.toUpperCase();
}
}
}
function tabIt()
{
document.getElementById("content").value += "	" ;
}					
function pressIt(ev)
{
if ((ev.keyCode  > 96 ) && (ev.keyCode  < 123 ))
 {ascKey = ev.keyCode - 32}
 else 
 {ascKey = ev.keyCode}
 
strId = "b" + ascKey;

if (ev.keyCode == 16)
{
shiftIt();
}
document.getElementById(strId).classList.add("jump");
}	
function empty(){return true;}
function unPressIt(ev)
{
//setTimeout(empty, 300000);
if ((ev.keyCode  > 96 ) && (ev.keyCode  < 123 ))
 {ascKey = ev.keyCode - 32}
 else 
 {ascKey = ev.keyCode} 
strId = "b" + ascKey;
setTimeout(function () {document.getElementById(strId).classList.remove("jump");}, 100);		
}
