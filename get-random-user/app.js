const Status =document.getElementById("status");
const userImg=document.getElementById("user-img");
const userName=document.getElementById("name");
const userMail=document.getElementById("e-mail");
const userCountry=document.getElementById("country")
const userCard=document.getElementById("user-card");
const userGetBtn=document.getElementById("btn-get-user");
const userAge=document.getElementById("age");
Status.textContent="";
async function getUser(){
    Status.textContent="Yükleniyor..."
    try{
        const response= await fetch("https://randomuser.me/api/");
        if(!response.ok){
            throw new Error(`Ağ hatası: ${response.status}`);
        }
        const data= await response.json();
        const user= data.results[0];
        userImg.src=user.picture.large;
        userCountry.textContent=`Ülke: ${user.location.country}`;
        userMail.textContent=`E-posta: ${user.email}`;
        userName.textContent=`${user.name.first +" "+ user.name.last}`;
        userAge.textContent=`Yaşı: ${user.dob.age}`;
        console.log(data)
        Status.textContent="";
    }
    catch(error){
        console.error("Hata:",error)
        Status.textContent="Bir hata oluştu";
    }
}

userGetBtn.addEventListener("click", getUser);
getUser();