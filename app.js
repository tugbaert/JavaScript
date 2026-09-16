const btn=document.getElementById("btn");
const colorCode=document.getElementById("color-code");
function getRandomColor(){
    const hexKarakterler="0123456789ABCDEF"
    let renk="#";

    for(let i=0; i<6; i++){
            renk += hexKarakterler[Math.floor(Math.random()* 16)];
    }
    return renk;
}
btn.addEventListener("click",function(){
    const yeniRenk=getRandomColor();

    document.body.style.backgroundColor=yeniRenk;
    colorCode.textContent=yeniRenk;
})