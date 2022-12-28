let homeEl=document.getElementById("home")
let guestEl=document.getElementById("guest")
homeEl.innerText=0;
guestEl.innerText=0;
function add1home()
{   
    console.log("+1 is clicked")
    homeEl.innerText=Number(homeEl.innerText)+1;
}
function add2home()
{   
    console.log("+2 is clicked")
    homeEl.innerText=Number(homeEl.innerText)+2;
}
function add5home()
{   
    console.log("+5 is clicked")
    homeEl.innerText=Number(homeEl.innerText)+5;
}
function add1guest()
{   
    console.log("+1 is clicked")
    guestEl.innerText=Number(guestEl.innerText)+1;
}
function add2guest()
{   
    console.log("+2 is clicked")
    guestEl.innerText=Number(guestEl.innerText)+2;
}
function add5guest()
{   
    console.log("+5 is clicked")
    guestEl.innerText=Number(guestEl.innerText)+5;
}