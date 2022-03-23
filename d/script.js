var sidePanel = document.getElementById("sidePanel");
console.log(sidePanel);
 window.addEventListener("scroll",async ()=>{
    await Promise.resolve(10000);
    if(window.scrollY>window.innerHeight/2){
        sidePanel.className = "sidePanelC";
    }
    else{
        sidePanel.className = "sidePanelO";
    }
})