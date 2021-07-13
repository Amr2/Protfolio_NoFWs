let logo           = document.querySelector("#logo");
let sec_log        = document.getElementById("top-logo"); 
let theme_changer  = document.getElementById("theme"); 

const view_check   = window.matchMedia("(max-width: 500px)");


theme_changer.addEventListener("click",()=>{
    theme_changer.classList.toggle("click");
    theme_changer.disabled = true;
    setTimeout(()=>{
        document.body.classList.toggle("light");
        for (const elem of document.querySelectorAll(".logo-img")) {
            if(elem.src.split("/")[4][0]=="W"){
                elem.src= "./assets/D-logo-AM-512.svg";
                theme_changer.innerHTML = `<i class="fas fa-sun fa-2x"></i>`;
                theme_changer.classList.toggle("past-click");
            }
            else{
                elem.src= "./assets/W-logo-AM-512.svg";
                theme_changer.innerHTML = `<i class="fas fa-moon fa-2x"></i>`;
                theme_changer.classList.toggle("past-click");
            }
        }    
    },1010);

    setTimeout(()=>{
        theme_changer.classList.toggle("past-click");
        theme_changer.classList.toggle("click");
        theme_changer.disabled = false;
    },2010);

    
});

const  add_eve = ()=> {
    menu.style.left  = "-100%";
    menubtn.style.opacity = "100%"
    menubtn.style.visibility = "visible";
}

const update_view = (view)=>{
    
    if(view.matches){
        menu.style.width = "100%";
        for(let tempelem of document.getElementById("menu").children){
            tempelem.addEventListener("click", add_eve );
        }
    }
    else{
        menu.style.width = "35%";
        for(let tempelem of document.getElementById("menu").children){
            tempelem.removeEventListener("click", add_eve );
    }
}};

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