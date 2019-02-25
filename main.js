function countme(id,n){
var m=-1;
let el=document.getElementById(id);
var count=function (){
    
    if(m<n)
    {
        requestAnimationFrame(count);
        m++;
        el.innerHTML=m;
    }
    else
    {
        return;
    }
}
count();
}

window.onload=function(){
    countme('event-count',100);
    countme('award-count',50);
    countme('member-count',256);
}