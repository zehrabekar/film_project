function Storage(){

}
Storage.prototype.addFilmToStorage = function(newFilm){
    let films = this.getFilmsFromStorage();// Önceden kaydedilen filmleri al

    films.push(newFilm);// Yeni filmi mevcut listeye ekle

    localStorage.setItem("films",JSON.stringify(films));// Güncellenmiş listeyi localStorage'a kaydet

}   

Storage.prototype.getFilmsFromStorage = function(){
    let films;// Film listesi tanımlandı

    if(localStorage.getItem("films") === null){// Eğer localStorage'da "films" anahtarı yoksa
        films=[];// Boş bir dizi başlat

    }
    else{
        films=JSON.parse(localStorage.getItem("films"));//Eğer veri varsa, JSON formatından bir JavaScript nesnesine dönüştürülür ve döndürülür. 
    }

    return films; // Film listesini döndür
}

//JSON formatından JavaScript nesnesine dönüştürmek, bir metin (string) olarak saklanan JSON verisini, JavaScript'in kullanabileceği bir nesne veya dizi yapısına çevirmek anlamına gelir.


Storage.prototype.deleteFilmFromStorage = function(filmTitle){
    let films = this.getFilmsFromStorage();

    films.forEach(function(film,index){

        if(film.title === filmTitle){
            films.splice(index,1);
        }
    })

localStorage.setItem("films",JSON.stringify(films));



}