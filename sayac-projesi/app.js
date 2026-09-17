let sayac=0;
const deger=document.getElementById("deger");
const butonlar=document.querySelectorAll(".btn");
butonlar.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const stiller=e.currentTarget.classList;
        if(stiller.contains("azalt")){
           sayac--;
        }else if(stiller.contains("arttir")){
           sayac++;
        }else{
            sayac=0;
        }

        if(sayac>0){
           deger.style.color="green";
        }else if(sayac<0){
            deger.style.color="red";
        }else{
            deger.style.color="#102a42";
        }
        
        deger.textContent=sayac;
    })
})

