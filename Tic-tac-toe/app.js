const hucreler= document.querySelectorAll(".hucre")
const durumMetni=document.getElementById("durum")
const sifirlaBtn=document.getElementById("sifirlaBtn")
let siradakiOyuncu="X";
let tahta=["","","","","","","","",""];
let kazananKombinasyonlar=[[0,1,2],[3,4,5],[6,7,8],
[0,3,6],[1,4,7],[2,5,8],
[0,4,8],[2,4,6]];
let oyunAktif=true;
hucreler.forEach(function(hucre,index){
    hucre.addEventListener("click", function(){
        if(hucre.textContent==="" && oyunAktif){
            hucre.textContent=siradakiOyuncu;
            tahta[index]=siradakiOyuncu;
            if(siradakiOyuncu==="X"){
                siradakiOyuncu="O";
            }else{
                siradakiOyuncu="X";
            }
            durumMetni.textContent="Sıra:"+ siradakiOyuncu;
            kazananiKontrolEt();
        }
    })
})
function kazananiKontrolEt(){
    let kazananVarMi=false;
    for(let i=0; i<kazananKombinasyonlar.length;i++){
        const kombinasyon=kazananKombinasyonlar[i];

        const a=tahta[kombinasyon[0]];
        const b=tahta[kombinasyon[1]];
        const c=tahta[kombinasyon[2]];

        if(a===""||b===""||c===""){
            continue;
        }
        if(a===b && b===c){
            kazananVarMi=true;
            break;
        }
    }
    if(kazananVarMi){
        const kazanan=siradakiOyuncu==="X"? "O":"X";
        durumMetni.textContent="Tebrikler! Kazanan: "+kazanan;
        oyunAktif=false;
        return;
    }
    if(!tahta.includes("")){
        durumMetni.textContent="Oyun Berabere!"
        oyunAktif=false;
    }
}
sifirlaBtn.addEventListener("click",function(){
    tahta=["","","","","","","","",""];
    let siradakiOyuncu="X";
    oyunAktif=true;
    durumMetni.textContent="Sıra:"+ siradakiOyuncu;

    hucreler.forEach(function(hucre){
        hucre.textContent="";
    })
})
