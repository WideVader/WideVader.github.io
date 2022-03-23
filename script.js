var sidePanel = document.getElementById("sidePanel");
 window.addEventListener("scroll",()=>{
    if(window.scrollY>window.innerHeight/2){
        sidePanel.className = "sidePanelC";
    }
    else{
        sidePanel.className = "sidePanelO";
    }
})
