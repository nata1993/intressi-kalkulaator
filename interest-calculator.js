function Calculate() {



    laenusummalt ();
    laenujäägilt ();
}

function laenusummalt () {
    // Laenusummalt intressi arvutamine
    let laenusummalt_algsumma = Number(document.getElementById('algsumma').value);                  // algne summa
    let intress = Number(document.getElementById('intressimaar').value / 100);         // intressimäär
    let ajavahemik = Number(document.getElementById('periood').value);                 // ajavahemik kuudes
    let lepingutasu = Number(document.getElementById('lepingutasu').value);            // ajavahemik kuudes
    let lisatasu = Number(document.getElementById('lisatasu').value);                  // igakuine lisatasu/hooldustasu

    let laenusummalt_igakuine_intress = (laenusummalt_algsumma * intress ) / ajavahemik;
    let laenusummalt_koguintress = laenusummalt_igakuine_intress * ajavahemik;
    let laenusummalt_kogulisatasud = lisatasu * ajavahemik;
    let laenusummalt_kogusumma = laenusummalt_algsumma + laenusummalt_koguintress + laenusummalt_kogulisatasud + lepingutasu;

    document.getElementById('laenusummalt_algsumma').value = laenusummalt_algsumma;
    document.getElementById('laenusummalt_loppsumma').value = laenusummalt_kogusumma;
    document.getElementById('laenusummalt_intressisumma').value = laenusummalt_koguintress;
    document.getElementById('laenusummalt_kogulisatasu').value = laenusummalt_kogulisatasud;

    document.getElementById('laenusummalt_vahe').value = (laenusummalt_kogusumma - laenusummalt_algsumma).toFixed(2);
}

function laenujäägilt () {
    // Laenujäägilt intressi arvutamine
    let algsumma = Number(document.getElementById('algsumma').value);                  // algne summa
    let intress = Number(document.getElementById('intressimaar').value / 100);         // intressimäär
    let ajavahemik = Number(document.getElementById('periood').value);                 // ajavahemik kuudes
    let lepingutasu = Number(document.getElementById('lepingutasu').value);            // ajavahemik kuudes
    let lisatasu = Number(document.getElementById('lisatasu').value);                  // igakuine lisatasu/hooldustasu

    let laenujäägilt_algsumma = algsumma;
    let igakuine_põhimakse = algsumma / ajavahemik;
    let laenujäägilt_intressisumma = 0;
    let laenujäägilt_kogulisatasud = 0;
    let laenujäägilt_igakuine_intress = 0;
    for(let i = ajavahemik; i > 0; i--) {
        laenujäägilt_intressisumma += algsumma * intress / ajavahemik;
        laenujäägilt_algsumma - igakuine_põhimakse;
    }

    let laenujäägilt_kogusumma = laenujäägilt_algsumma + laenujäägilt_intressisumma + lepingutasu + lisatasu;

    document.getElementById('laenujäägilt_algsumma').value = laenujäägilt_algsumma;

    document.getElementById('laenujäägilt_vahe').value = laenujäägilt_intressisumma;
}