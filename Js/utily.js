let menubtn  = document.getElementById("menu-btn");
let menu     = document.getElementById("menu");
let closebtn = document.getElementById("close");
let D_btn    = document.getElementById("download");




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

