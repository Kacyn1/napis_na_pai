const title="3TP PANY,KRULE,RZÓLE";
var i = 0;
const h1 = document.createElement("h1");
document.body.appendChild(h1);  
function sliceText(){
    h1.innerHTML = (title.slice(0,i));
    i++;
    if(i>title.length+1) {
        i = 0;
    }
}   
window.setInterval(sliceText, 100);
