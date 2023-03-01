function walidacja(){
    try{
        przetwarzanieFormularza();
    }catch (e){
        window.alert(e.message);
    }
}

function przetwarzanieFormularza(){
    const form = document.forms["formularz"];
    let name = form.imie.value;
    let email = form.email.value;
    let ocena = parseInt(form.ocena.value);
    if(name.split(' ').length !== 2)
        throw new Error("Upewnij się czy podałeś prawidłowe imię i nazwisko!");
    if(isNaN(ocena))
        throw new Error("Ocena nie jest liczbą!");
    if(!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/))
        throw new Error("Podano nieprawidłowy mail!");
    if(ocena < 1 || ocena > 6)
        throw new Error("Ocena musi być w zakresie 1-6!");
    return false;
}
