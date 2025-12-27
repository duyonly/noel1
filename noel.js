let nutnhan=document.getElementById("nut");
let hien=document.querySelector(".thongtin");
nutnhan.addEventListener("click", ()=>{
    
hien.classList.add("show");
})
let bm=document.getElementById("mat");
bm.addEventListener("click", ()=>{
    hien.classList.remove("show");
})