let logo           = document.querySelector("#logo");
let sec_log        = document.getElementById("top-logo"); 
const view_check   = window.matchMedia("(max-width: 500px)") 

const update_view = (view)=>{
    if(view.matches){
        menu.style.width = "100%";
    }
    else{
        menu.style.width = "35%";
    }
}

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
})

update_view(view_check);
view_check.addListener(update_view);
logo_obv.observe(logo);