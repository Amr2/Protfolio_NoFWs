let logo    = document.querySelector("#logo");
let sec_log = document.getElementById("top-logo"); 
logo_obv = new IntersectionObserver((elem)=>{
    
    if(elem[0].intersectionRatio > 0){
        sec_log.style.opacity = "0%";
        sec_log.style.width   = "128px";
        setTimeout(()=>{
            sec_log.style.display = "none";
        },510)
        console.log("logo here",elem[0].intersectionRatio);
    }
    else{
        sec_log.style.display = "block";
        setTimeout(()=>{
            sec_log.style.opacity = "100%";
            sec_log.style.width   = "64px";
        },10) 
        console.log("logo gonna" , elem[0].intersectionRatio);
    }
})


logo_obv.observe(logo);