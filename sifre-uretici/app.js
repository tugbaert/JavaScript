const passwordEl= document.getElementById("password");
const btn= document.getElementById("btn");

const karakterler="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?/"
function sifreUret(){
    let yeniSifre="";
    const sifreUzunlugu=12;

    for(let i=0;i< sifreUzunlugu;i++){
        const rastgeleSira=Math.floor(Math.random() * karakterler.length);

        yeniSifre+= karakterler[rastgeleSira];
    }
    return yeniSifre;
}
btn.addEventListener("click", function(){
    const yeniUretilenSifre= sifreUret();
    passwordEl.textContent=yeniUretilenSifre;
})