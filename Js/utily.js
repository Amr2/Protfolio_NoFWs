let menubtn  = document.getElementById("menu-btn");
let menu     = document.getElementById("menu");
let closebtn = document.getElementById("close");
let D_btn    = document.getElementById("download");
// Form Section
let email_fild = document.getElementById("Email");
let subj_fild  = document.getElementById("Subject");
let cont_fild  = document.getElementById("Email-cont");
let sen_btn    = document.getElementById("send-btn");
let clr_btn    = document.getElementById("clear-btn");


closebtn.addEventListener("click", ()=> {
    menu.style.left  = "-100%";
    menubtn.style.opacity = "100%"
    menubtn.style.visibility = "visible";
} )



D_btn.addEventListener("click", ()=> {
    // let a = document.createElement("a");
    // a.hidden   = true;
    // a.href     = '../assets/CV v3.2.pdf';
    // a.download = '../assets/CV v3.2.pdf'.split('/').pop()
    // a.click();
    // a.remove();
    window.open('../assets/CV v3.2.pdf');
} );

menubtn.addEventListener("click", ()=>{ 

    let open = () =>{
        menu.style.left = "0%"
    }   
    menu.style.left == "0%" ? {} : open() ;
    menubtn.style.opacity = "0%";
    menubtn.style.visibility = "hidden";
})




email_fild.addEventListener("change",()=>{
    if( email_fild.value.length > 100){
        email_fild.value = " Nope the maximum length is 100 :D "
        email_fild.style.outline= " #a04b4b solid 2px";
    }
    else{
        email_fild.style.outline = "none"
    }
    if((cont_fild.value.length >= 100 && cont_fild.value.length <=1000) && (email_fild.value.length >= 10 && email_fild.value.length <=100)  && (subj_fild.value.length >= 10 && subj_fild.value.length <=100)){
        sen_btn.disabled = false;
    }
    else{
        sen_btn.disabled = true;
    }
    
});

subj_fild.addEventListener("change",()=>{
    if( subj_fild.value.length > 100){
        subj_fild.value = " Nope the maximum length is 100 :D "
        subj_fild.style.outline= " #a04b4b solid 2px";
    }
    else{
        subj_fild.style.outline = "none"
    }
    if((cont_fild.value.length >= 100 && cont_fild.value.length <= 1000) && (email_fild.value.length >= 10 && email_fild.value.length <= 100)  && (subj_fild.value.length >= 10 && subj_fild.value.length <= 100)){
        sen_btn.disabled = false;
    }
    else{
        sen_btn.disabled = true;
    }    
});


cont_fild.addEventListener("change",()=>{
    if( cont_fild.value.length > 1000){
        cont_fild.value = " Nope the maximum length is 100 :D "
        cont_fild.style.outline= " #a04b4b solid 2px";
    }
    else{
        cont_fild.style.outline = "none"
    }
    if((cont_fild.value.length >= 100 && cont_fild.value.length <= 1000) && (email_fild.value.length >= 10 && email_fild.value.length <=100)  && (subj_fild.value.length >= 10 && subj_fild.value.length <=100)){
        sen_btn.disabled = false;
    }
    else{
        sen_btn.disabled = true;
    }
});

clr_btn.addEventListener("click",()=>{
    email_fild.value = "";
    subj_fild.value  = "";
    cont_fild.value  = "";
    sen_btn.disabled = true;
})

sen_btn.addEventListener("click",()=>{
    sen_btn.disabled = true;
    Email.send({
        SecureToken:"1dafff04-deb8-4a2d-8c0e-89887db111ba",
        To : "AAkalit22@outlook.com",
        From : email_fild.value ,
        Subject : subj_fild.value,
        Body : cont_fild.value
    }).then(
        (message) =>{
            alert(message)
            email_fild.value = "";
            subj_fild.value  = "";
            cont_fild.value  = "";
            
        } 
    );    

})


// 5c51837f-8d88-47d1-b9d4-47a823c59ca1