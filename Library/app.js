const myLibrary=[];
const kitap =document.getElementById("kitap");
const booksGrid= document.getElementById("books-grid")
const newBookBtn= document.getElementById('new-book-btn')
const dialog=document.getElementById('book-dialog');
const closeDialogBtn=document.getElementById('close-dialog')
const bookForm=document.getElementById('book-form')
//nesne oluşturma constructor
function book(name,pages,author,isRead){
 this.name=name;
 this.pages=pages;
 this.author=author;
 this.isRead=isRead;
}
//durum değişirme prototipi tüm book nesneleri için kullanılabilir
book.prototype.toggleRead= function(){
    this.isRead=!this.isRead;
}
//kütüphaneye kitap ekleme
function addBookLibrary(name,pages,author,isRead){
    const book1= new book(name,pages,author,isRead);
    myLibrary.push(book1);
}
//kitap sil
function removeBook(index){
    myLibrary.splice(index,1)
    displayBooks();
}
//indexi verilen kitabın durumunu değiştir
function toggleReadStatus(index){
    myLibrary[index].toggleRead();
    displayBooks();
}
//kitapları ekranda gösterme
function displayBooks(){
    booksGrid.innerHTML="";
    myLibrary.forEach((kitap, index) => {
        const bookCard=document.createElement("div")
        bookCard.classList.add("book-card")
         //silme ve durum değitirme işlemleri için index özelliği tanımlama
        bookCard.setAttribute('data-index',index)
        bookCard.innerHTML=`
        <h3>${kitap.name}</h3>
        <p><strong>Yazar:</strong> ${kitap.author}</p>
        <p><strong>Sayfa:</strong> ${kitap.pages}</p>
        <p><strong>Durum:</strong> ${kitap.isRead ? "Okundu":"Okunmadı"}</p>
        <div class="card-buttons">
            <button class="remove-btn">Sil</button>
            <button class="toggle-read-btn">Durumu Değiştir</button>
        </div>
        `;
        //silme butonu tanımlandı ve buton dinleniyor
        const removeBtn= bookCard.querySelector(".remove-btn");
        removeBtn.addEventListener("click",function(){
            const bookIndex=bookCard.getAttribute('data-index')
            removeBook(bookIndex)
        })
        // durum değiştirme butonu 
        const toggleBtn=bookCard.querySelector('.toggle-read-btn')
        toggleBtn.addEventListener("click", function(){
            const bookIndex=bookCard.getAttribute('data-index')
            toggleReadStatus(bookIndex);
        })

        booksGrid.appendChild(bookCard)
    });
    
}
//kitap ekle butonuna basınca kitap ekleme penceresini aç
newBookBtn.addEventListener("click", function(){
    dialog.showModal();
})
//pencereyi kapat
closeDialogBtn.addEventListener("click", function(){
    dialog.close();
})
//formdaki kitabı kütüphaneye ekle
bookForm.addEventListener("submit",function(e){
    e.preventDefault();  //sayfa yenilenmesini engelle
    const title=document.getElementById('title').value;
    const author=document.getElementById('author').value;
    const pages=document.getElementById('pages').value;
    const isRead=document.getElementById('isRead').checked;
    addBookLibrary(title,pages,author,isRead);
    displayBooks();
    bookForm.reset(); //formu resetle
    dialog.close();   //" kapat
})

//manuel kitap eklemeleri
addBookLibrary("Serenad",600,"Zülfü Livaneli",true);
addBookLibrary("Kardeşimin Hikayesi",180,"Zülfü Livaneli",true);
//konsol kontrolü
console.log(myLibrary)
displayBooks();