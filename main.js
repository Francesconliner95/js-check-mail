var mail = ['francesco@gmail.com', 'pasquale@libero.it', 'marco@outlook.com', 'michele@hotmail.it'];
var mail_utente = prompt('Inserisci la tua mail:');
var sei_in_lista=false;

console.log(mail);

for (var i = 0; i < mail.length; i++) {
    if( mail[i]==mail_utente){
        console.log('sei in lista');
        var sei_in_lista=true;
        document.getElementById('mail').innerHTML = 'in lista';
    }
}
if(sei_in_lista==false){
    console.log('non sei in lista');
    document.getElementById('mail').innerHTML = 'non in lista';
}
