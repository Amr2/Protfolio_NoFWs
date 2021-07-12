let logo           = document.querySelector("#logo");
let sec_log        = document.getElementById("top-logo"); 
let theme_changer  = document.getElementById("theme"); 

const view_check   = window.matchMedia("(max-width: 500px)");


theme_changer.addEventListener("click",()=>{

    document.body.classList.toggle("light");
    for (const elem of document.querySelectorAll(".logo-img")) {
        if(elem.src.split("/")[4][0]=="W"){
            elem.src= "./assets/D-logo-AM-512.svg";
        }
        else{
            elem.src= "./assets/W-logo-AM-512.svg";
        }
    }
});


const update_view = (view)=>{
    if(view.matches){
        menu.style.width = "100%";
        for(let tempelem of document.getElementById("menu").children){
            tempelem.addEventListener("click", ()=> {
                menu.style.left  = "-100%";
                menubtn.style.opacity = "100%"
                menubtn.style.visibility = "visible";
            });
        }
    }
    else{
        menu.style.width = "35%";
    }
};

logo_obv = new IntersectionObserver((elem)=>{
    
    if(elem[0].intersectionRatio > 0){
        sec_log.style.opacity = "0%";
        sec_log.style.width   = "128px";
        setTimeout(()=>{
            sec_log.style.display = "none";
        },510);
    }
    else{
        sec_log.style.display = "block";
        setTimeout(()=>{
            sec_log.style.opacity = "100%";
            sec_log.style.width   = "64px";
        },10) ;
    }
});

update_view(view_check);
view_check.addListener(update_view);
logo_obv.observe(logo);