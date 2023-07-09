function getPilihanComputer() {
    const comp = Math.random();

if(comp < 0.34) return "batu";

if(comp >= 0.34 && comp < 0.67) return "gunting";

return "kertas";

} 

function getHasil(comp,player) {
    var hasil = "";

if( player == comp ) return "SERI";
if( player == "batu" ) return ( comp == "gunting" ) ? "MENANG" : "KALAH";
if( player == "gunting" ) return ( comp == "kertas" ) ? "MENANG" : "KALAH";
if( player == "kertas" ) return ( comp == "batu" ) ? "MENANG" : "KALAH";
}

const pBatu = document.getElementsByClassName('batu')[0];

pBatu.addEventListener('click',function() {
    const pilihanComputer = getPilihanComputer();

    //Merubah icon computer
    const iconComputer = document.querySelector('.computer');
    if(pilihanComputer=='batu') {
        iconComputer.style.backgroundImage = 'url(img/batu.jpg)';
    }else if(pilihanComputer=='gunting'){       
        iconComputer.style.backgroundImage = 'url(img/gunting.jpg)';

    } else {
        iconComputer.style.backgroundImage = 'url(img/kertas.jpg)';

    }

    const pilihanPlayer = 'batu';

    const hasilAkhir = getHasil(pilihanComputer,pilihanPlayer);

    //menampilkan hasil
    const iconHasil = document.querySelector('.hasil');

    iconHasil.innerHTML = hasilAkhir;

});


const pGunting = document.getElementsByClassName('gunting')[0];

pGunting.addEventListener('click',function() {
    const pilihanComputer = getPilihanComputer();

    //Merubah icon computer
    const iconComputer = document.querySelector('.computer');
    if(pilihanComputer=='batu') {
        iconComputer.style.backgroundImage = 'url(img/batu.jpg)';
    }else if(pilihanComputer=='gunting'){       
        iconComputer.style.backgroundImage = 'url(img/gunting.jpg)';

    } else {
        iconComputer.style.backgroundImage = 'url(img/kertas.jpg)';

    }

    const pilihanPlayer = 'gunting';

    const hasilAkhir = getHasil(pilihanComputer,pilihanPlayer);

    //menampilkan hasil
    const iconHasil = document.querySelector('.hasil');

    iconHasil.innerHTML = hasilAkhir;

});

const pKertas = document.getElementsByClassName('kertas')[0];

pKertas.addEventListener('click',function() {
    const pilihanComputer = getPilihanComputer();

    //Merubah icon computer
    const iconComputer = document.querySelector('.computer');
    if(pilihanComputer=='batu') {
        iconComputer.style.backgroundImage = 'url(img/batu.jpg)';
    }else if(pilihanComputer=='gunting'){       
        iconComputer.style.backgroundImage = 'url(img/gunting.jpg)';

    } else {
        iconComputer.style.backgroundImage = 'url(img/kertas.jpg)';

    }

    const pilihanPlayer = 'kertas';

    const hasilAkhir = getHasil(pilihanComputer,pilihanPlayer);

    //menampilkan hasil
    const iconHasil = document.querySelector('.hasil');

    iconHasil.innerHTML = hasilAkhir;

});


